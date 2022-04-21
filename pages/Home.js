import React, {useState} from 'react';
import {SafeAreaView, ScrollView, View, TextInput, Image} from 'react-native';
import Logo from '../assets/icons/Logo';
import Search from '../assets/icons/search.svg';
import Button from '../components/Button';
import ImageSelect from '../components/ImageSelect';
import mockData from '../mockData/homeMock';

export default function HomeScreen() {
  let data = mockData;
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');

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
              placeholderTextColor="#C6C6C6"
              onChangeText={setSearch}
              value={search}
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
            <Button
              title="Images"
              onPress={() => {
                if (filter !== '') {
                  setFilter('');
                } else {
                  setFilter('image');
                }
              }}
            />
            <Button
              title="Videos"
              onPress={() => {
                if (filter !== '') {
                  setFilter('');
                } else {
                  setFilter('video');
                }
              }}
            />
            <Button
              title="Audio"
              onPress={() => {
                if (filter !== '') {
                  setFilter('');
                } else {
                  setFilter('audio');
                }
              }}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}>
          {data
            .filter(content => {
              let searchTerm = search.toUpperCase();
              let upperTitle = content.title.toUpperCase();
              return search === '' || upperTitle.includes(searchTerm);
            })
            .filter(content => {
              return content.type === filter || filter === '';
            })
            .map(({title, image}) => {
              return <ImageSelect title={title} image={image} />;
            })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
