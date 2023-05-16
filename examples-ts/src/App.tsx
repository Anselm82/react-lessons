import React from "react";
import "./App.css";
import { Contacts } from "./pages/Contacts";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { ContactDetail } from "./pages/ContactDetail/ContactDetail";



function App() {

  const routes = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "contacts",
      element: <Contacts />,
    },
    {
      path: "contact/:id",
      element: <ContactDetail mode={"edit"} onSave={() => {}} />,
    }, {
      path: "*",
      element: <div>ERROR 404</div>
    }

  ];

  const router = createBrowserRouter(routes);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
