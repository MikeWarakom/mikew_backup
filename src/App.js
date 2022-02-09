import { BrowserRouter } from "react-router-dom";

import AnimatedRoutes from "./components/navigation/AnimatedRoutes";

function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
