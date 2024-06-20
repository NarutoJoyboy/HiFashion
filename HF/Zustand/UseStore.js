import {create} from 'zustand';

const useStore = create(set => ({
  products: [],
  setProducts: value => set({products: value}),

  appData: [],
  setAppData: value => set({appData: value}),

  selectColor: {},
  setSelectColor: (productId, item) =>
    set(state => ({selectColor: {...state.selectColor, [productId]: item}})),

  selectSize: {},
  setSelectSize: (productId, item) =>
    set(state => ({selectSize: {...state.selectSize, [productId]: item}})),
}));

export default useStore;
