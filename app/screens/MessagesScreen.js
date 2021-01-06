import React, { useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ListItem from '../components/lists/ListItem'; 
import ListItemDeleteAction from '../components/lists/ListItemDeleteAction';
import ListItemSeparator from '../components/lists/ListItemSeparator';
import Screen from '../components/Screen';

const initialMessages = [
  {
    id: 1,
    title: 'T1',
    description: 'D1',
    image: require('../assets/piset.png')
  },
  {
    id: 2,
    title: 'T1',
    description: 'D1',
    image: require('../assets/piset.png')
  }
]

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);
  
  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id))
  }

  return (
    <Screen>
      <FlatList 
        data={messages}
        keyExtractor={ messages => messages.id.toString() }
        renderItem={({item}) => 
          <ListItem 
            title={item.title} 
            subTitle={item.description} 
            image={item.image} 
            onPress={() => console.log()}
            renderRightActions={() => 
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            }
          />
        }
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: 'T1',
              description: 'D1',
              image: require('../assets/piset.png')
            }
          ])
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  
})

export default MessagesScreen;