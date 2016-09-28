import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Client} from "../domain/client";
import {Reservation} from "../domain/reservation";
import "rxjs/Rx";
import {Observable} from "rxjs/Rx";

@Injectable()
export class ClientService {

    constructor (private http: Http) { };

    //noinspection TypeScriptUnresolvedVariable
    public obtenirClients(): Promise<Client[]> {

        //noinspection TypeScriptUnresolvedFunction
        return this.http
            .get('http://localhost:8080/com.projetrestau-0.1-SNAPSHOT/ws/Client')
            .toPromise()
            .then(response => response.json() as Client[]);
    }
}
