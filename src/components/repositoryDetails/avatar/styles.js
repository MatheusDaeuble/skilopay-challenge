import {StyleSheet} from 'react-native';
import { colors, general } from '~/styles';

const styles = StyleSheet.create({
  avatarContainer:{
    ...general.shadow,
    height:120,
    width:120,
    borderRadius:60,
    backgroundColor:colors.white,
    position:"absolute",
    top:-60,
    alignSelf:'center',

  },

  avatar:{
    height:120,
    width:120,
    borderRadius:60,
  },

});

  export default styles;