import {StyleSheet} from 'react-native';
import {colors, general } from '~/styles';

const styles = StyleSheet.create({
    logoContainer: {
        ...general.shadow,
        backgroundColor:colors.white,
        flexDirection:'row',
        alignItems:'baseline',
        justifyContent:'center',
    },

    image:{ 
        height:48, 
        width:218, 
        marginTop:8, 
        marginBottom:15
    },

    github:{
        resizeMode:'contain',
        paddingBottom:29,
        marginLeft:1,
        height:12, 
        width:40, 
    },

    text:{ 
        marginTop:25,
        marginHorizontal:20,
        color: colors.white, 
        fontWeight:'bold', 
        fontSize:20, 
        textAlign:'center'
    }

});

  export default styles;