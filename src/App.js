import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import MenuSidebar from './components/nav/MenuSidebar';
import Dashboard from './components/views/Dashboard';
import NewExport from './components/views/NewExport';
import OldExport from './components/views/OldExport';
import "./styles/app.css";

function App() {
  return (
    <div className="App">
      <Router>
        <MenuSidebar>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/export/new" element={<NewExport />} />
            <Route path="/export/old" element={<OldExport />} />
          </Routes>
        </ MenuSidebar>
      </Router>
    </div>
  );
}

export default App;
