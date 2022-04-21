import React from 'react';
import {SafeAreaView, ScrollView, View, Text, TextInput} from 'react-native';
import Logo from '../assets/icons/Logo';
import Button from '../components/Button';
import Search from '../assets/icons/search.svg';

export default function HomeScreen() {
  let data = Array.from(Array(100));

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'black',
      }}>
      <ScrollView
        stickyHeaderIndices={[1]}
        stickyHeaderHiddenOnScroll={false}
        style={{paddingHorizontal: 15}}>
        <Logo style={{marginBottom: 20}} />
        <View
          style={{
            backgroundColor: 'black',
          }}>
          <View
            style={{
              marginVertical: 24,
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#1A1C1E',
            }}>
            <Search style={{marginHorizontal: 10}} />
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
              placeholderTextColor="white"

              // onChangeText={onChangeText}
              // value={text}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              borderTopWidth: 1,
              borderColor: 'white',
              paddingVertical: 15,
            }}>
            <Button title="Images" />
            <Button title="Videos" />
            <Button title="Audio" />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
          }}>
          {data.map(content => (
            <View
              style={{
                width: 115,
                height: 115,
                backgroundColor: 'blue',
                marginBottom: 10,
              }}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
