import React, {useReducer} from 'react';
import {Image, View, TouchableOpacity} from 'react-native';
import DottedEllipse from '../assets/icons/dotted-ellipse.svg';

const ImageSelect = ({
  title,
  image,
  tags,
  selected,
  setSelected,
  setLatestSelected,
}) => {
  const [active, setActive] = useReducer((s, a) => !s, false);

  return (
    <TouchableOpacity
      onPress={() => {
        setActive();
        if (active) {
          setSelected(selected - 1);
        } else {
          setSelected(selected + 1);
          setLatestSelected({title, image, tags});
        }
      }}
      key={title}>
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
