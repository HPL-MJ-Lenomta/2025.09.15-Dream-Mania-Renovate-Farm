using System;
using System.Collections.Generic;
using UnityEngine;

public class PlayerGuide : MonoBehaviour
{
    [SerializeField] private List<GameObject> prompts = new List<GameObject>();
    private List<int> shownPrompts = new List<int>();
    private void OnEnable()
    {

    }

    private void Start()
    {
        GameManager.Instance.OnStartMIP1.AddListener(() =>
        {
            shownPrompts.Add(0);
        });

        List<AnimationBase> animations = GameManager.Instance.FurnitureAnimations;
        for (int i = 0; i < animations.Count && i < prompts.Count; i++)
        {
            int index = i; // Capture the current index
            animations[i].OnMovementComplete.AddListener(() => ShowPrompt(index));
        }
    }

    private void ShowPrompt(int index)
    {
        Debug.Log("Showing prompt at index: " + index);

        shownPrompts.Add(index);

        foreach (var prompt in prompts)
        {
            if (prompt.activeInHierarchy)
            {
                return;
            }
        }
        
        for(int i = 0; i < prompts.Count; i++)
        {
            if (!shownPrompts.Contains(i))
            {
                prompts[i].SetActive(true);
                shownPrompts.Add(i);
                Debug.Log("Prompt shown: " + prompts[i].name);
                break;
            }
        }
    }
}
