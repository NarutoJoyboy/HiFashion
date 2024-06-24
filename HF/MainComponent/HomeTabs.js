import {
  View,
  Text,
  FlatList,
  Animated,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import FontFamily from '../Colors/style';
import useStore from '../Zustand/UseStore';
import ProductCard from './ProductCard';

const {width, height} = Dimensions.get('screen');


const FilterData = [
  {name: 'All', id: 1},
  {name: 'Apparel', id: 2},
  {name: 'Dress', id: 3},
  {name: 'Tshirt', id: 4},
  {name: 'Bag', id: 5},
];

export default function HomeTabs({data}) {
  
  
  const [tabNo, setTabNo] = useState(FilterData[0].name);

  return (
   <View style={styles.container}>
    <View style={styles.titlebox}>
    {FilterData.map((item, index)=>{
      return(
        <TouchableOpacity key={index} >
          <View >
            <Text style={styles.titletxt}>{item.name}</Text>
            <View  style={{padding:10, borderColor:'orange'}}/>
          </View>
        </TouchableOpacity>
      )
    })}
    </View>
   </View>
  );

  renderItem = ({item}) => {
    return (
      <View>
        {tabNo==='All'?<ProductCard item={item} />: <ProductCard item={[ ...item.filter(items => items.categories === tabNo)]} />}
      </View>
    );
  }

}



const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white',
  },
  titlebox:{
    flexDirection:'row',
    alignSelf:'center',
  },
  titletxt:{
    fontSize:18, 
    fontFamily:FontFamily.txt.fontFamily,
    color:'black',
    marginHorizontal:10,
  }
});
