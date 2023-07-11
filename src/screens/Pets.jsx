import { StatusBar } from 'expo-status-bar'
import { View } from 'react-native'
import PressableButton from '../components/StyledButton'

const PetsScreen = () => (
    <>
        <StatusBar style="auto" />
        <View>
            <PressableButton onPress={() => alert(1)} bgColor="#a1a1a1" title="Go click me" />
        </View>
    </>
)

export default PetsScreen