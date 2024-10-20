import { IFilm, IStarShip } from '@/types';
import { Edge } from 'reactflow';

export function createFilmEdges(heroFilms: IFilm[], heroId: number) {
    return heroFilms.map((film) => ({
        id: `film-edge${film.id}`,
        source: `hero-${heroId}`,
        target: `film-${film.id}`,
        animated: true,
        style: {
            stroke: '#FFD700',
            strokeWidth: 1.5,
        },
    }));
}

export function createStarshipEdges(heroFilms: IFilm[], heroStarships: IStarShip[]): Edge[] {
    const edges: Edge[] = [];
    heroStarships.forEach((starship) => {
        const film = heroFilms.find((currentFilm) => currentFilm.starships.includes(starship.id));

        if (film) {
            edges.push({
                id: `starship-edge-${starship.id}`,
                source: `film-${film.id}`,
                target: `starship-${starship.id}`,
                animated: true,
                style: {
                    stroke: '#FFD700',
                    strokeWidth: 1.5,
                },
            });
        }
    });

    return edges;
}
