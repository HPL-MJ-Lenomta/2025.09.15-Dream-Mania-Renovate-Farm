using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

public class Item : MonoBehaviour
{
    [Header("Item Properties")]
    [SerializeField] private Image itemImage;
    [SerializeField] private Image collectItemImage;
    [SerializeField] private TextMeshProUGUI itemCountText;
    [SerializeField] private int ItemCount = 0;
    [SerializeField] private Sprite completeSprite;
    [SerializeField] private ItemData data;
    [SerializeField] private UIMoveTo UIMovement;
    [SerializeField] private Image FurnitureImage;

    [SerializeField] private Vector2 portraitLocation, landscapeLocation;
    private void OnValidate()
    {
        if (itemImage == null || collectItemImage == null || itemCountText == null || data == null)
        {
            Debug.LogWarning("Item properties are not fully assigned.", this);
            return;
        }
        itemImage.sprite = data.itemIcon;
        collectItemImage.sprite = data.collectItemSprite;
        itemCountText.text = data.ItemCount.ToString();
        ItemCount = data.ItemCount;
    }

    private void Awake()
    {
        UIMovement = GetComponent<UIMoveTo>();
    }

    private void OnEnable()
    {
        UIMovement.OnMovementComplete.AddListener(MovementComplete);
    }

    private void OnDisable()
    {
        UIMovement.OnMovementComplete.RemoveListener(MovementComplete);
    }

    public void ItemCollected()
    {
        ItemCount--;
        itemCountText.text = ItemCount.ToString();
        if(ItemCount <= 0)
        {
            collectItemImage.sprite = completeSprite;
            itemCountText.gameObject.SetActive(false);
            GameManager.Instance.OnDoneCollecting(data);
        }
    }

    public void ItemCollected(int value)
    {
        ItemCount -= value;
        itemCountText.text = ItemCount.ToString();
        if (ItemCount <= 0)
        {
            collectItemImage.sprite = completeSprite;
            itemCountText.gameObject.SetActive(false);
            GameManager.Instance.OnDoneCollecting(data);
        }
    }

    public void StartMoving()
    {
        var targetPos = Screen.width < Screen.height ? portraitLocation : landscapeLocation;
        UIMovement.MoveWithAnticipationAndOvershoot(targetPos);
    }

    public void MovementComplete()
    {
        FurnitureImage.sprite = data.DecorationSprite;
        FurnitureImage.gameObject.SetActive(true);
    }

    public string GetItemColor()
    {
        return data.color;
    }
}
