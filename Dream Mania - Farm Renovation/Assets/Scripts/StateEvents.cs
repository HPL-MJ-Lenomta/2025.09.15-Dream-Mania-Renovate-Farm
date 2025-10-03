using DG.Tweening;
using UnityEngine;
using UnityEngine.Events;

public class StateEvents : MonoBehaviour
{
    public UnityEvent OnEnableEvent;
    public UnityEvent OnDisableEvent;
    public UnityEvent OnStartEvent;

    [SerializeField] private bool autoEnable = true;
    [SerializeField] private float autoEnableDelay = 0f;
    [SerializeField] private float autoDisableDelay = 0f;

    private void Start()
    {
        OnStartEvent?.Invoke();
    }

    private void OnEnable()
    {
        if(autoEnable)
        {
            DOVirtual.DelayedCall(autoEnableDelay, () => OnEnableEvent?.Invoke());
        }
    }

    private void OnDisable()
    {
        DOVirtual.DelayedCall(autoDisableDelay, () => OnDisableEvent?.Invoke());
    }
}
