import firestore from "@react-native-firebase/firestore";
import useStore from "../Zustand/UseStore";



const fr = firestore();




export const getProducts = async () =>{
  try {
    const response = await fr.collection('products').get();
    const productData = response.docs.map(doc =>doc.data());
    productData.forEach(doc => useStore.getState().setProducts(productData))
  }
  catch (error) {
    console.error('Failed to fetch products:', error);
  }

};



export const getAppData = async () => {
  try {
    const response = await fr.collection('AppData').get();
    // const appData = response.docs.map(doc => ({
    //   id: doc.id,
    //   ...doc.data()
    // }));
  const appData = response.docs.map(doc => doc.data());
    useStore.getState().setAppData(appData);
  } catch (error) {
    console.error('Failed to fetch app data:', error);
  }
};
