import {PetItemContainer, PetItemCol1, PetItemCol2} from './style'
import {Text} from 'react-native'

export default function PetsItem({title}){
	return (
		<PetItemContainer>
			<PetItemCol1/>
			<PetItemCol2> 
				<Text>{title}</Text>
			</PetItemCol2>
		</PetItemContainer>
	)	
}