import {Component, OnInit} from "@angular/core";
import {DetailReservationComponent} from "./detail-reservation.component";
import {ReservationService} from "../../service/reservation.service";
import {Reservation} from "../../domain/reservation";
import {DataTable, Column, TabPanel, TabView, Header, Footer, Dialog, Button, InputText} from "primeng/primeng";
import {ROUTER_DIRECTIVES} from "@angular/router-deprecated";

@Component({
    selector: 'liste-reservation',
    templateUrl: 'app/composant/reservation/liste-reservation.component.html',
    providers: [ReservationService],

    directives: [DetailReservationComponent, DataTable, Column, TabPanel, TabView, Header, Footer, Dialog, Button, InputText, ROUTER_DIRECTIVES,]
})

export class ListeReservationComponent implements OnInit {

    /////////////////////////////////////

    public reservations:Reservation[];

    public reservationSelectionnee:Reservation;

    public nouvelleReservation:Reservation = new Reservation();

    public ngOnInit() {
        this.chargerReservation();
    }

    constructor(private reservationService:ReservationService) {
    }

    public chargerReservation() {
        this.reservationService
            .obtenirReservations()
            .then(resultat => this.reservations = resultat);
    }

    public supprimerReservation() {

        this.reservationService
            .supprimerReservations(this.reservationSelectionnee.idUnique)
        // .then();
    }

    public modifier() {
        this.reservationService.modifierReservations(this.reservations);
    }

    public creerNouvelleReservation() {
        this.reservationService.ajouterReservations(this.nouvelleReservation);
    }
}