import { useAuth } from "@/lib/auth";
import fetcher from "@/utils/fetcher";
import useSWR from "swr";

export default function Account() {
  const { user } = useAuth();
  if (user) {
    return (
      <>
        <img src={user.photoUrl} style={{ borderRadius: "50%" }} />
        <h1>{user.name}</h1>
        <p>{user.email}</p>
        <p>{user.provider}</p>
      </>
    );
  }
  return <h1>Loading State</h1>;
}
