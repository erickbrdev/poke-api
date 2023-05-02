import React from "react";
import ReactDOM from "react-dom/client";
import Provider from "./context/Provider.tsx";
import { RouterProvider } from "react-router-dom";

import "./style/global.css";
import { router } from "./routes/router.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
);
