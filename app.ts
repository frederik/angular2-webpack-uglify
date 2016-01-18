import {Component} from "angular2/core";
import {bootstrap} from 'angular2/platform/browser';

@Component({
     selector: "search-comp",
     template: `<input type='text' [(ngModel)]="data.search"> {{data.search}} <button (click)="alertValue()">alert value</button>`
})     
class SearchComp {
 data: {search: string} = {search: "Initial"}
 
 alertValue() {
     alert(JSON.stringify(this.data));
 } 
}

bootstrap(SearchComp).then(() => {
    console.log("Bootstrapping completed");
})