using System;
using System.Collections.Generic;
using System.Linq;
using UIUtils;
using UnityEngine;
using UnityEngine.Events;
using UnityEngine.EventSystems;

public class TileCell : MonoBehaviour, IDragHandler, IPointerClickHandler
{
    [Header("Tile Cell Settings")]
    [SerializeField] private TileData tileData; // Reference to the TileData scriptable object
    [SerializeField] private Tile tile;
    public Vector2Int coordinate;
    private TileManager tileManager;

    public Action<TileCell> OnTileBreak;
    public UnityEvent TileBreakEvent;

    public void Initialize(TileManager manager)
    {
        this.tileManager = manager; 
    }

    public Tile GetTile()
    {
        return tile;
    }

    private void OnValidate()
    {
        if(tileData && tile)
        {
            tile.SetData(tileData);
        }
        else
        {
            Debug.LogWarning("TileData or Tile is not assigned in TileCell.", this);
        }
    }

    public void OnDrag(PointerEventData eventData)
    {
        if (!tileManager.canvasGroup.interactable) return;

        if (GameManager.Instance.IsDoneCollecting) return;

        if (UIComponentChecker.CheckForComponent(out TileCell otherCell, true))
        {
            if (!otherCell.GetTile().GetTileData().isSwappable || !GetTile().GetTileData().isSwappable) return;

            if (otherCell != this && otherCell.GetTile().GetTileData() != null && GetTile().GetTileData() != null)
            {
                tileManager.SwapTiles(this, otherCell);
            }
        }
        else
        {
            Debug.Log("No valid TileCell found under the pointer.");
        }
    }

    public void OnPointerClick(PointerEventData eventData)
    {
        if(tile.GetTileData().isPowerup)
        {
            /*var temp = new List<List<TileCell>>();
            var affectedCells = tile.GetTileData().GetAffectedCells(tileManager, coordinate);*/
            
            //StartCoroutine(tileManager.BreakTiles(tile.GetTileData().GetAffectedCells(tileManager, coordinate)));
        }
        
        //tile.Break();
        //tile.Break();
    }

    
}
