import React from 'react';
import {Image, View, ActivityIndicator} from 'react-native';
import styles from './styles';
import { colors } from '~/styles';

export default function Avatar ({loading, avatar}) {
    return (
      <View style={styles.avatarContainer}>
        { loading ? 
          <ActivityIndicator style={styles.avatar} color={colors.gray}/> :
          <Image style={styles.avatar} source={{uri:avatar}}/>
        } 
      </View>
    )
}
