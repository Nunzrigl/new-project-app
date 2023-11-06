export interface MovieList{
    id: string;
    name:string;
    rating?: number;
    cast? : string[];
}
export interface Cast {
    movieId: string,
    celebrityId: string,
    celebrityName: string,
    movieTitle?: string,
    category?: Category,
    characters: string,
  
  
  }
  export enum Category {
    Writer = "Writer",
    Actor = "Actor",
    Director = "Director",
  
  }