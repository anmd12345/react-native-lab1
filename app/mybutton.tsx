import { TouchableOpacity, Text } from "react-native";

interface MyButtonProps {
    title: string;
    onPress: () => void;
    style?: object;
}

const MyButton = ({ title, onPress, style }: MyButtonProps) => (
    <TouchableOpacity onPress={onPress} style={style}>
        <Text>{title}</Text>
    </TouchableOpacity>
);  

export default MyButton;