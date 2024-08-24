import { render, screen } from '@testing-library/react';
import { Skills } from './skills';

describe('Skills', () => {
  const skills = ['HTML', 'CSS', 'Javascript'];

  test('renders correctly', () => {
    render(<Skills skills={skills} />);
    const listElemet = screen.getByRole('list');
    expect(listElemet).toBeInTheDocument();
  });

  test('render a list of skills', () => {
    render(<Skills skills={skills} />);
    const listItemElements = screen.getAllByRole('listitem');
    expect(listItemElements).toHaveLength(skills.length);
  });

  test('render login button', () => {
    render(<Skills skills={skills} />);
    const loginButton = screen.getByRole('button', { name: 'Login' });
    expect(loginButton).toBeInTheDocument();
  });

  test('start learning button is not rendered', () => {
    render(<Skills skills={skills} />);
    const startLearningButton = screen.queryByRole('button', {
      name: 'Start Learning',
    });
    expect(startLearningButton).not.toBeInTheDocument();
  });

  test('start learning button is eventually displayed', async () => {
    render(<Skills skills={skills} />);
    screen.debug(); // help us to debug the issue in node
    const startLearningButton = await screen.findByRole(
      'button',
      {
        name: 'Start learning',
      },
      {
        timeout: 2000, // we want to wait code to wait this time
      },
    );
    screen.debug(); // help us to debug the issue in node
    expect(startLearningButton).toBeInTheDocument();
  });
});
