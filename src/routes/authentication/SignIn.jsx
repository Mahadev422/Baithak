import { useEffect } from "react";
import { auth } from "../../../firebaseConfig";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { checkAuthStatus, syncUserToFirestore } from "../../store/fetch/auth";

const SignIn = () => {
  const provider = new GoogleAuthProvider();
  const { user, loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      dispatch(syncUserToFirestore(user));
    } catch (err) {
      console.error("Google sign-in error", err.message);
    }
  };
  useEffect(() => {
    dispatch(checkAuthStatus());
  }, [0]);

  if (loading) return <p>Loading...</p>;
  if (user) return <Navigate to="/" replace />;
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Sign in to your account
        </h2>
        <button
          onClick={handleGoogleSignIn}
          className="w-full flex items-center justify-center gap-2 py-3 px-4 border border-gray-300 rounded-md bg-white hover:bg-gray-50 hover:rounded-full transition"
        >
          <FcGoogle className="w-7 h-7" />
          <span className="font-medium">Sign in with Google</span>
        </button>
      </div>
    </div>
  );
};

export default SignIn;
