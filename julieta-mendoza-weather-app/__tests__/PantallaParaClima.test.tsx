import { render } from '@testing-library/react-native';
import PantallaParaClima from '@/app/index';

describe('Evaluación de la Weather App', () => {
  
  test('la app expone todos los testID obligatorios', () => {
    const requiredTestIds = [
      'screen-weather',
      'header-city',
      'button-prev-day',
      'button-next-day',
      'temp-current',
      'temp-min',
      'temp-max',
    ];

    const { getByTestId, getAllByTestId } = render(<PantallaParaClima />);

    requiredTestIds.forEach(id => {
      expect(getByTestId(id)).toBeTruthy();
    });

    expect(getAllByTestId('metric-item').length).toBeGreaterThanOrEqual(3);
  });

});