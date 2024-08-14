import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import Login from './Pages/Login';
import Room from './Pages/Room';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/room" element={<Room />} />
      </Routes>
    </Router>
  );
}
