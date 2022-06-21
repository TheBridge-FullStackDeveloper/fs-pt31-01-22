import { useContext, useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";
import Register from "./components/Register";
import * as authService from "./services/auth";
import Profile from "./components/Profile";
import AuthContext from "./context/authContext";

import authContext from "./context/authContext";
import { ProtectedRoute } from "./components/ProtectedRoute";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    authService.fetchUser(setUser);
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <div className="App">
        <h1>Auth</h1>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <div>Home page</div>
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route
              path="/login"
              element={
                <Register
                  registerUser={authService.registerUser}
                  loginUser={authService.loginUser}
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
