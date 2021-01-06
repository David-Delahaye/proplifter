import { getUserPlants } from "@/lib/db-admin";
import { auth } from "@/lib/firebase-admin";

export default async function handler(req, res) {
  try {
    const { uid } = await auth.verifyIdToken(req.headers.token);
    const { plants } = await getUserPlants(uid);

    res.status(200).json({ plants });
  } catch (error) {
    res.status(500).json({ error });
  }
}
