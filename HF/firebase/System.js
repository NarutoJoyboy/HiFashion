import firestore from "@react-native-firebase/firestore";
import useStore from "../Zustand/UseStore";



const fr = firestore();




export const getProducts = async () =>{
    const response = await fr.collection('products').get();
    const productData = response.docs.map(doc =>doc.data());
    useStore.getState().setProducts(productData);
};


export const getAppData = async () => {
    try {
      const response = await fr.collection('AppData').get();
      const appData = response.docs.map(doc => ({ ...doc.data() }));
      useStore.getState().setAppData(appData);
    } catch (error) {
      console.error('Failed to fetch app data:', error);
    }
  };
