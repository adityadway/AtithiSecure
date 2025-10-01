import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  TextInput, 
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
  ActivityIndicator
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ProfileIcon from '../../assets/profile.svg';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProfileEditModal from '../components/ProfileEditModal';
import Header from '../components/Header';
import Avatar from '../components/Avatar';
import { useNavigation } from '@react-navigation/native';

// Profile item types
interface ProfileItem {
  id: string;
  label: string;
  value: string;
  icon?: React.ReactNode;
  isEditing: boolean;
  keyboardType?: 'default' | 'numeric' | 'email-address' | 'phone-pad';
  multiline?: boolean;
}

const PROFILE_STORAGE_KEY = '@atithi_secure_profile';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [activeItem, setActiveItem] = useState<ProfileItem | null>(null);
  const [hasChanges, setHasChanges] = useState(false);
  
  // Profile data state
  const [profileItems, setProfileItems] = useState<ProfileItem[]>([
    { id: 'name', label: 'Full Name', value: '', isEditing: false },
    { id: 'phone', label: 'Phone Number', value: '', isEditing: false, keyboardType: 'phone-pad' },
    { id: 'bloodGroup', label: 'Blood Group', value: '', isEditing: false },
    { id: 'emergencyContact', label: 'Emergency Contact', value: '', isEditing: false, keyboardType: 'phone-pad' },
    { id: 'allergies', label: 'Allergies', value: '', isEditing: false, multiline: true },
    { id: 'medications', label: 'Current Medications', value: '', isEditing: false, multiline: true },
  ]);

  // Load saved profile data when the component mounts
  useEffect(() => {
    const loadProfileData = async () => {
      try {
        const savedProfile = await AsyncStorage.getItem(PROFILE_STORAGE_KEY);
        
        if (savedProfile !== null) {
          const parsedProfile = JSON.parse(savedProfile);
          
          // Update only the values, but keep the labels and other properties
          setProfileItems(prev => 
            prev.map(item => ({
              ...item,
              value: parsedProfile[item.id] || item.value
            }))
          );
        }
      } catch (error) {
        console.error('Failed to load profile data', error);
        Alert.alert('Error', 'Failed to load your profile information.');
      } finally {
        setLoading(false);
      }
    };
    
    loadProfileData();
  }, []);

  // Handle hardware back button
  useEffect(() => {
    // This would typically be where we'd add a hardware back button handler
    // for Android devices, but for now we'll just implement the UI-based back
    // button handling.
    
    return () => {
      // Cleanup function would remove any event listeners
    };
  }, [hasChanges, navigation]);

  // Function to open the edit modal for an item
  const openEditModal = (item: ProfileItem) => {
    setActiveItem(item);
    setModalVisible(true);
  };

  // Function to close the edit modal
  const closeEditModal = () => {
    setModalVisible(false);
    setActiveItem(null);
  };

  // Function to update an item value
  const updateValue = (newValue: string) => {
    if (activeItem) {
      setProfileItems(items => 
        items.map(item => 
          item.id === activeItem.id 
            ? { ...item, value: newValue } 
            : item
        )
      );
      setHasChanges(true);
    }
  };

  // Function to save all profile changes
  const saveProfile = async () => {
    // Check for required fields (name, phone, emergency contact)
    const requiredFields = ['name', 'phone', 'emergencyContact'];
    const missingFields = requiredFields.filter(fieldId => {
      const item = profileItems.find(item => item.id === fieldId);
      return !item || !item.value.trim();
    });
    
    if (missingFields.length > 0) {
      // Get the labels of missing fields
      const missingLabels = missingFields.map(fieldId => {
        const item = profileItems.find(item => item.id === fieldId);
        return item ? item.label : fieldId;
      }).join(', ');
      
      Alert.alert(
        'Missing Information',
        `Please fill in the following required fields: ${missingLabels}`,
        [
          {
            text: 'OK',
            style: 'default'
          },
          {
            text: 'Save Anyway',
            onPress: () => saveProfileData(),
            style: 'destructive'
          }
        ]
      );
      return;
    }
    
    // If all required fields are filled, proceed with saving
    saveProfileData();
  };
  
  // Actual function to save profile data
  const saveProfileData = async () => {
    try {
      // Convert profileItems to a simple object for storage
      const profileData = profileItems.reduce((acc, item) => {
        acc[item.id] = item.value;
        return acc;
      }, {} as Record<string, string>);
      
      // Save to AsyncStorage
      await AsyncStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(profileData));
      
      Alert.alert('Profile Saved', 'Your profile information has been updated.');
      
      // Reset changes flag
      setHasChanges(false);
      
      // Close any open edit forms
      setProfileItems(items => 
        items.map(item => ({ ...item, isEditing: false }))
      );
    } catch (error) {
      console.error('Failed to save profile data', error);
      Alert.alert('Error', 'Failed to save your profile information.');
    }
  };
  
  // Handle back button press when there are unsaved changes
  const handleBackPress = () => {
    if (hasChanges) {
      Alert.alert(
        'Unsaved Changes',
        'You have unsaved changes. Are you sure you want to leave?',
        [
          {
            text: 'Stay',
            style: 'cancel'
          },
          {
            text: 'Discard Changes',
            onPress: () => navigation.goBack(),
            style: 'destructive'
          },
          {
            text: 'Save & Exit',
            onPress: async () => {
              // Save and then navigate back if successful
              try {
                await saveProfileData();
                navigation.goBack();
              } catch (error) {
                console.error('Error saving profile before exit:', error);
                // Stay on the page if saving fails
              }
            }
          }
        ]
      );
    } else {
      navigation.goBack();
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header 
        title="Profile" 
        customBackAction={hasChanges ? handleBackPress : undefined}
      />
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        {loading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#FB8328" />
            <Text style={styles.loadingText}>Loading profile data...</Text>
          </View>
        ) : (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.profileHeader}>
            <Avatar 
              size={100}
              showEditButton={true}
              onPress={() => Alert.alert('Coming Soon', 'Profile image upload will be available in a future update.')}
              placeholder="JP"
            />
            <Text style={styles.headerTitle}>My Profile</Text>
            <Text style={styles.headerSubtitle}>Manage your personal information</Text>
          </View>

          <View style={styles.profileContainer}>
            <Text style={styles.sectionTitle}>Personal Information</Text>
            {profileItems.filter(item => 
              ['name', 'phone', 'bloodGroup'].includes(item.id)
            ).map((item) => (
              <View key={item.id} style={styles.itemContainer}>
                <TouchableOpacity 
                  style={styles.itemHeader}
                  onPress={() => openEditModal(item)}
                >
                  <View style={styles.labelContainer}>
                    {item.icon}
                    <Text style={styles.label}>{item.label}</Text>
                  </View>
                  
                  <View style={styles.valueContainer}>
                    <Text style={styles.value}>
                      {item.value || 'Not set'}
                    </Text>
                    <Text style={styles.arrow}>▶</Text>
                  </View>
                </TouchableOpacity>
              </View>
            ))}

            <Text style={[styles.sectionTitle, { marginTop: 20 }]}>Emergency Information</Text>
            {profileItems.filter(item => 
              ['emergencyContact', 'allergies', 'medications'].includes(item.id)
            ).map((item) => (
              <View key={item.id} style={styles.itemContainer}>
                <TouchableOpacity 
                  style={styles.itemHeader}
                  onPress={() => openEditModal(item)}
                >
                  <View style={styles.labelContainer}>
                    {item.icon}
                    <Text style={styles.label}>{item.label}</Text>
                  </View>
                  
                  <View style={styles.valueContainer}>
                    <Text style={styles.value}>
                      {item.value || 'Not set'}
                    </Text>
                    <Text style={styles.arrow}>▶</Text>
                  </View>
                </TouchableOpacity>
              </View>
            ))}
            
            {/* Modal for editing profile items */}
            {activeItem && (
              <ProfileEditModal
                isVisible={modalVisible}
                onClose={closeEditModal}
                onSave={updateValue}
                label={activeItem.label}
                value={activeItem.value}
                multiline={activeItem.multiline}
                keyboardType={activeItem.keyboardType}
              />
            )}
          </View>

          <TouchableOpacity 
            style={styles.mainSaveButton} 
            onPress={saveProfile}
          >
            <Text style={styles.mainSaveButtonText}>Save Profile</Text>
          </TouchableOpacity>
        </ScrollView>
        )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f6f6f6',
  },
  container: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#666',
  },
  scrollContainer: {
    padding: 20,
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 10,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#333',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  profileContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FB8328',
    marginBottom: 10,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  itemContainer: {
    marginBottom: 10,
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    marginLeft: 10,
  },
  valueContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  value: {
    fontSize: 16,
    color: '#666',
    marginRight: 8,
  },
  arrow: {
    fontSize: 14,
    color: '#999',
  },
  editingLabel: {
    fontSize: 14,
    color: '#4a90e2',
    fontWeight: '500',
  },
  editForm: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 5,
    marginTop: 5,
  },
  input: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    fontSize: 16,
  },
  saveButton: {
    backgroundColor: '#4a90e2',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  saveButtonText: {
    color: 'white',
    fontWeight: '500',
  },
  mainSaveButton: {
    backgroundColor: '#FB8328',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  mainSaveButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ProfileScreen;
