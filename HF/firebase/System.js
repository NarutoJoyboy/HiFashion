import firestore from "@react-native-firebase/firestore";
import useStore from "../Zustand/UseStore";



const fr = firestore();




export const getProducts = async () =>{
    const response = await fr.collection('products').get();
    useStore.getState().setProducts(response.docs)
};


export const getAppImages = async () =>{
    const response = await fr.collection('Images').get();

}
