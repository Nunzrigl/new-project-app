export interface MovieForm {
  id: string,
  title: string,
  runningTime: number,
  year: number,
  genres?: string,
  averageRating: number,
  numVotes: number,
  cast: Cast[];

}
export interface ResponseDto{
  movies: films[],
  pagination : {
    currentPage: number, 
    pageSize: number, 
    totalElements: number, 
    totalPages: number
  }
}
export interface films {
  id:  string,
  title: string,
  runningTime: number,
  year: number,
  genres?: string,
  cast: Cast[];
  rating: Rating,
  countries?: Countries
}

export interface Rating {
  averageRating: number,
  numVotes: number,
}

export interface Countries {
  title: number,
  region: string,
  language: null
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