import React, { useState } from 'react';

import { View, ImageBackground } from 'react-native';
import styles from './styles';
import { useQuery } from "@apollo/react-hooks";
import RepositoriesList from '~/components/repositoriesList';
import { GET_TRENDINGS } from '~/queries';
import Error from './error';
import Loading from './loading';
import BackgroundImage from '~/images/background.png'

export default function TrendingsScreen() {

  const { data, loading, error, fetchMore } = useQuery(GET_TRENDINGS);
  const [loadingMore, setLoadingMore] = useState(false);
  
	async function getMoreRepositories () { // Função para carregar novos repositórios. (Acionada quando o usuário desce o scroll até o fim.
    try {
      if (loadingMore) return // Ignora a ação caso uma consulta ainda esteja em andamento. (Enteda melhor nos pontos 1 e 2)
      setLoadingMore(true) // -> Ponto 1: Dá inicio ao carregamento adicionando o valor true para que o caso acima seja ativado (Caindo no IF acima e não executando o restante da função).
      await fetchMore({
        query: GET_TRENDINGS,
        variables: { cursor: data.search.pageInfo.endCursor },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          const newRepositories = fetchMoreResult.search.edges;
          return newRepositories.length ? {
            search: {
              __typename: previousResult.search.__typename,  // Mantem o typename. 
              edges: [...previousResult.search.edges, ...newRepositories], // Concatena os dados antigos e novos.
              pageInfo: fetchMoreResult.search.pageInfo // Adiciona o PageInfo da nova consulta.
            }
          } : previousResult
        }
      })
      setLoadingMore(false) // Ponto 2: Adiciona o valor falso para que a consulta possa voltar a ocorrer (Não caindo no primeiro IF).
    } catch(error) {console.log(error)}
  }

  function renderList() { // Essa função decide qual componente sera carregado dependendo da resposta da consulta.
    if (error) return <Error/>
    if (loading) return <Loading/>
    return <RepositoriesList loadingMore={loadingMore} more={getMoreRepositories} repositories={data.search.edges} />
  }

    return (
      <View style={styles.container}>
        <ImageBackground style={styles.background} source={BackgroundImage}/>
        <View style={styles.list}>
          {renderList()}
        </View>
      </View>
    )
}