import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import Header from './header';
import Divider from './divider';
import MyTheme from '../Colors/MyTheme';
import FontFamily from '../Colors/style';
import {Title} from '../ImpComponent/Title';
import SvgIcons from '../../Icons/SvgIcons';
import {Svg} from 'react-native-svg';
import { FooterComponent1 } from './footerComponent1';

export default function Contact() {
  return (
    <View style={styles.container}>
      <ScrollView>
      <Header Styles={'white'} />
      <View >
        <Title label={'CONTACT US'} />
      </View>
      <View style={styles.box}>
        <SvgIcons name={'Chat'} width={50} height={50} />
        <Text style={styles.txt}>
          Need an ASAP answer? Contact us via chat, 24/7! For existing furniture
          orders, please call us.
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonTxt}>CHAT WITH US</Text>
        </TouchableOpacity>
        <SvgIcons name={'AddMessage'} width={50} height={50} />
        <Text style={styles.txt}>
          You can text us at 800-309-2622 – or click on the “text us” link below
          on your mobile device. Please allow the system to acknowledge a simple
          greeting (even “Hi” will do!) before providing your question/order
          details. Consent is not required for any purchase. Message and data
          rates may apply. Text messaging may not be available via all carriers.
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonTxt}>TEXT US</Text>
        </TouchableOpacity>
        <SvgIcons name={'Twitter'} width={50} height={50} />
        <Text style={styles.txt}>
          To send us a private or direct message, like @Open Fashion on Facebook
          or follow us on Twitter. We’ll get back to you ASAP. Please include
          your name, order number, and email address for a faster response!
        </Text>
      </View>
      <FooterComponent1/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    alignItems: 'center',
    marginTop: 30,
  },
  box: {
    alignItems: 'center',
    marginHorizontal: 10,
    marginTop:40,
  },
  txt: {
    fontSize: 17,
    fontFamily: FontFamily.txt.fontFamily,
    color: MyTheme.colors.txtColor,
    marginVertical:20,
    textAlign:'center'

  },
  button:{
    backgroundColor:MyTheme.colors.btnColor,
    padding:10,
    marginVertical:10,
    paddingHorizontal:30,
    marginBottom:40
  },
  buttonTxt:{
    color:MyTheme.colors.txtActiveColor,
    fontSize:17,
    textAlign:'center'
  }
});
