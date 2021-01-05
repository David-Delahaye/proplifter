import { useAuth } from "@/lib/auth";

export default function Home() {
  const auth = useAuth();

  return (
    <>
      <h1>Welcome to proplifter</h1>
      {auth.user ? (
        <>
          <h2>{auth?.user?.name}</h2>
          <button
            onClick={(e) => {
              auth.signout();
            }}
          >
            Logout
          </button>
        </>
      ) : (
        <button
          onClick={(e) => {
            auth.signinWithGoogle();
          }}
        >
          Sign in
        </button>
      )}
    </>
  );
}
