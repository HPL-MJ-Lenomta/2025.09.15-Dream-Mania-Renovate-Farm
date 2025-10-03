using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SpecialTileManager : MonoBehaviour
{
    [SerializeField] private TileManager tileManager;
    [SerializeField] private List<TileCell> cellList = new List<TileCell>();

    private void Start()
    {
        foreach (var cell in cellList)
        {
            cell.OnTileBreak += OnBreak;
        }
    }

    public void OnBreak(TileCell cell)
    {
        // handle planks

        var neighbors = tileManager.GetNeighbors(cell);
        foreach (var neighbor in neighbors)
        {
            if(!neighbor.GetTile().GetTileData()) continue;

            if (!neighbor.GetTile().GetTileData().isBreakable)
            {
                Debug.LogError(neighbor.GetTile().GetTileData().name + " | " + neighbor.GetTile().GetTileData().tileName);
            }

            if (neighbor != null && neighbor.GetTile().GetTileData().isSpecialBreakable)
            {
                if (neighbor.GetTile().GetTileData() == null) continue;

                neighbor.GetTile().SpecialBreak();
            }
            else if (neighbor != null && neighbor.GetTile().GetTileData().tileName == "p1")
            {
                var lowerCell = tileManager.GetCellBelow(neighbor);

                if (lowerCell == null) continue;

                if(lowerCell.GetTile().GetTileData() == null) continue;

                if(lowerCell.GetTile().GetTileData().isSpecialBreakable)
                {
                    lowerCell.GetTile().SpecialBreak(); 
                }
            }
        }
    }
}
