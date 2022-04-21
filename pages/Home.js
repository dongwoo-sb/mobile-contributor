import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Logo from '../assets/icons/Logo';
import Search from '../assets/icons/search.svg';
import Button from '../components/Button';
import ImageSelect from '../components/ImageSelect';
import mockData from '../mockData/homeMock';

export default function HomeScreen({navigation}) {
  let data = mockData;
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');
  const [selected, setSelected] = useState(0);
  const [latestSelected, setLatestSelected] = useState({});

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
            .map(({title, image, tags}) => {
              return (
                <ImageSelect
                  key={title}
                  title={title}
                  image={image}
                  tags={tags}
                  selected={selected}
                  setSelected={setSelected}
                  setLatestSelected={setLatestSelected}
                />
              );
            })}
        </View>
      </ScrollView>
      {!!selected && (
        <View
          style={{
            position: 'absolute',
            width: '100%',
            bottom: 20,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#FFE121',
              paddingHorizontal: 20,
              paddingVertical: 7,
              width: 140,
              alignItems: 'center',
              borderRadius: 18,
            }}
            onPress={() => navigation.navigate('EditPage', latestSelected)}>
            <Text style={{color: 'black', fontSize: 25, fontWeight: '300'}}>
              Edit
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#1A1C1E',
              paddingHorizontal: 20,
              paddingVertical: 7,
              width: 140,
              alignItems: 'center',
              borderRadius: 18,
            }}>
            <View>
              <Text style={{color: 'white', fontSize: 25, fontWeight: '300'}}>
                Delete
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
}
