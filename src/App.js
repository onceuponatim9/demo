// JSX
// ㄴ Javascript XML

import { RouterProvider } from "react-router-dom";
import VideoList from "./components/VideoList";
import router from "./router";
import { Grid } from "@chakra-ui/react";

function App() {
  return (
    // <MyComponent message={"This is my first React App.This is my first React App."} />
    //<VideoList />
    <Grid p={"40px 20px"} gap={"10px"} minH={"100vh"} templateRows={"120px auto 160px"}>
      <RouterProvider router={router} />
    </Grid>
  );
}

export default App;
