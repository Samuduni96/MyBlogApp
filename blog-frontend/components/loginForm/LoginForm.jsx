import Link from "next/link";
import { Context } from "@/context/Context";
import { useRef, useContext, useState } from "react";
import axios from "axios";

function LoginForm() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);
  const [ error, setError ] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      res.data && window.location.replace("/home");
    } catch (err) {
      dispatch({type: "LOGIN_FAILURE" });
      setError(true);
    }
  };

    return (
        <div className="flex items-center justify-center min-h-screen bg-cover bg-no-repeat bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1518963534257-f901d4d46f59?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80")' }}>
            <div className="max-w-2xl w-full mx-auto">
            <span className="text-3xl flex flex-col items-center font-bold mb-8">Login</span>
        <form className="rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Username
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-100 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  
                   type="text" 
                   placeholder="Enter your username..."
                   ref={userRef} />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-100 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                   type="password" 
                   placeholder="Enter your password..."
                   ref={passwordRef} />
          </div>
          <div className="max-w-full">
          <div className="flex items-center justify-between text-center">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="submit" disabled={isFetching}>
              Login
            </button>
          </div>
          <div className="text-center mt-4">
            <button className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
              <Link href="/register">Register</Link>
            </button>
          </div>
          <div className="mb-14 font-bold text-center">
            { error && <span>Something went wrong...</span> }
          </div>
        </div>
        </form>
      </div>
      </div>
    )
};

export default LoginForm;