import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import {Category} from '../firebase/System';
import MyTheme from '../Colors/MyTheme';
import useStore from '../Zustand/UseStore';
import FontFamily from '../Colors/style';
import SvgIcons from '../../Icons/SvgIcons';

const {width, height} = Dimensions.get('screen');

export default function FilterData() {
  const category = useStore(state => state.category);
  const selectedCategory = useStore(state => state.selectedCategory);
  const setSelectedCategory = useStore(state => state.setSelectedCategory);
  const setModalVisible = useStore(state => state.setModalVisible);
  const [selecteCatValue, setSelecteCatValue] = useState(false);
  const SelectCat = index => {};

  const PriceFilter = [
    {minlimit: '0', maxlimit: '1000'},
    {minlimit: '1000', maxlimit: '2000'},
    {minlimit: '2000', maxlimit: '3000'},
    {minlimit: '3000', maxlimit: '4000'},
    {minlimit: '4000', maxlimit: '5000+'},
  ];

  const SelectPriceFilter = index => {
    return (
      <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
        {PriceFilter.map((item, index) => {
          return (
            <TouchableOpacity key={index} style={styles.catButton}>
              <Text style={styles.catText1}>
                {item.minlimit} - {item.maxlimit}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  const Footer = () => {
    return (
      <TouchableOpacity activeOpacity={0.7}>
        <View style={styles.applyButton}>
          <Text style={styles.applyTxt}>Apply Filters</Text>
        </View>
      </TouchableOpacity>
    );
  };

  

  const CategoryFilter = () => {
    return (
      <View style={styles.filterCat}>
        {[{name: 'All', index: 0}, ...category].map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => setSelectedCategory(item.index, item.name)}
              style={[
                styles.catButton,
                {
                  backgroundColor: selectedCategory[index] === index? 'black' : null,
                },
              ]}>
              <Text
                style={[
                  styles.catText1,
                  {
                    color:
                      selectedCategory === index
                        ? MyTheme.colors.txtActiveColor
                        : MyTheme.colors.txtColor,
                  },
                ]}>
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  return (
    <Modal>
      <View style={styles.container}>
        <View style={styles.title}>
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <SvgIcons name={'Close'} width={25} height={25} />
          </TouchableOpacity>
          <Text style={styles.titletxt}>Filter</Text>
        </View>
        <View>
          <Text style={styles.catText}>Category</Text>
          <CategoryFilter />
        </View>
        <View style={{marginVertical: 30}}>
          <Text style={styles.catText}>Price</Text>
          <SelectPriceFilter />
        </View>
      </View>
      <Footer />
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginVertical: 10,
    marginHorizontal: 10,
  },
  title: {
    flexDirection: 'row',
  },
  titletxt: {
    color: MyTheme.colors.txtColor,
    fontSize: 22,
    textAlign: 'center',
    fontFamily: FontFamily.txt.fontFamily,
    marginBottom: 20,
    marginLeft: width / 3.5,
  },
  catButton: {
    borderWidth: 1,
    padding: 7,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#DEDEDE',
    marginRight: 20,
    marginBottom: 10,
  },
  catText1: {
    fontSize: 17,
    fontFamily: FontFamily.txt.fontFamily,
  },
  catText: {
    color: 'black',
    fontFamily: FontFamily.txt.fontFamily,
    fontSize: 18,
    marginBottom: 20,
  },
  filterCat: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  applyButton: {
    borderWidth: 1,
    margin: 10,
    borderRadius: 30,
    backgroundColor: 'black',
    padding: 10,
  },
  applyTxt: {
    textAlign: 'center',
    fontFamily: FontFamily.txt.fontFamily,
    fontSize: 20,
    color: MyTheme.colors.txtActiveColor,
  },
});
