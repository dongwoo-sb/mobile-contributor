import React, {useReducer} from 'react';
import {Text, TouchableOpacity} from 'react-native';

export default function Button({title, onPress}) {
  const [active, setActive] = useReducer((s, a) => !s, false);
  return (
    <TouchableOpacity
      onPress={() => {
        onPress();
        setActive();
      }}
      style={{
        backgroundColor: active ? 'white' : 'black',
        borderWidth: 1,
        borderColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 7,
        width: 100,
        alignItems: 'center',
        borderRadius: 18,
      }}>
      <Text style={{color: active ? 'black' : 'white'}}>{title}</Text>
    </TouchableOpacity>
  );
}
