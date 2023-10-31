import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";

export async function addTransaction(form){
    await addDoc(collection(db, "transactions"), {
        ...form
    });

}