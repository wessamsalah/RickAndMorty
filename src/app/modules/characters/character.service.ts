import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//models
import { Episode } from '../../shared/models/character/episode.model';
import { LocationDetails } from '../../shared/models/character/location-details.model';
import { Character } from '../../shared/models/character/character.model';
import { PagedData } from 'src/app/shared/models/paged-data.model';

@Injectable()
export class CharacterService {


    public characterURL: string = '/api/character';
    public episodeURL: string = '/api/episode'; 
    constructor(private http: HttpClient) { }

    getAllCharacters(page: number): Observable<PagedData<Character>> {
        return this.http.get<PagedData<Character>>(`${this.characterURL}/?page=${page}`);
    }

    getLocationDetails(url: string): Observable<LocationDetails> {
        return this.http.get<LocationDetails>(url);
    }

    getMultipleEpisodes(ids: number[]): Observable<Episode[]> {
        return this.http.get(`${this.episodeURL}/${ids.join(",")}`).pipe(
            map(response => {
                //this is a workaround because the api sometimes return array and sometime return object
                return Array.isArray(response) ? <Episode[]>response : <Episode[]>[response];
            })
        );
    }
}
