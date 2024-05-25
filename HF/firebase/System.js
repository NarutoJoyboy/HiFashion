import firestore from "@react-native-firebase/firestore";
import { useStore } from "../Zustand/UseStore";

const fr = firestore();

const setProducts = useStore(state => state.setProducts);

export const getProducts = async () => {
    const response = await fr.collection('products').get();
    setProducts(response.docs);
}


export const getBrands = ()=>{
    console.log('getBrands..................................')
}