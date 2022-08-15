import { Navigate } from "react-router-dom";

const Homepage = () => {
    return (
      <div>
        <Navigate to="/login" />
        <h1>Homepage</h1>
      </div>
    );
}

export default Homepage;
