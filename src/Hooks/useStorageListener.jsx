import React from "react";
import { useState } from "react";

const useStorageListener = () => {
  const [storageChange, setStorageChange] = useState(false);

  window.addEventListener("storage", (change) => {
    if (change.key === "TODOS_V1") {
      console.log("Hubo Cambios");
      setStorageChange(true);
    }
  });

  return { storageChange };
};

export { useStorageListener };
