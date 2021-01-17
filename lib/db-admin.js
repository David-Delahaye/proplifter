import { db } from "./firebase-admin";

export async function getPlant(id) {
  try {
    const doc = await db.collection("plants").doc(id).get();
    let plant = { id: doc.id, ...doc.data() };

    return { plant };
  } catch (error) {
    return { error };
  }
}

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

export async function getAllPlants() {
  const snapshot = await db.collection("plants").get();
  let plants = [];

  await snapshot.forEach((doc) => {
    plants.push({ id: doc.id, ...doc.data() });
  });

  return { plants };
}

export async function getPlantLogs(plantId) {
  const snapshot = await db
    .collection("logs")
    .where("plantId", "==", plantId)
    .get();

  let logs = [];
  await snapshot.forEach((doc) => {
    logs.push({ id: doc.id, ...doc.data() });
  });

  return { logs };
}
