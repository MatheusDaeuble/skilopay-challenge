import React from 'react';
import { FlatList, ActivityIndicator } from 'react-native';
import RepositoryItem from './repositoryItem';
import { colors } from '~/styles';
import styles from './styles';

export default function RepositoriesList ({ repositories, more, loadingMore }) {

  function renderListItem ({item}) {
    return <RepositoryItem repository={item.node} />
  }

  return (
    <>
      <FlatList
        data={repositories}
        keyExtractor={(repository) => repository.node.id}
        renderItem={renderListItem}
        onEndReached={more}
        onEndReachedThreshold={0}
      />
      { loadingMore && <ActivityIndicator size={'small'} style={styles.loading} color={colors.dark} />}
    </>
  )
}