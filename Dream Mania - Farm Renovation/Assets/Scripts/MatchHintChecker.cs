using System.Collections.Generic;
using UnityEngine;

public class MatchHintChecker : MonoBehaviour
{
    [SerializeField] private TileManager tileManager;

    public List<TileCell> FindHintMatch()
    {
        int width = tileManager.cellWidth;
        int height = tileManager.cellHeight;
        var grid = tileManager.tileGrid;

        for (int x = 0; x < width; x++)
        {
            for (int y = 0; y < height; y++)
            {
                TileCell current = grid[x, y];
                if (!IsValid(current)) continue;

                string tileName = current.GetTile().GetTileData().name;

                // Horizontal check
                if (x < width - 2)
                {
                    TileCell c1 = grid[x + 1, y];
                    TileCell c2 = grid[x + 2, y];

                    if (IsValid(c1) && IsValid(c2))
                    {
                        if (c1.GetTile().GetTileData().name == tileName &&
                            c2.GetTile().GetTileData().name == tileName)
                        {
                            return new List<TileCell> { current, c1 };
                        }
                    }
                }

                // Vertical check
                if (y < height - 2)
                {
                    TileCell c1 = grid[x, y + 1];
                    TileCell c2 = grid[x, y + 2];

                    if (IsValid(c1) && IsValid(c2))
                    {
                        if (c1.GetTile().GetTileData().name == tileName &&
                            c2.GetTile().GetTileData().name == tileName)
                        {
                            return new List<TileCell> { current, c1 };
                        }
                    }
                }
            }
        }

        return null; // No matches found
    }

    private bool IsValid(TileCell cell)
    {
        return cell != null &&
               cell.GetTile() != null &&
               cell.GetTile().GetTileData() != null;
    }
}
