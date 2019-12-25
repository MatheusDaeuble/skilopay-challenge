import React from 'react';

import {StatusBar, SafeAreaView} from 'react-native';
import {ApolloProvider} from 'react-apollo';
import apolloClient from '~/services/apollo';
import Routes from '~/routes';
import { colors } from './styles';

const App = () => (
  <SafeAreaView style={{flex:1, backgroundColor:colors.white}}>
    <StatusBar barStyle="dark-content"/>
    <ApolloProvider client={apolloClient}>
      <Routes />
    </ApolloProvider>
  </SafeAreaView>
);

export default App;
