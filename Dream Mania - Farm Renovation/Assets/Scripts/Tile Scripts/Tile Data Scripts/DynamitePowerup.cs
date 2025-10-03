using System.Collections.Generic;
using System.Linq;
using UnityEngine;

[CreateAssetMenu(fileName = "New Tile", menuName = "TileData/Tile-Powerup")]
public class DynamitePowerup : TileData
{
    public int explosionRadius = 2; // Radius of the explosion effect
    /*override public List<TileCell> GetAffectedCells(TileManager tileManager, Vector2 center)
    {
        Debug.LogError("ACTIVATE!!");
        var coordinates = new List<Vector2>();
        coordinates.Add(center);
        center *= new Vector2(1, -1);
        for (int x = -explosionRadius + (int)center.x; x < explosionRadius + (int)center.x; x++)
        {
            for(int y = -explosionRadius + (int)center.y; y < explosionRadius + (int)center.y; y++)
            {
                Vector2 pos = new Vector2(x, y * -1f);
                coordinates.Add(pos);
                Debug.Log($"Position: {pos}");
            }
        }

        var group = tileManager.GetAffectedCells(coordinates);
        HashSet<TileCell> uniqueCells = new HashSet<TileCell>(group);

        Debug.LogError("Affected Cells: " + group.Count);

        return uniqueCells.ToList();
    }*/
    override public List<TileCell> GetAffectedCells(TileManager tileManager, Vector2 center)
    {
        Debug.LogError("ACTIVATE!!");

        // We'll preserve the original center so we can match later
        Vector2 originalCenter = center;

        // compute coordinates list
        var coordinates = new List<Vector2>();
        coordinates.Add(originalCenter);

        // If you need to transform center (flip Y, etc), do so on a copy
        Vector2 invCenter = center * new Vector2(1, -1);

        for (int x = -explosionRadius + (int)invCenter.x; x < explosionRadius + (int)invCenter.x; x++)
        {
            for (int y = -explosionRadius + (int)invCenter.y; y < explosionRadius + (int)invCenter.y; y++)
            {
                Vector2 pos = new Vector2(x, y * -1f);
                coordinates.Add(pos);
                Debug.Log($"Position: {pos}");
            }
        }

        // Get affected cells from tileManager
        var group = tileManager.GetAffectedCells(coordinates);

        // Remove duplicates
        HashSet<TileCell> uniqueCells = new HashSet<TileCell>(group);

        Debug.LogError("Affected Cells: " + uniqueCells.Count);

        // Now build result list with center first (if found), then the rest
        List<TileCell> result = new List<TileCell>();

        // Try to find the cell corresponding to originalCenter
        // You might have to compare coordinates or some property
        TileCell centerCell = uniqueCells.FirstOrDefault(cell =>
            // Assuming TileCell has a property / field that stores its coordinate or position
            cell.coordinate == originalCenter
        );

        if (centerCell != null)
        {
            result.Add(centerCell);
        }

        // Add all others, except the center
        foreach (var cell in uniqueCells)
        {
            if (cell == centerCell) continue;
            result.Add(cell);
        }

        return result;
    }
}
