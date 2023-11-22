import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "./firebaseinit";
import Toast from "react-native-toast-message";


export const registerWithEmail = async (email: string, displayName: string, password: string): Promise<void> => {
    try {
        await createUserWithEmailAndPassword(auth, email, password);

        if (auth.currentUser) {
            await updateProfile(auth.currentUser, { displayName })
        }
    } catch (err: any) {
        console.error(err);
        Toast.show({
            type: "error",
            text1: "Error",
            text2: err.message,
        });
    }
}

export const signInWithEmail = async (email: string, password: string): Promise<void> => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (err: any) {
        console.error(err);
        Toast.show({
            type: "error",
            text1: "Error",
            text2: err.message,
        });
    }
}


export const signOut = async (): Promise<void> => {
    await auth.signOut();
}