import React from "react";
import { SvgXml } from "react-native-svg";

const xml= `
<svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.5">
<path d="M10.1709 14.2729H16.6473" stroke="#14142B"/>
<path d="M10.1904 5.93945H16.6669" stroke="#14142B"/>
<rect x="2.17773" y="3.06885" width="5.66667" height="5.66667" stroke="#14142A"/>
<rect x="2.17773" y="11.4514" width="5.66667" height="5.66667" stroke="#14142A"/>
</g>
</svg>
`;

export default ListView = ({width, height}) => <SvgXml xml={xml} width={width} height={height} />;