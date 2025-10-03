using System.Collections;
using System.Collections.Generic;
using System.Linq;
using UnityEngine;

public class MatchGroupUtils : MonoBehaviour
{
    /// <summary>
    /// Given a group (list) of TileCell, finds a cell in it that has both a vertical neighbor AND a horizontal neighbor (within the group),
    /// then returns a new list with that cell first (if found), else original order.
    /// </summary>
    public static List<TileCell> MoveIntersectionCellFirst(List<TileCell> group)
    {
        if (group == null || group.Count == 0)
            return group;

        // Build a set for quick lookup
        var coordSet = new HashSet<Vector2Int>(group.Select(c => c.coordinate));

        TileCell intersectionCell = null;

        foreach (var cell in group)
        {
            var coord = cell.coordinate;

            // Check horizontal neighbor: left or right
            bool hasHorizontalNeighbor =
                coordSet.Contains(coord + Vector2Int.right) ||
                coordSet.Contains(coord + Vector2Int.left);

            if (!hasHorizontalNeighbor)
                continue;

            // Check vertical neighbor: up or down
            bool hasVerticalNeighbor =
                coordSet.Contains(coord + Vector2Int.up) ||
                coordSet.Contains(coord + Vector2Int.down);

            if (!hasVerticalNeighbor)
                continue;

            // If both are true, this is an intersection cell
            intersectionCell = cell;
            break;
        }

        if (intersectionCell == null)
        {
            // no such cell found; just return as is
            return group;
        }

        // Build reordered list: intersection first, then the rest (excluding it)
        List<TileCell> reordered = new List<TileCell>(group.Count);
        reordered.Add(intersectionCell);
        foreach (var cell in group)
        {
            if (cell == intersectionCell) continue;
            reordered.Add(cell);
        }

        return reordered;
    }
}
