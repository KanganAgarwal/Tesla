import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.container}>
     <Image style={styles.logo} source={require("../asset/images/logo.png")}/>
     <Image style={styles.menu} source={require("../asset/images/menu.png")}/>
     
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
// position: 'fixed',
// top: 6,
display: 'flex',
flexDirection: 'row',
justifyContent:'space-between',
zIndex:100,
backgroundColor:"transparent",
height:60,
alignItems: 'center',
width: "100%",
paddingHorizontal:20,
    },
    logo: {
        width:150,
        height:20
    },
    menu: {
        width:35,
        height:35,
        cursor: "pointer",
    }
})