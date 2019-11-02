import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
    declarations: [],
    imports: [
        BrowserModule  ,
        NgxPaginationModule
    ],
    exports: [
        BrowserModule ,
        NgxPaginationModule
    ]
})
export class SharedModule { }
