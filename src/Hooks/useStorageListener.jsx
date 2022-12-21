import { useState } from "react";

const useStorageListener = () => {
  const [storageChange, setStorageChange] = useState(false);

  window.addEventListener("storage", (change) => {
    if (change.key === "TODOS_V1") {
      setStorageChange(true);
    }
  });

  return { storageChange };
};

export { useStorageListener };
