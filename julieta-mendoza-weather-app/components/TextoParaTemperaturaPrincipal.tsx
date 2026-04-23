import { Text } from 'react-native';

export const TextoParaTemperaturaPrincipal = ({
  temperaturaActual,
}: {
  temperaturaActual: number;
}) => {
  return (
    <Text className="my-2 text-9xl font-light tracking-tighter text-black">
      {temperaturaActual}°
    </Text>
  );
};
