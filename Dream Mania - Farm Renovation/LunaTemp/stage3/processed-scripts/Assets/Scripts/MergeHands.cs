using DG.Tweening;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class MergeHands : MonoBehaviour
{
    [SerializeField] private RectTransform rectTransform;
    [SerializeField] private RectTransform target1;
    [SerializeField] private RectTransform target2;

    private void OnEnable()
    {
        rectTransform.SetAsLastSibling();
    }

    private void Start()
    {
        StartMovement(target1, target2);
    }

    private void Update()
    {
        if (Input.anyKeyDown || Input.GetMouseButtonDown(0) || Input.GetMouseButtonDown(1) && this.gameObject.activeInHierarchy) 
        {
            this.gameObject.SetActive(false);
        }
    }

    public void StartMovement(RectTransform target1, RectTransform target2)
    {
        this.target1 = target1;
        this.target2 = target2;
        
        if(target1 == target2)
        {
            rectTransform.localScale = target1.localScale;
            rectTransform.anchoredPosition = target1.anchoredPosition;
            rectTransform.DOScale(Vector3.one * 0.8f, 0.5f) // Scale up to 1.2x
                        .SetEase(Ease.OutBack)
                        .SetLoops(-1, LoopType.Yoyo); // Loop the scaling effect
            return;
        }

        rectTransform.localScale = target1.localScale;
        rectTransform.anchoredPosition = target1.anchoredPosition;
        rectTransform.DOAnchorPos(target2.anchoredPosition, 2f) // Duration = 1 second
                    .SetEase(Ease.InOutQuad)
                    .SetLoops(-1, LoopType.Yoyo);
        /*DOVirtual.DelayedCall(0.5f, () =>
        {
        }); */// Delay before starting the movement
    }

    private void OnDisable()
    {
        rectTransform.DOKill(); // Stop the movement when the object is disabled
    }

}
