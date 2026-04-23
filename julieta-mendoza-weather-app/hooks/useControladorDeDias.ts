import { useState, useEffect } from 'react';

interface DatosClima {
  dia: string;
  estado: string;
  temp: number;
  max: number;
  min: number;
  humedad: number;
  presion: number;
  viento: number;
}
const traducirEstadoClima = (estadoIngles: string) => {
  const estado = estadoIngles.toLowerCase();
  if (estado.includes('sun') || estado.includes('clear')) return 'soleado';
  if (estado.includes('cloud') || estado.includes('overcast')) return 'nublado';
  if (estado.includes('rain') || estado.includes('drizzle')) return 'lluvia';
  if (estado.includes('thunder') || estado.includes('storm')) return 'tormenta';
  if (estado.includes('snow') || estado.includes('ice')) return 'nieve';
  return 'soleado';
};

export const useControladorDeDias = () => {
  const [pronostico, setPronostico] = useState<DatosClima[]>([]);
  const [indiceActual, setIndiceActual] = useState(0);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(false);
  const [ciudadActual, setCiudadActual] = useState('Tokyo');

  useEffect(() => {
    const controller = new AbortController();

    const obtenerPronosticoReal = async () => {
      setCargando(true);
      setError(false);

      try {
        const CLAVE_API = 'b1e581813fc44f1ba55222503262304';
        const URL_API = `https://api.weatherapi.com/v1/forecast.json?key=${CLAVE_API}&q=${ciudadActual}&days=5`;

        const respuesta = await fetch(URL_API, { signal: controller.signal });
        if (!respuesta.ok) throw new Error('Ciudad no encontrada');

        const datos = await respuesta.json();

        const diasMapeados = datos.forecast.forecastday.map((item: any, i: number) => ({
          dia: i === 0 ? 'HOY' : `DÍA ${i + 1}`,
          estado: traducirEstadoClima(item.day.condition.text),
          temp: Math.round(item.day.avgtemp_c),
          max: Math.round(item.day.maxtemp_c),
          min: Math.round(item.day.mintemp_c),
          humedad: item.day.avghumidity,
          presion: 1013,
          viento: Math.round(item.day.maxwind_kph / 3.6),
        }));

        setPronostico(diasMapeados);
        setIndiceActual(0);
      } catch (err) {
        setError(true);
      } finally {
        setCargando(false);
      }
    };

    obtenerPronosticoReal();

    return () => controller.abort();
  }, [ciudadActual]);

  const cambiarAlDiaSiguiente = () => {
    if (indiceActual < pronostico.length - 1) setIndiceActual((prev) => prev + 1);
  };

  const cambiarAlDiaAnterior = () => {
    if (indiceActual > 0) setIndiceActual((prev) => prev - 1);
  };

  const buscarNuevaCiudad = (nuevaCiudad: string) => {
    if (nuevaCiudad.trim() !== '') {
      setCiudadActual(nuevaCiudad);
    }
  };

  return {
    climaActual: pronostico[indiceActual] || null,
    cargando,
    error,
    cambiarAlDiaAnterior,
    cambiarAlDiaSiguiente,
    ciudadActual,
    buscarNuevaCiudad,
  };
};
