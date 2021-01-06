import { execOnce } from "next/dist/next-server/lib/utils";
import firebase from "./firebase";

const firestore = firebase.firestore();
const app = firebase.app();

const increment = firebase.firestore.FieldValue.increment(1);
const decrement = firebase.firestore.FieldValue.increment(-1);

export function createUser(uid, data) {
  return firestore
    .collection("users")
    .doc(uid)
    .set({ uid, ...data }, { merge: true });
}

export function createPlant(data) {
  const plant = firestore.collection("plants").doc();
  plant.set(data);
  return plant;
}
