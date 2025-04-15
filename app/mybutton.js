import { TouchableOpacity, Text } from "react-native";

const MyButton = ({ title, onPress, style }) => (
    <TouchableOpacity onPress={onPress} style={style}>
        <Text>{title}</Text>
    </TouchableOpacity>
);  

export default MyButton;