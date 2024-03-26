import { StatusBar} from 'expo-status-bar';
import { Text, View, Image} from 'react-native';
import { styles} from '../css/index.style';
import { Link } from 'expo-router';

export default function App (){
    return (
        <View style={styles.container}>
             <Image style={styles.imagens}
       source={require('../../assets/bacciodilatte.png')}
       />
            <Text>Pagina sobre dos meus alunos queridos</Text>

            <Link style={styles.btn} href={"/"}>Contatos</Link>
            <Link style={styles.btn} href={"/inicio"}>Inicio</Link>  
            <StatusBar style="auto"/>
        </View>
    )
};
