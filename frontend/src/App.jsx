import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login.jsx";
import Todo from "./pages/Todo.jsx";
import ProtectedRoute from "./routes/ProtectedRoute.jsx";

function App() {
  const token = localStorage.getItem("token");

  return (
    <Routes>

      {/* Public Route */}
      <Route
        path="/"
        element={token ? <Navigate to="/todo" replace /> : <Login />}
      />

      {/* Protected Route */}
      <Route element={<ProtectedRoute />}>
        <Route path="/todo" element={<Todo />} />
      </Route>

    </Routes>
  );
}

export default App;