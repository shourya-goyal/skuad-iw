import { Route, Routes, useLocation } from "react-router-dom";
import { ROUTES } from "./constants/routes";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import DashboardPage from "./pages/DashboardPage";
import Layout from "./components/layout";
import { isAuthPage } from "./utils";

const ClientRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES.login.path} element={<LoginPage />} />
      <Route path={ROUTES.signup.path} element={<SignupPage />} />
      <Route path={ROUTES.signup.path} element={<DashboardPage />} />
    </Routes>
  );
};

function App() {
  const location = useLocation();

  return (
    <Layout isAuthPage={isAuthPage(location.pathname)}>
      <ClientRoutes />
    </Layout>
  );
}

export default App;
