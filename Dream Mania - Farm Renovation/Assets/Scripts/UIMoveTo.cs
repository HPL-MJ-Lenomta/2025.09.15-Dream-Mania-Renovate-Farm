using DG.Tweening;
using System.Collections.Generic;
using TMPro;
using UnityEngine;
using UnityEngine.Events;
using UnityEngine.SocialPlatforms.Impl;

public class UIMoveTo : MonoBehaviour
{
    [Header("UI Settings")]
    public RectTransform imageTransform;      // Assign your UI Image's RectTransform
    public Vector2 targetPosition;            // Final position
    public float anticipationOffset = 100f;   // Distance for anticipation
    public float duration = 1.5f;             // Total duration of the animation
    public bool enableOnStart = true; // Enable objects on start
    public float delayBeforeStart = 0f; // Delay before starting the animation
    public float delayBeforeEnd = 0f; // Delay before enabling objects after animation
    private Vector2 startPosition; // Initial position of the image

    [SerializeField] private List<GameObject> objectsToEnable;
    public UnityEvent OnMovementStart;
    public UnityEvent OnMovementComplete;
    private Sequence moveSequence; // Sequence for the movement animation

    private void Awake()
    {
        imageTransform = this.transform as RectTransform;
        startPosition = imageTransform.anchoredPosition; // Store the initial position
    }

    void Start()
    {
        if (enableOnStart)
            DOVirtual.DelayedCall(delayBeforeStart, () => MoveWithAnticipationAndOvershoot(targetPosition));
    }

    public void StartMovement()
    {
        MoveWithAnticipationAndOvershoot(Vector2.zero);
    }

    public void MoveWithAnticipationAndOvershoot(Vector2 targetPos, int score = 0)
    {
        OnMovementStart.Invoke();
        targetPosition = targetPos != Vector2.zero ? targetPos : targetPosition;
        Vector2 startPos = imageTransform.anchoredPosition;

        // Calculate anticipation position
        Vector2 anticipationPos = startPos - (targetPosition - startPos).normalized * anticipationOffset;
        moveSequence?.Kill();
        moveSequence = DOTween.Sequence();

        if (anticipationOffset == 0f)
        {
            moveSequence
            .Append(imageTransform.DOAnchorPos(targetPosition, duration).SetEase(Ease.InOutQuad))
            .OnComplete(() =>
            {
                Invoke(nameof(MoveComplete), delayBeforeEnd);
            });
        }
        else
        {
            moveSequence
            .Append(imageTransform.DOAnchorPos(anticipationPos, duration * 0.2f).SetEase(Ease.InQuad))
            .Append(imageTransform.DOAnchorPos(targetPosition, duration * 0.8f).SetEase(Ease.OutCubic))
            .OnComplete(() =>
            {
                Invoke(nameof(MoveComplete), delayBeforeEnd);
            });
        }

        moveSequence.Play();
    }

    public void MoveToYAxis(float yPos)
    {
        moveSequence = DOTween.Sequence();
        moveSequence.Append(imageTransform.DOAnchorPosY(yPos, duration));
        moveSequence.Play();
    }

    public void MoveComplete()
    {
        //this.imageTransform.anchoredPosition = this.startPosition; // Ensure final position is set
        //this.gameObject.SetActive(false); // Hide the moving object
        OnMovementComplete?.Invoke();

        AudioManager.Instance.PlaySFX("appear");

        foreach (GameObject obj in objectsToEnable)
        {
            obj.SetActive(true);
        }
    }

    private void OnDisable()
    {
        moveSequence.Kill(); // Stop the sequence if the object is disabled
    }
}
