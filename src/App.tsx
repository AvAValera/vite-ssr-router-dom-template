import type { RouteObject } from "react-router-dom";
import Home from "./pages/Home";

export const routes: RouteObject[] = [
  {
    path: "/",
    children: [
      {
        index: true,
        loader: homeLoader,
        element: <Home />,
      },

      {
        path: "*",
        element: (
          <>
            <h1 className="header">Page not found</h1>
          </>
        ),
      },
    ],
  },
];

async function homeLoader() {
  const res = await fetch("http://localhost:3000/api/test");
  const data = await res.json();
  return data;
}
