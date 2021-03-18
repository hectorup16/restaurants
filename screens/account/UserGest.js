
import React from 'react'
import { Button } from 'react-native-elements'
import { StyleSheet, Text, ScrollView,Image} from 'react-native'
import { useNavigation } from '@react-navigation/native'



export default function UserGest() {
    const navigation = useNavigation()

    return (
        <ScrollView
            centerContent
            style={styles.viewBody}
        >
            <Image
                source={require("../../assets/restaurants-logos.png")}
                resizeMode="contain"
                style={styles.image}
            />
            <Text style={styles.title}>Consulta Tu Perfil En ZaZonRD! </Text>
            <Text style={styles.description}>
            ¿Como describirías tu mejor restaurante? Busca y visualiza los mejores restaurantes de una forma sencilla, 
            vota cual te ha gustado más y comenta como ha sido tu experiencia.
            </Text>
            <Button
                buttonStyle={styles.button}
                title="Ver Tu Perfil"
                onPress={()=> navigation.navigate("Login")}
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    viewBody:{
        marginHorizontal:30
    },
    image:{
        height: 300,
        width: "100%",
        marginBottom: 10,
        
    },
    title:{
        fontWeight:"bold",
        fontSize: 19,
        marginVertical: 10,
        textAlign: "center"
    },
    description:{
        textAlign:"justify",
        marginBottom: 20,
        color: "#70579f"
    },
    button: {
        backgroundColor:"#4b4c5c"

    }
})

