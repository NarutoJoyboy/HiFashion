import {create} from 'zustand';

const useStore = create(set => ({
  products: [],
  setProducts: value => set({products: value}),

  appData: [],
  setAppData: value => set({appData: value}),

  category: [],
  setCategory: value => set({category: value}),

  modalVisible: false,
  setModalVisible: value => set({modalVisible: value}),

  selectedCategory: ['All'],
  setSelectedCategory: (value, index) =>
    set(state => {
      const selectedCategory = state.selectedCategory;
      selectedCategory[index] = value;
      return {selectedCategory};
    }),

  selectPrice: {},
  setSelectPrice: (productId, item) =>
    set(state => ([selectPrice= {...state.selectPrice, [productId]: item}])),

  selectColor: {},
  setSelectColor: (productId, item) =>
    set(state => ({selectColor: {...state.selectColor, [productId]: item}})),

  selectSize: {},
  setSelectSize: (productId, item) =>
    set(state => ({selectSize: {...state.selectSize, [productId]: item}})),
}));

export default useStore;
