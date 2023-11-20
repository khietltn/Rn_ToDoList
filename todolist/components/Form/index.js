import React from 'react'
import {View, Text, TextInput, TouchableOpacity,  
 KeyboardAvoidingView, Platform
} from 'react-native'

import styles from './style'


const Form=()=>{
  return (
    < KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset = {10}
      style={styles.addTask}
    >
          <TextInput placeholder="input here" style={styles.input}>
          </TextInput>
          <TouchableOpacity>
            <View style={styles.iconWrapper}>
              <Text style={styles.icon}> + </Text>
            </View>
          </TouchableOpacity>
    </KeyboardAvoidingView> 
  )
}

export default Form;