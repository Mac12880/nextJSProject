import { useSession } from "next-auth/client";

export default function MyComponent() {
  const [session, loading] = useSession();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!session) {
    return <div>You are not signed in</div>;
  }

  return (
    <div>
      <h1>Welcome, {session.user.name}</h1>
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
}
