using DG.Tweening;
using NaughtyAttributes;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using DG.Tweening.Core;

public class PNGSequencer : MonoBehaviour
{
    [Header("Sequence Settings")]
    [SerializeField] private float frameRate = 24f;
    [SerializeField] private List<Sprite> frames = new List<Sprite>();
    [SerializeField] private bool loop = true;
    [SerializeField] private bool playOnStart = true;
    [SerializeField] private bool autoDestroy = false;
    [Header("Components")]
    [SerializeField] private bool isUIElement = false;
    [ShowIf(nameof(isUIElement))]
    [SerializeField] private Image targetImage;
    [HideIf(nameof(isUIElement))]
    [SerializeField] private SpriteRenderer targetRenderer;

    private Sequence animationSequence;

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

    public void Stop()
    {
        animationSequence.Kill(true);
    }

    private void UIAnimation()
    {
        animationSequence?.Kill(true);

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
            if (autoDestroy)
            {
                Destroy(gameObject);
            }
        });
    }

    private void SpriteAnimation()
    {
        animationSequence?.Kill(true);

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
            if (autoDestroy)
            {
                Destroy(gameObject);
            }
        });
    }


}
