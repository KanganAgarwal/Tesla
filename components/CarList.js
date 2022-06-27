import { StyleSheet,  View,FlatList,Dimensions } from 'react-native'
import React from 'react'
import data from './Data'
import CarItem from './CarItem'
import Header from './Header'

const CarList = () => {
  return (
    <View style={styles.container}>
      <Header/>
      <FlatList data={data} renderItem={({item}) =>
     <CarItem name={item.name} tagline={item.tagline} solar={item.solar} taglineCTA={item.taglineCTA} src={item.src}  /> } 
  snapToAlignment={"start"}
     decelerationRate={"fast"}
 snapToInterval={Dimensions.get('window').height} 
 showsVerticalScrollIndicator={false}
    />  
    </View>
  )
}

export default CarList

const styles = StyleSheet.create({
container: {
 width:"100%",
//  position:"relative"
}
})