import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { storeInstance } from "./StoreProvider";
import { StoreContext } from "./StoreContext";

ReactDOM.render(
  <div>
      <StoreContext.Provider
      //@ts-ignore
       value={storeInstance}>
        <App />
      </StoreContext.Provider>
  </div>,
  document.getElementById("root"),
  
)
;

reportWebVitals();
