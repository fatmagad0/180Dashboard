import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import DataPage from './pages/DataPage';
import Sidebar from './components/Sidebar';
import Edit from './pages/Edit';
function App() {
  return (
    <div className='h-screen'>
      <Router>
        <div className='flex h-full'>
      <Sidebar />
        <div className='flex-1'>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/data" element={<DataPage />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
        </div>
        </div>
      </Router>
    </div>
  )
}
export default App