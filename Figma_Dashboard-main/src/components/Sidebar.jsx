import { Camera, List, LayoutDashboard } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/logo.png';

const Sidebar = () => {
  return (
    <div className="d-flex flex-column bg-white" style={{ width: '240px', minHeight: '100vh', borderRight: '1px solid #eee' }}>
      <div className="p-4 border-bottom">
        <div className="d-flex justify-content-between align-items-center">
          <img src={logo} alt="Logo" />
        </div>
      </div>

      <div className="py-2">
        <div className="px-4 py-3 bg-primary text-white">
          <div className="d-flex align-items-center">
            <LayoutDashboard size={20} />
            <span className="ms-3">Dashboard</span>
          </div>
        </div>

        <div className="px-4 py-3 text-muted">
          <div className="d-flex align-items-center">
            <Camera size={20} />
            <span className="ms-3">Camera View</span>
          </div>
        </div>

        <div className="px-4 py-3 text-muted">
          <div className="d-flex align-items-center">
            <List size={20} />
            <span className="ms-3">Event Log</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar ;