import { NgModule } from '@angular/core';
import { CharacterRoutingModule } from './character-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

//components
import { CharacterListComponent } from './pages/character-list/character-list.component';
import { CharacterLocationComponent } from './components/character-location/character-location.component';

//Services
import { CharacterService } from './character.service';

@NgModule({
    declarations: [
        CharacterListComponent,
        CharacterLocationComponent
    ],
    imports: [
        SharedModule,
        CharacterRoutingModule
    ],
    exports: [],
    providers: [CharacterService],
})
export class CharacterModule { }