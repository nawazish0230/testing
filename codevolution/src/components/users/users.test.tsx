import { render, screen } from '@testing-library/react';
import { Users } from './users';
import { server } from '../../mocks/server';
import { rest } from 'msw';

describe('Users', () => {
  test('renders correctly', () => {
    render(<Users />);
    const textElement = screen.getByText('Users');
    expect(textElement).toBeInTheDocument();
  });

  test('renders a list of users', async () => {
    render(<Users />);
    const users = await screen.findAllByRole('listitem');
    expect(users).toHaveLength(10);
  });

  // test not passing, we are getting error TextEncoder is not defined
  test('renders error', async () => {
    server.use(
      rest.get(
        'https://jsonplaceholder.typicode.com/users',
        (
          _req: any,
          res: (arg0: any) => any,
          ctx: { status: (arg0: number) => any },
        ) => {
          return res(ctx.status(500));
        },
      ),
    );
    render(<Users />);
    const error = await screen.findByText('Error fetching users');
    expect(error).toBeInTheDocument();
  });
});
