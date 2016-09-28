import {Injectable} from "@angular/core";
import {Http, Headers, RequestOptions} from "@angular/http";
import {Reservation} from "../domain/reservation";
import {Json} from "@angular/forms/src/facade/lang";


@Injectable()
export class ReservationService{

    constructor (private http: Http) { }

    public ajouterReservations(reservation: Reservation): Promise {
        let headers: Headers = new Headers({
            'Content-Type': 'application/json'
        });

        let options: RequestOptions = new RequestOptions({
            'headers': headers
        });
        return this.http
            .post('http://localhost:8080/com.projetrestau-0.1-SNAPSHOT/ws/reservation', Json.stringify(reservation),options)
            .toPromise();
    }


    public obtenirReservations(): Promise<Reservation[]> {

        return this.http
            .get('http://localhost:8080/com.projetrestau-0.1-SNAPSHOT/ws/reservation')
            .toPromise()
            .then(response => response.json() as Reservation[]);
    }

    public supprimerReservations(identifiant:String):void {

        let urlDelete = 'http://localhost:8080/com.projetrestau-0.1-SNAPSHOT/ws/reservation/' + identifiant;

        this.http
            .delete(urlDelete)
            .toPromise()
            .then()
            .catch();
    }

    public modifierReservations(reservations: Reservation[]): Promise<Reservation[]> {

        let headers: Headers = new Headers({
            'Content-Type': 'application/json'
        });

        let options: RequestOptions = new RequestOptions({
            'headers': headers
        });

        return this.http
            .put('http://localhost:8080/com.projetrestau-0.1-SNAPSHOT/ws/reservation', Json.stringify(reservations),
                options)
            .toPromise()
            .then(response => response.json() as Reservation[])
            .catch();
    }

}