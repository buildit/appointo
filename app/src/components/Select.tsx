import React, { memo } from 'react';
import { Picker, StyleSheet, View } from 'react-native';

import { theme } from '../core/theme';

type Props = React.ComponentProps<typeof Picker> & { errorText?: string };

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#8F8F8F',
    overflow: 'hidden',
    width: '100%',
    backgroundColor: 'white',
    marginVertical: 12
  },
  input: {
    backgroundColor: theme.colors.surface
  },
  error: {
    fontSize: 14,
    color: theme.colors.error,
    paddingHorizontal: 4,
    paddingTop: 4
  }
});

const Select = ({ errorText, children, ...props }: Props) => (
  <View style={styles.container}>
    <Picker {...props}>{children}</Picker>
    {errorText ? <Text style={styles.error}>{errorText}</Text> : null}
  </View>
);

export default memo(Select);
