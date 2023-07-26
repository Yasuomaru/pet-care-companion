import { StatusBar } from 'expo-status-bar';
import { FlatList } from 'react-native';
import PetsItem from '../components/pets/PetsItem';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d73',
    title: 'Fourth Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d74',
    title: 'Fifth Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d75',
    title: 'Sixth Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d76',
    title: 'Seventh Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d77',
    title: 'Eighth Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d78',
    title: 'Ninth Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d79',
    title: 'Tenth Item',
  }
];


export default function PetsScreen(){
    return (
    <>
        <StatusBar style="auto" />
        <FlatList
          data={DATA}
          renderItem={({item}) => <PetsItem title={item.title} />}
          keyExtractor={item => item.id}
        />
    </>
)}

