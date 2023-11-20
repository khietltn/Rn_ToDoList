import {StyleSheet} from 'react-native'

import color from './../../containt/color'

const styles = StyleSheet.create({
  addTask:{
    bottom: 30,
    paddingHorizontal: 20,
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input:{
    height: 40,
    width: '80%',
    backgroundColor: color.white,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: color.primary,
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: color.text,
  }, 
  iconWrapper:{
    width: 44, height: 44, 
    backgroundColor: color.primary,
    borderColor: color.background,
    borderRadius: 44, 
    borderWidth: 2,
    alignItems: 'center',
    justifyContent:'center',

  },
  icon:{
    fontSize: 20, color: color.white,
    justifyContent: 'center'
  }
});

export default styles;
