import { SvgXml } from "react-native-svg";

const xml = `
<svg width="47" height="44" viewBox="0 0 47 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.5 0.0703125C10.9152 0.0703125 0.570312 8.92537 0.570312 20C0.570312 26.4273 4.12196 32.0866 9.5 35.7129C9.4916 35.9285 9.5081 36.2807 9.22656 37.3242C8.87782 38.617 8.17319 40.4317 6.74023 42.4648C6.64239 42.6038 6.5845 42.7669 6.57285 42.9364C6.5612 43.1059 6.59624 43.2754 6.67416 43.4264C6.75208 43.5774 6.86989 43.7041 7.0148 43.7929C7.15971 43.8816 7.32617 43.9289 7.49609 43.9297C13.6734 43.9566 17.2488 39.9048 17.8047 39.252C19.6335 39.6591 21.5284 39.9297 23.5 39.9297C36.0839 39.9297 46.4297 31.0747 46.4297 20C46.4297 8.92531 36.0839 0.0703125 23.5 0.0703125ZM23.5 1.92969C35.2161 1.92969 44.5703 10.0887 44.5703 20C44.5703 29.9113 35.2161 38.0703 23.5 38.0703C21.498 38.0703 19.5635 37.8312 17.7305 37.3848C17.5588 37.3427 17.3786 37.3506 17.2112 37.4073C17.0437 37.464 16.896 37.5673 16.7852 37.7051C16.7852 37.7051 13.8949 40.9848 9.28711 41.7598C10.1201 40.2649 10.7352 38.8699 11.0215 37.8086C11.4205 36.3294 11.4258 35.3262 11.4258 35.3262C11.4258 35.1695 11.3863 35.0154 11.3108 34.8782C11.2353 34.7409 11.1264 34.6249 10.9941 34.541C5.7672 31.2276 2.42969 25.9433 2.42969 20C2.42969 10.0886 11.7828 1.92969 23.5 1.92969ZM12.5 13C12.3675 12.9981 12.2359 13.0226 12.113 13.072C11.99 13.1214 11.8781 13.1948 11.7837 13.2878C11.6893 13.3809 11.6144 13.4918 11.5632 13.614C11.5121 13.7363 11.4858 13.8675 11.4858 14C11.4858 14.1325 11.5121 14.2637 11.5632 14.386C11.6144 14.5082 11.6893 14.6191 11.7837 14.7122C11.8781 14.8052 11.99 14.8786 12.113 14.928C12.2359 14.9774 12.3675 15.0019 12.5 15H34.5C34.6325 15.0019 34.7641 14.9774 34.887 14.928C35.01 14.8786 35.1219 14.8052 35.2163 14.7122C35.3107 14.6191 35.3856 14.5082 35.4368 14.386C35.4879 14.2637 35.5142 14.1325 35.5142 14C35.5142 13.8675 35.4879 13.7363 35.4368 13.614C35.3856 13.4918 35.3107 13.3809 35.2163 13.2878C35.1219 13.1948 35.01 13.1214 34.887 13.072C34.7641 13.0226 34.6325 12.9981 34.5 13H12.5ZM8.5 19C8.36749 18.9981 8.23593 19.0226 8.11296 19.072C7.98999 19.1214 7.87807 19.1948 7.7837 19.2878C7.68933 19.3809 7.61439 19.4918 7.56324 19.614C7.5121 19.7363 7.48576 19.8675 7.48576 20C7.48576 20.1325 7.5121 20.2637 7.56324 20.386C7.61439 20.5082 7.68933 20.6191 7.7837 20.7122C7.87807 20.8052 7.98999 20.8786 8.11296 20.928C8.23593 20.9774 8.36749 21.0019 8.5 21H25.5C25.6325 21.0019 25.7641 20.9774 25.887 20.928C26.01 20.8786 26.1219 20.8052 26.2163 20.7122C26.3107 20.6191 26.3856 20.5082 26.4368 20.386C26.4879 20.2637 26.5142 20.1325 26.5142 20C26.5142 19.8675 26.4879 19.7363 26.4368 19.614C26.3856 19.4918 26.3107 19.3809 26.2163 19.2878C26.1219 19.1948 26.01 19.1214 25.887 19.072C25.7641 19.0226 25.6325 18.9981 25.5 19H8.5ZM31.5 19C31.3675 18.9981 31.2359 19.0226 31.113 19.072C30.99 19.1214 30.8781 19.1948 30.7837 19.2878C30.6893 19.3809 30.6144 19.4918 30.5632 19.614C30.5121 19.7363 30.4858 19.8675 30.4858 20C30.4858 20.1325 30.5121 20.2637 30.5632 20.386C30.6144 20.5082 30.6893 20.6191 30.7837 20.7122C30.8781 20.8052 30.99 20.8786 31.113 20.928C31.2359 20.9774 31.3675 21.0019 31.5 21H38.5C38.6325 21.0019 38.7641 20.9774 38.887 20.928C39.01 20.8786 39.1219 20.8052 39.2163 20.7122C39.3107 20.6191 39.3856 20.5082 39.4368 20.386C39.4879 20.2637 39.5142 20.1325 39.5142 20C39.5142 19.8675 39.4879 19.7363 39.4368 19.614C39.3856 19.4918 39.3107 19.3809 39.2163 19.2878C39.1219 19.1948 39.01 19.1214 38.887 19.072C38.7641 19.0226 38.6325 18.9981 38.5 19H31.5ZM12.5 25C12.3675 24.9981 12.2359 25.0226 12.113 25.072C11.99 25.1214 11.8781 25.1948 11.7837 25.2878C11.6893 25.3809 11.6144 25.4918 11.5632 25.614C11.5121 25.7363 11.4858 25.8675 11.4858 26C11.4858 26.1325 11.5121 26.2637 11.5632 26.386C11.6144 26.5082 11.6893 26.6191 11.7837 26.7122C11.8781 26.8052 11.99 26.8786 12.113 26.928C12.2359 26.9774 12.3675 27.0019 12.5 27H34.5C34.6325 27.0019 34.7641 26.9774 34.887 26.928C35.01 26.8786 35.1219 26.8052 35.2163 26.7122C35.3107 26.6191 35.3856 26.5082 35.4368 26.386C35.4879 26.2637 35.5142 26.1325 35.5142 26C35.5142 25.8675 35.4879 25.7363 35.4368 25.614C35.3856 25.4918 35.3107 25.3809 35.2163 25.2878C35.1219 25.1948 35.01 25.1214 34.887 25.072C34.7641 25.0226 34.6325 24.9981 34.5 25H12.5Z" fill="#DD8560"/>
</svg>
`


export default Chat = (width, height) => <SvgXml xml={xml} width={width} height={height} />;