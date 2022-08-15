import { Form } from "./Form";
import { useDispatch } from "react-redux/es/exports";
import { setUser } from "../store/slices/userSlice";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";



const SignUp = () => {

  const handleRegister = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(console.log)
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
