import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'

import styles from './style'


const Task=()=>{
  return (
    <TouchableOpacity>
      <View style={styles.items}> 
        <View style={styles.item_square}>
          <Text style={styles.item_square_number}> 1. </Text>
        </View>
        <Text style={styles.item_content}> Đọc sách thiết kế</Text>
      </View>
    </TouchableOpacity>

  )
}

export default Task;