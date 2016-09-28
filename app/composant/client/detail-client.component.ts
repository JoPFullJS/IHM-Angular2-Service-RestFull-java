import {Component, Input} from "@angular/core";

import {Client} from "../../domain/client";
import {Reservation} from "../../domain/reservation";

import {DetailReservationComponent} from "../reservation/detail-reservation.component";
import {AjoutReservationComponent} from "../reservation/ajout-reservation.component";

@Component({
    selector: 'detail-client',
    templateUrl: 'app/composant/client/detail-client.component.html',
    directives: [DetailReservationComponent, AjoutReservationComponent]
})

export class DetailClientComponent {

    // Client à détailler.
    @Input()
    public client: Client;

    /**
     * Bouteille sélectionnée dans la liste
     * des bouteilles de la client détaillée.
     */
    public reservationSelectionnee: Reservation;

    /**
     * Sélectionner une bouteille.
     *
     * @param bouteille La bouteille sélectionnée.
     */
    public selectionnerReservation(reservation: Reservation) {
        this.reservationSelectionnee = reservation;
    }

}
