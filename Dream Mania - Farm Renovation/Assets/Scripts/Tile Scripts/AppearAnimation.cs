using DG.Tweening;
using UnityEngine;
using UnityEngine.UI;

public class AppearAnimation : AnimationBase
{
    [Header("Fade In Settings")]
    [SerializeField] private float fadeInDuration = 1f;
    [SerializeField] private float fadeInDelay = 0.5f;
    private CanvasGroup canvasGroup;

    [Header("Fill Settings")]
    [SerializeField] private float fillDuration = 1f;
    [SerializeField] private float fillDelay = 0.5f;
    [SerializeField] private float targetFillAmount = 1f;
    [SerializeField] private float initialFillAmount = 0.5f;
    private Image image;

    private Sequence animationSequence;
    private void OnEnable()
    {
        canvasGroup = GetComponent<CanvasGroup>();
        image = GetComponent<Image>();

        AnimateTo();
    }

    override public void AnimateTo()
    {
        canvasGroup.alpha = 0f;
        image.fillAmount = initialFillAmount;

        animationSequence = DOTween.Sequence();
        animationSequence.AppendInterval(fadeInDelay);
        animationSequence.Append(canvasGroup.DOFade(1f, fadeInDuration));
        animationSequence.Join(image.DOFillAmount(targetFillAmount, fillDuration).SetEase(Ease.InOutSine).SetDelay(fillDelay));
        animationSequence.OnComplete(() =>
        {
            OnMovementComplete?.Invoke();
            animationSequence.Kill();
        });
        animationSequence.Play();
    }
}
