export interface PokemonListRecord {
    name: string | null;
    url: string | null;
}

export interface PokemonList {
    count: number | null;
    next: string | null;
    previous: string | null;
    results: PokemonListRecord[] | null;
}

export interface Pokemon {
    ability: string | null;
    is_hidden: boolean | null;
    slot: number | null;
    base_experience: number | null;
}

