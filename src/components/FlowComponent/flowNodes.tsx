import { IFilm, IStarShip } from '@/types';

function positionsCalculation(count: number, spacing: number, yPosition: number) {
    const positions = [];
    const startX = -((count - 1) * spacing) / 2;

    for (let i = 0; i < count; i += 1) {
        positions.push({ x: spacing * i + startX, y: yPosition });
    }

    return positions;
}

export function createFilmNodes(heroFilms: IFilm[], heroId: number, heroName: string) {
    const getFilmsPositions = positionsCalculation(heroFilms.length, 200, 100);

    const filmNodes = heroFilms.map((film, index) => ({
        id: `film-${film.id}`,
        position: getFilmsPositions[index],
        data: { label: film.title },
        style: {
            backgroundColor: '#1E1E1E',
            color: '#FFD700',
            border: '2px solid #FFD700',
            borderRadius: '8px',
            padding: '6px',
        },
    }));

    const heroNode = {
        id: `hero-${heroId}`,
        position: { x: 0, y: 0 },
        data: { label: heroName },
        style: {
            backgroundColor: '#1E1E1E',
            color: '#FFD700',
            border: '2px solid #FFD700',
            borderRadius: '8px',
            padding: '8px',
        },
    };

    return [heroNode, ...filmNodes];
}

export function createStarshipNodes(heroStarships: IStarShip[]) {
    const getStarshipsPositions = positionsCalculation(heroStarships.length, 200, 300);

    return heroStarships.map((starship, index) => ({
        id: `starship-${starship.id}`,
        position: getStarshipsPositions[index],
        data: { label: starship.name },
        style: {
            backgroundColor: '#1E1E1E',
            color: '#FFD700',
            border: '2px solid #FFD700',
            borderRadius: '8px',
            padding: '8px',
        },
    }));
}
