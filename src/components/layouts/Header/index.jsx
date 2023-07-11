import { Text } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { MainHeader } from "./style";

export default function PetsScreenHeader() {
    return (
        <MainHeader>
            <Text>Pets</Text>
            <Icon name="comments" size={30} color="#900" />
            <Icon name="comments" size={30} color="#900" solid />
            <Icon name="comments" size={30} color="#900" light />
        </MainHeader >
    );
}