import { useEffect, useState } from 'react';
import { getHero, getHeroFilms, getHeroStarships } from '@/services/Api';
import { IFilm, IStarShip } from '@/types';

const useHeroData = (id: string | undefined) => {
    const [heroData, setHeroData] = useState<{
        name: string;
        heroFilms: IFilm[];
        heroStarships: IStarShip[];
        heroId: number;
    } | null>(null);

    useEffect(() => {
        const fetchHeroData = async () => {
            if (id) {
                const heroId = Number(id);
                const [heroResponse, filmsResponse, starshipsResponse] = await Promise.all([
                    getHero(heroId),
                    getHeroFilms(heroId),
                    getHeroStarships(heroId),
                ]);
                setHeroData({
                    name: heroResponse.name,
                    heroFilms: filmsResponse.results,
                    heroStarships: starshipsResponse.results,
                    heroId: heroId,
                });
            }
        };

        fetchHeroData();
    }, [id]);

    return heroData;
};

export default useHeroData;
