import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

//models
import { PagedData } from 'src/app/shared/models/paged-data.model';
import { PageInfo } from 'src/app/shared/models/page-info.model';
import { Character } from 'src/app/shared/models/character/character.model';

//Services
import { CharacterService } from '../../character.service';


@Component({
  selector: 'character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  page: number = 1;
  total: number;
  count: number = 20;
  loading: boolean;
  public pagedData: PagedData<Character> = new PagedData<Character>(<PageInfo>{}, []);

  constructor(private characterService: CharacterService, private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    const pageNumber = this.getUrlParameterById('page');
    this.getAllCharacters(pageNumber);
  }

  getUrlParameterById(param: string): number {
    return +this.activeRoute.snapshot.paramMap.get(param);
  }

  onPageChange(page: number) {
    this.router.navigate(["characters", page]);
    this.getAllCharacters(page);
  }


  //Characters
  getAllCharacters(page: number): void {
    this.loading = true;
    this.characterService.getAllCharacters(page).subscribe(
      result => {
        this.loading = false;
        this.pagedData = result;
        this.page = page;
        this.total = result.info.count;
      }
    )
  }


  //Episodes
  getEpisodes(id: number): void {
    if (!id)
      return;
    let character = this.pagedData.results.find(c => c.id == id);
    if (!character)
      return;
    let episodeIds = character.episode.map(r => +r.split("episode/")[1]);
    this.getMultipleEpisodes(episodeIds);
  }

  getMultipleEpisodes(ids: number[]): void {
    if (!ids && ids.length < 1)
      return;
    this.characterService.getMultipleEpisodes(ids).subscribe(
      result => {
        alert(result.map(r => r.name).join(","))
      }
    )
  }


}
