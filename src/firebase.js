import { addDoc, collection } from "firebase/firestore/lite";
import { firestore } from "firebaseConfig";

export const sendContactForm = async ({ email }) => {
  try {
    const ref = collection(firestore, "contact");
    await addDoc(ref, {
      email,
    });
    return 0;
  } catch (err) {
    console.log(err)
    return -1;
  }
};

export default sendContactForm;