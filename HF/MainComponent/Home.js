import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ScrollView,
  FlatList,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Divider from '../Head & Foot/divider';
import Header from '../Head & Foot/header';
import {
  FooterComponent1,
  FooterComponent2,
} from '../Head & Foot/footerComponent1';
import MyTheme from '../Colors/MyTheme';
import FontFamily from '../Colors/style';
import HomeImg2 from '../../Icons/HomeImg2';
import HomeImg3 from '../../Icons/HomeImg3';
import SvgIcons from '../../Icons/SvgIcons';
import HomeTabs from './HomeTabs';
import {useNavigation} from '@react-navigation/native';
import {Title} from '../ImpComponent/Title';
import {getProducts, getAppData, getCategory} from '../firebase/System';
import useStore from '../Zustand/UseStore';
import BannerSlider from '../ImpComponent/BannerSlider';
import Menu from './Menu';

const {width, height} = Dimensions.get('screen');

export default function Home() {
  useEffect(() => {
    getProducts();
    getAppData();
    getCategory();
  }, []);
  const appData = useStore(state => state.appData);
  const products = useStore(state => state.products);

  console.log('......................');

  const navigation = useNavigation();
  const Brnds = [
    {name: 'PRADA', id: 1},
    {name: 'BURBERRY', id: 2},
    {name: 'BOSS', id: 3},
    {name: 'Cartier', id: 4},
    {name: 'GUCCI', id: 5},
    {name: 'TIFFANT & CO.', id: 6},
  ];

  const ShippingDetails = [
    {
      img: <SvgIcons name="Mirs1" width={width / 7} height={height / 15} />,
      name: 'Fast shipping Free on order above $25.',
      id: 1,
    },
    {
      img: <SvgIcons name="Mirs2" width={width / 7} height={height / 15} />,
      name: 'Sustainable process from start to finish.',
      id: 2,
    },
    {
      img: <SvgIcons name="Mirs3" width={width / 7} height={height / 15} />,
      name: 'Unique designs and high quality materials.',
      id: 3,
    },
    {
      img: <SvgIcons name="Mirs4" width={width / 7} height={height / 15} />,
      name: 'Giving priority to customers satisfaction.',
      id: 4,
    },
  ];
  const [modalVisible, setModalVisible] = useState(false);

  const visibility = modalVisible;

  const CollectionImages = image => {};

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View>
        <Header Styles={'#E7EAEF'} />
        <View
          style={{
            backgroundColor: '#E7EAEF',
            height: height / 1.39,
            width: width,
          }}>
          <BannerSlider images={appData} />
          <TouchableOpacity style={styles.explorebut}>
            <Text style={styles.explorebutstyle}>EXPLORE COLLECTION</Text>
          </TouchableOpacity>
        </View>
        <Title label={'NEW ARRIVAL'} />
        <View style={{flex: 1}}>
          <HomeTabs data={products} />
        </View>
        <View
          style={{
            alignSelf: 'center',
            justifyContent: 'center',
            alignContent: 'center',
          }}>
          <Divider />
        </View>

        <View
          style={{
            flexWrap: 'wrap',
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 60,
          }}>
          {Brnds.map(item => {
            return (
              <Text
                key={item.id}
                style={{fontSize: 20, padding: 20, color: 'black'}}>
                {item.name}
              </Text>
            );
          })}
          <Divider />
        </View>
        <View style={{alignItems: 'center'}}>
          <Title label={'COLLECTIONS'} />
          <TouchableOpacity>
            {appData.map((element, elementIndex) =>
              element.collection_images1.map((item, index) => (
                <Image
                  key={`${elementIndex}-${index}`}
                  source={{uri: item}}
                  style={styles.collectionImage1}
                  onError={e =>
                    console.log('Image load error:', e.nativeEvent.error)
                  }
                />
              )),
            )}
          </TouchableOpacity>
          <TouchableOpacity>
            {appData.map((element, elementIndex) =>
              element.collection_images2.map((item, index) => (
                <Image
                  key={`${elementIndex}-${index}`}
                  source={{uri: item}}
                  style={styles.collectionImage2}
                  onError={e =>
                    console.log('Image load error:', e.nativeEvent.error)
                  }
                />
              )),
            )}
          </TouchableOpacity>
          <TouchableOpacity>
            {appData.map((element, elementIndex) =>
              element.collection_images3.map((item, index) => (
                <Image
                  key={`${elementIndex}-${index}`}
                  source={{uri: item}}
                  style={styles.collectionImage1}
                  onError={e =>
                    console.log('Image load error:', e.nativeEvent.error)
                  }
                />
              )),
            )}
          </TouchableOpacity>
        </View>
        <View>
          <Title label={'Just For You'} />
          <View style={{marginTop: 20}}>
            <FlatList
              data={[1, 2, 3]}
              keyExtractor={item => item.toString()}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity activeOpacity={0.5}>
                    <View></View>
                    <Text style={styles.txt5}>
                      Harris Tweed Three Button Jacket
                    </Text>
                    <Text style={styles.txt6}>$120</Text>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </View>

        <View style={styles.classyStoreContainer}>
          <View style={{marginVertical: 15}}>
            <SvgIcons name="Logo" width={width / 5} height={height / 20} />
          </View>
          <Text style={styles.classyStoreText}>
            Making a luxurious lifestyle accessible for a generous group of
            women is our daily drive
          </Text>
          <Divider />
          <View style={styles.shippingDetailsContainer}>
            {ShippingDetails.map(item => {
              return (
                <View
                  key={item.id}
                  style={{
                    margin: 10,
                    width: width / 2.4,
                    alignSelf: 'center',
                    alignItems: 'center',
                  }}>
                  {item.img}
                  <Text
                    style={{
                      textAlign: 'center',
                      fontFamily: FontFamily.txt.fontFamily,
                      color: MyTheme.colors.txtColor,
                    }}>
                    {item.name}
                  </Text>
                </View>
              );
            })}
          </View>
          <SvgIcons name="Design" width={width / 3.9} height={height / 8} />
        </View>

        <FooterComponent1 />
        <Divider />
        <FooterComponent2 />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  txt2: {
    fontSize: 20,
    alignItems: 'center',
    fontFamily: FontFamily.txt.fontFamily,
    color: MyTheme.colors.txtColor,
  },
  txt3: {
    fontSize: 17,
    alignItems: 'center',
    fontFamily: FontFamily.txt.fontFamily,
    color: 'black',
    paddingRight: 10,
  },
  txt4: {
    fontSize: 24,
    fontFamily: FontFamily.txt.fontFamily,
    marginVertical: 20,
  },
  classyStoreText: {
    fontSize: 16,
    fontFamily: FontFamily.txt.fontFamily,
    textAlign: 'center',
    width: width / 1.3,
    marginBottom: 10,
    color: MyTheme.colors.txtColor,
  },

  // Image Styles
  collectionImage1: {
    width: width,
    height: height / 2.9,
    marginTop: 30,
    marginBottom: 10,
  },
  collectionImage2: {
    width: width / 1.4,
    height: height / 2.9,
    marginTop: 30,
    marginBottom: 10,
  },
  videoImage: {
    width: width,
    height: height / 3,
  },

  // Container Styles
  classyStoreContainer: {
    backgroundColor: 'rgba(221,133,96, 0.5)',
    alignItems: 'center',
    padding: 10,
  },
  shippingDetailsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },

  explorebut: {
    backgroundColor: 'black',
    borderRadius: 30,
    width: 270,
    padding: 10,
    opacity: 0.6,
    position: 'absolute',
    top: height / 1.8,
    alignSelf: 'center',
  },
  explorebutstyle: {
    color: 'white',
    fontSize: 18,
    fontFamily: FontFamily.txt.fontFamily,
    textAlign: 'center',
  },
  txt5: {
    fontSize: 15,
    fontFamily: FontFamily.txt.fontFamily,
    color: MyTheme.colors.txtColor,
    margin: 10,
    textAlign: 'center',
    width: width / 1.6,
  },
  txt6: {
    fontSize: 15,
    fontFamily: FontFamily.txt.fontFamily,
    color: MyTheme.colors.priceColor,
    textAlign: 'center',
    width: width / 1.5,
    marginBottom: 20,
  },
});
