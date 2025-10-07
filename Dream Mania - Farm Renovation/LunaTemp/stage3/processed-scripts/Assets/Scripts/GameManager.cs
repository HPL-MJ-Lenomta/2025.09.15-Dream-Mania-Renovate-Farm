using DG.Tweening;
using Luna.Unity;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Net.Http.Headers;
using System.Reflection;
using TMPro;
using UnityEngine;
using UnityEngine.Events;
using UnityEngine.UI;

public enum GameType
{
    MIP1,
    MIP2,
}

public class GameManager : MonoBehaviour
{
    #region Singleton
    public static GameManager Instance;
    
    void Awake()
    {
        if(Instance == null)
        {
            Instance = this;
        }
        else
        {
            Destroy(this.gameObject);
        }
    }

    #endregion

    [Header("Game Panels")]
    [SerializeField] private GameObject TutorialPanel;
    [SerializeField] private GameObject GamePanel;
    [SerializeField] private GameObject EndCard;
    [SerializeField] private GameObject CTAPanel;
    [SerializeField] private GameObject FailPanel;
    [SerializeField] private GameObject EndCardInActivityPanel;

    #region Playables
    [Header("Luna Playgrounds")]
    [SerializeField] private string iosLink;
    [SerializeField] private string androidLink;
    [LunaPlaygroundField]
    [SerializeField] public bool IsSIP;
    [LunaPlaygroundField]
    [SerializeField] public GameType gameType = GameType.MIP1;

    [Header("Timer Settings")]
    [SerializeField] private bool hasTimer;
    [SerializeField] private float currentTimer;
    [SerializeField] private float maxTime;
    [SerializeField] private bool gameOver = false;

    [Header("Inactivity Panel")]
    [SerializeField] private GameObject inactivityPanel;
    [SerializeField] private GameObject inactivityPanelGame;
    [SerializeField] public bool toggleInactivityPanel = false;
    [SerializeField] private float inactivityTime = 10f;
    [SerializeField] private float inactivityTimer = 0f;
    [SerializeField] private TextMeshProUGUI timerText;
    public UnityEvent OnStartMIP1;
    public UnityEvent OnStartMIP2;
    public void AppstoreLink()
    {
        Playable.InstallFullGame(iosLink, androidLink);
    }

    private void Start()
    {
        InitializeDictionary();
        NextLevel();
        StartCoroutine(WaitForTap());
        if (gameType == GameType.MIP1)
        {
            OnStartMIP1?.Invoke();
        }
        else
        {
            OnStartMIP2?.Invoke();
        }
    }

    private IEnumerator WaitForTap()
    {
        yield return new WaitUntil(() => Input.GetMouseButtonDown(0) || Input.touchCount > 0);
        AudioManager.Instance.PlayMusic("bgm");
        TutorialPanel?.SetActive(false);
        toggleInactivityPanel = true;
        if (IsSIP)
        {
            AppstoreLink();
            ShowEndcard();
        }
    }

    private void Update()
    {
        if (gameOver) return;

        /*if (toggleInactivityPanel)
        {
            inactivityTimer += Time.deltaTime;

            if (inactivityTimer >= inactivityTime && !inactivityPanel.activeInHierarchy)
            {
                inactivityPanel?.SetActive(true);
                //inactivityPanelGame.SetActive(true);
            }

            if (Input.GetMouseButtonDown(0) || Input.touchCount > 0)
            {
                inactivityTimer = 0;
                inactivityPanel?.SetActive(false);
                TutorialPanel?.SetActive(false);
                inactivityPanelGame.SetActive(false);
            }
        }*/
        if (!hasTimer || !toggleInactivityPanel) return;


        currentTimer -= Time.deltaTime;
        timerText.text = Mathf.RoundToInt(currentTimer).ToString() + "s";
        if (currentTimer <= 0)
        {
            ShowFailCard();
        }

        if (currentTimer <= 5f && !inactivityPanel.activeInHierarchy && currentTimer > 0)
        {
            inactivityPanel?.SetActive(true);
            AudioManager.Instance.PlaySFX("time");
        }
    }

    public void ResetInactivityPanelPosition(Transform parent)
    {
        inactivityPanel.transform.SetParent(parent);
        RectTransform rectTransform = inactivityPanel.transform as RectTransform;
        rectTransform.anchoredPosition = Vector2.zero;
    }
    public void ShowEndcard()
    {
        if (gameOver) return;
        EndCard?.SetActive(true);
        gameOver = true;
        inactivityPanel?.SetActive(false);
        GamePanel.SetActive(false);
    }

    public void ShowCTACard()
    {
        if (gameOver) return;
        CTAPanel?.SetActive(true);
        gameOver = true;
        inactivityPanel?.SetActive(false);
        inactivityPanel?.SetActive(false);
        GamePanel.SetActive(false);
    }

    public void ShowFailCard()
    {
        if (gameOver) return;
        FailPanel?.SetActive(true);
        TutorialPanel?.SetActive(false);
        gameOver = true;
        toggleInactivityPanel = false; // Stop the inactivity panel from toggling after it has been shown
        AudioManager.Instance.PlaySFX("fail");
        inactivityPanel?.SetActive(false);
    }
    #endregion

    [System.Serializable]
    public class FurnitureItems
    {
        public string key;
        public Item value;
    }

    [SerializeField] private List<FurnitureItems> items = new List<FurnitureItems>();
    [SerializeField] private Dictionary<int, List<FurnitureItems>> furnitureDictionary = new Dictionary<int, List<FurnitureItems>>();
    [SerializeField] private int CurrentLevel = 0;
    [SerializeField] private List<FurnitureItems> currentFurnitures = new List<FurnitureItems>();
    [SerializeField] private List<BasicFade> gameBoards = new List<BasicFade>();
    [Header("Furniture placements")]
    [SerializeField] private List<AnimationBase> furnitureDecorations = new List<AnimationBase>();
    [SerializeField] private List<GameObject> mip1Objects = new List<GameObject>();
    [SerializeField] private List<GameObject> mip2Objects = new List<GameObject>();
    [SerializeField] private List<GameObject> Feedback = new List<GameObject>();
    [SerializeField] private List<string> audioKeys = new List<string>();
    [SerializeField] private List<float> cameraPanLocation = new List<float>();
    [SerializeField] private UIMoveTo cameraPanObject;
    public bool IsDoneCollecting = false;
    private bool canGoNextLevel;
    private int currentFurnitureIndex = 0;
    private List<int> indexExceptions = new List<int>();

    [LunaPlaygroundField]
    [SerializeField] private bool mip1ButtonPress = false;
    [LunaPlaygroundField]
    [SerializeField] private int puzzlesToSolve = 1;
    [SerializeField] private List<GameObject> redirectButtons = new List<GameObject>();

    public List<AnimationBase> FurnitureAnimations => furnitureDecorations;

    public UnityEvent OnLevelComplete;

    public void InitializeDictionary()
    {
        int itemsPerLevel = 3;
        int totalLevel = 3;

        for (int level = 0; level < totalLevel; level++)
        {
            furnitureDictionary[level] = new List<FurnitureItems>();

            int startIndex = level * itemsPerLevel;
            int endIndex = Mathf.Min(startIndex + itemsPerLevel, items.Count);

            for (int i = startIndex; i < endIndex; i++)
            {
                furnitureDictionary[level].Add(items[i]);
            }
        }

        UnityAction mipAction = gameType == GameType.MIP1 ? (UnityAction)MIP1FurniturePlacementComplete : (UnityAction)MIP2FurniturePlacementComplete;

        for (int i = 0; i < furnitureDecorations.Count; i++)
        {
            furnitureDecorations[i].OnMovementComplete.AddListener(mipAction);
        }
    }

    public void MIP1FurniturePlacementComplete()
    {
        NextLevel(0f);
        DOVirtual.DelayedCall(2f, () =>
        {
            if (CurrentLevel >= 3)
            {
                Debug.Log("Level Complete");
                OnLevelComplete.Invoke();
                //mip1Objects[mip1Objects.Count - 1].SetActive(true);
                ShowEndcard();
                return;
            }

            if(mip1ButtonPress)
            {
                indexExceptions.Add(0);
                EnableButtons();
                return;
            }

            mip1Objects[CurrentLevel].SetActive(true);

            if(CurrentLevel < puzzlesToSolve) return;

            foreach (var button in redirectButtons)
            {
                button.SetActive(true);
            }
        });
    }
    public void MIP2FurniturePlacementComplete()
    {
        NextLevel();

        DOVirtual.DelayedCall(2f, () =>
        {
            if (CurrentLevel >= 3)
            {
                Debug.Log("Level Complete");
                OnLevelComplete.Invoke();
                ShowEndcard();
                //mip2Objects[mip2Objects.Count - 1].SetActive(true);
                return;
            }

            EnableButtons();
        });
    }

    public void DisableAllButtons()
    {
        for (int i = 0; i < mip2Objects.Count; i++)
        {
            mip2Objects[i].SetActive(false);
        }
    }

    private void EnableButtons()
    {
        for (int i = 0; i < mip2Objects.Count; i++)
        {
            if (!indexExceptions.Contains(i))
            {
                mip2Objects[i].SetActive(true);
            }
        }
    }

    public void NextLevel(float delay = 1f)
    {
        CurrentLevel++;
        IsDoneCollecting = false;
        canGoNextLevel = false;
        if (CurrentLevel != 0)
        {
            Feedback[CurrentLevel - 1].gameObject.SetActive(true);
            DOVirtual.DelayedCall(2f, ()=> Feedback[CurrentLevel - 1].gameObject.SetActive(false));
            AudioManager.Instance.PlaySFX(audioKeys[CurrentLevel - 1]);
        }

        if (CurrentLevel >= 3) return;
        DOVirtual.DelayedCall(delay, () =>
        {
            //cameraPanObject.MoveToYAxis(cameraPanLocation[CurrentLevel]);
            //currentFurnitures = furnitureDictionary[CurrentLevel];
            canGoNextLevel = true;
        });
    }

    public void SetCurrentFurniture(int key)
    {
        if(CurrentLevel >= puzzlesToSolve)
        {
            ShowEndcard();
            AppstoreLink();
            return;
        }

        //if(canGoNextLevel)
        currentFurnitures = furnitureDictionary[key];

        currentFurnitureIndex = key;
        indexExceptions.Add(key);
        canGoNextLevel = false;

        DisableAllButtons();
    }

    public void AddCollectible(string key)
    {
        if(IsDoneCollecting) return;
        foreach(var furnitureItem in currentFurnitures)
        {
            if(furnitureItem.key == key)
            {
                furnitureItem.value.ItemCollected();
                break;
            }
        }
    }

    public void AddCollectible(string key, int value)
    {
        if (IsDoneCollecting) return;
        Debug.Log("Collecting " + key + " with value " + value);
        foreach (var furnitureItem in currentFurnitures)
        {
            if (furnitureItem.key == key)
            {
                furnitureItem.value.ItemCollected(value);
                break;
            }
        }
    }

    public void OnDoneCollecting(ItemData data)
    {
        IsDoneCollecting = true;
        DOVirtual.DelayedCall(1f, () =>
        {
            foreach (var f in currentFurnitures)
            {
                if ((f.value.GetItemColor() == data.color))
                {
                    f.value.StartMoving();
                }
                else
                {
                    f.value.gameObject.GetComponent<BasicFade>().FadeOut();
                }
            }
            //gameBoards[CurrentLevel].FadeOut();
        } );
    }

    public void SetSIP(bool sip)
    {
        IsSIP = sip;
    }
}
