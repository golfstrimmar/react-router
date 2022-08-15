import { Routes, Route, Link } from "react-router-dom";

import  Homepage  from "../src/pages/Homepage";
import  Loginpage  from "../src/pages/Loginpage";
import  Registerpage  from "../src/pages/Registerpage";
// import { Createpost } from "./pages/Createpost";
// import { Editpost } from "./pages/Editpost";
// import { Singlepage } from "./pages/Singlepage";
// import { LoginPage } from "./pages/Loginpage";
// import { RequireAuth } from "./hoc/RequireAuth";
// import { AuthProvider } from "./hoc/AuthProvider";

function App() {
  return (
    <>
      <header>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </header>
      <div className="container"> 
        <Routes>
          {/* <Route path="/" element={<Layout />}> */}
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/login" element={<Loginpage />} />
          <Route exact path="/register" element={<Registerpage />} />
          {/* </Route> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
