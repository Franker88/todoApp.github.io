import React from "react";
import { useStorageListener } from "../Hooks/useStorageListener";
import "../styles/ChangeAlert.css";

const ChangeAlert = () => {
  const { storageChange } = useStorageListener();
  if (storageChange) {
    return (
      <div className="Sincronizer-container">
        <div className="Sincronizer-message">
          <p>
            Se han realizado cambios anteriormente, se requiere recargar la
            página para visualizarlos y poder seguir trabajando con el programa
          </p>
          <button onClick={() => window.location.reload()}>Recargar</button>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export { ChangeAlert };
