import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GamePage from "./GamePage";
import Homepage from "./Homepage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/gamepage" element={<GamePage />} />
      </Routes>
    </Router>
  );
}

export default App;
