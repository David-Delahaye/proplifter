import { db } from "./firebase-admin";

export async function getUserPlants(userId) {
  const snapshot = await db
    .collection("plants")
    .where("authorId", "==", userId)
    .get();
  let plants = [];

  await snapshot.forEach((doc) => {
    plants.push({ id: doc.id, ...doc.data() });
  });

  return { plants };
}
