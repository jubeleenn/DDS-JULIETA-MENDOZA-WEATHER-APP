import { View, Text } from 'react-native';

export const SeccionParaTemperaturasMinMax = ({ maxima, minima }: { maxima: number, minima: number }) => {
  return (
    <View className="flex-row mt-2 space-x-4">
  <Text testID="temp-max" className="text-xl text-gray-600 font-semibold">Max: {maxima}°</Text>
  <Text testID="temp-min" className="text-xl text-gray-500">Min: {minima}°</Text>
</View>
  );
};