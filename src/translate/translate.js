export const fr = {
    definitionAirActivity1: "Air activity est une agence implantée au sein de l’aéroport Roissy Charles de Gaulle à Paris. Cette agence vous propose différentes activités, à effectuer à l’extérieur, afin de vous divertir lors de vos longues escales.",
    definitionAirActivity2: "Le déplacement est entièrement sous contrôle, ainsi qu'à notre charge, vous n'aurez donc pas besoin de vous stresser. Vous ne risquez donc pas de rater votre correspondance. ",
    definitionAirActivity3: "Pour votre information, un emplacement est disponible à l'agence afin de ranger vos bagages à main.",
    bookingBtnHomePage: 'Réserver votre place dès maintenant',
    contactUs: 'Nous contacter',
    player: 'joueur',
    players: 'joueurs',
    Player: 'Joueur',
    firstName: 'Prénom',
    lastName: 'Nom',
    email: 'Email',
    phoneNumber: 'Numero de téléphone',
    booking: 'Réserver',
    home: 'Accueil',
    activity: 'Activité',
    team: "L'équipe",
    selectActivity: 'Selectionnez votre activité :',
    january: 'janvier',
    february: 'fevrier',
    march: 'mars',
    april: 'avril',
    may: 'mai',
    june: 'juin',
    july: 'juillet',
    august: 'août',
    september: 'septembre',
    october: 'octobre',
    november: 'novembre',
    december: 'décembre',
    monday: 'lundi',
    tuesday: 'mardi',
    wednesday: 'mercredi',
    thursday: 'jeudi',
    friday: 'vendredi',
    saturday: 'samedi',
    sunday: 'dimanche',
    laserName: 'Laser game',
    laserText: 'mettre petit résumé',
    escapeName: 'Escape game',
    escapeText: 'mettre petit résumé',
    guidedtourName: 'Visite guidée',
    guidedtourText: 'mettre petit résumé',
    seeMore: 'Cliquez pour en savoir plus'
}

export const en = {
    definitionAirActivity: "Air activity is an agency located at Roissy Charles de Gaulle airport in Paris. This agency offers you different activities, outside, to entertain you during your long stopovers." +
        "You do not need to be stressed for the trip, it is entirely under control and at our charge. So you won't miss your connection." +
        "A space is available at the agency to store your hand luggage.",
    bookingBtnHomePage: 'Booking now',
    contactUs: 'Contact us',
    player: 'players',
    players: 'players',
    Player: 'Player',
    firstName: 'First name',
    lastName: 'Last name',
    email: 'Email,',
    phoneNumber: 'Phone number',
    booking: 'Booking',
    home: 'Home',
    activity: 'Activity',
    team: 'Team',
    selectActivity: 'select activity :',
    january: 'january',
    february: 'february',
    march: 'march',
    april: 'april',
    may: 'may',
    june: 'june',
    july: 'july',
    august: 'august',
    september: 'september',
    october: 'october',
    november: 'november',
    december: 'december',
    monday: 'monday',
    tuesday: 'tuesday',
    wednesday: 'wednesday',
    thursday: 'thursday',
    friday: 'friday',
    saturday: 'saturday',
    sunday: 'sunday',
    laserName: 'Laser game',
    laserText: '',
    escapeName: 'Escape game',
    escapeText: '',
    guidedtourName: 'Guided tour',
    guidedtourText: '',
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


