import React from 'react';
import {SafeAreaView, ScrollView, Text, StyleSheet} from 'react-native';
import Logo from '../assets/icons/Logo';
import TouchableScale from 'react-native-touchable-scale'; // https://github.com/kohver/react-native-touchable-scale
import { ListItem, LinearProgress, Icon } from 'react-native-elements'

export default function ProfileScreen() {

financeList = [
  {
    title: 'Historic Marketplace Sales',
  },
];
resourceList = [
  {
    title: 'Into to Stocks',
  },
  {
    title: 'About the Partner Program',
  },
  {
    title: 'FAQ',
  }
];

adminList = [
  {
    title: 'Mange Users'
  },
  {
    title: 'Change Ownership'
  },
  {
    title: 'Rev Share OptIn'
  },
  {
    title: 'Content Aquisishions'
  },
  {
    title: 'Bonus Program'
  }
];
return (
<SafeAreaView style={styles.background}>
  <ScrollView
      stickyHeaderIndices={[1]}
      stickyHeaderHiddenOnScroll={false}
      style={{paddingHorizontal: 15}}>
      <Logo style={{marginBottom: 20}} />
      <LinearProgress color="white"  variant="determinate"  value={2} />
        <Text style={styles.title}>Finance</Text>
         { 
          financeList.map((item, i) => (
            <ListItem  
              Component={TouchableScale}
              friction={95} //
              tension={100} // These props are passed to the parent component (here TouchableScale)
              activeScale={0.85} //
              key={i} bottomDivider 
              style = {styles.component}
              > 
                {/* add icons  */}
                <ListItem.Content style={styles.component}>
                  <ListItem.Title>{item.title}</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron/> 
            </ListItem> 
            ))
          }
        <Text style={styles.title}>Resources</Text>
          {
           resourceList.map((item, i) => (
              <ListItem 
                Component={TouchableScale}
                friction={95} //
                tension={100} // These props are passed to the parent component (here TouchableScale)
                activeScale={0.85} //
                key={i} bottomDivider
                style = {styles.component}>
                  <ListItem.Content style={styles.component}>
                    <ListItem.Title>{item.title}</ListItem.Title>
                  </ListItem.Content>
                  <ListItem.Chevron />
              </ListItem>
              ))
           }

        <Text style={styles.title}>Admin</Text>
          {
            adminList.map((item, i) => (
                <ListItem
                Component={TouchableScale}
                friction={95} //
                tension={100} // These props are passed to the parent component (here TouchableScale)
                activeScale={0.85} //
                key={i} bottomDivider
                style = {styles.component}
                >
                  <ListItem.Content style={styles.component}>
                    <ListItem.Title>{item.title}</ListItem.Title>
                  </ListItem.Content>
                  <ListItem.Chevron />
                </ListItem>
                ))
          }    
  </ScrollView>
</SafeAreaView>
);
}

const styles = StyleSheet.create({
  title: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#1A1C1E',
    color: 'white',
  },
  background: {
    flex: 1,
    backgroundColor: 'black',
  },
  component: {
    borderTopLeftRadius: 5, 
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5, 
    borderBottomRightRadius: 5,
    overflow: "hidden"
  }
});