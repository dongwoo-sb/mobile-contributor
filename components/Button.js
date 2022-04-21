import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

export default function Button({title, onPress}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        borderWidth: 1,
        borderColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 7,
        width: 100,
        alignItems: 'center',
        borderRadius: 18,
      }}>
      <Text style={{color: 'white'}}>{title}</Text>
    </TouchableOpacity>
  );
}
