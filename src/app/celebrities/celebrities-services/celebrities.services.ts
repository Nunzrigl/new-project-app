import { Injectable } from "@angular/core";
import { CelebrityForm, celebrities } from "../celebrities-interface/celebrities-interface";
import { Observable, Subject, map } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { observableToBeFn } from "rxjs/internal/testing/TestScheduler";


@Injectable({
    providedIn:'root'
})

export class CelebritiesService{

    private _baseUrl= '';
    
    private _celebrityList : celebrities[] = [];

    private _list$ = new Subject<celebrities[]>();
    
    listObs$ = this._list$.asObservable();


    constructor( private readonly _http : HttpClient){
        this._baseUrl = environment.baseUrl;
    }

    
    /* 
    private _next () {
        this._list$.next(this._celebrityList); 
    } 
    
    private _getIndex (id: number): number {
        return this._celebrityList.findIndex((_celebrityList:celebrities)=> _celebrityList.id === id);
    

    } */


    getList(): Observable<celebrities[]> {
        return this._http.get<celebrities[]>(`${this._baseUrl}/celebrities?order_by=id&page=0&size=25`).pipe(map((result : any)=>{
            return  result.celebrities
         })); 
       //this._next();
       
    }

    getById (id:string): Observable<celebrities>{
       return this._http.get<celebrities>(`${this._baseUrl}/celebrities/${id}`);
    }

    update(selectedCelebrity : celebrities): Observable<celebrities> {
        return this._http.put<celebrities>(`${this._baseUrl}/celebrities/${selectedCelebrity.id}`,
        selectedCelebrity);
       /*  const index : number = this._getIndex(selectedCelebrity.id);
        if(index !== -1){
            this._celebrityList[index] = selectedCelebrity;
        } */
        //this._next();
      
    }
    create(celebrity: celebrities): Observable<celebrities>{
        const celebrityDto : celebrities = this.formToDto(celebrity);
        return this._http.post<celebrities>(`${this._baseUrl}/celebrities`,
        celebrityDto);
        /* celebrity.id = this._celebrityList.length + 1;
        this._celebrityList.push(celebrity); */
      }
  
    delete(id : string){
        return this._http.delete<celebrities>(`${this._baseUrl}/celebrities/${id}`);
          /* const index = this._getIndex(id);
          if(index !== -1){
              this._celebrityList.splice(index,1);    
          } */
          
      }
 
      formToDto(createdCelebrity: CelebrityForm): celebrities {
    return {
      id: createdCelebrity.id,
      name: createdCelebrity.name,
      birthYear: createdCelebrity.birthYear,
      deathYear: createdCelebrity.deathYear,
      movies : createdCelebrity.movies,
    };
  }

}
