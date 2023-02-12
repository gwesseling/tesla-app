import Svg, { SvgProps, Path } from "react-native-svg";

export default function Heat(props: SvgProps) {
    return (
        <Svg viewBox="0 0 384 512" {...props}>
            <Path d="m153.6 29.9 16-21.3c4-5.4 10.4-8.6 17.1-8.6C198.4 0 208 9.6 208 21.3v22.2c0 13.1 5.4 25.7 14.9 34.7l84.7 80.8c48.8 46.6 76.4 111.2 76.4 178.7C384 434 306 512 209.7 512H192C86 512 0 426 0 320v-3.8c0-48.8 19.4-95.6 53.9-130.1l3.5-3.5c4.2-4.2 10-6.6 16-6.6 12.5 0 22.6 10.1 22.6 22.6V288c0 35.3 28.7 64 64 64s64-28.7 64-64v-3.9c0-18-7.2-35.3-19.9-48l-38.6-38.6c-24-24-37.5-56.7-37.5-90.7 0-27.7 9-54.8 25.6-76.9z" />
        </Svg>
    );
}
