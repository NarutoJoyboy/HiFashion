import firestore from "@react-native-firebase/firestore";

const fr = firestore();

export const getProducts = async () => {
    const product = fr.collection('products').get();
    
}