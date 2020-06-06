import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NavBarWeb from './NavBar/NavBarWeb';
import MenuItems from './NavBar/MenuItems';
const NavCondition = () => {
  return (
    <View>
      <NavBarWeb />
      <MenuItems />
    </View>
  );
};

export default NavCondition;
