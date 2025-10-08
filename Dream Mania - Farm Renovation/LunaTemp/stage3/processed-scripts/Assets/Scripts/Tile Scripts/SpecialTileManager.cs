using DG.Tweening;
using Spine.Unity;
using System.Collections;
using System.Collections.Generic;
using System.Data.Common;
using UnityEngine;

public class SpecialTileManager : MonoBehaviour
{
    [SerializeField] private TileManager tileManager;
    [SerializeField] private List<TileCell> cellList = new List<TileCell>();

    [SerializeField] private List<SkeletonGraphic> SpecialTiles = new List<SkeletonGraphic>();
    [SerializeField] private float specialTileTargetPos;
    [SerializeField] private float pigPos, chickenPos;

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

                neighbor.TileBreakEvent.Invoke();

                neighbor.GetTile().SpecialBreak();
            }
            else if (neighbor != null && neighbor.GetTile().GetTileData().tileName == "p1")
            {
                var lowerCell = tileManager.GetCellBelow(neighbor);

                if (lowerCell == null) continue;

                if(lowerCell.GetTile().GetTileData() == null) continue;

                if(lowerCell.GetTile().GetTileData().isSpecialBreakable)
                {
                    lowerCell.TileBreakEvent.Invoke();

                    specialTileTargetPos = lowerCell.GetTile().GetTileData().name == "Chicken" ? chickenPos : pigPos;

                    string audioKey = neighbor.GetTile().GetTileData().name;

                    Debug.Log("Special Break: " + audioKey);

                    lowerCell.GetTile().SpecialBreak();

                    AnimatedTileSpawner.Instance.SpawnCornVFX(lowerCell.transform.position);

                    AudioManager.Instance.PlaySFX(audioKey);

                    SpecialTiles[lowerCell.coordinate.x].gameObject.transform.SetParent(lowerCell.transform, true);
                    SpecialTiles[lowerCell.coordinate.x].AnimationState.SetAnimation(0, "eating", false);
                    SpecialTiles[lowerCell.coordinate.x].gameObject.transform.DOLocalMoveY(specialTileTargetPos, 0.25f).SetDelay(0f).OnComplete(()=>
                    { 
                        SpecialTiles[lowerCell.coordinate.x].AnimationState.SetAnimation(0, "idle", true);
                    });
                }
            }
        }
    }
}
