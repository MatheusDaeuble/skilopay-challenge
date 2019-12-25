import React from 'react';
import {Text, View , Linking, TouchableOpacity} from 'react-native';
import styles from './styles';
import Icons from '../icons'

export default function Information ({repository, isFavorite, updateFavorites}) {
  function goToRepository () {
    Linking.openURL(repository.url)
  } 
    return (
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{repository.nameWithOwner}</Text>
        <TouchableOpacity onPress={goToRepository}>
          <Text style={styles.url}>{repository.url}</Text>
        </TouchableOpacity>
        <Text style={styles.description}>{repository.description}</Text>        
        <Icons 
          updateFavorites={updateFavorites}
          isFavorite ={isFavorite}
          forks={repository.forkCount} 
          stars={repository.stargazers.totalCount}
          issues={repository.issues.totalCount}
        />
      </View>
    )
}