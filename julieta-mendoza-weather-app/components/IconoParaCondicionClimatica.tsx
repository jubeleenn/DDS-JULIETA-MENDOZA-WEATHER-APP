import { View } from 'react-native';
import { Feather } from '@expo/vector-icons';

export const IconoParaCondicionClimatica = ({ estado }: { estado: string }) => {
  const esSoleado = estado === 'soleado';
  const esNublado = estado === 'nublado';
  const esLluvia = estado === 'lluvia';
  const esTormenta = estado === 'tormenta';
  const esNieve = estado === 'nieve';

  const renderizarIcono = () => {
    if (esSoleado) return <Feather name="sun" size={140} color="#111827" />;
    if (esNublado) return <Feather name="cloud" size={140} color="#4B5563" />;
    if (esLluvia) return <Feather name="cloud-rain" size={140} color="#374151" />;
    if (esTormenta) return <Feather name="cloud-lightning" size={140} color="#1F2937" />;
    if (esNieve) return <Feather name="cloud-snow" size={140} color="#9CA3AF" />;
    return <Feather name="sun" size={140} color="#111827" />;
  };

  return (
    <View testID={`icon-weather-${estado}`} className="my-6 shadow-sm">
      {renderizarIcono()}
    </View>
  );
};
