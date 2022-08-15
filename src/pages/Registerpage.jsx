import {  Link } from "react-router-dom";
import {SignUp} from "../components/SignUp";

const Registerpage = () => {
  return (
    <>
      <h1>Registerpage</h1>
      <SignUp />
      <p>
        Already have the account? <Link to="/login"> Sign in here</Link>
      </p>
    </>
  );
};

export default Registerpage;
