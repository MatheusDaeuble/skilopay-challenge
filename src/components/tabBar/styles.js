

import {StyleSheet} from 'react-native';
import { metrics, colors, general } from '~/styles';

const styles = StyleSheet.create({
    tab: {
        borderRadius:20,   
        alignItems:'center', 
        height:40,
        width:'45%',
        justifyContent:'center'
    }
    ,

    container:{
        position:'absolute', 
        top:0, 
        width:'100%', 
        paddingBottom:30,
    },

    tabContainer:{ 
        marginTop:20, 
        flexDirection:'row', 
        alignItems:'center', 
        justifyContent:'space-around', 
        height:40, 
    },

    tabText:{
        fontWeight:"bold",
        alignSelf:'center',

    }

});

  export default styles;