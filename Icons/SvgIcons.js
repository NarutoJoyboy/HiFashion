import React from "react";
import Svg from "react-native-svg";
import Search from "./Search.svg";
import Chat from "./chat.svg";
import ShoopingBag from "./shoppingbag.svg";
import Menu from "./MenuIcon.svg";
import Export from "./Export.svg";
import Logo from "./Vector.svg";
import Mirs1 from "./MiroodlesSticker1.svg";
import Mirs2 from "./MiroodlesSticker2.svg";
import Mirs3 from "./MiroodlesSticker3.svg";
import Mirs4 from "./MiroodlesSticker4.svg";
import Filter from "./Filter.svg";
import Design from "./Design.svg";
import ForwardArrow from "./ForwardArrow.svg";
import ShoppingBagWhite from "./shoppingBagWhite.svg";
import Close from "./Close.svg";
import Twitter from "./Twitter.svg";
import AddMessage from "./AddMessage.svg";


const SvgIcons = ({name, width, height}) => {
    switch (name) {
        case "Search":
        return <Search width={width} height={height} />;
        case "Chat":
        return <Chat width={width} height={height} />;
        case "ShoopingBag":
        return <ShoopingBag width={width} height={height} />;
        case "Menu":
        return <Menu width={width} height={height} />;
        case "Export":
        return <Export width={width} height={height} />;
        case "Logo":
        return <Logo width={width} height={height} />;
        case "Mirs1":
        return <Mirs1 width={width} height={height} />;
        case "Mirs2":
        return <Mirs2 width={width} height={height} />;
        case "Mirs3":
        return <Mirs3 width={width} height={height} />;
        case "Mirs4":
        return <Mirs4 width={width} height={height} />;
        case "Filter":
        return <Filter width={width} height={height} />;
        case "Design":
        return <Design width={width} height={height} />;
        case "ForwardArrow":
        return <ForwardArrow width={width} height={height} />;
        case "ShoppingBagWhite":
        return <ShoppingBagWhite width={width} height={height} />;
        case "Close":
        return <Close width={width} height={height} />;
        case "Twitter":
        return <Twitter width={width} height={height} />;
        case "AddMessage":
        return <AddMessage width={width} height={height} />;
        default:
        return null;
    }
}

export default SvgIcons;
