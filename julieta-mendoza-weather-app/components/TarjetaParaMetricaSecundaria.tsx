import { View, Text } from 'react-native';

export const TarjetaParaMetricaSecundaria = ({ nombre, valor, unidad }: { nombre: string, valor: string | number, unidad: string }) => {
  return (
   
    <View className="items-center bg-white/20 p-5 rounded-3xl mx-2 border border-white/50 overflow-hidden">
      
      <Text className="text-xs text-indigo-800 font-medium uppercase tracking-widest">{nombre}</Text>
      
      <View testID="metric-item" className="items-center bg-white/20 p-5 rounded-3xl mx-2 border border-white/50 overflow-hidden">
        {valor}<Text className="text-lg text-indigo-700 font-normal">{unidad}</Text>
      </View>
    </View>
  );
};