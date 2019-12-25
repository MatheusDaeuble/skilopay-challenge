import React from 'react';

import { View, ActivityIndicator ,Text, } from 'react-native';
import styles from './styles';
import { colors } from '~/styles';

export default function Loading () {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={'large'} color={colors.primary} />
      <Text style={styles.text}>Estamos carregando os repositorios...</Text>
    </View>
    )
}