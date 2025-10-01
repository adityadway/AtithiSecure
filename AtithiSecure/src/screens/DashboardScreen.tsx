import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const DashboardScreen: React.FC = () => {
  const handleEmergencyPress = () => {
    console.log('Emergency button pressed');
  };

  const handleLocationPress = () => {
    console.log('Location services pressed');
  };

  const handleTranslatePress = () => {
    console.log('Translation pressed');
  };

  const handleBLEPress = () => {
    console.log('BLE services pressed');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Atithi Secure</Text>
          <Text style={styles.headerSubtitle}>Tourist Safety Dashboard</Text>
        </View>

        {/* Quick Actions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          
          <TouchableOpacity style={styles.emergencyButton} onPress={handleEmergencyPress}>
            <Text style={styles.emergencyButtonText}>🚨 Emergency Alert</Text>
            <Text style={styles.buttonSubtext}>Tap for immediate help</Text>
          </TouchableOpacity>

          <View style={styles.actionRow}>
            <TouchableOpacity style={styles.actionCard} onPress={handleLocationPress}>
              <Text style={styles.actionIcon}>📍</Text>
              <Text style={styles.actionTitle}>Location</Text>
              <Text style={styles.actionSubtext}>Share location</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionCard} onPress={handleTranslatePress}>
              <Text style={styles.actionIcon}>🌍</Text>
              <Text style={styles.actionTitle}>Translate</Text>
              <Text style={styles.actionSubtext}>Language help</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.actionRow}>
            <TouchableOpacity style={styles.actionCard} onPress={handleBLEPress}>
              <Text style={styles.actionIcon}>📡</Text>
              <Text style={styles.actionTitle}>Connect</Text>
              <Text style={styles.actionSubtext}>Find nearby help</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionCard}>
              <Text style={styles.actionIcon}>ℹ️</Text>
              <Text style={styles.actionTitle}>Info</Text>
              <Text style={styles.actionSubtext}>Tourist info</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Status Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Safety Status</Text>
          
          <View style={styles.statusCard}>
            <View style={styles.statusItem}>
              <Text style={styles.statusIcon}>🔒</Text>
              <View style={styles.statusInfo}>
                <Text style={styles.statusTitle}>Secure Connection</Text>
                <Text style={styles.statusSubtext}>Your data is protected</Text>
              </View>
              <View style={[styles.statusIndicator, styles.statusActive]} />
            </View>

            <View style={styles.statusItem}>
              <Text style={styles.statusIcon}>📡</Text>
              <View style={styles.statusInfo}>
                <Text style={styles.statusTitle}>BLE Network</Text>
                <Text style={styles.statusSubtext}>Searching for devices...</Text>
              </View>
              <View style={[styles.statusIndicator, styles.statusSearching]} />
            </View>

            <View style={styles.statusItem}>
              <Text style={styles.statusIcon}>🌐</Text>
              <View style={styles.statusInfo}>
                <Text style={styles.statusTitle}>Internet Connection</Text>
                <Text style={styles.statusSubtext}>Connected</Text>
              </View>
              <View style={[styles.statusIndicator, styles.statusActive]} />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContent: {
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
    paddingVertical: 20,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#666',
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  emergencyButton: {
    backgroundColor: '#FF4444',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  emergencyButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  buttonSubtext: {
    color: '#fff',
    fontSize: 14,
    opacity: 0.9,
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  actionCard: {
    backgroundColor: '#fff',
    flex: 1,
    marginHorizontal: 5,
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  actionIcon: {
    fontSize: 30,
    marginBottom: 10,
  },
  actionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  actionSubtext: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
  statusCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  statusItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  statusIcon: {
    fontSize: 24,
    marginRight: 15,
  },
  statusInfo: {
    flex: 1,
  },
  statusTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 2,
  },
  statusSubtext: {
    fontSize: 14,
    color: '#666',
  },
  statusIndicator: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  statusActive: {
    backgroundColor: '#4CAF50',
  },
  statusSearching: {
    backgroundColor: '#FF9800',
  },
});

export default DashboardScreen;
