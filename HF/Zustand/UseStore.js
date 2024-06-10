import {create} from 'zustand';

const useStore = create(set => ({
  products: [],
  setProducts: value => set({products: value}),

  appImages: [],
  setAppImages: value => set({appImages: value}),

  selectColor: {},
  setSelectColor: (productId, item) =>
    set(state => ({selectColor: {...state.selectColor, [productId]: item}})),

  selectSize: {},
  setSelectSize: (productId, item) =>
    set(state => ({selectSize: {...state.selectSize, [productId]: item}})),
}));

export default useStore;
