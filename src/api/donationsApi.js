import { doc, deleteDoc, getFirestore } from "firebase/firestore";

const db = getFirestore();

export const remove = async (id) => {
    const docRef = doc(db, 'donations', id)
    try {
        await deleteDoc(docRef);
    } catch (err) {
        throw err;
    }
};
