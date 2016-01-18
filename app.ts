import {Component} from "angular2/core";
import {bootstrap} from 'angular2/platform/browser';
import {FORM_DIRECTIVES} from "angular2/common";

@Component({
     selector: "search-comp",
     template: `<input type='text' [(ngModel)]="data.search"> {{data.search}} <button (click)="alertValue()">alert value</button>`,
     directives: [FORM_DIRECTIVES]
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