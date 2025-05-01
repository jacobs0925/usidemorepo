import {  initializeApp} from "firebase/app";
import { signInWithEmailAndPassword, onAuthStateChanged, getAuth } from "firebase/auth";
import { getNode } from "./DBManager";

const firebaseConfig = {
    apiKey: "AIzaSyCjYKowqTCR4V2fsxG05NcQQ1NDAX34x2M",
    authDomain: "usireservationsite.firebaseapp.com",
    databaseURL: "https://usireservationsite-default-rtdb.firebaseio.com",
    projectId: "usireservationsite",
    storageBucket: "usireservationsite.firebasestorage.app",
    messagingSenderId: "1089007972864",
    appId: "1:1089007972864:web:13af98128d08bb0134dee5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export function initAuth(adminCallback, loginRedirect)
{
    onAuthStateChanged(auth, async (user) =>
    {
        if (user)
        {
            const idTokenResult = await user.getIdTokenResult();
            if (idTokenResult.claims.usiinstructoradmin)
            {
                adminCallback();
            }
        } else
        {
            loginRedirect();
        }
    });
}

export async function loginUser(email, password)
{
    try
    {
        const userCredential = await signInWithEmailAndPassword(auth, email+'@gmail.com', password);
        return userCredential.user;
    } catch (error)
    {
        throw error;
    }
}