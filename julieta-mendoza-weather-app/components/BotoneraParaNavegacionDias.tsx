import { View, Text, TouchableOpacity } from 'react-native';

interface Props {
  diaActual: string;
  alPresionarAnterior: () => void;
  alPresionarSiguiente: () => void;
}

export const BotoneraParaNavegacionDias = ({
  diaActual,
  alPresionarAnterior,
  alPresionarSiguiente,
}: Props) => {
  return (
    <View className="mb-4 mt-8 w-full flex-row items-center justify-between px-8">
      <TouchableOpacity onPress={alPresionarAnterior} className="p-2">
        <Text className="text-xs font-bold uppercase tracking-widest text-gray-400">Anterior</Text>
      </TouchableOpacity>

      <Text className="text-lg font-black uppercase tracking-widest text-black">{diaActual}</Text>

      <TouchableOpacity onPress={alPresionarSiguiente} className="p-2">
        <Text className="text-xs font-bold uppercase tracking-widest text-gray-400">Siguiente</Text>
      </TouchableOpacity>
    </View>
  );
};
