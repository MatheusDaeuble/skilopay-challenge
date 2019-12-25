import React from 'react';

import {Text, Image, View} from 'react-native';
import styles from './styles';
import SkilopayLogo from '~/images/skilopay-logo.png';
import GithubLogo from '~/images/github-logo.png';

export default function Header ({description}){
    return (
        <>
            <View style={styles.logoContainer}>
                <Image style={styles.image} source={SkilopayLogo}/>
                <Image style={styles.github} source={GithubLogo}/>
            </View>
            <Text style={styles.text}>{description}</Text>
        </>
    )   

}


