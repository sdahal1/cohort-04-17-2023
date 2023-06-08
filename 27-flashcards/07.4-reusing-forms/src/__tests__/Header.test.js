import { render, screen } from '@testing-library/react'
import Header from '../Header';

describe('tests about the Header', () => {
  test('header renders without errors', () => {
    render(<Header />)
  });

  test('header displays number of modules', () => {
    render(<Header numberOfModules="5" />);
    let numModules = screen.getByText('There are 5 modules.');
    expect(numModules).toBeVisible();
  })
  test('header displays 0 modules', () => {
    render(<Header numberOfModules={0} />);
    let numModules = screen.getByText('There are 0 modules.');
    expect(numModules).toBeVisible();
  })
  test('header displays Thinkful', () => {
    render(<Header />)
    let tf = screen.getByText('Thinkful');
    expect(tf).toBeVisible();
  })
})