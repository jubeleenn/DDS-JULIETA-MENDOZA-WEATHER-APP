import { useState } from 'react';
const DATOS_CLIMA_POR_DIA = [
  { dia: 'HOY', estado: 'soleado', temp: 24, max: 28, min: 16, humedad: 45, presion: 1012, viento: 5.5 },
  { dia: 'MAÑANA', estado: 'nublado', temp: 18, max: 20, min: 14, humedad: 60, presion: 1010, viento: 8.0 },
  { dia: 'PASADO MAÑANA', estado: 'lluvia', temp: 15, max: 17, min: 12, humedad: 85, presion: 1005, viento: 12.5 },
];

export const useControladorDeDias = () => {
  const [indiceDia, setIndiceDia] = useState(0);

  const cambiarAlDiaAnterior = () => {
    if (indiceDia > 0) setIndiceDia(indiceDia - 1);
  };

  const cambiarAlDiaSiguiente = () => {
    if (indiceDia < DATOS_CLIMA_POR_DIA.length - 1) setIndiceDia(indiceDia + 1);
  };

  return {
    climaActual: DATOS_CLIMA_POR_DIA[indiceDia], 
    cambiarAlDiaAnterior,
    cambiarAlDiaSiguiente
  };
};