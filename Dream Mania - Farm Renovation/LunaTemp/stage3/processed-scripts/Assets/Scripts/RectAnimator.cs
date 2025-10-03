using DG.Tweening;
using UnityEngine;

public class RectAnimator : MonoBehaviour {

    [Header("References")]
    [SerializeField] private RectTransform rectTransform;

    [Header("Settings for Scale")]
    [SerializeField] private bool animateScale;
    [SerializeField] private bool isScaleLooping;
    [SerializeField] private float scaleTo;
    [SerializeField] private float scaleDuration = 1f;
    [SerializeField] private Ease scaleEaseType = Ease.InOutQuad;
    [SerializeField] private float scaleStartDelay = 0f;

    [Header("Settings for Scale")]
    [SerializeField] private bool animateMove;
    [SerializeField] private bool isMoveLooping;
    [SerializeField] private Vector2 moveTo;
    [SerializeField] private float moveDuration = 1f;
    [SerializeField] private Ease moveEaseType = Ease.InOutQuad;
    [SerializeField] private LoopType moveLoopType = LoopType.Restart;
    [SerializeField] private float moveStartDelay = 0f;
    [SerializeField] private Vector3 initialPos;
    [SerializeField] private Vector3 initialScale;

    private void OnEnable() {
        if (rectTransform != null)
        {
            rectTransform.localPosition = initialPos;
            rectTransform.localScale = initialScale;
        }
        else
        {
            rectTransform = transform as RectTransform;
            initialPos = rectTransform.anchoredPosition;
            initialScale = rectTransform.localScale;
        }

        if (animateScale) rectTransform.DOScale(scaleTo * initialScale, scaleDuration)
                                      .SetEase(scaleEaseType)
                                      .SetDelay(scaleStartDelay)
                                      .SetLoops(isScaleLooping ? -1 : 0, LoopType.Yoyo);

        if (animateMove) rectTransform.DOAnchorPos(moveTo, moveDuration)
                              .SetEase(moveEaseType)
                              .SetDelay(moveStartDelay)
                              .SetLoops(isMoveLooping ? -1 : 0, moveLoopType);
    }

    private void OnDisable()
    {
        rectTransform.DOKill();
    }
}
