using System;
using System.Collections.Generic;
using NaughtyAttributes;
using UnityEngine;
using UnityEngine.UI;

public enum GameOrientation
{
    Invalid,
    Portrait,
    Landscape
}

[DefaultExecutionOrder(-10)]
public class GameOrientationHandler : MonoBehaviour
{
    public event Action<GameOrientation> OrientationChanged;

    [SerializeField] private GameOrientation _previewOrientation;
    [SerializeField] private Vector2 _portraitRef = new Vector2(1080, 1920);
    [SerializeField] private Vector2 _landscapeRef;
#if UNITY_EDITOR
    [ContextMenuItem("All Record Portrait Values", nameof(AllRecordPortraitValues))]
    [ContextMenuItem("All Record Landscape Values", nameof(AllRecordLandscapeValues))]
#endif
    [SerializeField] private TransformOrientation[] _orientationSwitchers;
    [SerializeField] private List<CanvasScaler> _canvasScalers = new List<CanvasScaler>();
    [SerializeField] private BackgroundCanvasScaler[] _bgScalers;

    private GameOrientation _currentOrientation = GameOrientation.Invalid;

    public GameOrientation CurrentOrientation => _currentOrientation;

#if UNITY_EDITOR
    private void OnValidate()
    {
        GetAllTransformOrientation();

        if (_previewOrientation != GameOrientation.Invalid)
        {
            SetGameOrientation(_previewOrientation);
        }
    }

    [ContextMenu("Get All Orientation Switchers")]
    private TransformOrientation[] GetAllTransformOrientation()
    {
        _orientationSwitchers = FindObjectsOfType<TransformOrientation>(true);
        return _orientationSwitchers;
    }
#endif

    private void Awake()
    {
        CheckOrientation();
    }

    private void Update()
    {
        CheckOrientation();
    }

    private void SetGameOrientation(GameOrientation orientation)
    {
        _currentOrientation = orientation;

        switch (orientation)
        {
            case GameOrientation.Portrait:
                foreach (CanvasScaler scaler in _canvasScalers)
                {
                    if (scaler != null)
                        scaler.referenceResolution = _portraitRef;
                }
                break;
            case GameOrientation.Landscape:
                foreach (CanvasScaler scaler in _canvasScalers)
                {
                    if (scaler != null)
                        scaler.referenceResolution = _landscapeRef;
                }
                break;
            default:
                break;
        }

        ScaleBackgrounds(orientation);

        foreach (var orientationSwitcher in _orientationSwitchers)
        {
            orientationSwitcher.SetOrientation(orientation);
        }

        OrientationChanged?.Invoke(orientation);
    }

    private void CheckOrientation()
    {
        var checkedOrientation = Screen.width < Screen.height ? GameOrientation.Portrait : GameOrientation.Landscape;

        if (checkedOrientation != _currentOrientation)
            SetGameOrientation(checkedOrientation);
    }

    private void ScaleBackgrounds(GameOrientation orientation)
    {
        foreach (var bgScaler in _bgScalers)
        {
            bgScaler.ScaleCanvas(orientation, _portraitRef);
        }
    }

    [Button]
    private void AllRecordPortraitValues()
    {
        foreach (var orientationSwitchers in _orientationSwitchers)
        {
            orientationSwitchers.RecordOrientation(GameOrientation.Portrait);
        }
    }

    [Button]
    private void AllRecordLandscapeValues()
    {
        foreach (var orientationSwitchers in _orientationSwitchers)
        {
            orientationSwitchers.RecordOrientation(GameOrientation.Landscape);
        }
    }
}
    
