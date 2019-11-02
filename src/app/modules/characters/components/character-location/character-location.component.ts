import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

//Models
import { LocationDetails } from 'src/app/shared/models/character/location-details.model';

//Services
import { CharacterService } from '../../character.service';

@Component({
  selector: 'character-location',
  templateUrl: './character-location.component.html',
  styleUrls: ['./character-location.component.css']
})
export class CharacterLocationComponent implements OnInit, OnChanges {

  @Input() location: LocationDetails;
  locationDetails: LocationDetails = <LocationDetails>{};

  constructor(private service: CharacterService) { }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.location != undefined)
      this.getLocationDetails(this.location.url);
  }

  getLocationDetails(url: string): void {
    if (!url)
      return;
    this.service.getLocationDetails(url).subscribe(
      result => { this.locationDetails = result; }
    )
  }

}
