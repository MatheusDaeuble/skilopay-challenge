import React from 'react';
import {Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from '~/styles';
import { formatNumber }from '~/utils';

export default function Icons ({isFavorite, forks, stars, issues, updateFavorites}) {
  
  return (
    <View style={styles.icons}>
      <View style={styles.iconContainer}>
        <Icon style={styles.icon} name="code-fork" size={40} color={colors.light} />
        <Text style={styles.iconText}>{formatNumber(forks)}</Text>
      </View>
      <TouchableOpacity style={styles.iconContainer} onPress={updateFavorites}>
        <Icon 
          style={{...styles.icon, paddingBottom: isFavorite? 3 : 0}} 
          name="star" 
          size={isFavorite? 50 : 40} 
          color={isFavorite ? colors.star : colors.light} 
        />
        <Text style={styles.iconText}>{formatNumber(stars)}</Text>
        <View style={{height: isFavorite? 13.5 : 0}}/>
      </TouchableOpacity>
      <View style={styles.iconContainer}>
        <Icon style={styles.icon} name="exclamation-circle" size={40} color={colors.light} />
        <Text style={styles.iconText}>{formatNumber(issues)}</Text>
      </View>
    </View>
  )
}