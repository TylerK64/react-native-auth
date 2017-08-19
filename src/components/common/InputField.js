import React from 'react';
import { TextInput, View, Text } from 'react-native';

const InputField = ({ label, value, onChangeText }) => {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={{ height: 20, width: 100 }}
      />
    </View>
  )
};

export { InputField };
