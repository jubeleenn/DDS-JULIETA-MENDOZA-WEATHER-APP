import { View, Text } from 'react-native';

export const TarjetaParaMetricaSecundaria = ({ nombre, valor, unidad }: { nombre: string, valor: string | number, unidad: string }) => {
  return (
    <View testID="metric-item" className="items-center bg-white/20 p-5 rounded-3xl mx-2 border border-white/50 overflow-hidden">
      
      <Text className="text-xs text-indigo-800 font-medium uppercase tracking-widest">{nombre}</Text>
      
      <View className="flex-row items-end mt-2">
        <Text testID={`metrica-${nombre.toLowerCase()}`} className="text-3xl font-bold text-indigo-900">
          {valor}
        </Text>
        <Text className="text-lg text-indigo-700 font-normal ml-1 mb-1">
          {unidad}
        </Text>
      </View>
      
    </View>
  );
};