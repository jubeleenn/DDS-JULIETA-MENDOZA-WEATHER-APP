import { Text } from 'react-native';

export const TextoParaCiudad = ({ nombreCiudad }: { nombreCiudad: string }) => {
  return (
    <Text testID="header-city" className="text-4xl font-bold text-center uppercase text-gray-800">
  {nombreCiudad}
</Text>
  );
};