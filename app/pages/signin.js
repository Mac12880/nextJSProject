import { signIn } from "next-auth/react";

export default function SignIn() {
  const handleSignIn = (e) => {
    e.preventDefault();
    signIn();
  };

  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={handleSignIn}>Sign In with GitHub</button>
    </div>
  );
}
