import React from 'react';
import { useColorScheme } from 'react-native';
import { View, Text, TouchableOpacity, StyleSheet, Pressable } from 'react-native';
import { Link } from 'expo-router';


export default function TabOneScreen() {
  const menuItems = [
    { label: 'Project 1: Hello World!', screen: '/project1' },
    { label: 'Project 2: Handling Button Taps', screen: '/project2' },
    { label: 'Project 3: Custom Button Component', screen: '/project3' },
    { label: 'Project 4: State & Props', screen: '/project4' },
    { label: 'Project 5: Styling with Flexbox', screen: '/project5' },
    { label: 'Project 6: Scrollable Views', screen: '/project6' },
    { label: 'Project 7: Building a Form', screen: '/project7' },
    { label: 'Project 8: FlatList for Long Data', screen: '/project8' },
    { label: 'Project 9: SectionList with Grouped Data', screen: '/project9' },
    { label: 'Project 10: Mini App Challenge', screen: '/project10' }] as const;

  return (
    <View style={styles.container}>
      {menuItems.map((item, index) => (
        <View key={index} style={styles.menuItem}>
          <TouchableOpacity>
            <Link key={index} href={item.screen as any}>
              <Text style={styles.menuText}>{item.label}</Text>
            </Link>
          </TouchableOpacity>
        </View>
      ))}
    </View>
    
  );

}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  menuItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  menuText: {
    fontSize: 18,
  },
});
