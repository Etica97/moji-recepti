import Pages from "./pages/Pages";
import { BrowserRouter } from "react-router-dom";
import Dropdown from "./components/Dropdown";

function App() {
  return (
    <div>
      <BrowserRouter>
        <h1 className="title">MojiRecepti</h1>
        <Dropdown />
        <Pages />
        <div className="footer">footer :)</div>
      </BrowserRouter>
    </div>
  );
}

export default App;
