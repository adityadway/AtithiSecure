import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Dimensions,
  TextInput,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

const { width, height } = Dimensions.get('window');

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const handleLogout = () => {
    navigation.navigate('Login');
  };

  const handleSOS = () => {
    console.log('SOS pressed - Emergency alert triggered!');
  };

  const handleMapPress = () => {
    console.log('Map pressed');
  };

  const handleTranslatePress = () => {
    console.log('Translate pressed');
  };

  const handleMeshPress = () => {
    console.log('Mesh pressed');
  };

  const handleEmergencyCall = (type: string) => {
    console.log(`Emergency call to ${type}`);
  };

  const handleSubmitReport = () => {
    console.log('Report submitted');
  };

  // State for location image
  const [currentLocation, setCurrentLocation] = React.useState('Jaipur');
  
  // Function to change location
  const handleLocationChange = (location: string) => {
    setCurrentLocation(location);
    console.log(`Location changed to: ${location}`);
  };
  
  // Function to open profile
  const handleProfilePress = () => {
    console.log('Profile pressed');
  };
  
  // Function to view notifications
  const handleNotificationPress = () => {
    console.log('Notifications pressed');
  };

  return (
    <View style={styles.root}>
      <StatusBar barStyle="dark-content" backgroundColor="rgba(239, 239, 239, 1)" />
      
      <ScrollView 
        style={styles.scrollView} 
        showsVerticalScrollIndicator={false}>
        
        {/* Location Image with Header Controls */}
        <View style={styles.locationImageContainer}>
          {/* Image placeholder - would be dynamically changed based on location */}
          <View style={styles.locationImagePlaceholder}>
            <Text style={styles.locationImageText}>{currentLocation}</Text>
          </View>
          
          {/* Header Controls Overlay */}
          <View style={styles.headerControls}>
            {/* Location Selector */}
            <TouchableOpacity 
              style={styles.locationSelector} 
              onPress={() => handleLocationChange(currentLocation === 'Jaipur' ? 'Udaipur' : 'Jaipur')}
              activeOpacity={0.6}
            >
              <Text style={{fontSize: 16}}>📍</Text>
              <Text style={styles.locationSelectorText}>{currentLocation}</Text>
              <Text style={{fontSize: 14, marginLeft: 4, color: 'rgba(251, 131, 40, 1)'}}>▼</Text>
            </TouchableOpacity>
            
            {/* Right Side Controls */}
            <View style={styles.rightControls}>
              <TouchableOpacity style={styles.iconButton} onPress={handleNotificationPress}>
                <Text style={styles.controlIcon}>🔔</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton} onPress={handleProfilePress}>
                <Text style={styles.controlIcon}>👤</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* Main Content Container with padding */}
        <View style={styles.mainContent}>
          {/* Search Bar */}
          <View style={styles.searchBar}>
          <View style={styles.searchContainer}>
            <View style={[styles.searchInput, styles.fullWidthSearch]}>
              <Text style={styles.searchPlaceholder}>🔍 Search Destination</Text>
            </View>
          </View>
        </View>

        {/* Nearby Emergency Contacts */}
        <View style={styles.nearby}>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Nearby Emergency Contacts</Text>
            
            {/* Police Station */}
            <TouchableOpacity 
              style={styles.emergencyItem} 
              onPress={() => handleEmergencyCall('Police')}
            >
              <View style={styles.emergencyIcon}>
                <Text style={styles.iconText}>🚔</Text>
              </View>
              <Text style={styles.emergencyText}>Police Station, Sanganer</Text>
              <View style={styles.avatarPlaceholder} />
              <TouchableOpacity style={styles.callButton}>
                <Text style={styles.callIcon}>📞</Text>
              </TouchableOpacity>
            </TouchableOpacity>

            {/* Tourist Department */}
            <TouchableOpacity 
              style={styles.emergencyItem}
              onPress={() => handleEmergencyCall('Tourist Department')}
            >
              <View style={styles.emergencyIcon}>
                <Text style={styles.iconText}>🏛️</Text>
              </View>
              <Text style={styles.emergencyText}>Tourist Department, Jaipur</Text>
              <View style={styles.avatarPlaceholder} />
              <TouchableOpacity style={styles.callButton}>
                <Text style={styles.callIcon}>📞</Text>
              </TouchableOpacity>
            </TouchableOpacity>

            {/* Hospital */}
            <TouchableOpacity 
              style={styles.emergencyItem}
              onPress={() => handleEmergencyCall('Hospital')}
            >
              <View style={styles.emergencyIcon}>
                <Text style={styles.iconText}>🏥</Text>
              </View>
              <Text style={styles.emergencyText}>SMS Hospital, Jaipur</Text>
              <View style={styles.avatarPlaceholder} />
              <TouchableOpacity style={styles.callButton}>
                <Text style={styles.callIcon}>📞</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
        </View>

        {/* Report Incident Section */}
        <View style={styles.reportSection}>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Report Incident</Text>
            
            {/* Incident Type */}
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Incident Type</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.textInput}
                  placeholder="Write your Incident"
                  placeholderTextColor="rgba(161, 155, 155, 1)"
                />
              </View>
            </View>

            {/* Description */}
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Description</Text>
              <View style={styles.textAreaContainer}>
                <TextInput
                  style={styles.textArea}
                  placeholder="Description about Incident"
                  placeholderTextColor="rgba(161, 155, 155, 1)"
                  multiline
                  numberOfLines={6}
                  textAlignVertical="top"
                />
              </View>
            </View>

            {/* Submit Button */}
            <TouchableOpacity style={styles.submitButton} onPress={handleSubmitReport}>
              <Text style={styles.submitText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Alert Signals Section */}
        <View style={styles.alertSection}>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Alert Signals</Text>
            <View style={styles.alertContent}>
              <Text style={styles.alertText}>
                Hawa Mahal museum visiting hours are typically 9:00 AM to 5:00 PM; plan entry before last admission time.{'\n\n'}
                Amer (Amber) Fort day entry commonly operates around 8:00 AM to 5:30 PM; evening sound-and-light shows run later.{'\n\n'}
                Jal Mahal is viewed from the lakeside promenade; entry inside the palace is restricted, viewing usually between 6:00 AM and 6:00 PM.
              </Text>
            </View>
          </View>
        </View>

        {/* Bottom spacing for navigation */}
        <View style={styles.bottomSpacing} />
        </View>
      </ScrollView>

      {/* Bottom Navigation Bar */}
      <View style={styles.navBar}>
        {/* Home */}
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>🏠</Text>
          <Text style={[styles.navText, styles.activeNavText]}>Home</Text>
        </TouchableOpacity>

        {/* Map */}
        <TouchableOpacity style={styles.navItem} onPress={handleMapPress}>
          <Text style={styles.navIcon}>🗺️</Text>
          <Text style={styles.navText}>Map</Text>
        </TouchableOpacity>

        {/* Empty space for floating SOS button */}
        <View style={styles.sosSpacing} />

        {/* Mesh */}
        <TouchableOpacity style={styles.navItem} onPress={handleMeshPress}>
          <Text style={styles.navIcon}>📶</Text>
          <Text style={styles.navText}>Mesh</Text>
        </TouchableOpacity>

        {/* Translate */}
        <TouchableOpacity style={styles.navItem} onPress={handleTranslatePress}>
          <Text style={styles.navIcon}>🌐</Text>
          <Text style={styles.navText}>Translate</Text>
        </TouchableOpacity>
      </View>

      {/* Floating 3D SOS Button */}
      <TouchableOpacity 
        style={styles.floatingSosButton} 
        onPress={handleSOS}
        activeOpacity={0.7}
      >
        <View style={styles.sosOuterCircle}>
          <View style={styles.sosMiddleCircle}>
            <View style={styles.sosInnerCircle}>
              <Text style={styles.sosText}>SOS</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'rgba(239, 239, 239, 1)',
  },
  locationImageContainer: {
    width: '100%',
    height: 200,
    backgroundColor: 'rgba(200, 200, 200, 1)',
    position: 'relative',
  },
  locationImagePlaceholder: {
    width: '100%',
    height: '120%',
    backgroundColor: 'rgba(180, 180, 180, 1)',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  locationImageText: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
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
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  locationSelector: {
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 22,
    maxWidth: 160,
    shadowColor: 'rgba(0, 0, 0, 0.4)',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.9,
    shadowRadius: 5,
    elevation: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(251, 131, 40, 0.3)',
  },
  locationSelectorText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
    fontWeight: '700',
    color: 'rgba(0, 0, 0, 0.8)',
    marginLeft: 2,
  },
  rightControls: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  iconButton: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.3)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 5,
  },
  controlIcon: {
    fontSize: 18,
  },
  scrollView: {
    flex: 1,
  },
  bgPlaceholder: {
    height: 10,
    backgroundColor: 'transparent',
  },
  searchBar: {
    marginTop: 15,
    marginBottom: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    justifyContent: 'center', // Center the search bar
  },
  searchInput: {
    flex: 1,
    height: 50,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: 22,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 1)',
    justifyContent: 'center',
    paddingHorizontal: 16,
    maxWidth: '85%', // Reduce width to 85% of the container
  },
  fullWidthSearch: {
    width: '85%', // Override with specific width instead of 100%
  },
  searchPlaceholder: {
    color: 'rgba(161, 155, 155, 1)',
    fontFamily: 'Poppins-Bold',
    fontSize: 12,
    fontWeight: '700',
  },
  nearby: {
    marginBottom: 20,
  },
  sectionContainer: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 1)',
    padding: 16,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 4,
  },
  sectionTitle: {
    color: 'rgba(0, 0, 0, 1)',
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 16,
  },
  emergencyItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(230, 224, 224, 1)',
    borderRadius: 10,
    padding: 12,
    marginBottom: 8,
    gap: 12,
  },
  emergencyIcon: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContent: {
    paddingHorizontal: 12,
  },
  iconText: {
    fontSize: 20,
  },
  emergencyText: {
    flex: 1,
    color: 'rgba(0, 0, 0, 1)',
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
    fontWeight: '700',
  },
  avatarPlaceholder: {
    width: 37,
    height: 37,
    backgroundColor: 'rgba(200, 200, 200, 1)',
    borderRadius: 18.5,
  },
  callButton: {
    padding: 8,
  },
  callIcon: {
    fontSize: 20,
  },
  reportSection: {
    marginBottom: 20,
  },
  inputGroup: {
    marginBottom: 16,
  },
  inputLabel: {
    color: 'rgba(0, 0, 0, 1)',
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 8,
  },
  inputContainer: {
    backgroundColor: 'rgba(230, 224, 224, 1)',
    borderRadius: 20,
    padding: 16,
  },
  textInput: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: 20,
    padding: 12,
    fontFamily: 'Poppins-Bold',
    fontSize: 12,
    fontWeight: '700',
    color: 'rgba(0, 0, 0, 1)',
  },
  textAreaContainer: {
    backgroundColor: 'rgba(230, 224, 224, 1)',
    borderRadius: 20,
    padding: 16,
  },
  textArea: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: 20,
    padding: 12,
    fontFamily: 'Poppins-Bold',
    fontSize: 12,
    fontWeight: '700',
    color: 'rgba(0, 0, 0, 1)',
    minHeight: 120,
  },
  submitButton: {
    backgroundColor: 'rgba(251, 131, 40, 1)',
    borderRadius: 25,
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  submitText: {
    color: 'rgba(255, 255, 255, 1)',
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    fontWeight: '700',
  },
  alertSection: {
    marginBottom: 20,
  },
  alertContent: {
    backgroundColor: 'rgba(230, 224, 224, 1)',
    borderRadius: 20,
    padding: 16,
  },
  alertText: {
    color: 'rgba(0, 0, 0, 1)',
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 20,
  },
  bottomSpacing: {
    height: 100,
  },
  navBar: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    height: 80,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingHorizontal: 16,
    borderTopWidth: 1,
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    borderTopColor: 'rgba(230, 230, 230, 1)',
  },
  sosSpacing: {
    width: 100,
    height: 60,
  },
  floatingSosButton: {
    position: 'absolute',
    bottom: 20,
    left: '50%',
    marginLeft: -45,
    zIndex: 1000,
  },
  sosOuterCircle: {
    width: 90,
    height: 90,
    borderRadius: 42,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sosMiddleCircle: {
    width: 78,
    height: 78,
    borderRadius: 39,
    backgroundColor: 'rgba(220, 20, 20, 1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sosInnerCircle: {
    width: 68,
    height: 68,
    borderRadius: 34,
    backgroundColor: 'rgba(255, 0, 0, 1)',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'rgba(255, 20, 20, 0.6)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 8,
    borderWidth: 1,
    borderColor: 'rgba(255, 50, 50, 1)',
    position: 'relative',
  },
  sosGlow: {
    position: 'absolute',
    width: 74,
    height: 74,
    borderRadius: 37,
    backgroundColor: 'transparent',
    shadowColor: 'rgba(255, 0, 0, 0.8)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 15,
    elevation: 5,
  },
  sosRipple: {
    position: 'absolute',
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: 'rgba(255, 0, 0, 0.3)',
    top: -10,
    left: -10,
    backgroundColor: 'transparent',
  },
  sosButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  sosCircle: {
    width: 68,
    height: 68,
    backgroundColor: 'rgba(255, 0, 0, 1)',
    borderRadius: 34,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
    shadowColor: 'rgba(0, 0, 0, 0.3)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 8,
  },
  sosText: {
    color: 'rgba(255, 255, 255, 1)',
    fontFamily: 'Inter',
    fontSize: 24,
    fontWeight: '700',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 50,
    flex: 1,
  },
  navIcon: {
    fontSize: 16,
    marginBottom: 4,
  },
  navText: {
    color: 'rgba(0, 0, 0, 1)',
    fontFamily: 'Poppins-Bold',
    fontSize: 11,
    fontWeight: '700',
  },
  activeNavText: {
    color: 'rgba(251, 131, 40, 1)',
  },
});

export default HomeScreen;
