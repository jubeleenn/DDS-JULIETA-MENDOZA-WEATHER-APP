import { View, Text, TextInput } from 'react-native';
import { useState } from 'react';

import { TextoParaCiudad } from '../components/TextoParaCiudad';
import { TextoParaTemperaturaPrincipal } from '../components/TextoParaTemperaturaPrincipal';
import { SeccionParaTemperaturasMinMax } from '../components/SeccionParaTemperaturasMinMax';
import { IconoParaCondicionClimatica } from '../components/IconoParaCondicionClimatica';
import { TarjetaParaMetricaSecundaria } from '../components/TarjetaParaMetricaSecundaria';
import { BotoneraParaNavegacionDias } from '../components/BotoneraParaNavegacionDias';
import { useControladorDeDias } from '../hooks/useControladorDeDias';

export default function PantallaParaClima() {
  const {
    climaActual,
    cargando,
    error,
    cambiarAlDiaAnterior,
    cambiarAlDiaSiguiente,
    ciudadActual,
    buscarNuevaCiudad,
  } = useControladorDeDias();

  const [textoBusqueda, setTextoBusqueda] = useState('');

  if (cargando) {
    return (
      <View testID="screen-weather" className="flex-1 items-center justify-center bg-white">
        <Text className="text-lg text-gray-600">Buscando pronóstico...</Text>
      </View>
    );
  }

  if (error || !climaActual) {
    return (
      <View testID="screen-weather" className="flex-1 items-center justify-center bg-white">
        <Text className="mb-4 text-lg text-red-500">No pudimos encontrar esa ubicación.</Text>
        <Text className="font-bold text-blue-500" onPress={() => buscarNuevaCiudad('Tokyo')}>
          Volver a inicio
        </Text>
      </View>
    );
  }

  return (
    <View testID="screen-weather" className="flex-1 items-center justify-center bg-white px-4">
      <TextInput
        className="mb-6 w-full rounded-full border border-gray-300 px-6 py-3 text-center text-gray-700"
        placeholder="Buscar ciudad (Ej: Madrid, Paris...)"
        value={textoBusqueda}
        onChangeText={setTextoBusqueda}
        onSubmitEditing={() => {
          buscarNuevaCiudad(textoBusqueda);
          setTextoBusqueda('');
        }}
        returnKeyType="search"
      />

      <TextoParaCiudad nombreCiudad={ciudadActual.toUpperCase()} />

      <BotoneraParaNavegacionDias
        diaActual={climaActual.dia}
        alPresionarAnterior={cambiarAlDiaAnterior}
        alPresionarSiguiente={cambiarAlDiaSiguiente}
      />

      <IconoParaCondicionClimatica estado={climaActual.estado} />
      <TextoParaTemperaturaPrincipal temperaturaActual={climaActual.temp} />
      <SeccionParaTemperaturasMinMax maxima={climaActual.max} minima={climaActual.min} />

      <View className="mt-8 w-full flex-row justify-center">
        <TarjetaParaMetricaSecundaria nombre="Humedad" valor={climaActual.humedad} unidad="%" />
        <TarjetaParaMetricaSecundaria nombre="Presión" valor={climaActual.presion} unidad=" hPa" />
        <TarjetaParaMetricaSecundaria nombre="Viento" valor={climaActual.viento} unidad=" m/s" />
      </View>
    </View>
  );
}
