import React from 'react';
import { Text } from 'react-native';
import defualtStyle from '../config/styles';

function AppText({children, style, ...otherProps}) {
  return (
    <Text style={[defualtStyle.text, style]}>{children}</Text>
  );
}

export default AppText;