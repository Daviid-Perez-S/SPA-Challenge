export interface Character {

    id: number;
    name: string;
    status: string;
    species?: string;
    type?: number;
    gender?: string;
    origin?: {
        name: string;
        link: string;
    };
    location: {
        name: string;
        link: string;
    };
    image: string;
    episode: string[];

}
