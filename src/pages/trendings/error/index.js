import React from 'react';

import { View, Text } from 'react-native';
import styles from './styles';

export default function Error() {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>Por favor verifique sua conexão com a internet.</Text>
        <Text style={styles.message}>Infelizmente, encontramos um erro no momento de carregar os repositórios.</Text>
      </View>
    )
}