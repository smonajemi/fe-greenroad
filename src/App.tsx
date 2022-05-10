import { useEffect, useState } from "react";
import { Box, CircularProgress } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import routes from "./config/routes";
import Center from "./components/utils/Center";
import AuthChecker from "./components/auth/AuthChecker";
import { useAuth } from "components/hooks/useAuth";

function App() {
  const [loading, setLoading] = useState(true);
  const {isAuthenticated} = useAuth()
  
  useEffect(() => {
      if (isAuthenticated) {
        console.info("User detected")
        setLoading(false)
      }
  }, [isAuthenticated])

  if (loading)
    return (
      <Center>
        <CircularProgress />
      </Center>
    );

  return (
    <Box>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={
                route.protected ? (
                  <AuthChecker>
                    <route.component />
                  </AuthChecker>
                ) : (
                  <route.component />
                )
              }
            />
          ))}
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
