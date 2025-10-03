using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[CreateAssetMenu(fileName = "New Tile", menuName = "TileData/Tile")]
public class TileData : ScriptableObject
{
    public string tileName;
    public Sprite tileSprite;
    public bool isPowerup;

    public virtual List<TileCell> GetAffectedCells(TileManager tileManager, [Bridge.Ref] Vector2 center)
    {
        // Implement activation logic here
        return new List<TileCell>();
    }

    public void Activate()
    {
        Debug.Log("Test " + this.name);
    }
}
