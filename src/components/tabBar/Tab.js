import React from "react"
import { Text, TouchableOpacity } from "react-native"
import { colors } from '~/styles';
import styles from './styles';

export default function Tab ({ routeIndex, route, activityIndex, onTabPress }) {
  return (
    <TouchableOpacity 
      key={routeIndex} 
      onPress={()=> onTabPress({route})}   
      style={{...styles.tab, backgroundColor: activityIndex==routeIndex ? colors.white : colors.transparent}}>
      <Text 
        style={{
          ...styles.tabText,
          color: activityIndex==routeIndex ? colors.primary: colors.white, 
          }}
      > 
        {route.routeName}
      </Text>
    </TouchableOpacity>
  )
}