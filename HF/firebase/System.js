import firestore from "@react-native-firebase/firestore";

const fr = firestore();

export const getProducts = async () => {
    const product = await fr.collection('products').get();
    return product;
}