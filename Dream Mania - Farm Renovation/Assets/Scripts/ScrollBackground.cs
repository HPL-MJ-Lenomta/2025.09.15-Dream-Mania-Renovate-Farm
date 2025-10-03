using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class ScrollBackground : MonoBehaviour
{
    [SerializeField] private RawImage image;
    [SerializeField] private float scrollSpeed = 0.2f; // Speed of the scrolling effect

    private void Update()
    {
        if (image != null)
        {
            // Calculate the offset based on time
            float offset = Time.time * scrollSpeed; // Adjust speed by changing the multiplier
            
            // Set the texture offset to create a scrolling effect
            image.uvRect = new Rect(0, offset, 1, 1);
        }
    }
}

