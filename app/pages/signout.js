import { signOut } from "next-auth/client";

export default function SignOut() {
  const handleSignOut = (e) => {
    e.preventDefault();
    signOut();
  };

  return (
    <div>
      <h1>Sign Out</h1>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
}
