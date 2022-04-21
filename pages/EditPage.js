import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  TouchableOpacity,
  View,
  Text,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default function EditPage({route, navigation}) {
  const {title, image, tags} = route.params;
  const [value, setValue] = useState(title);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'black',
        paddingHorizontal: 15,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 20,
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={{color: 'white'}}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#FFE121',
            paddingHorizontal: 20,
            paddingVertical: 7,
            width: 80,
            alignItems: 'center',
            borderRadius: 18,
          }}
          onPress={() => navigation.goBack()}>
          <Text style={{color: 'black'}}>Save</Text>
        </TouchableOpacity>
      </View>
      <View>
        {!image ? (
          <View
            style={{
              width: '100%',
              height: '50%',
              backgroundColor: '#FFF6BF',
              marginBottom: 20,
            }}
          />
        ) : (
          <Image
            style={{
              width: '100%',
              height: '50%',
              resizeMode: 'contain',
              marginBottom: 20,
            }}
            source={image}
          />
        )}
        <View
          style={{
            backgroundColor: 'black',
            padding: 20,
          }}>
          <Text style={{color: '#626C78', marginBottom: 3}}>Title</Text>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: '#1A1C1E',
              width: '100%',
              marginBottom: 20,
              padding: 10,
            }}>
            <TextInput
              style={{
                flex: 1,
                backgroundColor: '#1A1C1E',
                color: 'white',
              }}
              onChangeText={setValue}
              value={value}
            />
            <TouchableOpacity onPress={() => setValue('')}>
              <Icon name="x" size={17} color="white" />
            </TouchableOpacity>
          </View>
          <Text style={{color: '#626C78', marginBottom: 3}}>Tags</Text>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}>
            {tags.map(tag => (
              <View
                style={{
                  flexDirection: 'row',
                  backgroundColor: '#1A1C1E',
                  paddingVertical: 5,
                  marginRight: 5,
                  marginBottom: 5,
                  alignItems: 'center',
                  borderRadius: 17,
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 17,
                    fontWeight: '300',
                    paddingHorizontal: 10,
                  }}>
                  {tag}
                </Text>
                <TouchableOpacity style={{paddingRight: 10}}>
                  <Icon name="x" size={17} color="white" />
                </TouchableOpacity>
              </View>
            ))}

            <TouchableOpacity
              style={{
                marginLeft: 10,
                backgroundColor: '#FFE121',
                padding: 10,
                borderRadius: 100,
              }}>
              <Icon name="plus" size={17} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
