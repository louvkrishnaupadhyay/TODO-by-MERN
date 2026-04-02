import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Homepage from './components/Homepage';
import Adduser from './components/Adduser';
import Edituser from './components/Edituser';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage/>
    },
    {
      path: "/Adduser",
      element: <Adduser/>
    },
    {
      path: "/Edituser",
      element: <Edituser/>
    },
    {
      path: "*",
      element: <div> page not found </div>
    },
  ])

  return <RouterProvider router={router} />
}

export default App;
