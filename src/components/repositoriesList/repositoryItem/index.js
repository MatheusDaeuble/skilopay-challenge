import React, { useState } from 'react';
import {Text, Image, View, TouchableOpacity} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from '~/styles';
import { useQuery, useApolloClient } from "@apollo/react-hooks";
import RepositoryDetails from '~/components/repositoryDetails';
import { formatNumber }from '~/utils';
import { GET_FAVORITES } from '~/queries';


export default function RepositoryItem ({repository}) {
  const [selected, setSelected] = useState(false);

  const { data : { favorites } } = useQuery(GET_FAVORITES);
  const client = useApolloClient();
  const isFavorite = favorites.includes(repository.id)
  const stars = repository.stargazers.totalCount;
  const { name, owner : { login, avatarUrl}} = repository;
  
  function updateFavorites () { // Função que favorita/"desfavorita" um repositório.
    if (favorites.includes(repository.id)){
      let newArray = [];
      favorites.map((id)=>{
        if (id!=repository.id) newArray.push(id); // CASO: desfavoritar.
      })
      client.writeData({ data: {favorites: newArray} });
    } else client.writeData({ data: {favorites: [ ...favorites, repository.id]} }) // CASO: Favoritar
  }

  return (
    <>
      <TouchableOpacity style={styles.container} onPress={()=> setSelected(!selected)}>
        <View style={styles.infoContainer}>
          <Image source={{uri:avatarUrl}} style={styles.avatar}/>
          <View style={styles.nameContainer}>
            <Text numberOfLines={1} style={styles.name}>{name}</Text>
            <Text style={styles.login}>{login}</Text>
          </View>
        </View>
        <TouchableOpacity onPress={updateFavorites} style={styles.starContainer}>
          <Icon name="star" size={32} color={isFavorite ? colors.star : colors.lighter} />
          <Text style={styles.starText}>{formatNumber(stars)}</Text>
        </TouchableOpacity>
      </TouchableOpacity>
      { selected && 
        <RepositoryDetails updateFavorites={updateFavorites} isFavorite={isFavorite} name={name} owner={login} close={()=>setSelected(!selected)}/>
      }
    </>
  )
}
