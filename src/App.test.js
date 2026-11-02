import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renderiza calculadora com valor inicial 0', () => {
  render(<App />);
  const input = screen.getByRole('textbox');
  expect(input).toHaveValue('0');
});

test('realiza soma corretamente (7 + 5 = 12)', () => {
  render(<App />);
  fireEvent.click(screen.getByText('7'));
  fireEvent.click(screen.getByText('+'));
  fireEvent.click(screen.getByText('5'));
  fireEvent.click(screen.getByText('='));
  
  const input = screen.getByRole('textbox');
  expect(input).toHaveValue('12');
});

test('realiza multiplicacao corretamente (8 x 9 = 72)', () => {
  render(<App />);
  fireEvent.click(screen.getByText('8'));
  fireEvent.click(screen.getByText('x'));
  fireEvent.click(screen.getByText('9'));
  fireEvent.click(screen.getByText('='));
  
  const input = screen.getByRole('textbox');
  expect(input).toHaveValue('72');
});

test('realiza divisao corretamente (9 / 3 = 3)', () => {
  render(<App />);
  fireEvent.click(screen.getByText('9'));
  fireEvent.click(screen.getByText('/'));
  fireEvent.click(screen.getByText('3'));
  fireEvent.click(screen.getByText('='));
  
  const input = screen.getByRole('textbox');
  expect(input).toHaveValue('3');
});

test('limpa a calculadora com o botao C', () => {
  render(<App />);
  fireEvent.click(screen.getByText('9'));
  fireEvent.click(screen.getByText('C'));
  
  const input = screen.getByRole('textbox');
  expect(input).toHaveValue('0');
});
