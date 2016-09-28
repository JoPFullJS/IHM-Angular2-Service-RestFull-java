import {Component, Input, OnInit} from "@angular/core";

import {Client} from "../../domain/client";
import {DetailClientComponent} from "./detail-client.component";
import {ClientService} from "../../service/client.service";

@Component({
    selector: 'liste-client',
    templateUrl: 'app/composant/client/liste-client.component.html',
    directives: [DetailClientComponent],
    providers: [ClientService]
})

export class ListeClientComponent implements OnInit {

    /**
     * Constructeur définissant le fournisseur de ClientService à injecter.
     * @param clientService Le fournisseur de ClientService.
     */
    public constructor(private clientService: ClientService) { }


    // Clients à afficher.
    public clients: Client[];

    // Client sélectionnée dans la liste.
    public clientSelectionnee: Client;


    public chargerClient(){
        this.clientService
            .obtenirClients()
            .then(resultat => this.clients = resultat);
    }


    /**
     * Sélectionner un client.
     *
     * @param client Le client sélectionnée.
     */
    public selectionnerClient(client: Client) {
        this.clientSelectionnee = client;
    }

    public ngOnInit() {
        this.chargerClient();
    }

}






