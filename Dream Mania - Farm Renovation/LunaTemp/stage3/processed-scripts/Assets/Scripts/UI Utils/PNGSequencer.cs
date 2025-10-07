using DG.Tweening;
using NaughtyAttributes;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using DG.Tweening.Core;
using System.Threading.Tasks;

[System.Serializable]
public class Animations
{
    public string name;
    public bool isLooping = true;
    public float frameRate = 24f;
    public List<Sprite> frames = new List<Sprite>();
    public bool transitionToNextAnimation = false;
    [HideIf(nameof(transitionToNextAnimation))]
    public string nextAnimationName;
}

public class PNGSequencer : MonoBehaviour
{
    [Header("Sequence Settings")]
    [SerializeField] private float frameRate = 24f;
    [SerializeField] private List<Animations> animations = new List<Animations>();
    [SerializeField] private bool loop = true;
    [SerializeField] private bool playOnStart = true;
    [Header("Components")]
    [SerializeField] private bool isUIElement = false;
    [ShowIf(nameof(isUIElement))]
    [SerializeField] private Image targetImage;
    [HideIf(nameof(isUIElement))]
    [SerializeField] private SpriteRenderer targetRenderer;

    private Animations currentAnimation;
    private List<Sprite> frames = new List<Sprite>();
    private Dictionary<string, Animations> animationDict = new Dictionary<string, Animations>();

    private Sequence animationSequence;

    /*private void Update()
    {
        if (Input.GetKeyDown(KeyCode.Keypad0))
        {
            PlayAnimation("disco");
            Debug.Log("Playing disco animation");
        }
        else if(Input.GetKeyDown(KeyCode.Keypad1))
        {
            PlayAnimation("fan1");
            Debug.Log("Playing fan1 animation");
        }
        else if(Input.GetKeyDown(KeyCode.Keypad2))
        {
            PlayAnimation("fan2");
            Debug.Log("Playing fan2 animation");
        }
    }*/

    private void Awake()
    {
        if(isUIElement && targetImage == null)
        {
            targetImage = GetComponent<Image>();
        }
        else if(!isUIElement && targetRenderer == null)
        {
            targetRenderer = GetComponent<SpriteRenderer>();
        }

        foreach(Animations anim in animations)
        {
            if(!animationDict.ContainsKey(anim.name))
            {
                animationDict.Add(anim.name, anim);
            }
        }

        if(frames.Count == 0 && animations.Count > 0)
        {
            //first element is the default animation
            frames = animations[0].frames;
            loop = animations[0].isLooping;
            frameRate = animations[0].frameRate;
            currentAnimation = animations[0];
        }
    }

    private void OnEnable()
    {
        if(playOnStart)
        {
            Play();
        }
    }

    public void Play()
    {
        if(isUIElement)
        {
            UIAnimation();
        }
        else
        {
            SpriteAnimation();
        }
    }

    public void PlayAnimation(string name)
    {
        if(animationDict.ContainsKey(name))
        {
            frames = animationDict[name].frames;
            loop = animationDict[name].isLooping;
            frameRate = animationDict[name].frameRate;
            currentAnimation = animationDict[name];
            Play();
        }
        else
        {
            Debug.LogWarning($"Animation with name {name} not found!");
        }
    }

    public void Stop()
    {
        animationSequence.Kill(true);
    }

    private void UIAnimation()
    {
        animationSequence?.Kill(false);

        animationSequence = DOTween.Sequence();
        float frameDuration = 1f / frameRate;
        
        foreach(Sprite frame in frames)
        {
            animationSequence.AppendCallback(() => targetImage.sprite = frame);
            animationSequence.AppendInterval(frameDuration);
        }

        animationSequence.SetLoops(loop ? -1 : 0, LoopType.Restart);

        animationSequence.OnComplete(() =>
        {
            if(currentAnimation.transitionToNextAnimation)
            {
                PlayAnimation(currentAnimation.nextAnimationName);
            }
        });
    }

    private void SpriteAnimation()
    {
        animationSequence?.Kill(false);

        animationSequence = DOTween.Sequence();
        float frameDuration = 1f / frameRate;
        foreach (Sprite frame in frames)
        {
            animationSequence.AppendCallback(() => targetRenderer.sprite = frame);
            animationSequence.AppendInterval(frameDuration);
        }
        animationSequence.SetLoops(loop ? -1 : 0, LoopType.Restart);

        animationSequence.OnComplete(() =>
        {
            if (currentAnimation.transitionToNextAnimation)
            {
                PlayAnimation(currentAnimation.nextAnimationName);
            }
        });
    }


}
