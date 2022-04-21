import React, {useReducer} from 'react';
import {Image, View, TouchableOpacity} from 'react-native';
import DottedEllipse from '../assets/icons/dotted-ellipse.svg';

const ImageSelect = ({title, image}) => {
  const [active, setActive] = useReducer((s, a) => !s, false);

  return (
    <TouchableOpacity onPress={setActive}>
      {active && (
        <View
          style={{
            zIndex: 5,
            position: 'absolute',
            width: 115,
            height: 115,
          }}>
          <DottedEllipse
            style={{
              zIndex: 3,
              top: 10,
              left: 10,
            }}
          />
          <View
            style={{
              position: 'absolute',
              zIndex: 2,
              backgroundColor: 'rgba(52, 52, 52, 0.5)',
              opacity: 2,
              width: 115,
              height: 115,
              marginRight: 5,
              marginBottom: 5,
            }}
          />
        </View>
      )}
      {!image ? (
        <View
          style={{
            width: 115,
            height: 115,
            marginRight: 5,
            marginBottom: 5,
            backgroundColor: '#FFF6BF',
          }}
        />
      ) : (
        <Image
          key={title}
          style={{
            width: 115,
            height: 115,
            marginRight: 5,
            marginBottom: 5,
          }}
          source={image}
        />
      )}
    </TouchableOpacity>
  );
};

export default ImageSelect;
