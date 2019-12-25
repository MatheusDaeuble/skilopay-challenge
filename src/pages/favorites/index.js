import React from 'react';
import {View, Text, ImageBackground, Image} from 'react-native';
import styles from './styles';
import RepositoriesList from '~/components/repositoriesList'
import { useApolloClient, useQuery } from "@apollo/react-hooks";
import {GET_FAVORITES, GET_TRENDINGS} from '~/queries'
import BackgroundImage from '~/images/background.png'
import Crying from '~/images/crying.jpg'
import { colors } from '~/styles';

export default function FavoritesScreen () {
  const client = useApolloClient();
  const { data : { favorites }} = useQuery(GET_FAVORITES)

  function createFavoritesList () { // Função que carrega a lista de favoritos, comparando se o id do repositório esta presente na lista de favoritos.
    if (favorites.length==0) return []
    const repositories = client.readQuery({query: GET_TRENDINGS}).search.edges
    const favoriteRepositories = []

    repositories.map((repository)=>{
      if (favorites.includes(repository.node.id))
        favoriteRepositories.push(repository) // Caso de sucesso: Adiciona repositório na lista.
    })
    return favoriteRepositories
  }

  const favoriteList = createFavoritesList () 

  return (
    <View style={styles.container}>
    <ImageBackground style={styles.background} source={BackgroundImage}/>
    <View style={styles.list}>
     
      {
        favoriteList.length===0 ? 
          <View style={styles.empty}>
            <Text style={styles.emptyText}>Você não possui repositórios favoritados :( </Text>
            <Image resizeMode={'contain'} style={styles.noFavoritesImage} source={Crying}/>
          </View>:
          <>
            <Text style={styles.countFavorites}>Total de favoritados: {favoriteList.length}</Text>
            <RepositoriesList repositories={favoriteList} refresh={()=>{}} />
          </>
      }
    </View>
  </View>
  )
}