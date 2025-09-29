import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Dimensions,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import ClarityEyeHideLine from '../components/ClarityEyeHideLine';

const { width, height } = Dimensions.get('window');

type RegisterScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Register'>;

const RegisterScreen: React.FC = () => {
  const navigation = useNavigation<RegisterScreenNavigationProp>();
  const [name, setName] = React.useState('');
  const [age, setAge] = React.useState('');
  const [nationality, setNationality] = React.useState('');
  const [passport, setPassport] = React.useState('');
  const [destination, setDestination] = React.useState('');
  const [checkin, setCheckin] = React.useState('');
  const [checkout, setCheckout] = React.useState('');
  const [emergency, setEmergency] = React.useState('');
  const [contact, setContact] = React.useState('');
  const [id, setId] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(false);

  const handleRegister = () => {
    console.log('Register pressed', {
      name,
      age,
      nationality,
      passport,
      destination,
      checkin,
      checkout,
      emergency,
      contact,
      id,
      password,
    });
    // Navigate to home screen after successful registration
    navigation.navigate('Home');
  };

  const handleBackToLogin = () => {
    navigation.navigate('Login');
  };

  const renderInput = (
    label: string,
    value: string,
    onChangeText: (text: string) => void,
    placeholder: string,
    keyboardType: any = 'default',
    isPassword: boolean = false
  ) => (
    <View style={styles.inputContainer}>
      <Text style={styles.inputLabel}>{label}</Text>
      <View style={styles.inputFrame}>
        <TextInput
          style={styles.textInput}
          placeholder={placeholder}
          placeholderTextColor="rgba(188, 190, 192, 1)"
          value={value}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          autoCapitalize={label === 'Name' || label === 'Nationality' || label === 'Destination' || label === 'Emergency (Person Name)' ? 'words' : 'none'}
          secureTextEntry={isPassword && !showPassword}
        />
        {isPassword && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <ClarityEyeHideLine 
              width={20} 
              height={20} 
              color="rgba(188, 190, 192, 1)" 
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );

  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor="rgba(255, 195, 150, 0.7)" />
      
      {/* Background Rectangle */}
      <View style={styles.rectangle38} />
      
      {/* Main Form Container */}
      <View style={styles.frame2257}>
        <ScrollView 
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.frame2256}>
            <Text style={styles.register}>Register</Text>
            
            <View style={styles.formContainer}>
              {renderInput('Name', name, setName, 'Full Name')}
              {renderInput('Age', age, setAge, 'Age', 'numeric')}
              {renderInput('Nationality', nationality, setNationality, 'Nationality')}
              {renderInput('Passport', passport, setPassport, 'Passport Number')}
              {renderInput('Destination', destination, setDestination, 'Destination')}
              {renderInput('Check-in', checkin, setCheckin, 'DD/MM/YYYY')}
              {renderInput('Check-out', checkout, setCheckout, 'DD/MM/YYYY')}
              {renderInput('Emergency (Person Name)', emergency, setEmergency, 'Emergency Contact Name')}
              {renderInput('Contact', contact, setContact, 'Phone Number', 'phone-pad')}
              {renderInput('ID', id, setId, 'User ID')}
              {renderInput('Password', password, setPassword, 'Password', 'default', true)}
            </View>
            
            {/* Register Button */}
            <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
              <Text style={styles.registerButtonText}>Register</Text>
            </TouchableOpacity>
            <View style={styles.loginLinkContainer}>
              <Text style={styles.alreadyHaveAccount}>Already have an account? </Text>
              <TouchableOpacity onPress={handleBackToLogin}>
                <Text style={styles.signInLink}>Sign in</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: width,
    height: height,
    backgroundColor: 'rgba(255, 195, 150, 0.7019608020782471)',
  },
  rectangle38: {
    position: 'absolute',
    top: 32,
    left: (width - 355) / 2,
    width: 355,
    height: height - 64,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  frame2257: {
    position: 'absolute',
    top: 32,
    left: (width - 355) / 2,
    width: 355,
    height: height - 64,
    paddingTop: 40,
    paddingLeft: 42,
    paddingBottom: 40,
    paddingRight: 43,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderWidth: 2.134,
    borderStyle: 'solid',
    borderColor: 'rgba(88, 130, 193, 0.4901960790157318)',
    backgroundColor: 'rgba(0, 0, 0, 1)',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  frame2256: {
    width: 270,
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 25,
  },
  register: {
    color: 'rgba(251, 131, 40, 1)',
    fontFamily: 'Poppins-Bold',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: 'stretch',
    marginBottom: 10,
  },
  formContainer: {
    width: '100%',
    gap: 15,
  },
  inputContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 6,
  },
  inputLabel: {
    color: 'rgba(255, 255, 255, 1)',
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    fontWeight: '500',
  },
  inputFrame: {
    flexDirection: 'row',
    width: 250,
    height: 40,
    paddingTop: 8,
    paddingLeft: 16,
    paddingBottom: 8,
    paddingRight: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderWidth: 0.711,
    borderStyle: 'solid',
    borderColor: 'rgba(188, 190, 192, 1)',
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  textInput: {
    color: 'rgba(0, 0, 0, 1)',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    fontWeight: '400',
    flex: 1,
    padding: 0,
    minHeight: 20,
  },
  registerButton: {
    flexDirection: 'row',
    height: 48,
    paddingTop: 16,
    paddingLeft: 20,
    paddingBottom: 16,
    paddingRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    borderBottomLeftRadius: 7.115,
    borderBottomRightRadius: 7.115,
    borderTopLeftRadius: 7.115,
    borderTopRightRadius: 7.115,
    backgroundColor: 'rgba(251, 131, 40, 1)',
    marginTop: 15,
  },
  registerButtonText: {
    color: 'rgba(255, 255, 255, 1)',
    fontFamily: 'Poppins-Bold',
    fontSize: 15,
    fontWeight: 'bold',
  },
  backToLogin: {
    alignSelf: 'stretch',
    color: 'rgba(255, 255, 255, 1)',
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
    fontWeight: '400',
    marginTop: 10,
  },
  loginLinkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 10,
  },
  alreadyHaveAccount: {
    color: 'rgba(255, 255, 255, 1)',
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
    fontWeight: '400',
  },
  signInLink: {
    color: 'rgba(251, 131, 40, 1)',
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
    fontWeight: '400',
    textDecorationLine: 'none',
  },
});

export default RegisterScreen;
