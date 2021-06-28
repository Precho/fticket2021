import React from 'react';
import {View} from 'react-native';
import {ActivityIndicator, Colors} from 'react-native-paper';
import theme from '../theme/theme';

const SpinnerComponent = ({stylingObject}) => {
  return (
    <View>
      <ActivityIndicator
        style={{...stylingObject}}
        animating={true}
        color={theme.secondaryColor}
        size={35}
      />
    </View>
  );
};

export default SpinnerComponent;
