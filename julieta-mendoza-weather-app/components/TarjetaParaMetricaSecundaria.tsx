import { View, Text } from 'react-native';

export const TarjetaParaMetricaSecundaria = ({
  nombre,
  valor,
  unidad,
}: {
  nombre: string;
  valor: number | string;
  unidad: string;
}) => {
  return (
    <View className="mx-2 w-28 items-center rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
      <Text className="mb-2 text-xs font-bold uppercase tracking-widest text-gray-400">
        {nombre}
      </Text>
      <Text className="text-xl font-semibold text-gray-800">
        {valor}
        <Text className="text-sm text-gray-500">{unidad}</Text>
      </Text>
    </View>
  );
};
