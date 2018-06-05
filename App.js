import React from 'react';
import { Text, View, TextInput, Button } from 'react-native';

class App extends React.Component {
  state = {
    text: "",
    todo: []
  }

  addTodo = () => {
    const newTodo = this.state.text;
    const arr = this.state.todo;
    arr.push(newTodo);
    this.setState({todo: arr, text: ""});
  }

  deleteTodo = (e) => {
    const arr = this.state.todo;
    const position = arr.indexOf(e);
    arr.splice(position, 1);
    this.setState({todo: arr});
  }

  renderTodos = () => {
    return this.state.todo.map(e => {
      return (
        <Text 
        key={e} 
        onPress={() => this.deleteTodo(e)}
        >{e}</Text>
      )
    })
  }



  render() {
    return (
      <View style={styles.main}>
        <View style={styles.viewStyle}>
          <Text style={styles.title}>To Do List</Text>
          <TextInput 
            style={styles.inputStyle}
            onChangeText={(text)=>this.setState({text})}
            value={this.state.text}
          />
          <Button 
            title="add" 
            onPress={this.addTodo}
          />
          {this.renderTodos()}
        </View>
      </View>
    );
  }
}

const styles = {
  main:{
    flex:1,
    backgroundColor: "pink"
  },
  viewStyle: {
    marginTop: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputStyle: {
    height: 40, 
    width: 280,
    borderColor: 'gray', 
    borderWidth: 1
  },
  title:{
    fontSize: 30,
    color: 'dodgerblue',
    fontWeight: 'bold'
  }
};

export default App;