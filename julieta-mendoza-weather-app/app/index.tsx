import { View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; 

import { TextoParaCiudad } from '../components/TextoParaCiudad'; 
import { TextoParaTemperaturaPrincipal } from '../components/TextoParaTemperaturaPrincipal';
import { SeccionParaTemperaturasMinMax } from '../components/SeccionParaTemperaturasMinMax';
import { IconoParaCondicionClimatica } from '../components/IconoParaCondicionClimatica';
import { TarjetaParaMetricaSecundaria } from '../components/TarjetaParaMetricaSecundaria';
import { BotoneraParaNavegacionDias } from '../components/BotoneraParaNavegacionDias';
import { useControladorDeDias } from '../hooks/useControladorDeDias';

export default function PantallaParaClima() {
  const { climaActual, cambiarAlDiaAnterior, cambiarAlDiaSiguiente } = useControladorDeDias();

  const obtenerColoresPorClima = (estado: string): readonly [string, string] => {
    
    const esSoleado = estado === 'soleado';
    const esLluvia = estado === 'lluvia';

    if (esSoleado) return ['#a8edea', '#fed6e3']; 
    if (esLluvia) return ['#7f7fd5', '#86a8e7']; 
    return ['#e0c3fc', '#8ec5fc']; 
  };

  const coloresDeFondo = obtenerColoresPorClima(climaActual.estado);

  return (
      <LinearGradient 
    testID="screen-weather"
    colors={coloresDeFondo} 
    className="flex-1 items-center justify-center"
  >
      <TextoParaCiudad nombreCiudad="TOKYO" />
      
      <BotoneraParaNavegacionDias 
        diaActual={climaActual.dia}
        alPresionarAnterior={cambiarAlDiaAnterior}
        alPresionarSiguiente={cambiarAlDiaSiguiente}
      />
      
      <IconoParaCondicionClimatica estado={climaActual.estado} />
      <TextoParaTemperaturaPrincipal temperaturaActual={climaActual.temp} />
      <SeccionParaTemperaturasMinMax maxima={climaActual.max} minima={climaActual.min} />

      <View className="flex-row mt-8">
        <TarjetaParaMetricaSecundaria nombre="Humedad" valor={climaActual.humedad} unidad="%" />
        <TarjetaParaMetricaSecundaria nombre="Presión" valor={climaActual.presion} unidad=" hPa" />
        <TarjetaParaMetricaSecundaria nombre="Viento" valor={climaActual.viento} unidad=" m/s" />
      </View>

    </LinearGradient>
  );
}