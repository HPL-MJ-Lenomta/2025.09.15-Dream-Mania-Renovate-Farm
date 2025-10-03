using UnityEngine;
using UnityEngine.UI;

public class BackgroundCanvasScaler : MonoBehaviour
{
    [SerializeField] private CanvasScaler _canvasScaler;

    public void ScaleCanvas(GameOrientation orientation, [Bridge.Ref] Vector2 portraitRefResolution)
    {
        _canvasScaler.screenMatchMode = CanvasScaler.ScreenMatchMode.MatchWidthOrHeight;

        switch (orientation)
        {
            case GameOrientation.Portrait:
                _canvasScaler.matchWidthOrHeight = 1f;
                _canvasScaler.referenceResolution = portraitRefResolution;
                break;
            case GameOrientation.Landscape:
                _canvasScaler.matchWidthOrHeight = 0f;
                _canvasScaler.referenceResolution = new Vector2(portraitRefResolution.y, portraitRefResolution.x);
                break;
        }
    }
}
