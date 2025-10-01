import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

interface AvatarProps {
  uri?: string;
  size?: number;
  showEditButton?: boolean;
  onPress?: () => void;
  placeholder?: string;
}

const Avatar: React.FC<AvatarProps> = ({
  uri,
  size = 80,
  showEditButton = false,
  onPress,
  placeholder,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={[
          styles.avatar, 
          { width: size, height: size, borderRadius: size / 2 },
        ]}
        onPress={onPress}
        disabled={!onPress}
      >
        {uri ? (
          <Image
            source={{ uri }}
            style={[
              styles.image, 
              { width: size, height: size, borderRadius: size / 2 },
            ]}
            resizeMode="cover"
          />
        ) : (
          <View style={[
            styles.placeholder, 
            { width: size, height: size, borderRadius: size / 2 },
          ]}>
            <Text style={styles.placeholderText}>{placeholder || '?'}</Text>
          </View>
        )}

        {showEditButton && (
          <View style={styles.editButton}>
            <Text style={styles.editButtonText}>✎</Text>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    backgroundColor: '#f0f0f0',
    position: 'relative',
    overflow: 'hidden',
  },
  image: {
    resizeMode: 'cover',
  },
  placeholder: {
    backgroundColor: '#e1e1e1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeholderText: {
    fontSize: 28,
    color: '#666',
  },
  editButton: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#FB8328',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'white',
  },
  editButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default Avatar;
