import { ChevronDown } from 'lucide-react';
import navbar from "../assets/navbar.png"
export const Header = () => (
    <nav className="navbar navbar-light bg-white border-bottom px-4 py-3">
      <span className="navbar-brand mb-0 h5">KPI Tracker</span>
      <div className="d-flex align-items-center gap-2">
        <img 
          src={navbar}
          alt="User avatar"
          className="rounded-circle"
        />
        <span className="small">Rameshwar</span>
        <ChevronDown size={16} />
      </div>
    </nav>
  );

