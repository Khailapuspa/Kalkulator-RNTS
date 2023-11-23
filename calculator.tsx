import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Calculator = () => {
  const [input, setInput] = useState("0");

  const handlePress = (value: string) => {
    if (value === "C") {
      setInput("0");
    } else {
      setInput(input === "0" ? value : input + value);
    }
  };

  // const handleClear = () => {
  //   setInput('');
  // };

  const handleDelete = () => {
    setInput(prevInput => prevInput.slice(0, -1)); // Menghapus karakter terakhir dari input
  };

  const handlePercentage = () => {
    setInput(prevInput => prevInput + '%');
  };

  const handleDecimal = () => {
    // Pastikan tidak ada lebih dari satu titik desimal dalam input
    if (!input.includes('.')) {
      setInput(prevInput => prevInput + '.');
    }
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
      <Text style={styles.textinput}>{input}</Text>
      <View style={styles.row}>
      <TouchableOpacity
          style={[styles.button, styles.doubleButton]}
          onPress={() => handlePress('C')}
        >
          <Text style={styles.input}>AC</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={handleDelete}
        >
          <Text style={styles.input}>Del</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress('3')}
        >
          <Text style={styles.input}>3</Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress("/")}>
            <Text>{input === "/" ? "÷" : input}</Text>
          </TouchableOpacity>
        {/* Add more number buttons similarly */}
      </View>

      <View style={styles.row}>
            <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress('7')}
            >
            <Text style={styles.input}>7</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress('8')}
            >
            <Text style={styles.input}>8</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress('9')}
            >
            <Text style={styles.input}>9</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress("*")}>
            <Text>{ "*" ? "×" : input} x</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
            <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress('4')}
            >
            <Text style={styles.input}>4</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress('5')}
            >
            <Text style={styles.input}>5</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress('6')}
            >
            <Text style={styles.input}>6</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress('-')}
            >
            <Text style={styles.input}>-</Text>
        </TouchableOpacity>
        </View>

      <View style={styles.row}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress('1')}
        >
          <Text style={styles.input}>1</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress('2')}
        >
          <Text style={styles.input}>2</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress('3')}
        >
          <Text style={styles.input}>3</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress('+')}
        >
          <Text style={styles.input}>+</Text>
        </TouchableOpacity>
        {/* Add more operation buttons similarly */}
      </View>

      <View style={styles.row}>
      <TouchableOpacity
          style={styles.button}
          onPress={handlePercentage} //BELOM JALAN YA
        >
          <Text style={styles.input} >%</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress('0')}
        >
          <Text style={styles.input}>0</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={handleDecimal}
        >
          <Text style={styles.input}>.</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.oneButton]}
          onPress={handleCalculate}
        >
          <Text style={styles.input}>=</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    // textAlign: "left",
    // marginLeft: 5,
    backgroundColor: '#0000',
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
    borderRadius: 25,
    backgroundColor: '#E0E0E0',
    margin: 5,
  },
  doubleButton: {
    width: 80,
    height: 80,
    borderRadius: 25,
  },
  oneButton: {
    backgroundColor: '#FFA500',
  },
  input: {
    fontSize: 25,
    marginBottom: 5,
  },
  textinput: {
      fontSize: 48,
      color: "#fff",
      textAlign: "right",
  },
  // input2: {
  //   font
  // },
});

export default Calculator;