// app/index.js

import { signIn, signOut, useSession } from 'next-auth/client';

export default function Home() {
  const [session, loading] = useSession();

  return (
    <div className="container">
      {!session && (
        <>
          <h1>Welcome to Social Media Analytics Dashboard</h1>
          <button onClick={() => signIn('facebook')}>Login with Facebook</button>
          <button onClick={() => signIn('twitter')}>Login with Twitter</button>
          <button onClick={() => signIn('instagram')}>Login with Instagram</button>
        </>
      )}
      {session && (
        <>
          <h1>Welcome, {session.user.name}</h1>
          <button onClick={() => signOut()}>Logout</button>
        </>
      )}
    </div>
  );
}
