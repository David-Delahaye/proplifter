import { useAuth } from "@/lib/auth";
import { createPlant } from "@/lib/db";

export default function Home() {
  const auth = useAuth();

  return (
    <>
      <h1>Welcome to proplifter</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createPlant({
            name: e.target.name.value,
            height: e.target.height.value,
            authorId: auth?.user?.uid,
          });
        }}
      >
        <input name="name" placeholder="name" />
        <input name="height" placeholder="12cm" />
        <button>Add a plant</button>
      </form>
    </>
  );
}
