import {DefaultTheme} from '@react-navigation/native';

const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: 'white',
        btnColor: 'black',
        txtColor: 'black',
        dividerColor: 'grey',


    },
}

export default MyTheme;