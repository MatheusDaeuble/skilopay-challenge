import {StyleSheet} from 'react-native';
import { colors } from '~/styles';

const styles = StyleSheet.create({
  container: { 
    justifyContent:'space-around',
    alignItems:'center',
    paddingTop:20,
    paddingHorizontal:10,
  },

  error:{
    textAlign:'center',
    color:colors.primary,
    paddingBottom:10,
    fontWeight:'bold',
  },

  message:{
    textAlign:'center',
    color:colors.dark
    
  },



});

export default styles;