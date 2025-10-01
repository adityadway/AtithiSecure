import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Dimensions,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import ClarityEyeHideLine from '../components/ClarityEyeHideLine';

const { width, height } = Dimensions.get('window');

type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

const LoginScreen: React.FC = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(false);

  const handleLogin = () => {
    console.log('Login pressed', { email, password });
    
    // Temporary credentials check
    if (email === 'admin@atithi.com' && password === 'admin123') {
      console.log('Login successful - redirecting to Dashboard');
      navigation.navigate('Dashboard');
    } else {
      console.log('Invalid credentials - please use admin@atithi.com / admin123');
      alert('Invalid credentials!\n\nUse these temporary credentials:\nEmail: admin@atithi.com\nPassword: admin123');
    }
  };

  const handleForgotPassword = () => {
    console.log('Forgot password pressed');
  };

  const handleSignUp = () => {
    console.log('Sign up pressed');
    navigation.navigate('Register');
  };

  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor="rgba(255, 195, 150, 0.7)" />
      
      {/* Background Rectangle */}
      <View style={styles.rectangle38} />
      
      {/* Main Form Container */}
      <View style={styles.frame2257}>
        <View style={styles.frame2256}>
          <Text style={styles.login}>Login</Text>
          
          <View style={styles.group2250}>
            {/* Email Input */}
            <View style={styles.frame4}>
              <Text style={styles.email}>Email</Text>
              <View style={styles.frame1}>
                <TextInput
                  style={styles.usernameGmailCom}
                  placeholder="username@gmail.com"
                  placeholderTextColor="rgba(188, 190, 192, 1)"
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </View>
            </View>
            
            <TouchableOpacity onPress={handleForgotPassword}>
              <Text style={styles.forgotPassword}>Forgot Password?</Text>
            </TouchableOpacity>
            
            {/* Password Input */}
            <View style={styles.frame3}>
              <Text style={styles.password}>Password</Text>
              <View style={styles.frame2}>
                <TextInput
                  style={styles.password2}
                  placeholder="Password"
                  placeholderTextColor="rgba(188, 190, 192, 1)"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!showPassword}
                />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                  <ClarityEyeHideLine 
                    width={20} 
                    height={20} 
                    color="rgba(188, 190, 192, 1)" 
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          
          {/* Sign In Button */}
          <TouchableOpacity style={styles.frame5} onPress={handleLogin}>
            <Text style={styles.signIn}>Sign in</Text>
          </TouchableOpacity>
          
          <View style={styles.registerLinkContainer}>
            <Text style={styles.dontHaveAccount}>Don't have an account yet? </Text>
            <TouchableOpacity onPress={handleSignUp}>
              <Text style={styles.registerLink}>Register now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      
      {/* Logo and Text Row */}
      <View style={styles.logoRow}>
        <Text style={styles.atithi}>Atithi</Text>
        <Image 
          source={require('../../assets/images/logo.png')}
          style={styles.logoImage}
          resizeMode="contain"
        />
        <Text style={styles.secure}>secure</Text>
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
    height: 779,
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
    paddingTop: 218,
    paddingLeft: 42,
    paddingBottom: 145,
    paddingRight: 43,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderWidth: 2.134,
    borderStyle: 'solid',
    borderColor: 'rgba(88, 130, 193, 0.4901960790157318)',
    backgroundColor: 'rgba(0, 0, 0, 1)',
  },
  frame2256: {
    width: 270,
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 43,
  },
  login: {
    color: 'rgba(251, 131, 40, 1)',
    fontFamily: 'Poppins-Bold',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: 'stretch',
  },
  group2250: {
    width: 250,
    height: 154.58,
  },
  frame4: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 8,
  },
  email: {
    color: 'rgba(255, 255, 255, 1)',
    fontFamily: 'Poppins-Medium',
    fontSize: 13,
    fontWeight: '500',
  },
  frame1: {
    flexDirection: 'row',
    width: 250,
    height: 40,
    paddingTop: 8,
    paddingLeft: 16,
    paddingBottom: 8,
    paddingRight: 16,
    alignItems: 'center',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderWidth: 0.711,
    borderStyle: 'solid',
    borderColor: 'rgba(188, 190, 192, 1)',
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  usernameGmailCom: {
    color: 'rgba(0, 0, 0, 1)',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    fontWeight: '500',
    flex: 1,
    padding: 0,
    minHeight: 20,
  },
  forgotPassword: {
    color: 'rgba(255, 255, 255, 1)',
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
    fontWeight: '500',
    textAlign: 'right',
    marginTop: 10,
  },
  frame3: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 8,
    marginTop: 15,
  },
  password: {
    color: 'rgba(255, 255, 255, 1)',
    fontFamily: 'Poppins-Medium',
    fontSize: 13,
    fontWeight: '500',
  },
  frame2: {
    flexDirection: 'row',
    width: 250,
    height: 40,
    paddingTop: 8,
    paddingLeft: 16,
    paddingBottom: 8,
    paddingRight: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderWidth: 0.711,
    borderStyle: 'solid',
    borderColor: 'rgba(188, 190, 192, 1)',
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  password2: {
    color: 'rgba(0, 0, 0, 1)',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    fontWeight: '400',
    flex: 1,
    padding: 0,
    minHeight: 20,
  },
  frame5: {
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
  },
  signIn: {
    color: 'rgba(255, 255, 255, 1)',
    fontFamily: 'Poppins-Bold',
    fontSize: 15,
    fontWeight: 'bold',
  },
  dontHaveAnAccountYetRegisterForFree: {
    alignSelf: 'stretch',
    color: 'rgba(255, 255, 255, 1)',
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
    fontWeight: '400',
  },
  registerLinkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 10,
  },
  dontHaveAccount: {
    color: 'rgba(255, 255, 255, 1)',
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
    fontWeight: '400',
  },
  registerLink: {
    color: 'rgba(251, 131, 40, 1)',
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
    fontWeight: '400',
    textDecorationLine: 'none',
  },
  logoRow: {
    position: 'absolute',
    top: 120,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logoImage: {
    width: 50,
    height: 62,
    marginHorizontal: 10,
  },
  atithi: {
    color: 'rgba(255, 255, 255, 1)',
    fontFamily: 'Kalam-Regular',
    fontSize: 40,
    fontWeight: '400',
  },
  secure: {
    color: 'rgba(255, 255, 255, 1)',
    fontFamily: 'Kalam-Regular',
    fontSize: 40,
    fontWeight: '400',
  },
});

export default LoginScreen;