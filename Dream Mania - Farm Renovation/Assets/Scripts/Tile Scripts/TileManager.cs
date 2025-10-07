using DG.Tweening;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using UnityEngine;
using Random = UnityEngine.Random;

public class TileManager : MonoBehaviour
{
    [Header("Grid Settings")]
    [SerializeField] public int cellWidth;
    [SerializeField] public int cellHeight;
    [SerializeField] private List<TileCell> cells;
    public CanvasGroup canvasGroup;
    [SerializeField] private List<TileData> tileDataPool;
    [SerializeField] private float GridHeight;
    public TileCell[,] tileGrid;
    [SerializeField] private float SequenceDelay = 0.25f;
    [SerializeField] private float BreakDelay, FallDelay, CheckDelay;

    [Header("Value Setter")]
    [Tooltip("Colors: 1-Red, 2-Blue, 3-Yellow")]
    [SerializeField] private string levelColorValues; // e.g., "123321"

    [Header("Powerup Settings")]
    [SerializeField] private List<TileData> powerupDataPool = new List<TileData>();

    [SerializeField] private DynamiteEffect dynamitePowerup;
    private void OnValidate()
    {
        /*char[] colors = levelColorValues.ToCharArray();
        for(int i = 0; i<colors.Length; i++) // remove 1 later
        {
            int colorIndex = (colors[i] - '0') - 1;
            if (colorIndex >= 0 && colorIndex < tileDataPool.Count && i < cells.Count)
            {
                cells[i].GetTile().SetData(tileDataPool[colorIndex]);
            }
        }*/
    }

    void Start()
    {
        InitializeGridCell();
        /*char[] colors = levelColorValues.ToCharArray();
        for (int i = 0; i < colors.Length; i++)
        {
            int colorIndex = (colors[i] - '0') - 1;
            if (colorIndex >= 0 && colorIndex < tileDataPool.Count && i < cells.Count)
            {
                cells[i].GetTile().SetData(tileDataPool[colorIndex]);
            }
        }*/
    }

    private void Update()
    {
        if(Input.GetMouseButtonDown(0))
        {
            //Time.timeScale = 0.2f;
        }
    }

    public void InitializeGridCell()
    {
        tileGrid = new TileCell[cellWidth, cellHeight];
        int index = 0;
        for (int i = 0; i < cellHeight; i++)
        {
            for (int j = 0; j < cellWidth; j++)
            {
                cells[index].coordinate = new Vector2Int(j, -i);
                tileGrid[j, i] = cells[index];
                cells[index].Initialize(this);
                index++;
            }
        }
    }

    public void SwapTiles(TileCell cell1, TileCell cell2)
    {
        if (!cell1.GetTile().GetTileData().isSwappable || !cell2.GetTile().GetTileData().isSwappable) return;

        Vector2 dir1 = (cell2.coordinate - cell1.coordinate);
        Vector2 dir2 = (cell1.coordinate - cell2.coordinate);

        if (dir2.magnitude > 1 || dir1.magnitude > 1)
        {
            Debug.LogError("Cell too Far");
            return;
        }

        canvasGroup.interactable = false;

        var TempData = cell1.GetTile().GetTileData();
        cell1.GetTile().DoMove(dir1, cell2.GetTile().GetTileData());
        cell2.GetTile().DoMove(dir2, TempData);
        if(cell1.GetTile().GetTileData().isPowerup || cell2.GetTile().GetTileData().isPowerup)
        {
            var temp = new List<List<TileCell>>();
            var tempList = new HashSet<TileCell>();

            tempList.UnionWith(cell2.GetTile().GetTileData().GetAffectedCells(this, cell2.coordinate));
            tempList.UnionWith(cell1.GetTile().GetTileData().GetAffectedCells(this, cell1.coordinate));

            /*temp.Add(cell1.GetTile().GetTileData().GetAffectedCells(this, cell1.coordinate));
            temp.Add(cell2.GetTile().GetTileData().GetAffectedCells(this, cell2.coordinate));*/
            temp = GroupMatchesByFloodFill(tempList);
            StartCoroutine(BreakTiles(temp));
            return; //skip match check if one of them is powerup
        }
        List<TileCell> tileCells1 = GetMatchesAt(cell1.coordinate);
        List<TileCell> tileCells2 = GetMatchesAt(cell2.coordinate);

        HashSet<TileCell> allTileCell = new HashSet<TileCell>();

        if (tileCells1.Count >= 3) allTileCell.UnionWith(tileCells1);
         
        if(tileCells2.Count >= 3) allTileCell.UnionWith(tileCells2);

        if(allTileCell.Count > 0)
        {
            //StartCoroutine(BreakTiles(allTileCell.ToList()));
            var groups = GroupMatchesByFloodFill(allTileCell);

            StartCoroutine(BreakTiles(groups));
        }
        else
        {
            DOVirtual.DelayedCall(0.25f, () =>
            {
                Debug.Log($"Tile cell count: {tileCells1.Count} + {tileCells2.Count}");
                var temp = cell1.GetTile().GetTileData();
                cell1.GetTile().DoMove(dir1, cell2.GetTile().GetTileData());
                cell2.GetTile().DoMove(dir2, temp);
            });
            
            DOVirtual.DelayedCall(0.5f, () =>
            {
                canvasGroup.interactable = true;
            });
        }
    }

    public List<TileCell> GetMatchesAt(Vector2Int coordinate)
    {
        coordinate *= new Vector2Int(1, -1); // Reverse the movement because the y coordinates are positive
        HashSet<TileCell> matchedCells = new HashSet<TileCell>();

        if (!tileGrid[coordinate.x, coordinate.y]) return null;
        var centerTile = tileGrid[coordinate.x, coordinate.y];
        var tileName = centerTile.GetTile().GetTileData().name;
        
        List<TileCell> horizontalCell = new List<TileCell>();
        List<TileCell> verticalCell = new List<TileCell>();


        for (int i = coordinate.x - 1; i >= 0; i--) // going left
        {
            var cell = tileGrid[i, coordinate.y];
            if (cell != null && cell.GetTile().GetTileData().name == tileName)
            {
                horizontalCell.Add(cell);
            }
            else
            {
                break;
            }
        }

        for (int i = coordinate.x + 1; i < cellWidth; i++) // going right
        {
            var cell = tileGrid[i, coordinate.y];
            if (cell != null && cell.GetTile().GetTileData().name == tileName)
            {
                horizontalCell.Add(cell);
            }
            else
            {
                break;
            }
        }

        //check vertical up and down
        for(int i = coordinate.y - 1; i >= 0; i--) //going up
        {
            var cell = tileGrid[coordinate.x, i];
            if(cell != null && cell.GetTile().GetTileData().name == tileName)
            {
                verticalCell.Add(cell);
            }
            else
            {
                break;
            }
        }

        for(int i = coordinate.y + 1; i < cellHeight; i++) //going down
        {
            var cell = tileGrid[coordinate.x, i];
            if (cell != null && cell.GetTile().GetTileData().name == tileName)
            {
                verticalCell.Add(cell);
            }
            else
            {
                break;
            }
        }

        matchedCells.Add(centerTile);

        if(horizontalCell.Count > 1)
        {
            foreach(var cell in horizontalCell) matchedCells.Add(cell);
        }

        if (verticalCell.Count > 1)
        {
            foreach (var cell in verticalCell) matchedCells.Add(cell);
        }

        return matchedCells.ToList();
    }

    public IEnumerator BreakTiles(List<TileCell> cells)
    {
        yield return StartCoroutine(Break(cells));
        
        yield return StartCoroutine(FallingTiles());

        yield return StartCoroutine(CheckCompletedItem());
        if (!GameManager.Instance.IsDoneCollecting)
        {
            yield return StartCoroutine(CheckAndHandleMatchesAfterFall());
        }
    }

    public IEnumerator BreakTiles(List<List<TileCell>> cells)
    {
        if (GameManager.Instance.IsDoneCollecting)
        {
            yield break;
        }

        yield return StartCoroutine(Break(cells));

        yield return StartCoroutine(FallingTiles());

        yield return StartCoroutine(CheckCompletedItem());

        if (!GameManager.Instance.IsDoneCollecting)
        {
            yield return StartCoroutine(CheckAndHandleMatchesAfterFall());
        }
    }

    public IEnumerator Break(List<TileCell> cells)
    {
        yield return new WaitForSeconds(SequenceDelay);

        //AudioManager.Instance.PlaySFX("pop1");

        float delay = 0.5f;
        foreach (var cell in cells)
        {
            AnimatedTileSpawner.Instance.Spawn(cell.GetTile().GetTileData(), cell.transform.localPosition, delay);
            cell.GetTile().Break();
            //delay += 0.1f;
        }
        yield return new WaitForSeconds(BreakDelay);
    }

    public IEnumerator Break(List<List<TileCell>> cells)
    {
        yield return new WaitForSeconds(SequenceDelay);

        //AudioManager.Instance.PlaySFX("pop1");
        bool anyPowerup = cells
            .SelectMany(innerList => innerList)
            .Any(c => c.GetTile()?.GetTileData()?.isPowerup == true);

        //linq get first powerup in the group
        TileCell powerupCell = cells
            .SelectMany(innerList => innerList)
            .FirstOrDefault(c => c.GetTile()?.GetTileData()?.isPowerup == true);

        if (anyPowerup)
        {
            Debug.Log("Powerup Activated!");
            Debug.LogError($"Groups to break: {cells.Count}");
            dynamitePowerup.gameObject.SetActive(true);
            dynamitePowerup.StartEffect(powerupCell.transform as RectTransform);
            powerupCell.GetTile().Break();
            yield return new WaitForSeconds(2.5f);
            dynamitePowerup.gameObject.SetActive(false);
        }

        foreach (var cell in cells)
        {
            float delay = .75f;
            //bool hasPowerup = cell.Any(c => c.GetTile()?.GetTileData()?.isPowerup == true);
            var middleCell = cell[cell.Count / 2];
            foreach (var c in cell)
            {
                if (!c.GetTile().GetTileData()) continue;
                if (c.GetTile().GetTileData().isBreakable == false) continue;
                if (delay == .75f)
                {
                    AnimatedTileSpawner.Instance.Spawn(c.GetTile().GetTileData(), c.transform.localPosition, delay, cell.Count);
                    //c.GetTile().Break();
                    if (cell.Count > 4 && !anyPowerup)// && cell.Any(c => c.GetTile()?.GetTileData()?.isPowerup == true))
                    {
                        //powerup?
                        c.OnTileBreak.Invoke(c);
                        c.GetTile().SetData(powerupDataPool[Random.Range(0, powerupDataPool.Count)]);
                    }
                    /*else if(!anyPowerup)
                    {
                        var dir = (cell[0].coordinate - c.coordinate);
                        c.GetTile().Break(dir);
                    }*/
                    else
                    {
                        c.OnTileBreak.Invoke(c);
                        c.GetTile().Break();
                    }
                }
                else
                {
                    if(!anyPowerup)
                    {
                        var dir = (cell[0].coordinate - c.coordinate);
                        c.OnTileBreak.Invoke(c);
                        c.GetTile().Break(dir);
                    }
                    else
                    {
                        c.OnTileBreak.Invoke(c);
                        c.GetTile().Break();
                        Debug.LogError("Normal Tile Break");
                    }
                    //c.GetTile().GetTileData().GetAffectedCells(this, c.coordinate);

                    /*var dir = (cell[0].coordinate - c.coordinate);
                    c.GetTile().Break(dir);*/
                }
                delay += 0.1f;
            }
            /*    AnimatedTileSpawner.Instance.Spawn(cell.GetTile().GetTileData(), cell.transform.localPosition, delay);
            cell.GetTile().Break();*/
        }
        yield return new WaitForSeconds(BreakDelay);
    }

    public IEnumerator FallingTiles()
    {
        yield return new WaitForSeconds(FallDelay);
        for (int x = 0; x < cellWidth; x++)
        {
            int emptyCount = 0;

            // Go from bottom to top (highest y to lowest y)
            for (int y = cellHeight - 1; y >= 0; y--)
            {
                var currentTile = tileGrid[x, y].GetTile();

                //Debug.LogError($"Current tile data: {currentTile.GetTileData()} at ({x},{y})");

                if (currentTile.GetTileData() == null)
                {
                    emptyCount++;
                }
                else if (emptyCount > 0)
                {
                    // Move tile down by 'emptyCount' rows
                    var targetCell = tileGrid[x, y + emptyCount];
                    float fallDistance = ((cellHeight - 1) - y) + emptyCount * GridHeight;
                    targetCell.GetTile().DoMoveDown(currentTile.GetTileData(), fallDistance);
                    currentTile.ClearData();
                }
            }

            // Cache current column and empty count for delayed call
            int columnX = x;
            int empty = emptyCount;

            for (int y = 0; y < empty; y++)
            {
                int randIndex = Random.Range(0, tileDataPool.Count);
                float fallDistance = ((cellHeight - 1) - y) * GridHeight;
                tileGrid[columnX, y].GetTile().DoMoveDown(tileDataPool[randIndex], fallDistance);
            }
        }

    }

    public IEnumerator CheckAndHandleMatchesAfterFall()
    {
        yield return new WaitForSeconds(CheckDelay);
        HashSet<TileCell> allMatched = new HashSet<TileCell>();

        for (int x = 0; x < cellWidth; x++)
        {
            for (int y = 0; y < cellHeight; y++)
            {
                var tileData = tileGrid[x, y].GetTile().GetTileData();
                if (tileData == null || tileData.isPowerup || !tileData.isBreakable) continue; // Skip empty cells

                var match = GetMatchesAt(new Vector2Int(x, -y));
                if (match != null && match.Count >= 3)
                {
                    foreach (var cell in match)
                        allMatched.Add(cell);
                }
            }
        }

        if (allMatched.Count > 0)
        {
            var groups = GroupMatchesByFloodFill(allMatched);

            //reorganize each group to have intersection cell first
            for(int i = 0; i< groups.Count; i++)
            {
                groups[i] = MatchGroupUtils.MoveIntersectionCellFirst(groups[i]);
            }

            // Option A: break all groups at once
            //StartCoroutine(BreakTiles(groups.SelectMany(g => g).ToList()));
            StartCoroutine(BreakTiles(groups));
            //StartCoroutine(BreakTiles(new List<TileCell>(allMatched)));
        }
        else
        {
            canvasGroup.interactable = true; // Allow user input again
        }

    }

    public IEnumerator CheckCompletedItem()
    {
        yield return new WaitForSeconds(CheckDelay);
        if(GameManager.Instance.IsDoneCollecting)
        {
            Debug.Log("Furniture Sequence");
        }
    }

    // Group all matched tiles into connected groups (same color + adjacency)
    private List<List<TileCell>> GroupMatchesByFloodFill(HashSet<TileCell> allMatched)
    {
        var groups = new List<List<TileCell>>();
        var toVisit = new HashSet<TileCell>(allMatched);

        while (toVisit.Count > 0)
        {
            var start = toVisit.First();
            var group = FloodFillGroup(start, toVisit);
            groups.Add(group);

            // Remove visited ones from the pool
            foreach (var cell in group)
                toVisit.Remove(cell);
        }

        return groups;
    }

    private List<TileCell> FloodFillGroup(TileCell start, HashSet<TileCell> pool)
    {
        var result = new List<TileCell>();
        var queue = new Queue<TileCell>();

        var startData = start.GetTile().GetTileData();

        queue.Enqueue(start);
        result.Add(start);

        while (queue.Count > 0)
        {
            var cell = queue.Dequeue();

            // Only neighbors that are in allMatched pool AND same color
            var neighbors = GetNeighbors(cell)
                .Where(n => pool.Contains(n) &&
                            n.GetTile().GetTileData() == startData);

            foreach (var n in neighbors)
            {
                if (!result.Contains(n))
                {
                    result.Add(n);
                    queue.Enqueue(n);
                }
            }
        }

        return result;
    }
    public List<TileCell> GetNeighbors(TileCell cell)
    {
        var neighbors = new List<TileCell>();
        var coord = cell.coordinate * new Vector2Int(1, -1); // Reverse the movement because the y coordinates are positive
        // Up
        if (coord.y > 0)
            neighbors.Add(tileGrid[coord.x, coord.y - 1]);
        // Down
        if (coord.y < cellHeight - 1)
            neighbors.Add(tileGrid[coord.x, coord.y + 1]);
        // Left
        if (coord.x > 0)
            neighbors.Add(tileGrid[coord.x - 1, coord.y]);
        // Right
        if (coord.x < cellWidth - 1)
            neighbors.Add(tileGrid[coord.x + 1, coord.y]);
        return neighbors;
    }

    public List<TileCell> GetAffectedCells(List<Vector2> coordinates)
    {
        var result = new List<TileCell>();
        foreach(var cell in cells)
        {
            if(coordinates.Contains(cell.coordinate))
            {
                result.Add(cell);
            }
        }
        return result;
    }

    public TileCell GetCellBelow(TileCell cell)
    {
        var lowerCell = null as TileCell;
        var coord = cell.coordinate * new Vector2Int(1, -1); // Reverse the movement because the y coordinates are positive

        if (coord.y < cellHeight - 1)
            lowerCell = (tileGrid[coord.x, coord.y + 1]);

        return lowerCell;
    }
}
