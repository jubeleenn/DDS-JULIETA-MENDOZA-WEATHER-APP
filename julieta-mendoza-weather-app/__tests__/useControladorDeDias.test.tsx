import { renderHook, waitFor } from '@testing-library/react-native';
import { useControladorDeDias } from '../hooks/useControladorDeDias';

global.fetch = jest.fn();

describe('useControladorDeDias (Controlador)', () => {
  test('Obtiene el pronóstico de WeatherAPI y lo procesa', async () => {
    const mockRespuestaAPI = {
      forecast: {
        forecastday: [
          {
            day: {
              avgtemp_c: 15,
              maxtemp_c: 18,
              mintemp_c: 10,
              avghumidity: 80,
              maxwind_kph: 43.2,
              condition: { text: 'Heavy rain' },
            },
          },
        ],
      },
    };

    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: jest.fn().mockResolvedValueOnce(mockRespuestaAPI),
    });

    const { result } = renderHook(() => useControladorDeDias());

    await waitFor(() => {
      expect(result.current.cargando).toBe(false);
    });

    expect(result.current.error).toBe(false);
    expect(result.current.climaActual?.temp).toBe(15);
    expect(result.current.climaActual?.estado).toBe('lluvia');
  });
});
