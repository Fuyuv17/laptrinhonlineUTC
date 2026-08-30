import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import ProblemsPage from "./pages/ProblemsPage";
import ProblemDetailPage from "./pages/ProblemDetailPage";
import ContestsPage from "./pages/ContestsPage";
import StandingsPage from "./pages/StandingsPage";
import SubmissionsPage from "./pages/SubmissionsPage";
import UsersPage from "./pages/UsersPage";
import UserProfilePage from "./pages/UserProfilePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import NotFoundPage from "./pages/NotFoundPage";
import { useAuth } from "./lib/AuthContext";

function ProfileRedirect() {
  const { user } = useAuth();
  return <Navigate to={user ? `/users/${user.handle}` : "/login"} replace />;
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="problems" element={<ProblemsPage />} />
        <Route path="problems/:code" element={<ProblemDetailPage />} />
        <Route path="contests" element={<ContestsPage />} />
        <Route path="contests/:slug/standings" element={<StandingsPage />} />
        <Route path="submissions" element={<SubmissionsPage />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="users/:handle" element={<UserProfilePage />} />
        <Route path="profile" element={<ProfileRedirect />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
