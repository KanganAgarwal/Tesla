import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import Buttons from './Buttons'
import footeritems from './Footeritems'
const Footer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}><Text style={styles.title}>Accessories</Text> 
      <Image style={styles.image} source={require("../asset/images/accessories.jpg")}/>
      <Buttons text="SHOP NOW" colA/>
      </View>
      <View style={styles.items}>
      {footeritems.map(footeritem =><Text style={styles.text} key={footeritem}>{footeritem}</Text>)}
      </View>
    </View>
  )
}

export default Footer

const styles = StyleSheet.create({
container: {  
alignItems:"center",
  height: 730,
    zIndex:100,
},
subContainer:{
    marginTop:50,
    display: "flex",
  alignItems:"center",
    fontWeight:"bold",
height: 420
}
,
title:{
fontSize:40,
},
image:{
    
     height:"60%",
     width:350,
 object:"contain"
},
items:{
    marginBottom:8
},
text:{
fontSize:15,
fontWeight:"500",
marginTop:6
}
})