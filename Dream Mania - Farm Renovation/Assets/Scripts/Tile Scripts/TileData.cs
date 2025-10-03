using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[CreateAssetMenu(fileName = "New Tile", menuName = "TileData/Tile")]
public class TileData : ScriptableObject
{
    public string tileName;
    public Sprite tileSprite;
    public bool isPowerup;
    public bool isBreakable;
    public bool isSwappable = true;
    public bool isSpecialBreakable = false;

    public virtual List<TileCell> GetAffectedCells(TileManager tileManager, Vector2 center)
    {
        // Implement activation logic here
        return new List<TileCell>();
    }

    public void Activate()
    {
        Debug.Log("Test " + this.name);
    }
}
