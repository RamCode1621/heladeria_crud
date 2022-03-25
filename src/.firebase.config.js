import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBsS0PCExzXr1yWuyQM2ejGW-G1ZpjQyo0",
  authDomain: "heladerialosincas.firebaseapp.com",
  projectId: "heladerialosincas",
  storageBucket: "heladerialosincas.appspot.com",
  messagingSenderId: "438958801191",
  appId: "1:438958801191:web:e9b2be5d12b0199db52902"
};


const app = initializeApp(firebaseConfig);
const db=getFirestore(app)

export default db