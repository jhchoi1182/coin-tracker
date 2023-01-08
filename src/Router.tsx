import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Coin from "./screens/Coin";
import Coins from "./screens/Coins";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Coins />,
      },
      {
        path: ":coinId",
        element: <Coin />,
      },
    ],
  },
]);

export default router;
