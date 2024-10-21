import { API_URL } from '@/constans';
import { IFilmDTO, IHero, IHeroesDTO, IStarshipDTO } from '@/types';
import axios from 'axios';

const api = axios.create({
  baseURL: API_URL,
});

export async function getHeroes(page: number = 1): Promise<IHeroesDTO> {
  try {
    const heroes = await api.get(`/people/?page=${page}`);
    return heroes.data;
  } catch (error) {
    console.error('Failed to load data:', error);
    throw new Error('Unable to load data');
  }
}

export async function getHero(heroId: number) {
  try {
    const hero = await api.get<IHero>(`/people/${heroId}`);
    return hero.data;
  } catch (error) {
    console.error('Failed to load data:', error);
    throw new Error('Unable to load data');
  }
}

export async function getHeroFilms(heroId: number): Promise<IFilmDTO> {
  try {
    const heroFilms = await api.get<IFilmDTO>(`/films/?characters__contains=${heroId}`);
    return heroFilms.data;
  } catch (error) {
    console.error('Failed to load data:', error);
    throw new Error('Unable to load data');
  }
}

export async function getHeroStarships(heroId: number): Promise<IStarshipDTO> {
  try {
    const starships = await api.get<IStarshipDTO>(`/starships/?pilots__contains=${heroId}`);
    return starships.data;
  } catch (error) {
    console.error('Failed to load data:', error);
    throw new Error('Unable to load data');
  }
}
