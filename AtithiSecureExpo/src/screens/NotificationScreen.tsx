import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

// Import Icons
import NotificationIcon from '../../assets/notification.svg';
import ProfileIcon from '../../assets/profile.svg';

type NotificationScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Notification'>;

// Mock notification data
const NOTIFICATIONS = [
  {
    id: '1',
    title: 'Emergency Alert',
    message: 'Emergency services have been notified of your location. Help is on the way.',
    time: '2 minutes ago',
    type: 'emergency',
    isRead: false,
  },
  {
    id: '2',
    title: 'Weather Warning',
    message: 'Heavy rain expected in your area. Please take necessary precautions when traveling.',
    time: '1 hour ago',
    type: 'weather',
    isRead: false,
  },
  {
    id: '3',
    title: 'Safety Update',
    message: 'Your safety status has been shared with your emergency contacts.',
    time: '3 hours ago',
    type: 'safety',
    isRead: true,
  },
];

const NotificationScreen = () => {
  const navigation = useNavigation<NotificationScreenNavigationProp>();

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleProfilePress = () => {
    navigation.navigate('Profile');
  };

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'emergency':
        return '🚨';
      case 'weather':
        return '🌧️';
      case 'safety':
        return '🛡️';
      default:
        return '🔔';
    }
  };

  const getNotificationColor = (type: string) => {
    switch (type) {
      case 'emergency':
        return '#FF4757';
      case 'weather':
        return '#3742FA';
      case 'safety':
        return '#2ED573';
      default:
        return '#FB8328';
    }
  };

  return (
    <View style={styles.root}>
      <StatusBar barStyle="dark-content" backgroundColor="rgba(239, 239, 239, 1)" />
      
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerBackground} />
        
        {/* Header Controls */}
        <View style={styles.headerControls}>
          {/* Back Button and Title */}
          <View style={styles.leftControls}>
            <TouchableOpacity 
              style={styles.backButton} 
              onPress={handleBackPress}
            >
              <Text style={styles.backIcon}>←</Text>
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Notifications</Text>
          </View>
          
          {/* Right Side Controls */}
          <View style={styles.rightControls}>
            <TouchableOpacity style={styles.iconButton}>
              <NotificationIcon width={25} height={25} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton} onPress={handleProfilePress}>
              <ProfileIcon width={40} height={40} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Main Content */}
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.mainContent}>
          {/* Notifications Count */}
          <View style={styles.countContainer}>
            <Text style={styles.countText}>
              {NOTIFICATIONS.filter(n => !n.isRead).length} new notifications
            </Text>
          </View>

          {/* Notifications List */}
          <View style={styles.notificationsContainer}>
            {NOTIFICATIONS.map((notification) => (
              <TouchableOpacity 
                key={notification.id}
                style={[
                  styles.notificationItem,
                  !notification.isRead && styles.unreadNotification
                ]}
                activeOpacity={0.7}
              >
                {/* Notification Icon */}
                <View style={[
                  styles.notificationIconContainer,
                  { backgroundColor: getNotificationColor(notification.type) }
                ]}>
                  <Text style={styles.notificationEmoji}>
                    {getNotificationIcon(notification.type)}
                  </Text>
                </View>

                {/* Notification Content */}
                <View style={styles.notificationContent}>
                  <View style={styles.notificationHeader}>
                    <Text style={styles.notificationTitle}>
                      {notification.title}
                    </Text>
                    <Text style={styles.notificationTime}>
                      {notification.time}
                    </Text>
                  </View>
                  
                  <Text style={styles.notificationMessage}>
                    {notification.message}
                  </Text>
                  
                  {!notification.isRead && (
                    <View style={styles.unreadDot} />
                  )}
                </View>
              </TouchableOpacity>
            ))}
          </View>

          {/* Empty State (if no notifications) */}
          {NOTIFICATIONS.length === 0 && (
            <View style={styles.emptyState}>
              <Text style={styles.emptyStateIcon}>🔔</Text>
              <Text style={styles.emptyStateTitle}>No Notifications</Text>
              <Text style={styles.emptyStateMessage}>
                You're all caught up! Check back later for updates.
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'rgba(239, 239, 239, 1)',
  },
  
  // Header Styles
  header: {
    width: '100%',
    height: 130,
    position: 'relative',
    overflow: 'hidden',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 130,
    backgroundColor: '#FB8328',
  },
  headerControls: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 45,
    zIndex: 10,
  },
  leftControls: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    shadowColor: 'rgba(0, 0, 0, 0.3)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 5,
  },
  backIcon: {
    fontSize: 20,
    color: '#FB8328',
    fontWeight: 'bold',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: 'white',
    fontFamily: 'Poppins-Bold',
  },
  rightControls: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  iconButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 20,
    shadowColor: 'rgba(0, 0, 0, 0.3)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 5,
  },

  // Main Content
  scrollView: {
    flex: 1,
  },
  mainContent: {
    flex: 1,
    padding: 16,
    paddingTop: 20,
  },
  
  // Count Container
  countContainer: {
    marginBottom: 20,
  },
  countText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FB8328',
    fontFamily: 'Poppins-SemiBold',
  },

  // Notifications Container
  notificationsContainer: {
    gap: 12,
  },
  notificationItem: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 16,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#f0f0f0',
  },
  unreadNotification: {
    borderLeftWidth: 4,
    borderLeftColor: '#FB8328',
    backgroundColor: '#fff8f5',
  },
  notificationIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  notificationEmoji: {
    fontSize: 24,
  },
  notificationContent: {
    flex: 1,
    position: 'relative',
  },
  notificationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 6,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#333',
    fontFamily: 'Poppins-Bold',
    flex: 1,
    marginRight: 8,
  },
  notificationTime: {
    fontSize: 12,
    color: '#999',
    fontFamily: 'Poppins-Regular',
  },
  notificationMessage: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    fontFamily: 'Poppins-Regular',
  },
  unreadDot: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FB8328',
  },

  // Empty State
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 60,
  },
  emptyStateIcon: {
    fontSize: 60,
    marginBottom: 16,
  },
  emptyStateTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#333',
    marginBottom: 8,
    fontFamily: 'Poppins-Bold',
  },
  emptyStateMessage: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
    maxWidth: 250,
    lineHeight: 20,
    fontFamily: 'Poppins-Regular',
  },
});

export default NotificationScreen;
