using DG.Tweening;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BasicFade : MonoBehaviour
{
    public CanvasGroup canvasGroup;
    public float duration = 1f;
    Sequence fadeSequence;
    private void Awake()
    {
        canvasGroup = GetComponent<CanvasGroup>();
    }

    private void OnEnable()
    {
        FadeIn();
    }

    public void FadeIn()
    {
        canvasGroup.alpha = 0f;
        fadeSequence = DOTween.Sequence();
        fadeSequence.Append(canvasGroup.DOFade(1f, duration).SetEase(Ease.InOutQuad))
            .OnComplete(() =>
            {
                canvasGroup.interactable = true;
                canvasGroup.blocksRaycasts = true;
            });
    }

    public void FadeOut()
    {
        canvasGroup.alpha = 1f;
        fadeSequence = DOTween.Sequence();
        fadeSequence.Append(canvasGroup.DOFade(0f, duration).SetEase(Ease.InOutQuad))
            .OnComplete(() =>
            {
                canvasGroup.interactable = false;
                canvasGroup.blocksRaycasts = false;
                canvasGroup.gameObject.SetActive(false);
            });
    }

    private void OnDisable()
    {
        fadeSequence?.Kill(); // Stop any ongoing fade sequence
    }
}
