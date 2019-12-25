import React  from 'react';
import {StatusBar, View } from 'react-native';
import Header from  '~/components/header'
import Tab from './Tab'
import styles from './styles'

export default function TabBar ({onTabPress, navigation}) {

    const descriptions = [ // Lista que contêm a descrição das paginas, guiada pelo index (Index 0 = Opção mais a esquerda )
        'Bem-vindo a lista dos repositórios com maior destaque do Github!', // Populares
        'Essa lista contêm os seus repositórios favoritos!' // Favoritos
    ]

    return (
        <>
            <StatusBar barStyle="dark-content" />
            <View style={styles.container}>
                <Header  description={descriptions[navigation.state.index]}/>
                <View style={styles.tabContainer}>
                    {
                        navigation.state.routes.map((route, routeIndex) => (
                            <Tab 
                                key={routeIndex}
                                onTabPress={onTabPress}
                                routeIndex={routeIndex}
                                route={route}
                                activityIndex={navigation.state.index}
                            />
                        ))
                    }
                </View>

            </View>
      </>
    )
}
