import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import HomePage from './pages/Home/HomePage'
import TermsPage from "./pages/Terms/TermsPage";
function App() {
  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/terms" element={<TermsPage />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
