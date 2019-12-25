import {StyleSheet} from 'react-native';
import { metrics, colors, general } from '~/styles';

const styles = StyleSheet.create({

  container:{
    ...general.shadow,
    flex:1,
    height:70,
    flexDirection:'row',
    backgroundColor:colors.white,
    width:'90%', 
    marginVertical:5, 
    padding:10,
    borderRadius:10,
    alignSelf: 'center',
    alignItems:'center',
    justifyContent:'space-between',
  },

  infoContainer:{
    flexDirection:'row',

  },

  avatar:{
    height:50,
    width:50,
    borderRadius:25,
    marginRight:15,
      
  },

  nameContainer:{
    maxWidth:'70%'
  },
  
  name:{
    fontSize:20,
    color:colors.darker,
  },

  login:{
    fontSize:15,
    color:colors.dark
  },

  starContainer: {
    alignItems:'center', 
    justifyContent:'space-between', 
    height:"100%",
  },

  starText: {
    fontSize:13, 
    color:colors.darker
  }

});

export default styles;