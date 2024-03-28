import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions, ScrollView } from 'react-native'
import React from 'react'
import Collectiontabs from './collectiontabs';
import Image9 from "../Icons/image 9.svg"

export default function Home() {

  const Width= Dimensions.get('window').width;
  const Height= Dimensions.get('window').height;

  const Brnds = [
    {name:'PRADA', id:1},
    {name:'BURBERRY', id:2},
    {name:'BOSS', id:3},
    {name:'Cartier', id:4},
    {name:'GUCCI', id:5},
    {name:'TIFFANT & CO.', id:6},
  ]

  const Divider = ()=>{
    return(
<View style={styles.divider}>
          <View style={styles.dividerline}/>
          <View style={styles.dividerbox}/>
          <View style={styles.dividerline}/>

        </View>
    )
  }

  return (
      <ScrollView style={{flex:1, backgroundColor:'white'}} showsVerticalScrollIndicator={false}>
    <View >
      <View>
        <Image source={require('../Icons/image10.png')} style={{width:Width}}/>
        <View style={{position:'absolute', top:Height/2.5, alignItems:'center', justifyContent:'center',alignSelf:'center' }}>
        <Text style={styles.txt1}>LUXURY</Text>
        <Text style={styles.txt1}>FASHION</Text>
        <Text style={styles.txt1}>ACCESSORIES</Text>

        </View>
        <View style={{position:'absolute', top:Height/1.6, alignSelf:'center'}}>
        <TouchableOpacity style={styles.explorebut}>
          <Text style={styles.explorebutstyle}>EXPLORE COLLECTION</Text>
        </TouchableOpacity>

        </View>
      </View>

      <View style={{alignSelf:'center', alignItems:'center', marginVertical:15}}>
        <Text style={styles.txt2}>NEW ARRIVAL</Text>
        <Divider/>
      </View>
      <View style={{flex:1, height:Height}}>
        <Collectiontabs/>
      </View>
      <View style={{alignSelf:'center'}}>
        <TouchableOpacity style={{alignSelf:'center', marginBottom:20 }}>
          <Text style={styles.txt3}>EXPLORE MORE</Text>
        </TouchableOpacity>
          <Divider/>
      </View>

      <View style={{flexWrap:'wrap', flexDirection:'row', justifyContent:'center'}}>
        {
          Brnds.map((item)=>{
            return(
              <Text key={item.id} style={{fontSize:20, padding:20,}}>{item.name}</Text>
            )
          })
        }
        <Divider/>
      </View>
      <View style={{alignItems:'center'}}>
      <Text style={{fontSize:24, fontFamily:'TenorSans-Regular', marginVertical:20, }}>COLLECTIONS</Text>
      <Image source={require('../Icons/Frame2.png')} style={{width:Width}}/>
      
      </View>
      <Image9/>
    </View>
      </ScrollView>
  )
}

const styles = StyleSheet.create({
  divider:{
    flexDirection:'row',
    alignItems:'center',
  },
  dividerline:{
    borderBottomWidth:0.2,
    width:60,
    borderColor:'grey',
  },
  dividerbox:{
    borderWidth:0.5,
    width:7,
    height:7,
    transform:[{rotate:'45deg'}],
    margin:1,
    borderColor:'grey',
  },
  explorebut:{
    backgroundColor:'black',
    borderRadius:30,
    width:270,
    padding:10,
    opacity:0.6,
    
    
  },
  explorebutstyle:{
    color:'white',
    fontSize:18,
    fontFamily:'TenorSans-Regular',
    textAlign:'center',
    
  },
  txt1:{
    fontSize:45,
    color:'white',
    fontFamily:'TenorSans-Regular'
  },
  txt2:{
    fontSize:20,
    alignItems:'center',
    fontFamily:'TenorSans-Regular',
    color:'black'


  },
  txt3:{
    fontSize:17,
    alignItems:'center',
    fontFamily:'TenorSans-Regular',
    color:'black'
  }
  

})