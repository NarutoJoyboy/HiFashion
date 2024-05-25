import {create} from 'zustand';


export const useStore = create((set) => ({

    products : [],
    setproducts :(products) =>set({products}),

    

}));