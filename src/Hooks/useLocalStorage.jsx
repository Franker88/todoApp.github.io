import { useEffect, useReducer } from "react";

const useLocalStorage = (itemName, initialValue) => {
  const [state, dispatch] = useReducer(reducer, initialState({ initialValue }));
  const { error, loading, item } = state;
  /*   const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState(initialValue); */

  //ACTION CREATORS
  const onError = (item) =>
    dispatch({ type: actionTypes.error, payload: item });

  const onSuccess = (item) =>
    dispatch({ type: actionTypes.success, payload: item });

  const onSave = (item) => dispatch({ type: actionTypes.save, payload: item });

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        onSuccess(parsedItem);
      } catch (error) {
        onError(error);
      }
    }, 3000);
  }, []);

  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      onSave(newItem);
      //setItem(newItem);
    } catch (error) {
      onError(error);
      //setError(error);
    }
  };

  return { item, saveItem, loading, error };
};

const initialState = ({ initialValue }) => ({
  error: false,
  loading: true,
  item: initialValue,
});

const actionTypes = {
  error: "ERROR",
  success: "SUCCESS",
  save: "SAVE",
};

const reducerObject = (state, payload) => ({
  [actionTypes.error]: { ...state, error: true },
  [actionTypes.success]: {
    ...state,
    error: false,
    loading: false,
    item: payload,
  },
  [actionTypes.save]: { ...state, item: payload },
});

const reducer = (state, action) => {
  return reducerObject(state, action.payload)[action.type] || state;
};

export { useLocalStorage };
