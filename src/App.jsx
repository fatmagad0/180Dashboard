import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import DataPage from './pages/DataPage';
import Sidebar from './components/Sidebar';
function App() {
  return (
    <div>
      <Router>
        <div className='flex h-screen'>
      <Sidebar />
        <div className='flex-1'>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/data" element={<DataPage />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
        </div>
        </div>
      </Router>
    </div>
  )
}
export default App