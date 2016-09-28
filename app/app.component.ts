import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";
import {ListeBouteilleComponent} from "./composant/bouteille/liste-bouteille.component";
import {ListeCaveComponent} from "./composant/cave/liste-cave.component";
import {ListeReservationComponent} from "./composant/reservation/liste-reservation.component";
import {ListeClientComponent} from "./composant/client/liste-client.component";

@Component({
    selector: 'wineo',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    precompile: [ListeBouteilleComponent,ListeCaveComponent, ListeClientComponent, ListeReservationComponent]

})

export class AppComponent {

}