import { GoogleAuthProvider, User, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signInWithRedirect, updateProfile } from "firebase/auth";
import { auth } from "./firebaseinit";


export const registerWithEmail = async (email: string, displayName: string, password: string): Promise<void> => {
    let user = null;
    try {
        const response = await createUserWithEmailAndPassword(auth, email, password);

        if (auth.currentUser) {
            await updateProfile(auth.currentUser, { displayName })
        }
    } catch (err) {
        console.error(err);
    }
}

export const signInWithEmail = async (email: string, password: string): Promise<void> => {
    try {
        const response = await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
        console.error(err);
    }
}


export const signOut = async (): Promise<void> => {
    await auth.signOut();
}