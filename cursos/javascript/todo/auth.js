import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";

const auth = getAuth();
const provider = new GoogleAuthProvider();

auth.languageCode = 'es';

export async function login(){
    try{

        const response = await auth.signInWithPopup(provider);
        console.log(response);
        return response.user;

    }catch(error){
        console.log(error);
    }
}

export function logout(){
    auth.signOut();
}