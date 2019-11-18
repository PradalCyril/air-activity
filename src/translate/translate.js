export const fr = {
    definitionAirActivity1: "Air activity est une agence implantée au sein de l’aéroport Roissy Charles de Gaulle à Paris. Cette agence vous propose différentes activités, à effectuer à l’extérieur, afin de vous divertir lors de vos longues escales.",
    definitionAirActivity2: "Le déplacement est entièrement sous contrôle, ainsi qu'à notre charge, vous n'aurez donc pas besoin de vous stresser. Vous ne risquez donc pas de rater votre correspondance. ",
    definitionAirActivity3: "Pour votre information, un emplacement est disponible à l'agence afin de ranger vos bagages à main.",
    bookingBtnHomePage: 'Réserver votre place dès maintenant',
    contactUs: 'Contact',
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
    laserText1: "Le laser game est l’un des loisir pour tous dont tout le monde parle.",
    laserText2:"Entre amis, famille ou même avec des personnes que vous ne connaissez pas encore, venez nous rejoindre afin d’essayer ce mode de divertissement.",
    laserText3:"• À partir de 10€ / personne",
    escapeName: 'Escape game',
    escapeText1: "Que vous soyez en famille, en groupe d’amis ou même seul, l’escape game est fait pour vous. Vous cherchez à vous divertir et à vous changez les idées après de longues heures de vol épuisantes, nous avons trouvez la solution pour vous.",
    escapeText2: "Venez vous évader au sein des mystères de l’escape game grâce à plusieurs scénarios différents. Résolvez des énigmes et trouvez les clés qui vous permettront de sortir de votre mission en 60 minutes.",
    escapeText3: "• À partir de 25€ / personne",
    guidedtourName: 'Visite guidée',
    guidedtourText1: "On vous emmène découvrir le charme parisien à travers plusieurs endroits tel que : ",
    guidedtourText2: "La Tour Eiffel",
    guidedtourText3: "La Basilique du Sacré-Coeur",
    guidedtourText4: "Le Jardin des Tuileries",
    guidedtourText5: "Le Louvre",
    guidedtourText6: "Et pleins d’autres endroits",
    guidedtourText7: "• À partir de 10€ / personne (5€ pour les 2-12 ans)",
    seeMore: 'Cliquez pour en savoir plus',
    activityDescription: "Venez découvrir un nouveau concept au sein de l’aéroport Charles de Gaulle",
    presentationTeam: "Notre équipe se compose de deux étudiantes en Master 1 Transmission et Développement des "+
            "PME à l’Institut Montpellier Management."
}

export const en = {
    definitionAirActivity1: "Air activity is an agency located at Roissy Charles de Gaulle airport in Paris. This agency offers you different activities, outside, to entertain you during your long stopovers.",
    definitionAirActivity2: "You do not need to be stressed for the trip, it is entirely under control and at our charge. So you won't miss your connection.",
    definitionAirActivity3: "A space is available at the agency to store your hand luggage.",
    bookingBtnHomePage: 'Booking now',
    contactUs: 'Contact',
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
    seeMore: 'Clic to see more'
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


