import React from 'react';
import { View, TouchableWithoutFeedback, Modal } from 'react-native';
import styles from './styles';
import Avatar from './avatar'
import Information from './information'
import { useQuery } from "@apollo/react-hooks";
import { GET_REPOSITORY_DETAILS } from '~/queries'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '~/styles';

export default function RepositoriesList ({isFavorite, name, owner, close, updateFavorites}) {

  const { data, loading } = useQuery(GET_REPOSITORY_DETAILS, { variables: {name, owner}})
  const avatar = loading ? '' : data.repository.owner.avatarUrl

  return (
    <Modal
      visible={true}
      transparent={true}
      animationType={'slide'}
      onRequestClose={close}
    > 
        <View style={styles.modal}>
          <View style={styles.container}>
          { !loading && <Icon onPress={close} style={{position:'absolute', top:12, right:12}} name="close" size={23} color={colors.darker} />}
            <Avatar loading={loading} avatar={avatar}/>
            { !loading && <Information updateFavorites={updateFavorites} isFavorite={isFavorite} repository={data.repository}/>}
          </View>
        </View>
    </Modal>
  )
} 