import { Text, View, StyleSheet , TouchableOpacity, ScrollView} from 'react-native';

import styles from './App.components.style'

import Task from './components/Task';

import Form from './components/Form'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.header}> Todo List </Text>
        <ScrollView style={styles.items_menu}>
          <Task></Task>
        </ScrollView>   
      </View>

      <Form>
      </Form>        
    </View>
  );
}


