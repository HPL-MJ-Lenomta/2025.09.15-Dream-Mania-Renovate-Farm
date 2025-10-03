using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Events;

public class AnimationBase : MonoBehaviour
{
    public UnityEvent OnMovementComplete;

    public virtual void AnimateTo()
    {
        // Base implementation (can be empty or have default behavior)
    }
}
