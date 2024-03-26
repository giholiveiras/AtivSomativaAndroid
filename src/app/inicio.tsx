import { StatusBar} from 'expo-status-bar';
import { Text, View, Image} from 'react-native';
import { styles} from '../css/index.style';
import { Link } from 'expo-router';

export default function App (){
    return (
        <View style={styles.container}>
            <Text>PAGINA INICIAL </Text>
            <Image style={styles.imagens}
       source={require('../../assets/bacciodilatte.png')}
       />
            <Link style={styles.btn} href={"/"}>Contatos</Link>
            <Link style={styles.btn} href={"sobre"}>Sobre</Link>

            <StatusBar style="auto"/>
        </View>
    )
};
