export interface CelebrityForm {
    id:string;
    name:string;
    birthYear?:number;
    deathYear?:number;
    movies?:Movies;
  
  }

export interface celebrities{
    id:string;
    name:string;
    birthYear?:number;
    deathYear?:number;
    movies?: Movies;
   }

export interface Movies{
    celebrityName: string,
    celebrityId:string,
    movieTitle: string,
    movieId: string,
    category: string,
    characters: string
}