
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routers/Router";

function App() {
  return (
    <div className="max-w-[1440px] m-auto">
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
