import { useObservable, usePresenter } from 'flexdi/react-native'
import React, { useCallback } from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { HomeScreenPresenter } from '../domain/HomeScreenPresenter'
import { MenuItem } from '../domain/service/HomeService'

const HomeScreen = () => {
  const presenter = usePresenter(HomeScreenPresenter)
  const menuItems = useObservable(presenter.getMenuItems(), [])

  const handleNavigation = useCallback((id: number) => {
    presenter.onMenuItemClick(id)
  }, [presenter])

  const renderItem = ({item}: { item: MenuItem }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => handleNavigation(item.id)}
    >
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardDescription}>{item.description}</Text>
    </TouchableOpacity>
  )

  return (
    <View style={styles.container}>
      <Text style={styles.header}>FlexDI for React Native</Text>
      <Text style={styles.subtitle}>Demo app</Text>

      <FlatList
        data={menuItems}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.list}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 24,
    textAlign: 'center',
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
  },
})

export default HomeScreen
