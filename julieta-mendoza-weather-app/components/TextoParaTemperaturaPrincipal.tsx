import { Text } from 'react-native';

export const TextoParaTemperaturaPrincipal = ({ temperaturaActual }: { temperaturaActual: number }) => {
  return (
   <Text testID="temp-current" className="text-7xl font-bold text-gray-800 mt-4">
  {temperaturaActual}°
</Text>
  );
};