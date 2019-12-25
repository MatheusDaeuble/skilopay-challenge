import {StyleSheet} from 'react-native';
import { metrics, colors, general } from '~/styles';
import DeviceInfo from 'react-native-device-info';


const styles = StyleSheet.create({
  container: {
    flex:1, 
    backgroundColor: colors.primary
  },

  list: {
    ...general.list
  },

  background:{
    width:'100%', 
    height:'75%', 
    opacity:0.2 , 
    marginTop:30
  },



});

  export default styles;