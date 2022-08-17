import { Form } from "./Form";
import { useDispatch } from "react-redux/es/exports";
import { useNavigate } from "react-router-dom";
import { setUser } from "../store/slices/userSlice";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";



const SignUp = () => {
const dispatch = useDispatch();
const  push  = useNavigate();



  const handleRegister = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({user}) => {
        console.log(user)
      dispatch(
        setUser({
          email: user.email,
          id: user.uid,
          token: user.accessToken,
        }));

      push('/');

      })
      .catch(console.error);
  };



  return <Form title="register" handleClick={handleRegister}></Form>;
}

export { SignUp };




// const Login = () => {
//   const useDispatch = useDispatch();
//   const auth = getAuth();
//   const handleLogin = (email, password) => {
//     const auth = getAuth();
//     signInWithEmailAndPassword(auth, email, password)
//       .then(console.log)
//       .catch(console.error);
//   };
//   return <Form title="sign in" handleClick={handleLogin} />;
// };

// export default Login;
