import colors from './colors';
import metrics from './metrics';
import DeviceInfo from 'react-native-device-info';
const notch = DeviceInfo.hasNotch() ? 300 : 245

export default {
  list: {
    shadowColor: '#000',
    elevation:1,
    shadowOffset: { width: 1, height: 0 },
    shadowOpacity: 0.2,
    position:'absolute', 
    bottom:0, 
    backgroundColor:colors.white, 
    height: metrics.screenHeight - notch, 
    width:'100%',
    paddingTop:20,
    borderTopRightRadius:25,
    borderTopLeftRadius:25,
},

  shadow:{
    shadowColor: '#000',
    elevation:1,
    shadowOffset: { width: 1, height: 0 },
    shadowOpacity: 0.2,
  }
};