import * as React from "react";
import { View, Text, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

type DetailScreenProps = {
    navigation: StackNavigationProp<any, 'Detail'>;
};

const Details: React.FC<DetailScreenProps> = ({ navigation }) => {
  return (
    <View>
      <Text>This is the Details screen.</Text>
      <Button
        title="Go to second Details"
        onPress={() => navigation.navigate('SecondDetails')}
      />
    </View>
  );
}

export default Details;