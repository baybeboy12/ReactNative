import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Pressable } from 'react-native';


export default function App() {
    return ( <
        View style = { styles.container } >
        <View style={styles.viewAvatar}>
        <Image source={require("./Avatar.PNG")} style={{height:50,width:50}}></Image>
        <View style={styles.viewTextAvatar}>
        <Text style={{width:101,height:30,marginLeft:10,fontFamily:"Epilogue",fontSize:14,fontWeight:700,marginTop:20}}>Hi Twinkle</Text>
        <Text>Have agrate day a head</Text>
        </View>
        </View>
        <View style={styles.viewSearch}>
        <Image source={require("./IconSearch.PNG")} style={{width:20,height:20,marginLeft:-100}}></Image>
        <TextInput defaultValue='Search'></TextInput>
        </View>
        <View style={styles.viewJob}>
            <Image source={require("./IconCheck.PNG")} style={{width:20,height:20,marginLeft:-50}}></Image>
            <Text style={{marginLeft:20}}>To check email</Text>
            <Image source={require("./IconEdit.PNG")} style={{width:20,height:20,marginLeft:20}}></Image>
        </View>
        <Pressable style={styles.btn}>
       +
        </Pressable>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        flexDirection:"column",
    },
    btn:{
        marginTop:40,
        width:190,
        height:44,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#00BDD6",
        color:"white",
        borderRadius:"100%",
        fontSize:40,
        fontWeight:700
    },
    viewAvatar:{
        flexDirection:'row',
        alignItems:"center",
        justifyContent:"center",
        height:80,
        width:100
    },
    viewSearch:{
        flexDirection:'row',
        alignItems:"center",
        justifyContent:"center",
        width:334,
        height:44,
        marginTop:40,
        borderRadius:5,
        borderWidth:2
    },
    viewJob:{
        flexDirection:'row',
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        width:335,
        height:48,
        backgroundColor:"grey",
        borderRadius:25,
    }

});