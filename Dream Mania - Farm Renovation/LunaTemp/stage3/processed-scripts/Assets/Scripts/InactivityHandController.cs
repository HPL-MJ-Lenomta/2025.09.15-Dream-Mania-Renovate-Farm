using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.EventSystems;

public class InactivityHandController : MonoBehaviour
{
    [SerializeField] private TileManager tileManager;
    [SerializeField] private MergeHands mergeHands;
    [SerializeField] private float inactivityDelay = 5f;

    private MatchHintChecker hintChecker;
    [SerializeField] private float inactivityTimer;
    private bool handActive;
    private bool isChecking;

    private void Start()
    {
        hintChecker = GetComponent<MatchHintChecker>();
        inactivityTimer = 0f;
        handActive = false;
    }

    private void Update()
    {
        if (GameManager.Instance.IsDoneCollecting)
        {
            inactivityTimer = 0f;
            if (handActive)
            {
                HideHand();
            }
            return;
        }

        if (Input.anyKeyDown || Input.GetMouseButtonDown(0) || Input.GetMouseButtonDown(1))
        {
            ResetTimer();
        }

        inactivityTimer += Time.deltaTime;

        if (inactivityTimer >= inactivityDelay && !handActive && !isChecking)
        {
            StartCoroutine(ShowHandAfterDelay());
        }
    }

    private void ResetTimer()
    {
        inactivityTimer = 0f;
        if (handActive)
        {
            HideHand();
        }
    }

    private IEnumerator ShowHandAfterDelay()
    {
        isChecking = true;

        List<TileCell> match = hintChecker.FindHintMatch();
        Debug.Log("Find Hint Match");
        if (match != null && match.Count >= 2)
        {
            TileCell cell1 = match[0];
            TileCell cell2 = match[1];

            RectTransform rt1 = cell1.GetComponent<RectTransform>();
            RectTransform rt2 = cell2.GetComponent<RectTransform>();

            if (rt1 != null && rt2 != null)
            {
                handActive = true;
                mergeHands.gameObject.SetActive(true);
                mergeHands.StartMovement(rt1, rt2);
            }
        }

        isChecking = false;
        yield return null;
    }

    private void HideHand()
    {
        handActive = false;
        mergeHands.gameObject.SetActive(false);
        mergeHands.enabled = false;
    }

    public void ForceStop()
    {
        StopAllCoroutines();
        HideHand();
        inactivityTimer = 0f;
    }
}
