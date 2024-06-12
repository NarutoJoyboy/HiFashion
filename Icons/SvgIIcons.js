import React from "react";
import { SvgXml } from "react-native-svg";

import Chat from "./chat.svg"
import Miroodles from "./Miroodles Sticker.svg"

const icons = {
    Chat,
    Miroodles

}

const SvgIIcons = ({ name, width, height }) => {
    const Icon = icons[name];
    return <SvgXml xml={Icon} width={width} height={height} />
}

export default SvgIIcons;