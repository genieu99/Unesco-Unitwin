import * as React from "react";
import { View, Text } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

type SecondDetailScreenProps = {
  navigation: StackNavigationProp<any, 'SecondDetail'>;
};

const SecondDetailScreen: React.FC<SecondDetailScreenProps> = ({ navigation }) => {
  return (
    <View>
      <Text>This is the second Details screen.</Text>
    </View>
  );
}

export default SecondDetailScreen;