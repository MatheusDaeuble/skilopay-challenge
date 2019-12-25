import {StyleSheet} from 'react-native';
import { colors } from '~/styles';

const styles = StyleSheet.create({

  infoContainer: {
    marginTop: 70,
    paddingHorizontal:20
  },

  title: {
    alignSelf:'center',
    fontSize:20,
  },

  url: {
    textAlign:'center',
    alignSelf:'center',
    paddingTop:5,
    color:colors.primary,
    fontSize:12.5,
  },

  description: {
    paddingVertical:20
  },

});

export default styles;