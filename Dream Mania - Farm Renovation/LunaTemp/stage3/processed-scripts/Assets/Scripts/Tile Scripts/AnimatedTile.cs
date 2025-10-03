using DG.Tweening;
using System.Collections.Generic;
using UnityEditor;
using UnityEngine;
using UnityEngine.UI;

public class AnimatedTile : MonoBehaviour
{
    [Header("Animation Settings")]
    [SerializeField] private float Duration = 0.5f;
    [SerializeField] private TileData tileData;
    [SerializeField] private List<Vector3> targetPos;
    [SerializeField] private List<string> targets = new List<string>();
    [SerializeField] private Image image;
    private RectTransform rectTransform;
    [SerializeField] private List<ParticleSystem> vfxParticles;
    [SerializeField] private GameObject trailVFXPrefab;
                     private ParticleSystem StarTrailVFXPrefab;
    [SerializeField] private ParticleSystem circleTrailVFXPrefab;
    [SerializeField] private TrailRenderer trailRenderer;


    private Dictionary<string, ParticleSystem> particleSystemsDictionary = new Dictionary<string, ParticleSystem>();
    private Dictionary<string, Color> keyValuePairs = new Dictionary<string, Color>()
    {
        {"blue", new Color(0.2f, 0.6f, 1f)},
        {"purple", new Color(0.6f, 0.2f, 1f)},
        {"yellow", new Color(1f, 0.8f, 0.1f)},
        {"red", new Color(1f, 0.1f, 0.1f)},
        {"green", new Color(0.2f, 1f, 0.2f)}
    };

    private void Awake()
    {
        rectTransform = transform as RectTransform;
        particleSystemsDictionary.Add("blue", vfxParticles[0]);
        particleSystemsDictionary.Add("purple", vfxParticles[1]);
        particleSystemsDictionary.Add("yellow", vfxParticles[2]);
        if(StarTrailVFXPrefab == null)
        {
            StarTrailVFXPrefab = trailVFXPrefab.GetComponent<ParticleSystem>();
        }
    }

    private void Start()
    {
        /*var main = circleTrailVFXPrefab.main;
        main.startColor = Color.black;

        var trailMain = StarTrailVFXPrefab.main;
        trailMain.startColor = Color.black;*/
    }

    public void MoveToTarget(TileData data, [Bridge.Ref] Vector3 position, float delay)
    {
        if(data == null || data.isPowerup) return;
        rectTransform.localPosition = position;
        image.sprite = data.tileSprite;
        int index = targets.IndexOf(data.tileName);

        AudioManager.Instance.PlaySFX("pop1");

        //vfxs
        var main = circleTrailVFXPrefab.main;
        main.startColor = keyValuePairs[data.tileName];

        var trailMain = StarTrailVFXPrefab.main;
        trailMain.startColor = keyValuePairs[data.tileName];

        trailRenderer.startColor = keyValuePairs[data.tileName];

        AudioManager.Instance.PlaySFX("pop1");

        Vector3 target = index >= 0 && index < targetPos.Count ? targetPos[index] : new Vector3(rectTransform.anchoredPosition.x, rectTransform.anchoredPosition.y, 0f);
        var duration = index >= 0 && index < targetPos.Count ? delay : 0.25f;

        rectTransform.DOAnchorPos(target, duration)
            //.SetEase(Ease.InBack)
            .SetDelay(duration / 2f)
            .OnComplete(() =>
            {
                GameManager.Instance.AddCollectible(data.tileName);
                AnimatedTileSpawner.Instance.ReQueue(this);
                this.gameObject.SetActive(false);
            });
    }

    public void MoveToTarget(TileData data, [Bridge.Ref] Vector3 position, float delay, int value)
    {
        if(data == null) return;
        rectTransform.localPosition = position;
        image.sprite = data.tileSprite;
        int index = targets.IndexOf(data.tileName);

        //trailVFXPrefab.transform.SetParent(null);

        //vfxs
        var main = circleTrailVFXPrefab.main;
        main.startColor = keyValuePairs[data.tileName];

        var trailMain = StarTrailVFXPrefab.main;
        trailMain.startColor = keyValuePairs[data.tileName];

        trailRenderer.startColor = keyValuePairs[data.tileName];

        AudioManager.Instance.PlaySFX("pop1");

        Vector3 target = index >= 0 && index < targetPos.Count ? targetPos[index] : new Vector3(rectTransform.anchoredPosition.x, rectTransform.anchoredPosition.y, 0f);
        var duration = index >= 0 && index < targetPos.Count ? delay : 0.25f;

        rectTransform.DOAnchorPos(target, duration)
            //.SetEase(Ease.InBack)
            .SetDelay(duration / 2f)
            .OnComplete(() =>
            {
                GameManager.Instance.AddCollectible(data.tileName, value);
                AnimatedTileSpawner.Instance.ReQueue(this);
                this.gameObject.SetActive(false);
                /*particleSystemsDictionary[data.tileName].gameObject.transform.position = this.transform.position;
                particleSystemsDictionary[data.tileName].gameObject.SetActive(false);
                particleSystemsDictionary[data.tileName].gameObject.SetActive(true);*/
            });
    }

}
