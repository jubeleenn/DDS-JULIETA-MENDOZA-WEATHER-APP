import { View } from 'react-native';

import { TextoParaCiudad } from '../components/TextoParaCiudad';
import { TextoParaTemperaturaPrincipal } from '../components/TextoParaTemperaturaPrincipal';
import { SeccionParaTemperaturasMinMax } from '../components/SeccionParaTemperaturasMinMax';
import { IconoParaCondicionClimatica } from '../components/IconoParaCondicionClimatica';
import { TarjetaParaMetricaSecundaria } from '../components/TarjetaParaMetricaSecundaria';
import { BotoneraParaNavegacionDias } from '../components/BotoneraParaNavegacionDias';
import { useControladorDeDias } from '../hooks/useControladorDeDias';

export default function PantallaParaClima() {
  const { climaActual, cambiarAlDiaAnterior, cambiarAlDiaSiguiente } = useControladorDeDias();

  return (
    <View testID="screen-weather" className="flex-1 items-center justify-center bg-white">
      <TextoParaCiudad nombreCiudad="TOKYO" />

      <BotoneraParaNavegacionDias
        diaActual={climaActual.dia}
        alPresionarAnterior={cambiarAlDiaAnterior}
        alPresionarSiguiente={cambiarAlDiaSiguiente}
      />

      <IconoParaCondicionClimatica estado={climaActual.estado} />
      <TextoParaTemperaturaPrincipal temperaturaActual={climaActual.temp} />
      <SeccionParaTemperaturasMinMax maxima={climaActual.max} minima={climaActual.min} />

      <View className="mt-8 flex-row">
        <TarjetaParaMetricaSecundaria nombre="Humedad" valor={climaActual.humedad} unidad="%" />
        <TarjetaParaMetricaSecundaria nombre="Presión" valor={climaActual.presion} unidad=" hPa" />
        <TarjetaParaMetricaSecundaria nombre="Viento" valor={climaActual.viento} unidad=" m/s" />
      </View>
    </View>
  );
}
