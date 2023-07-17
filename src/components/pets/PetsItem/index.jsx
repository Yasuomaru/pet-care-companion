import { TouchableOpacity } from 'react-native'
import { PetItemAvatarColumn, PetItemContainer, PetItemContentColumn, PetItemTitle } from './style'

export default function PetsItem({title}){
	function handlePress(){
		alert(`Pressed on ${title}!`)
	}

	return (
		<TouchableOpacity onPress={handlePress}>
			<PetItemContainer>
				<PetItemAvatarColumn/>
				<PetItemContentColumn> 
						<PetItemTitle>{title}</PetItemTitle>
				</PetItemContentColumn>
			</PetItemContainer>
		</TouchableOpacity>
	)
}