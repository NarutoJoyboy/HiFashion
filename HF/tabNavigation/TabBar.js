import * as React from "react"
import { View, Text } from 'react-native'
import Tab from "./Tab";

export default function TabBar(props) {
  
    const {navigationState, navigation, position} = props;
    return(
        <View
        style={{flexDirection:'row'}}
        >
            {navigationState.routes.map((route, index)=>{

                const focusAni = position.interpolate({
                    inputRange: [index - 1, index, index + 1],
                    outputRange : [0, 1, 0],
                })
                return(
                    <Tab
                    focusAni={focusAni}
                    title = {route.routeName}
                    onPress ={()=> navigation.navigate(route.routeName)}
                    />
                )
            })}

        </View>
    )
}