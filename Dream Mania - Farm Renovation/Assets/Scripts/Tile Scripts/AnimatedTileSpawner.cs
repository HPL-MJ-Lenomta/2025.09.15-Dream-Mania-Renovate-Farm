using DG.Tweening;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class AnimatedTileSpawner : MonoBehaviour
{
    #region Singleton
    public static AnimatedTileSpawner Instance;
    private void Awake()
    {
        if(Instance == null)
        Instance = this;
    }
    #endregion

    [SerializeField] private List<AnimatedTile> tiles = new List<AnimatedTile>();
    private Queue<AnimatedTile> tileQueue;

    public void Start()
    {
        tileQueue = new Queue<AnimatedTile>();
        foreach (var tile in tiles) 
        {
            tileQueue.Enqueue(tile);
        }
    }

    public void Spawn(TileData data, Vector3 position, float delay)
    {
        DOVirtual.DelayedCall(0.0f, () =>
        {
            AnimatedTile tileObject = tileQueue.Dequeue();
            if (tileObject != null && !data.isPowerup)
            {
                tileObject.gameObject.SetActive(true); 
                tileObject.MoveToTarget(data, position, delay);
            }
        });
    }

    public void Spawn(TileData data, Vector3 position, float delay, int value)
    {
        AnimatedTile tileObject = tileQueue.Dequeue();
        DOVirtual.DelayedCall(0.2f, () => 
        {
            if (tileObject != null && data && !data.isPowerup)
            {
                tileObject.gameObject.SetActive(true);
                tileObject.MoveToTarget(data, position, delay, value);
            }
        });
    }

    public void ReQueue(AnimatedTile tile)
    {
        if (tile != null)
        {
            tileQueue.Enqueue(tile);
        }
    }
}
