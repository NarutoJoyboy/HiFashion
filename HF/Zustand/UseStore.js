import {create} from 'zustand';

const useStore = create(set => ({
  products: [],
  setProducts: value => set({products: value}),

  appImages:[],
  setAppImages: value => set({appImages: value}),
}));


export default useStore;
