import Home from "./page/Home";
import Login from "./page/Login";

export default function App() {
  return (<>
    {
      document.cookie !== "" ?
        <Home /> :
        <Login />
    }
  </>
  )
}


