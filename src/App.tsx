import { RouteObject } from "react-router-dom";
import { useRoutes } from "react-router-dom";

import "./assets/style/App.css";

import Home from "./page/Home";

function App() {
  const routes: RouteObject[] = [
    {
      path: "/",
      element: <Home />,
      children: [
        { index: true, element: <Home /> },

        { path: ":id", element: <Home /> },
      ],
    },
  ];

    const element = useRoutes(routes);
  return <>{element}</>;
}

export default App;
