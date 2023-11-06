import { Injectable } from "@angular/core";
import { MovieForm, ResponseDto, films } from "../interfaces/movies.interface";
import { Observable, Subject, map } from "rxjs";
import { HttpClient } from "@angular/common/http"
import { environment } from "src/environments/environment";


@Injectable({
    providedIn:'root'
})

export class MoviesService{

    private _baseUrl= '';
    
    private _movies : films[] = [];

    private _list$ = new Subject<films[]>();

    listObs$= this._list$.asObservable();
    
    
    constructor( private readonly _http : HttpClient, ){
        this._baseUrl = environment.baseUrl;
    }





   /*  private _getIndex (id: string): number | string {
        return this._movies.findIndex((movies:films)=> movies.id === id);
    
    }


    private _next () {
        this._list$.next(this._movies); 
    }
 */

    getList(): Observable<films[]> {  
        return this._http.get<films[]>(`${this._baseUrl}/movies?order_by=id&page=0&size=25`).pipe(map((result : any)=>{
          return result.movies
        })
        )
      /* this._next(); */
      /* return this.movies; */
    }


    getById (id: number| string): Observable<films> {
        //const movie = this._movies.find((movies:films)=> movies.id === id);
        return this._http.get<films>(`${this._baseUrl}/movies/${id}`);
    }



    update(selectedMovie : films): Observable<films> {
    
        return this._http.put<films>(`${this._baseUrl}/movies/${selectedMovie.id}`,
        selectedMovie);
               /*  const index : number |string = this._getIndex(selectedMovie.id);
        if(index !== -1){
            this._movies[index] = selectedMovie;
        }
        this._next(); */
    } 
 
   
    create(movie: MovieForm): Observable<films>{
        const movieDto : films = this.formToDto(movie);
        return this._http.post<films>(`${this._baseUrl}/movies`,
        movieDto);
      /* movie.id = this._movies.length + 1;
      this._movies.push(movie);
      this._next(); */
    }
   
    delete(id : string): Observable<films>{
        return this._http.delete<films>(`${this._baseUrl}/movies/${id}`);
      /*   const index : number= this._getIndex(id);
        if(index !== -1){
            this._movies.splice(index,1);    
        }
        this._next(); */
    }

     formToDto(createdMovie: MovieForm): films {
        return {
          id: createdMovie.id,
          title: createdMovie.title,
          rating: {
            averageRating: createdMovie.averageRating,
            numVotes: createdMovie.numVotes,
          },
          runningTime: createdMovie.runningTime,
          year: createdMovie.year,
          genres: createdMovie.genres,
          cast: createdMovie.cast,
        };
      }

      getByTitle(title: string): Observable<films[]>{
        return this._http.get<ResponseDto>(`${this._baseUrl}/movies?title=${title}`).pipe(map((result )=>{
         
          return result.movies
        })
        )
      }

     
}

