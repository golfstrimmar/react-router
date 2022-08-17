import { Navigate } from "react-router-dom";
import { useAuth } from "../hook/use-auth";
import { useDispatch } from "react-redux";
import { removeUser } from "../store/slices/userSlice";




const Homepage = () => {
  const dispatch = useDispatch();
  const { isAuth, email } = useAuth();
    return isAuth ? (
      <div>
        <h1>welcome!</h1>
        <button
          onClick={() => {
            dispatch(removeUser());
          }}
        >
          Logaut from <strong>{email}</strong>
        </button>
      </div>
    ) : (
      <Navigate to="/login" />
    );
}

export default Homepage;
