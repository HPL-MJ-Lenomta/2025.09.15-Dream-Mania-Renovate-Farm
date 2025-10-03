using System.Collections.Generic;
using UnityEngine;
using UnityEngine.EventSystems;

namespace UIUtils
{
    public static class UIComponentChecker
    {
        /// <summary>
        /// Fires a raycast on mouse pos and returns true if first object hit contains component.
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="checkAll">If all objects beyond first hit will be checked.</param>
        /// <returns></returns>
        public static bool CheckForComponent<T>(bool checkAll = true) where T : MonoBehaviour
        {
            return CheckForComponent(Input.mousePosition, out T component, checkAll);
        }

        /// <summary>
        /// Fires a raycast on mouse pos and returns true if first object hit contains component.
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="checkAll">If all objects beyond first hit will be checked.</param>
        /// <returns></returns>
        public static bool CheckForComponent<T>(Vector2 atPosition, bool checkAll = true) where T : MonoBehaviour
        {
            return CheckForComponent(atPosition, out T component, checkAll);
        }

        /// <summary>
        /// Fires a raycast on mouse pos and returns true if first object hit contains component.
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="checkAll">If all objects beyond first hit will be checked.</param>
        /// <returns></returns>
        public static bool CheckForComponent<T>(out T component, bool checkAll = true) where T : MonoBehaviour
        {
            return CheckForComponent(Input.mousePosition, out component, checkAll);
        }

        /// <summary>
        /// Fires a raycast on mouse pos and returns true if first object hit contains component.
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="checkAll">If all objects beyond first hit will be checked.</param>
        /// <returns></returns>
        public static bool CheckForComponent<T>(Vector2 atPosition, out T component, bool checkAll = true) where T : MonoBehaviour
        {
            component = null;

            var pointerData = new PointerEventData(EventSystem.current);
            pointerData.position = atPosition;

            List<RaycastResult> results = new List<RaycastResult>();
            EventSystem.current.RaycastAll(pointerData, results);

            if (checkAll)
            {
                foreach (RaycastResult result in results)
                {
                    component = result.gameObject.GetComponentInParent<T>();
                    if (component != null)
                    {
                        return true;
                    }
                }
            }
            else if (results.Count > 0)
            {
                component = results[0].gameObject.GetComponentInParent<T>();
                if (component != null)
                    return true;
            }

            return false;
        }

        /// <summary>
        /// Fires a raycast on mouse pos and returns number of objects with component.
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <returns></returns>
        public static int CheckForComponents<T>() where T : MonoBehaviour
        {
            return CheckForComponents(Input.mousePosition, out List<T> components);
        }

        /// <summary>
        /// Fires a raycast on mouse pos and returns number of objects with component.
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <returns></returns>
        public static int CheckForComponents<T>(Vector2 atPosition) where T : MonoBehaviour
        {
            return CheckForComponents(atPosition, out List<T> components);
        }

        /// <summary>
        /// Fires a raycast on mouse pos and returns number of objects with component.
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <returns></returns>
        public static int CheckForComponents<T>(out List<T> components) where T : MonoBehaviour
        {
            return CheckForComponents(Input.mousePosition, out components);
        }

        /// <summary>
        /// Fires a raycast on mouse pos and returns number of objects with component.
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <returns></returns>
        public static int CheckForComponents<T>(Vector2 atPosition, out List<T> components) where T : MonoBehaviour
        {
            var pointerData = new PointerEventData(EventSystem.current);
            pointerData.position = atPosition;

            List<RaycastResult> results = new List<RaycastResult>();
            EventSystem.current.RaycastAll(pointerData, results);

            components = new List<T>();
            foreach (RaycastResult result in results)
            {
                var t = result.gameObject.GetComponentInParent<T>();
                if (t != null)
                {
                    components.Add(t);
                }
            }

            return components.Count;
        }

        /// <summary>
        /// Returns all components of type T at mouse position
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <returns></returns>
        public static List<T> GetComponents<T>() where T : MonoBehaviour
        {
            return GetComponents<T>(Input.mousePosition);
        }

        /// <summary>
        /// Returns all components of type T at given position
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="atPosition"></param>
        /// <returns></returns>
        public static List<T> GetComponents<T>(Vector2 atPosition) where T : MonoBehaviour
        {
            var pointerData = new PointerEventData(EventSystem.current);
            pointerData.position = atPosition;

            List<RaycastResult> results = new List<RaycastResult>();
            EventSystem.current.RaycastAll(pointerData, results);
            List<T> components = new List<T>();

            foreach (RaycastResult result in results)
            {
                T resultComponent = result.gameObject.GetComponentInParent<T>();
                if (resultComponent != null)
                {
                    components.Add(resultComponent);
                }
            }

            return components;
        }

        /// <summary>
        /// Checks if given gameObject exist at mouse position
        /// </summary>
        /// <param name="gameObject"></param>
        /// <returns></returns>
        public static bool CheckForGameObject(GameObject gameObject)
        {
            return CheckForGameObject(Input.mousePosition, gameObject);
        }

        /// <summary>
        /// Checks if given gameObject exist at given position
        /// </summary>
        /// <param name="atPosition"></param>
        /// <param name="gameObject"></param>
        /// <returns></returns>
        public static bool CheckForGameObject(Vector2 atPosition, GameObject gameObject)
        {
            var pointerData = new PointerEventData(EventSystem.current);
            pointerData.position = atPosition;

            List<RaycastResult> results = new List<RaycastResult>();
            EventSystem.current.RaycastAll(pointerData, results);

            foreach (RaycastResult result in results)
            {
                if (result.gameObject == gameObject)
                {
                    return true;
                }
            }

            return false;
        }
    }
}
