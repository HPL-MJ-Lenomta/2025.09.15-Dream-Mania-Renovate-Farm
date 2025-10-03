using DG.Tweening;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class Tile : MonoBehaviour
{
    [SerializeField] private Image itemImage;
    [SerializeField] private TileData tileData;
    private RectTransform rectTransform;
    private Vector3 initialPosition;

    [Header("Movement Settings")]
    [SerializeField] private float MovementMagnitude = 2f;
    [SerializeField] private float MovementDuration = 1f;

    private void Awake()
    {
        rectTransform = transform as RectTransform;
        initialPosition = rectTransform.anchoredPosition;
    }

    public void SetData(TileData data)
    {
        tileData = data;
        if (itemImage != null && tileData != null)
        {
            itemImage.sprite = tileData.tileSprite;
        }
    }

    public void DoMove([Bridge.Ref] Vector2 dir, TileData data)
    {
        AudioManager.Instance.PlaySFX("swap");

        tileData = data;
        rectTransform.DOBlendableLocalMoveBy(dir * MovementMagnitude, MovementDuration)
            .OnComplete(()=>
            {
                SetData(data);
                rectTransform.anchoredPosition = Vector2.zero;
            });
    }

    /*public void DoMoveDown(TileData data)
    {
        tileData = data;
        SetData(tileData);
        rectTransform.localScale = Vector2.one;
    }*/

    public void DoMoveDown(TileData newData, float fallDistance)
    {
        SetData(newData);
        rectTransform.localScale = Vector2.one;

        RectTransform rt = GetComponent<RectTransform>();

        Vector3 endPosition = rt.anchoredPosition;
        Vector3 startPosition = endPosition + new Vector3(0, fallDistance);

        rt.anchoredPosition = startPosition;

        //float delay = 1f;
        rt.DOAnchorPos(endPosition, 0.3f)
          .SetEase(Ease.OutCubic);
    }


    public TileData GetTileData()
    {
        return tileData;
    }

    public void Break()
    {
        rectTransform.DOScale(0, MovementDuration).SetEase(Ease.OutBack);
        tileData = null;
    }

    public void Break([Bridge.Ref] Vector2 direction)
    {
        rectTransform.DOBlendableLocalMoveBy(direction * MovementMagnitude, MovementDuration)
            .SetEase(Ease.OutBack)
            .OnComplete(() =>
            {
                rectTransform.localScale = Vector3.zero;
                rectTransform.anchoredPosition = initialPosition;
                tileData = null;
            });
    }

    public void ClearData()
    {
        tileData = null;
        itemImage.sprite = null;
    }
}
