import KPITracker from "./components/KPITracker";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="d-flex min-vh-100">
      <Sidebar />
      <KPITracker />
      
    </div>
  );
};

export default App;