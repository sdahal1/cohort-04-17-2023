import { render, screen } from '@testing-library/react';
import Snack from './Snack';

test('renders snack with correct name', () => {
  // set up some data
  let snackData = { name: 'Potato chips', imageUrl: 'http://potatochips.com/potato' }
  // run our code with that data
  render(<Snack snack={snackData} />)
  // make some assertions about how the output should look
  let potatoChips = screen.getByText(/Potatoo chips/);
  expect(potatoChips).toBeInTheDocument();
})