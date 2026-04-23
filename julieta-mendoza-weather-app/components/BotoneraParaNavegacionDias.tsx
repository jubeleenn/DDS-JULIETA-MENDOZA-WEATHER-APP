import { View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

// Componente visual puro que recibe las acciones por props [1, 2]
export const BotoneraParaNavegacionDias = ({ diaActual, alPresionarAnterior, alPresionarSiguiente }: { diaActual: string, alPresionarAnterior: () => void, alPresionarSiguiente: () => void }) => {
  return (
    // Agregamos mt-10 para separarlo del título de la ciudad
    <View className="flex-row items-center justify-between w-full px-12 mt-6">
      
      {/* Botón Anterior */}
      <TouchableOpacity testID="button-prev-day" onPress={alPresionarAnterior} className="bg-white/40 p-3 rounded-full shadow-sm border border-white/50">
        <Feather name="chevron-left" size={24} color="#4f46e5" />
      </TouchableOpacity>

      {/* Texto del día */}
      <Text testID="navigation-current-day" className="text-lg font-bold text-indigo-900 uppercase tracking-widest">
        {diaActual}
      </Text>

      {/* Botón Siguiente */}
      <TouchableOpacity testID="button-next-day" onPress={alPresionarSiguiente} className="bg-white/40 p-3 rounded-full shadow-sm border border-white/50">
        <Feather name="chevron-right" size={24} color="#4f46e5" />
      </TouchableOpacity>

    </View>
  );
};
