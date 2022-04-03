import { Navigate, Route, Routes } from 'react-router';
import './App.css';
import { Home as NsoHome } from './nso-manual/components/Home'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/nso/" element={<NsoHome />} />
        <Route path="/nso/:pageId" element={<NsoHome />} />
        <Route path="/blog/*" element={<Navigate replace to="/nso/" /> } />
      </Routes>
    </div>
  );
}

export default App;
