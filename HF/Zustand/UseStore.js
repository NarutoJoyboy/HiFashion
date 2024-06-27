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

  // selectedCategory: ['All', false],
  // setSelectedCategory: (value, index) =>
  //   set(
  //     state => ({
  //       selectedCategory: state.selectedCategory.map((item, i) =>
  //         i === index ? value : item,
  //       ),
  //     }),
  //   ),
  selectedCategory: ["All"],
  setSelectedCategory: (value, item) => set( state =>({selectedCategory: {...state.selectedCategory , [item]: value}})),

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
