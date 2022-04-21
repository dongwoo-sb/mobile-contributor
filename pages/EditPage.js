import React from 'react';
import {
  Image,
  SafeAreaView,
  TouchableOpacity,
  View,
  Text,
  TextInput,
} from 'react-native';
import Delete from '../assets/icons/delete.svg';

export default function EditPage({route, navigation}) {
  const {title, image, tags} = route.params;

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
            }}
          />
        ) : (
          <Image
            style={{
              width: '100%',
              height: '50%',
              resizeMode: 'contain',
            }}
            source={image}
          />
        )}
        <Text style={{color: 'white'}}>Title</Text>
        <TextInput
          style={{
            flex: 1,
            paddingTop: 10,
            paddingRight: 10,
            paddingBottom: 10,
            paddingLeft: 0,
            backgroundColor: '#1A1C1E',
            color: 'white',
          }}
          placeholder="Search Content"
          placeholderTextColor="#C6C6C6"
          //   onChangeText={setSearch}
          //   value={search}
        />
        <Delete style={{height: 2}} />
        <Text style={{color: 'white'}}>Tags</Text>
      </View>
    </SafeAreaView>
  );
}
