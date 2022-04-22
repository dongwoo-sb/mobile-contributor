import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import CameraButton from '../assets/icons/cameraButton.svg';
import {RNCamera} from 'react-native-camera';

export default function Camera({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          padding: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon
            name="x"
            size={24}
            style={{marginHorizontal: 10}}
            color="white"
          />
        </TouchableOpacity>
        <View style={{flexDirection: 'row'}}>
          <Icon
            name="maximize"
            size={24}
            style={{marginHorizontal: 10}}
            color="white"
          />
          <Icon
            name="zap"
            size={24}
            style={{marginHorizontal: 10}}
            color="white"
          />
          <Icon
            name="repeat"
            size={24}
            style={{marginHorizontal: 10}}
            color="white"
          />
        </View>
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
          paddingTop: 20,
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('UploadPage')}>
          <CameraButton />
        </TouchableOpacity>
      </View>
      {/* <RNCamera
        style={{flex: 1, alignItems: 'center'}}
        ref={ref => {
          this.camera = ref;
        }}
      /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
});
