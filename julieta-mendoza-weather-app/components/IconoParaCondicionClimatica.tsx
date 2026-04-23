import { View } from 'react-native';
import { Feather } from '@expo/vector-icons';

export const IconoParaCondicionClimatica = ({ estado }: { estado: string }) => {
  
  const esSoleado = estado === 'soleado';
  const esLluvia = estado === 'lluvia';
  
  
  const renderizarIcono = () => {
    if (esSoleado) return <Feather name="sun" size={140} color="#ebc972" />;
    if (esLluvia) return <Feather name="cloud-rain" size={140} color="#60a5fa" />;
    return <Feather name="cloud" size={140} color="#a5b4fc" />; 
  };

  return (
    <View testID={`icon-weather-${estado}`} className="my-6 shadow-sm">
  {renderizarIcono()}
</View>
  );
};