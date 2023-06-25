import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'

import { addTodo } from './TodoActions.js'

import { useDispatch, useSelector } from 'react-redux'

export default function TodoMain() {
  const todos = useSelector(state => state.todo.list)
  const dispatch = useDispatch()

  return (
    <View style={styles.container}>
      <Text>You have todo: {todos.toString()}</Text>
      {console.log(useSelector(state => state))}
      <TextInput style={styles.input} onSubmitEditing={newText => dispatch(addTodo(newText))}> </TextInput>
      {/* <TouchableOpacity style={styles.button} onPress={(a) => console.log(a)}>
        <Text style={styles.text}>Add Todo</Text>
      </TouchableOpacity> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: '95%',
    margin: 10,
    padding: 10,
    backgroundColor: 'green',
    borderRadius: 5,
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
  input: {
    borderRadius: 5,
    padding: 10,
    width: '90%',
    backgroundColor: 'green',
    color: 'white',
  }
})