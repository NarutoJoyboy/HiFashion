import {create} from 'zustand';

const useStore = create(set => ({
  products: [],
  setProducts: value => set({products: value}),

  appData: [],
  setAppData: value => set({appData: value}),

  category:[],
  setCategory: value => set({category: value}),

  modalVisible: false,
  setModalVisible: value => set({modalVisible: value}),

  selectedCategory :[0],
  setSelectedCategory: value => set({selectedCategory: value}),

  selectColor: {},
  setSelectColor: (productId, item) =>
    set(state => ({selectColor: {...state.selectColor, [productId]: item}})),

  selectSize: {},
  setSelectSize: (productId, item) =>
    set(state => ({selectSize: {...state.selectSize, [productId]: item}})),
}));

export default useStore;
