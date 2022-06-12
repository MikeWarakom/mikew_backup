import { BrowserRouter } from "react-router-dom";

import AnimatedRoutes from "./components/navigation/AnimatedRoutes";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
