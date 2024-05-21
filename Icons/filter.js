import { SvgXml } from "react-native-svg";


const xml = `
<svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 6.3562V7.18953H17.5V6.3562H2.5ZM8.33333 13.8562H11.6667V13.0229H8.33333V13.8562ZM15 10.5229H5V9.68953H15V10.5229Z" fill="#DD8560"/>
</svg>
`

export default Filter = ({width, height}) => <SvgXml xml={xml} width={width} height={height}/>