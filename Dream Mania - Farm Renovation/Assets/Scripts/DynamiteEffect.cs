using DG.Tweening;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class DynamiteEffect : MonoBehaviour
{
    [Header("Animation Settings")]
    [SerializeField] private Vector3 initialScale = Vector3.zero;
    [SerializeField] private Vector3 targetPos = Vector3.one;
    [SerializeField] private float duration = 0.2f;

    [SerializeField] private GameObject model;
    [SerializeField] private GameObject explosionEffectPrefab;

    RectTransform rectTransform;
    private void Awake()
    {
        rectTransform = transform as RectTransform;
        targetPos = rectTransform.position;
    }

    private void OnEnable()
    {
        model.SetActive(true);
        //explosionEffectPrefab.SetActive(false);
    }

    public void StartEffect(RectTransform initialTransform)
    {
        rectTransform.localScale = initialScale;
        rectTransform.position = initialTransform.position;
        Sequence seq = DOTween.Sequence();
        seq.Append(rectTransform.DOScale(Vector3.one, 0.2f).SetEase(Ease.OutBack));
        seq.Join(rectTransform.DOMove(targetPos, duration).SetEase(Ease.InBack));
        seq.AppendInterval(0.5f);
        seq.AppendCallback(() =>
        {
            AudioManager.Instance.PlaySFX("dynamiteFuse");
        });
        seq.AppendInterval(1.25f);
        seq.OnComplete(() =>
        {
            AudioManager.Instance.PlaySFX("pop1");
            AudioManager.Instance.PlaySFX("explode");
        });
    }
}
