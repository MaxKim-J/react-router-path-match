import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Main Page</div>,
  },
  // {
  //   path: "//",
  //   element: <div>Invalid URL</div>,
  // },
  {
    path: "*",
    element: <div>Undefined Fallback Page</div>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
