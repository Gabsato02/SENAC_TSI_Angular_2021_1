export class Movie {
    name: string;
    rating: number;

    // No constructor são passados os parâmetros obrigatórios
    constructor(name: string, rating: number) {
        this.name = name;
        this.rating = rating;
    }
}
