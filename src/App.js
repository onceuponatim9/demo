// JSX
// ㄴ Javascript XML

import { RouterProvider } from "react-router-dom";
import VideoList from "./components/VideoList";
import router from "./router";

function App() {
  return (
    // <MyComponent message={"This is my first React App.This is my first React App."} />
    //<VideoList />
    <RouterProvider router={router} />
  );
}

export default App;
