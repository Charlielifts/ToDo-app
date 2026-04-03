import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Todo from "./components/Todo.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/todo" element={<Todo />} />
    </Routes>
  );
}

export default App;