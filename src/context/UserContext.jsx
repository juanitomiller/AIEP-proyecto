import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") === "true"
  );

  // Cargar usuario almacenado en localStorage si está autenticado
  useEffect(() => {
    if (isAuthenticated) {
      const storedUser = JSON.parse(localStorage.getItem("user"));

      if (!storedUser) {
        const testUser = {
          email: "usuario@ejemplo.com",
        password: "123456",
        };
        localStorage.setItem("user", JSON.stringify(testUser));
        setUser(testUser);
      } else {
        setUser(storedUser)
      }
    }
  }, [isAuthenticated]);

  const login = (userData) => {
    setUser(userData);
    setIsAuthenticated(true);
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("isAuthenticated", "true");
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem("user");
    localStorage.setItem("isAuthenticated", "false");
  };

  return (
    <UserContext.Provider value={{ user, setUser, isAuthenticated, setIsAuthenticated, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
