import { mockMovies, mockSpaceCraft } from '@/__tests__/mock_data';
import { describe, expect, it } from 'vitest';
import { createFilmNodes, createStarshipNodes } from '@/components/FlowComponent/flowNodes';

describe('createFilmNodes', () => {
    it('should create film nodes with correct properties', () => {
        const heroId = 1;
        const heroName = 'Hero Name';
        const filmNodes = createFilmNodes(mockMovies, heroId, heroName);

        expect(filmNodes).toEqual([
            {
                id: 'hero-1', position: { x: 0, y: 0 }, data: { label: 'Hero Name' }, style: {
                    backgroundColor: '#1E1E1E',
                    color: '#FFD700',
                    border: '2px solid #FFD700',
                    borderRadius: '8px',
                    padding: '8px',
                },
            },
            {
                id: 'film-1', position: { x: -100, y: 100 }, data: { label: 'Movie 1' }, style: {
                    backgroundColor: '#1E1E1E',
                    color: '#FFD700',
                    border: '2px solid #FFD700',
                    borderRadius: '8px',
                    padding: '6px',
                },
            },
            {
                id: 'film-2', position: { x: 100, y: 100 }, data: { label: 'Movie 2' }, style: {
                    backgroundColor: '#1E1E1E',
                    color: '#FFD700',
                    border: '2px solid #FFD700',
                    borderRadius: '8px',
                    padding: '6px',
                },
            },
        ]);
    });
});

describe('createStarShipsNodes', () => {
    it('should create starships nodes with correct properties', () => {
        const filmNodes = createStarshipNodes(mockSpaceCraft);

        expect(filmNodes).toEqual([{
            id: 'starship-58', position: { x: 0, y: 300 }, data: { label: 'Galactic Cruiser' }, style: {
                backgroundColor: '#1E1E1E',
                color: '#FFD700',
                border: '2px solid #FFD700',
                borderRadius: '8px',
                padding: '8px',
            },
        }]);
    });
});
