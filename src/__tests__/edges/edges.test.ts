import { describe, expect, it } from 'vitest';
import { createFilmEdges, createStarshipEdges } from '@/components/FlowComponent/flowEdges';
import { mockMovies, mockSpaceCraft } from '@/__tests__/mock_data';

const heroId = 1;

describe('createFilmEdges', () => {
    it('should create edges between hero and films', () => {
        const edges = createFilmEdges(mockMovies, heroId);
        expect(edges).toEqual([
            {
                id: 'film-edge1', source: 'hero-1', target: 'film-1', animated: true, style: {
                    stroke: '#FFD700',
                    strokeWidth: 1.5,
                },
            },
            {
                id: 'film-edge2', source: 'hero-1', target: 'film-2', animated: true, style: {
                    stroke: '#FFD700',
                    strokeWidth: 1.5,
                },
            },
        ]);
    });

    it('should return an empty array if no films are provided', () => {
        const edges = createFilmEdges([], heroId);

        expect(edges).toEqual([]);
    });
});

describe('createStarshipEdges', () => {
    it('should create edges between films and starships', () => {
        const edges = createStarshipEdges(mockMovies, mockSpaceCraft);

        expect(edges).toEqual([{ id: 'starship-edge-58', source: 'film-1', target: 'starship-58', animated: true, style: {
            stroke: '#FFD700',
            strokeWidth: 1.5,
        }, }]);
    });

    it('should return an empty array if no films are provided', () => {
        const edges = createStarshipEdges([], mockSpaceCraft);

        expect(edges).toEqual([]);
    });

    it('should return an empty array if no starships are provided', () => {
        const edges = createStarshipEdges(mockMovies, []);

        expect(edges).toEqual([]);
    });
});
