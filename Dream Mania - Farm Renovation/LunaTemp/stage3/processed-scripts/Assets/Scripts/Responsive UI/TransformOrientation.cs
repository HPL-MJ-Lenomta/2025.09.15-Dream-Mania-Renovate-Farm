using System;
using NaughtyAttributes;
using UnityEngine;

public class TransformOrientation : MonoBehaviour
{
    [Serializable]
    public class RectTransformOrientationSettings
    {
        public RectTransformValues PortraitValues;
        public RectTransformValues LandscapeValues;
    }

    [Serializable]
    public class RectTransformValues
    {
        public Vector2 AnchoredPosition;
        public Vector2 SizeDelta;
        public Vector3 Scale = Vector3.one;
    }

    [SerializeField] private bool _objectSwapMode = false;
    [ShowIf(nameof(_objectSwapMode))]
    [SerializeField] private GameObject _portraitObject;
    [ShowIf(nameof(_objectSwapMode))]
    [SerializeField] private GameObject _landscapeObject;

#if UNITY_EDITOR
    [ContextMenuItem("Record Portrait Values", nameof(RecordPortraitValues))]
    [ContextMenuItem("Record Landscape Values", nameof(RecordLandscapeValues))]
#endif
    [HideIf(nameof(_objectSwapMode))]
    [SerializeField] private RectTransformOrientationSettings _orientationSettings;

    public void SetOrientation(GameOrientation orientation)
    {
        if (_objectSwapMode)
        {
            _portraitObject.SetActive(orientation == GameOrientation.Portrait);
            _landscapeObject.SetActive(orientation == GameOrientation.Landscape);
        }
        else
        {
            RectTransformValues orientedTransform = new RectTransformValues();
            if (orientation == GameOrientation.Portrait)
                orientedTransform = _orientationSettings.PortraitValues;
            else if (orientation == GameOrientation.Landscape)
                orientedTransform = _orientationSettings.LandscapeValues;

            var rectTransform = transform as RectTransform;

            rectTransform.anchoredPosition = orientedTransform.AnchoredPosition;
            rectTransform.sizeDelta = orientedTransform.SizeDelta;
            rectTransform.localScale = orientedTransform.Scale;
        }
    }

    [HideIf(nameof(_objectSwapMode))]
    [Button]
    private void RecordPortraitValues()
    {
        RecordOrientation(GameOrientation.Portrait);
    }

    [HideIf(nameof(_objectSwapMode))]
    [Button]
    private void RecordLandscapeValues()
    {
        RecordOrientation(GameOrientation.Landscape);
    }

    public void RecordOrientation(GameOrientation orientation)
    {
        var rectTransform = transform as RectTransform;

        RectTransformValues orientationValues = new RectTransformValues();
        if (orientation == GameOrientation.Portrait)
            orientationValues = _orientationSettings.PortraitValues;
        else if (orientation == GameOrientation.Landscape)
            orientationValues = _orientationSettings.LandscapeValues;

        orientationValues.AnchoredPosition = rectTransform.anchoredPosition;
        orientationValues.SizeDelta = rectTransform.sizeDelta;
        orientationValues.Scale = rectTransform.localScale;
    }
}