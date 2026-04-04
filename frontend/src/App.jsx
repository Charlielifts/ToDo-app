import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Todo from "./components/Todo.jsx";

function App() {
const token = localStorage.getItem("token")
  return ( 
    <Routes>

      <Route path = "/"  element={token ? <Navigate to= "/Todo" /> : <Login />}/>

      <Route path="/todo" element={token ? <Todo /> : <Navigate to= "/" />}/>

    </Routes>
  );
}
export default App;