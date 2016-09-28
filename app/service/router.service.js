"use strict";
var router_1 = require("@angular/router");
var liste_cave_component_1 = require("../composant/cave/liste-cave.component");
var accueil_component_1 = require("../composant/accueil.component");
var liste_bouteille_component_1 = require("../composant/bouteille/liste-bouteille.component");
var liste_client_component_1 = require("../composant/client/liste-client.component");
var liste_reservation_component_1 = require("../composant/reservation/liste-reservation.component");
/**
 * Nous créons un ensemble de règles de navigation qui vont servir
 * de configuration à notre service de routage.
 * @type {{path: string; redirectTo: string; patchMatch: string}[]}
 */
var routes = [
    {
        path: '',
        redirectTo: '/accueil',
        pathMatch: 'full'
    },
    {
        path: 'accueil',
        component: accueil_component_1.AccueilComponent
    },
    {
        path: 'caves',
        component: liste_cave_component_1.ListeCaveComponent
    },
    {
        path: 'bouteilles',
        component: liste_bouteille_component_1.ListeBouteilleComponent
    },
    {
        path: 'clients',
        component: liste_client_component_1.ListeClientComponent
    },
    {
        path: 'reservations',
        component: liste_reservation_component_1.ListeReservationComponent
    },
];
/**
 * Nous créons une service de routage en utilisant la configuration ci-dessus.
 * Nous devons ensuite le boostraper ou l'injecter
 * dans les composants utilisant la navigation (voir main.ts et app.component.ts).
 * @type {any[][]}
 */
exports.routerService = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=router.service.js.map