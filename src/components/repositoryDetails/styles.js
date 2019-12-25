import {StyleSheet} from 'react-native';
import { metrics, colors, general } from '~/styles';

const styles = StyleSheet.create({

  modal: {
    flex:1, 
    alignItems:'center', 
    justifyContent:'center'
  },
  
  container:{
    ...general.shadow,
    shadowOpacity:0.3,
    backgroundColor:colors.white,
    width:'85%', 
    padding:5,
    borderRadius:20,
  },

});

  export default styles;