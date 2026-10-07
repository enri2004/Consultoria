import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

jest.mock('./components/Carrusel', () => () => null);

test('renders the home page', () => {
  render(<App />);
  expect(
    screen.getByRole('heading', { name: /impulsamos tu negocio con decisiones más inteligentes/i })
  ).toBeInTheDocument();
});

test('navigates to services without reloading the page', () => {
  render(<App />);
  screen.getByRole('link', { name: /ver todos los servicios/i }).click();
  expect(
    screen.getByRole('heading', { name: /soluciones para crecer con confianza/i })
  ).toBeInTheDocument();
});

test('navigates to the login route', () => {
  render(<App />);
  screen.getByRole('button', { name: /iniciar sesión/i }).click();
  expect(
    screen.queryByRole('heading', { name: /impulsamos tu negocio con decisiones más inteligentes/i })
  ).not.toBeInTheDocument();
});
