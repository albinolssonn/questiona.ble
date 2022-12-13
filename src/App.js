import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ExplorePage from "./pages/ExplorePage";
import IndexPage from "./pages/IndexPage";
import ProfilePage from "./pages/ProfilePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import MyProfilePage from "./pages/MyProfilePage";
import EditProfilePage from "./pages/EditProfilePage";
import AnswerPage from "./pages/AnswerPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/explore" element={<ExplorePage />} />

          <Route path="/profile/:id" element={<ProfilePage />} />
          <Route path="/myprofile/:id" element={<MyProfilePage />} />
          <Route path="/myprofile/:id/edit" element={<EditProfilePage />} />
          <Route path="/answer/:id/" element={<AnswerPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
