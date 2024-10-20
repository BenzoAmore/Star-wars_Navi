import HeroList from '@/components/HeroList';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { mockCharacters } from '../mock_data'; 
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

describe('HeroList Component', () => {
  it('renders loading skeletons when isLoading is true', () => {
    render(
      <MemoryRouter>
        <HeroList heroes={[]} isLoading={true} />
      </MemoryRouter>);

    const skeletons = screen.getAllByRole('listitem');
    expect(skeletons.length).toBe(10); 
  });

  it('renders the correct number of hero links when not loading', () => {
    render(
      <MemoryRouter>
        <HeroList heroes={mockCharacters.results} isLoading={false} />
      </MemoryRouter>);

    const heroLinks = screen.getAllByRole('link');
    expect(heroLinks.length).toBe(mockCharacters.results.length); 
  });

  it('displays correct hero names and href attributes', () => {
    render(
      <MemoryRouter>
        <HeroList heroes={mockCharacters.results} isLoading={false} />
      </MemoryRouter>);

    const heroLinks = screen.getAllByRole('link');

    mockCharacters.results.forEach((hero, index) => {
      expect(heroLinks[index]).toHaveTextContent(hero.name); 
      expect(heroLinks[index]).toHaveAttribute('href', `/people/${hero.id}`); 
    });
  });
});
