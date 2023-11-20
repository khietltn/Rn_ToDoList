import {StyleSheet} from 'react-native'

 
const styles = StyleSheet.create({
  items:{
    flexDirection:'row',
    backgroundColor: '#fff',
    marginBottom: 15,
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems:'center',
    justifyContent: 'space-between',
  },
  item_square:{
    width: 48, height: 36, borderRadius: 10, backgroundColor: '#ffae',
    alignItems:'center', justifyContent: 'center'
  }, 
  item_square_number:{
    fontWeight: 16, 
  },
  item_content:{
    width: '80%', fontSize: 16, paddingLeft: 10,
  }
});

export default styles;
