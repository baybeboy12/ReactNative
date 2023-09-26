import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,button } from 'react-native';

export default function App() {
    return ( 
       <View style={styles.container}>
           <View style={styles.circle}>
           </View>
           <Text style = {styles.text1}>GROW 
                YOUR BUSINESS</Text>
       </View>
    )};

const styles = StyleSheet.create({
    container :{
        flex: 1,
        backgroundColor: 'blue', 
        alignItems:'center',
        justifyContent: 'center'
    },
    circle: {
    width: '140px',
    height: '140px',
    marginTop: '-250px',
    borderWidth: '15px',
    borderRadius: '75px',
    backgroundColor: '#000000',
    },
    text1 : {
        width: '189px',
        height: '58px',
        marginTop: '25px',
        
    }
});

