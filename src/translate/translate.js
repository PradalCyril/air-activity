export const fr = {
    definitionAirActivity: "Air activity est une agence implanté au sein de l’aéroport Roissy Charles de Gaulle à Paris. Cette agence vous propose différentes activités, à l’extérieur, afin de vous divertir lors de vos longues escales." +
        "Vous n’avez pas besoin de vous stressez pour le déplacement, il est entièrement sous contrôle et à notre charge. Vous ne risquez donc pas de rater votre correspondance." +
        "Un emplacement est disponible à l'agence afin de ranger vos bagages à main.",
    bookingBtnHomePage: 'Réserver votre place dès maintenant',
    contactUs: 'Nous contacter',
    player: 'joueur',
    players:'joueurs',
    firstName: 'Prénom',
    lastName: 'Nom',
    email:'Email',
    phoneNumber: 'Numero de téléphone',
    booking: 'Réserver',
    home:'Accueil',
    activity:'Activité',
    team: "L'équipe"
}

export const en = {
    definitionAirActivity: "Air activity is an agency located at Roissy Charles de Gaulle airport in Paris. This agency offers you different activities, outside, to entertain you during your long stopovers."+
    "You do not need to be stressed for the trip, it is entirely under control and at our charge. So you won't miss your connection."+
           "A space is available at the agency to store your hand luggage.",
    bookingBtnHomePage: 'Booking now',
    contactUs: 'Contact us',
    player: 'players',
    players:'players',
    firstName: 'First name',
    lastName: 'Last name',
    email:'Email,',
    phoneNumber: 'Phone number',
    booking: 'Booking',
    home:'Home',
    activity:'Activity',
    team: 'Team'

}


export const translate = (language, nameParameter) => {
    switch (language) {
        case 'fr':
            return fr[nameParameter]
        case 'en':
            return en[nameParameter]
        default:
            return fr[nameParameter]

    }
}


