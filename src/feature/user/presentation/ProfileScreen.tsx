import { useObservable, usePresenter } from 'flexdi/react-native'
import React, { useCallback } from 'react'
import { ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ProfileScreenPresenter } from '../domain/ProfileScreenPresenter'

const ProfileScreen = () => {
  const presenter = usePresenter(ProfileScreenPresenter)
  const user = useObservable(presenter.getUser(), null)
  const isLoading = useObservable(presenter.getIsLoading(), true)
  const error = useObservable(presenter.getError(), null)

  const handleRetry = useCallback(() => {
    presenter.loadUser()
  }, [presenter])

  if (isLoading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size='large' color='#0000ff' />
        <Text style={{marginTop: 10}}>Profile loading...</Text>
      </View>
    )
  }

  if (error) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.errorText}>{error}</Text>
        <TouchableOpacity style={styles.retryButton} onPress={handleRetry}>
          <Text style={styles.retryButtonText}>Retry</Text>
        </TouchableOpacity>
      </View>
    )
  }

  if (!user) {
    return (
      <View style={styles.centerContainer}>
        <Text>User profile not found</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{uri: user.avatar}}
          style={styles.avatar}
        />
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.email}>{user.email}</Text>
      </View>

      <View style={styles.stats}>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{user.stats.posts}</Text>
          <Text style={styles.statLabel}>Public</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{user.stats.followers}</Text>
          <Text style={styles.statLabel}>Followers</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{user.stats.following}</Text>
          <Text style={styles.statLabel}>Follow</Text>
        </View>
      </View>

      <View style={styles.bioContainer}>
        <Text style={styles.bioTitle}>About</Text>
        <Text style={styles.bio}>{user.bio}</Text>
      </View>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => presenter.onBackButtonClick()}
      >
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    paddingVertical: 15,
    marginTop: 1,
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
  },
  bioContainer: {
    backgroundColor: 'white',
    padding: 15,
    marginTop: 10,
  },
  bioTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bio: {
    fontSize: 16,
    lineHeight: 24,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  retryButton: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
  },
  retryButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  backButton: {
    margin: 20,
    alignSelf: 'center',
  },
  backButtonText: {
    fontSize: 16,
    color: '#007AFF',
  },
})

export default ProfileScreen
