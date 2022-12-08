import { doc, updateDoc } from "firebase/firestore";
import { db } from "../server/firebase-config";

// lägg till filtrering så man inte kan ha samma användarnamn.
export const updateUsername = async (input, id) => {
  const userColRef = doc(db, "users", id);
  await updateDoc(userColRef, {
    username: input,
  });
};

export const updateName = async (input, id) => {
  const userColRef = doc(db, "users", id);
  await updateDoc(userColRef, {
    name: input,
  });
};

export const updateCountry = async (input, id) => {
  const userColRef = doc(db, "users", id);
  await updateDoc(userColRef, {
    country: input,
  });
};

export const updateProfileImg = async () => {};

export const updateEmailAddress = async () => {};
