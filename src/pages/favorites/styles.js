import {StyleSheet} from 'react-native';
import { colors, general } from '~/styles';

const styles = StyleSheet.create({
    container: {
      flex:1, 
      backgroundColor: colors.primary
    },

    background:{
      width:'100%', 
      height:'75%', 
      opacity:0.2 , 
      marginTop:30
    },

    list: {
      ...general.list
  },
  
    empty: { 
      paddingTop:10,
      justifyContent:'space-around',
      alignItems:'center',
    },
  
    emptyText:{
      color:colors.dark,  
      paddingBottom:5,  
    },

    noFavoritesImage: {
      height:280, 
      width:254, 
      opacity:0.15 
    },

    countFavorites:{
      alignSelf:'center', 
      marginBottom:10, 
      fontWeight:'bold',
      color:colors.dark
    }

});

  export default styles;