import {Component, Input} from "@angular/core";

import {Client} from "../../domain/client";
import {Reservation} from "../../domain/reservation";

@Component({
    selector: 'ajout-reservation',
    templateUrl: 'app/composant/reservation/ajout-reservation.component.html'
})

export class AjoutReservationComponent {

    // Client cible de l'ajout.
    @Input()
    public client: Client;

    // Reservation à ajouter.
    public reservation: Reservation = new Reservation();

    /**
     * Ajouter une nouvelle reservation
     */
    public ajouterNouvelleReservation() {
        //noinspection TypeScriptUnresolvedFunction
        this.client.reservations.push(Object.assign({ }, this.reservation));
        // Nous réinitialisons la reservation liée au formulaire.
        this.reservation = new Reservation();
    }

}
