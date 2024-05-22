import {DefaultTheme} from '@react-navigation/native';

const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: 'white',
        btnColor: 'black',
        txtColor: 'black',
        dividerColor: 'grey',
        priceColor: 'rgba(221,133,96, 1)',


    },
    
}

export default MyTheme;