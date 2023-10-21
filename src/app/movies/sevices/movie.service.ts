import { Injectable } from "@angular/core";
import { films } from "../interfaces/movies.interface";


@Injectable({
    providedIn:'root'
})

export class MoviesService{

    movies : films[] = [
        {   'title':'Alla ricerca di Nemo',
            'id':1,
            'genres':'Animation',
            'releaseYear':2003,
            'rating':8.2,
            'lenght':100,
            'plot':'Dopo che il suo unico figlio è stato catturato da pescatori e portato a vivere in un acquario a Sydney, un pesce deve intraprendere un lungo e pericoloso viaggio per salvarlo.'
          
        },
        {
            'title':'Cattivissimo me',
            'id':2,
            'genres':'Animation',
            'releaseYear':2010,
            'rating':7.6,
            'lenght':92,
            'plot':'Un genio del male adotta tre orfane per utilizzarle a scopi criminosi, ma scopre che il loro amore sta cambiando la sua personalità. '
        },
        {
            'title':'Fantozzi',
            'id':3,
            'genres':'Commedy',
            'releaseYear':1975,
            'rating':7.9,
            'lenght':108,
            'plot':'Un italiano buono ma sfortunato si trova costantemente in situazioni difficili, ma non perde mai il suo buon umore. '
        }
        
    ]

    getList(){
         
    return this.movies;
    }

    getById (id: number): films |undefined{
        const movie = this.movies.find((movies:films)=> movies.id === id);
        return movie;
    
    }

    update(selectedMovie : films): void {
        const index = this.movies.findIndex((movies:films)=> movies.id === selectedMovie.id);
        if(index !== -1){
            this.movies[index] = selectedMovie;
        }
      
    }
}

