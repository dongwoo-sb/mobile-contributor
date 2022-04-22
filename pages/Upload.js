import React from 'react';
import {
  ScrollView,
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default function Upload({navigation}) {
  return (
    <SafeAreaView style={{backgroundColor: 'black', height: '100%'}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 20,
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
          <Text style={{color: 'white', padding: 20}}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: 'black',
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
      <View
        style={{
          backgroundColor: '#BBDEFF',
          width: '100%',
          height: '70%',
        }}></View>
      <View
        style={{
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 20,
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#FFE121',
            paddingHorizontal: 20,
            paddingVertical: 7,
            width: 100,
            alignItems: 'center',
            borderRadius: 18,
          }}
          onPress={() => navigation.goBack()}>
          <Text style={{color: 'black'}}>Upload Image</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
