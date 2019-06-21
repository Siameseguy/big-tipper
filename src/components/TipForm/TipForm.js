import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {Button} from 'react-native-elements';

class TipForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 0,
      people: 1,
      finalTotal: 0,
      splitTotal: 0
    }
  }

  calcTip(percent, people) {
    // take total and subtract tip percentage
    const split = this.state.amount / people
    const tip = split * percent;
    const total = parseInt(split) + tip;

    this.setState({
      finalTotal: parseFloat(total).toFixed(2)
    })

  }
  render() {
    console.log(this.state.people)
    return (
      <View>
        <TextInput
          keyboardType={'numeric'}
          style={{
          height: 40,
          borderBottomColor: 'gray',
          borderWidth: 1
        }}
          onChangeText={(amount) => this.setState({amount})}
          value={`${this.state.amount}`}
          placeholder="pre-taxed total"/>
        <TextInput
          keyboardType={'numeric'}
          style={{
          height: 40,
          borderBottomColor: 'gray',
          borderWidth: 1
        }}
          onChangeText={(people) => this.setState({people})}
          value={`${this.state.people}`}
          placeholder="split how many ways?"/>

        <View style={styles.buttons}>
          <Button
            style={styles.button}
            small
            title='15%'
            onPress={() => this.calcTip(0.15, this.state.people)}/>
          <Button
            style={styles.button}
            small
            title='18%'
            onPress={() => this.calcTip(0.18, this.state.people)}/>
          <Button
            style={styles.button}
            small
            title='20%'
            onPress={() => this.calcTip(0.20, this.state.people)}/>
        </View>
        <Text style={styles.finalTotal}>${this.state.finalTotal}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    margin: 30
  },
  finalTotal: {
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: 30
  }
});

export default TipForm;