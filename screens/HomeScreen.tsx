
import { Text, View, Button } from '../components/Themed';

export default function HomeScreen(props) {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}></View>
            <View style={{flex: 4, alignItems: 'center', justifyContent: 'center'}}>            
                <Text style={{fontSize: 30}}>AyudApp EC</Text>
                    
            </View>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>

            <Button title='Continuar' onPress={() => {   
                props.navigation.navigate('Catalog', {});
            }}></Button>
            </View>
        </View>
    )
}