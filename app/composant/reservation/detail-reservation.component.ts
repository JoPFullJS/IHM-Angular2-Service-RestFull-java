import {Component, Input} from "@angular/core";
import {Reservation} from "../../domain/reservation";
import {Button} from 'primeng/primeng';

@Component({
    selector: 'detail-reservation',
    templateUrl: 'app/composant/reservation/detail-reservation.component.html'
})

export class DetailReservationComponent {

    /**
     * Ce composant exprime son besoin de
     * se voir fournir une reservation lors de son utilisation.
     * Nous devons lui définir quelle reservation il doit afficher.
     */
    @Input()
    public reservation: Reservation;

}