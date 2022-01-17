import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Topbar from "./components/common/Topbar";
import CustomRoutes from "./router/CustomRoutes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Topbar />
        <CustomRoutes />
      </BrowserRouter>
    </div>
  );
}
export default App;
