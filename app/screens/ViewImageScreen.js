import React from 'react'
import { View, Text,StyleSheet,Image } from 'react-native'

import colors from '../config/colors'

const ViewImageScreen = () => {
    return (
        <View style={styles.container}>
                <View style={styles.closeIcon}/>
                <View style={styles.deleteIcon}/>
            <Image resizeMode="contain" style={styles.image} source={require("../assets/chair.jpg")} />
            {/* <Text style={{color:'black'}}>This is text</Text> */}
        </View>
    )
}

const styles = StyleSheet.create({
    closeIcon:{
        backgroundColor:colors.primary,
        height:40,
        width:40,    
        top:50,
        left:30,
        position:'absolute',
    },
    container:{
        flex:1,
        backgroundColor:'black',
        flexDirection:'column',
        alignContent:'flex-start'
        // alignContent:'center',
    },      
    deleteIcon:{
        backgroundColor:colors.secondary,
        height:40,
        width:40,    
        top:50,
        right:40,
        position:'absolute',
    },
    iconContainer:{
        position:'absolute',
        // top:20,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'flex-start',
        // alignItems:'center',
    },  
    image:{
        width:'100%',
        height:'100%',
        marginTop:26,
    },
})

export default ViewImageScreen
