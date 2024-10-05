import { Route, Routes } from "react-router-dom";
import "./App.css";
import UserDetail from "./Components/UserDetail";
import Users from "./Components/Users";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/user/:id" element={<UserDetail />} />
      </Routes>
    </>
  );
}

export default App;
