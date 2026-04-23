import { Text } from 'react-native';

export const TextoParaCiudad = ({ nombreCiudad }: { nombreCiudad: string }) => {
  return (
    <Text className="mt-4 text-3xl font-extrabold tracking-widest text-gray-900">
      {nombreCiudad}
    </Text>
  );
};
