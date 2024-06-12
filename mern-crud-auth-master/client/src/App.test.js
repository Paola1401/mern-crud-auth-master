// Renderiza el componente App, busca el elemento que contiene el texto "learn react" y verifica que esté presente en el documento.
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
