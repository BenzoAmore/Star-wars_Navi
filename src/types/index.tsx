export interface IHeroesDTO {
    results: IHero[];
    next: string;
    previous: string;
    count: number;
}

export interface IHero {
    id: number;
    name: string;
    birth_year: string;
    eye_color: string;
    gender: string;
    hair_color: string;
    height: string;
    mass: string;
    skin_color: string;
    homeworld: number;
    films: number[];
    species: number[];
    starships: number[];
    vehicles: number[];
    url: string;
    created: string;
    edited: string;
}

export interface IFilmDTO {
    results: IFilm[];
    next: string;
    previous: string;
    count: number;
}

export interface IFilm {
    id: number;
    title: string;
    episode_id: number;
    opening_crawl: string;
    director: string;
    producer: string;
    release_date: string;
    species: number[];
    starships: number[];
    vehicles: number[];
    characters: number[];
    planets: number[];
    url: string;
    created: string;
    edited: string;
}

export interface IStarshipDTO {
    results: IStarShip[];
    next: string;
    previous: string;
    count: number;
}

export interface IStarShip {
    id: number;
    name: string;
    model: string;
    starship_class: string;
    manufacturer: string;
    cost_in_credits: string;
    length: string;
    crew: string;
    passengers: string;
    max_atmosphering_speed: string;
    hyperdrive_rating: string;
    MGLT: string;
    cargo_capacity: string;
    consumables: string;
    films: number[];
    pilots: any[];
    url: string;
    created: string;
    edited: string;
}
