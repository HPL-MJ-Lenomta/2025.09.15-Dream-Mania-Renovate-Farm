using DG.Tweening;
using UnityEngine;
using UnityEngine.Events;
using UnityEngine.UI;

public class BounceSquashUI : AnimationBase
{
    [SerializeField] private RectTransform uiElement;
    [SerializeField] private float moveDuration = 0.5f;
    [SerializeField] private float squashDuration = 0.2f;
    [SerializeField] private Vector3 bounceOffset = new Vector3(0, 50f, 0);
    [SerializeField] private float squashAmount = 0.2f;
    [SerializeField] private Vector3 targetPosition;
    private void Awake()
    {
        uiElement = transform as RectTransform;
    }

    private void OnEnable()
    {
        AnimateTo();
    }

    override public void AnimateTo()
    {
        // Sequence to move with bounce and squash
        Sequence seq = DOTween.Sequence();

        // Move up quickly before drop
        seq.Append(uiElement.DOAnchorPos(targetPosition + bounceOffset, moveDuration * 0.4f)
            .SetEase(Ease.OutQuad));
        // Drop down with bounce
        seq.Append(uiElement.DOAnchorPos(targetPosition, moveDuration * 0.6f)
            .SetEase(Ease.OutBounce));

        // When falling starts, squash horizontally and stretch vertically
        seq.Insert(moveDuration * 0.4f,
            uiElement.DOScaleX(1 + squashAmount, squashDuration).SetEase(Ease.OutQuad));
        seq.Insert(moveDuration * 0.4f,
            uiElement.DOScaleY(1 - squashAmount, squashDuration).SetEase(Ease.OutQuad));

        // Restore scale after landing
        seq.Append(uiElement.DOScale(Vector3.one, squashDuration).SetEase(Ease.OutBounce));

        seq.OnComplete(() =>
        {
            OnMovementComplete?.Invoke();
            seq.Kill(); 
        });
    }
}
