import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Calculator = () => {
  const [input, setInput] = useState('');

  const handlePress = (value: string) => {
    setInput(prevInput => prevInput + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleCalculate = () => {
    try {
      const result = eval(input); 
      setInput(result.toString());
    } catch (error) {
      setInput('Error');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.input}>{input}</Text>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress('1')}
        >
          <Text>1</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress('2')}
        >
          <Text>2</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress('3')}
        >
          <Text>3</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress('+')}
        >
          <Text>+</Text>
        </TouchableOpacity>
        {/* Add more number buttons similarly */}
      </View>

      <View style={styles.row}>
            <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress('4')}
            >
            <Text>4</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress('5')}
            >
            <Text>5</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress('6')}
            >
            <Text>6</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress('-')}
            >
            <Text>-</Text>
        </TouchableOpacity>
        </View>

        <View style={styles.row}>
            <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress('7')}
            >
            <Text>7</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress('8')}
            >
            <Text>8</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress('9')}
            >
            <Text>9</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress('*')}
            >
            <Text>x</Text>
        </TouchableOpacity>
        </View>

      <View style={styles.row}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress('0')}
        >
          <Text>0</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.doubleButton]}
          onPress={handleClear}
        >
          <Text>AC</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={handleCalculate}
        >
          <Text>=</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress('/')}
        >
          <Text>:</Text>
        </TouchableOpacity>
        {/* Add more operation buttons similarly */}
      </View>
      <View style={styles.row}>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
  },
  row: {
    flexDirection: 'row',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: 80,
    // borderWidth: 1,
    borderRadius: 60,
    backgroundColor: '#E0E0E0',
    margin: 5,
  },
  doubleButton: {
    width: 80,
    height: 80,
    borderRadius: 60,
  },
  input: {
    fontSize: 24,
    marginBottom: 10,
  },
});

export default Calculator;