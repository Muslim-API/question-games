import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center bg-regal-blue">
      <Outlet />
    </div>
  );
}

export default App;
