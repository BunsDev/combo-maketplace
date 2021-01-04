import React from 'react'
import { StyleSheet, View, FlatList } from 'react-native'

import ListItem from '../components/ListItem'
import Screen from '../components/Screen'
import colors from '../config/colors'
import Icon from '../components/Icon'
import ListItemSeparator from '../components/ListItemSeparator'

const menuItems = [
  { 
    title: 'my listing', 
    icon: {
      name: 'format-list-bulleted', 
      backgroundColor: colors.primary
    }
  },
  { 
    title: 'my messages', 
    icon: {
      name: 'email', 
      backgroundColor: colors.secondary
    }
  },
]

function AccountScreen() {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem 
          title="Piset"
          subTitle="Piset2cambo@gmail.com"
          image={require('../assets/piset.png')}
        />
      </View>
      <View style={styles.container}>
        <FlatList 
          data={menuItems}
          keyExtractor={item => item.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => 
            <ListItem 
              title={item.title}
              IconComponent={
                <Icon 
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          }
        />
      </View>
      <ListItem 
        title="Log Out"
        IconComponent={
          <Icon 
            name="logout"
            backgroundColor="#ffe66e"
          />
        }
      />
    </Screen>
  )
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light
  },
  container: {
    marginVertical: 20
  }
})

export default AccountScreen;