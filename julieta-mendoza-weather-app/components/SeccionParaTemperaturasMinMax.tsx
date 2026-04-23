import { View, Text } from 'react-native';

export const SeccionParaTemperaturasMinMax = ({
  maxima,
  minima,
}: {
  maxima: number;
  minima: number;
}) => {
  return (
    <View className="mt-2 flex-row gap-6">
      <Text className="text-lg font-medium text-gray-500">Min: {minima}°</Text>
      <Text className="text-lg font-medium text-gray-500">Max: {maxima}°</Text>
    </View>
  );
};
