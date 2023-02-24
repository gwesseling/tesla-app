import Svg, { SvgProps, Path } from "react-native-svg";

export default function Flash(props: SvgProps) {
    return (
        <Svg viewBox="0 0 384 512" {...props}>
            <Path d="M256 384c9.6-31.9 29.5-59.1 49.2-86.2 5.2-7.1 10.4-14.2 15.4-21.4 19.8-28.5 31.4-63 31.4-100.3C352 78.8 273.2 0 176 0S0 78.8 0 176c0 37.3 11.6 71.9 31.4 100.3 5 7.2 10.2 14.3 15.4 21.4C66.5 324.9 86.4 352.1 96 384h160zm-80 128c44.2 0 80-35.8 80-80v-16H96v16c0 44.2 35.8 80 80 80zM96 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112 8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z" />
        </Svg>
    )
}
