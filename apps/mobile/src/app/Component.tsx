import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { useTailwind } from 'tailwind-rn';

export const Component = () => {
  const tailwind = useTailwind();

  return (
    <SafeAreaView
      style={tailwind(
        'h-full w-full bg-blue-300 flex items-center justify-center'
      )}
    >
      <Text style={tailwind('font-bold text-black text-4xl')}>Example</Text>
    </SafeAreaView>
  );
};
