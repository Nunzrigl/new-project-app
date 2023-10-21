import { Injectable } from "@angular/core";
import { celebrities } from "../celebrities-interface/celebrities-interface";


@Injectable({
    providedIn:'root'
})

export class CelebritiesService{

    celebrityList : celebrities[] = [
        {   'firstName': 'Eric',
            'id':1,
            'lastName':'Roberts',
            'birthDate':1985,
            'nationality':'american'
        },
        {   'firstName': 'Giulia',
            'id':2,
            'lastName':'Roberts',
            'birthDate':1967,
            'nationality':'american'
        },
        {   'firstName': 'Eddy',
            'id':3,
            'lastName':'Murphy',
            'birthDate':1965,
            'nationality':'american'
        }
        
        
    ]

    getList(){
         
    return this.celebrityList;
    }

    getById (id: number): celebrities |undefined{
        const celeb = this.celebrityList.find((celebrityList:celebrities)=> celebrityList.id === id);
        return celeb;
    }

    update(selectedMovie : celebrities): void {
        const index = this.celebrityList.findIndex((movies:celebrities)=> movies.id === selectedMovie.id);
        if(index !== -1){
            this.celebrityList[index] = selectedMovie;
        }
      
    }
}

