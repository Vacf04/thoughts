import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "./firebaseConfig";
import { doc, getDoc, setDoc } from "firebase/firestore";

export function logout() {
  return auth.signOut();
}

export async function signUp(
  username: string,
  email: string,
  password: string
) {
  let errorMessage = null;
  const usernames = await getDoc(doc(db, "usernames", username));
  if (!usernames.exists()) {
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredentials.user;
      await setDoc(doc(db, "users", user.uid), {
        email,
        username,
      });
      await setDoc(doc(db, "usernames", username), {
        username: true,
      });
    } catch (error: unknown) {
      if (error instanceof Error) errorMessage = error.message;
    }
  } else {
    errorMessage = "Esse usuário já está cadastrado.";
  }
  return { errorMessage };
}

export async function signIn(email: string, password: string) {
  let errorMessage = null;
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error: unknown) {
    if (error instanceof Error) errorMessage = error.message;
  }
  return { errorMessage };
}

export async function verifyUser() {
  const user = auth.currentUser;
  return user;
}
