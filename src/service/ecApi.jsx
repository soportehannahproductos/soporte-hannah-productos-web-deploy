import { db } from '../config/Firebase'
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore'

// Obtener todos los productos
export const fetchProducts = async () => {
  const querySnapshot = await getDocs(collection(db, 'productos'))
  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  }))
}

