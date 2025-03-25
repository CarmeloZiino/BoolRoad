const travels = [
    {
        id: 1,
        citta: "Parigi",
        dataPartenza: "10-02-2025",
        dataArrivo: "15-02-2025",
        persone: [
            { id: 1, nome: "Luca", cognome: "Rossi", eta: 30, email: "luca.rossi@example.com", numeroTelefonico: "+390123456789", codiceFiscale: "RSSLCU95A01H501X" },
            { id: 2, nome: "Maria", cognome: "Bianchi", eta: 27, email: "maria.bianchi@example.com", numeroTelefonico: "+390987654321", codiceFiscale: "BNCMRC98B41H501Y" },
            { id: 3, nome: "Giulia", cognome: "Moretti", eta: 24, email: "giulia.moretti@example.com", numeroTelefonico: "+390334556677", codiceFiscale: "MRTGIA01C41H501Z" },
            { id: 4, nome: "Alessandro", cognome: "Fontana", eta: 35, email: "alessandro.fontana@example.com", numeroTelefonico: "+390112233445", codiceFiscale: "FNTLSN90D01H501W" },
            { id: 5, nome: "Francesca", cognome: "Greco", eta: 29, email: "francesca.greco@example.com", numeroTelefonico: "+390667788990", codiceFiscale: "GRCFNC96E01H501V" }
        ],
        image: "./img/paris.jpg"
    },
    {
        id: 2,
        citta: "Londra",
        dataPartenza: "10-03-2025",
        dataArrivo: "20-03-2025",
        persone: [
            { id: 6, nome: "Giovanni", cognome: "Verdi", eta: 35, email: "giovanni.verdi@example.com", numeroTelefonico: "+390112233445", codiceFiscale: "VRDGNN90A01H501X" },
            { id: 7, nome: "Elisa", cognome: "Ferri", eta: 28, email: "elisa.ferri@example.com", numeroTelefonico: "+390998877665", codiceFiscale: "FRRLSA97B41H501Y" },
            { id: 8, nome: "Matteo", cognome: "Costa", eta: 31, email: "matteo.costa@example.com", numeroTelefonico: "+390556677889", codiceFiscale: "CSTMTT94C41H501Z" },
            { id: 9, nome: "Simona", cognome: "Ricci", eta: 26, email: "simona.ricci@example.com", numeroTelefonico: "+390223344556", codiceFiscale: "RCCSNO99D01H501W" },
            { id: 10, nome: "Antonio", cognome: "Mariani", eta: 33, email: "antonio.mariani@example.com", numeroTelefonico: "+390445566778", codiceFiscale: "MRNNTN92E01H501V" }
        ],
        image: "./img/london.avif"
    },
    {
        id: 3,
        citta: "Roma",
        dataPartenza: "01-06-2025",
        dataArrivo: "07-06-2025",
        persone: [
            { id: 11, nome: "Elena", cognome: "Russo", eta: 22, email: "elena.russo@example.com", numeroTelefonico: "+390556677889", codiceFiscale: "RSSLEN03A01H501X" },
            { id: 12, nome: "Marco", cognome: "Ferrari", eta: 29, email: "marco.ferrari@example.com", numeroTelefonico: "+390443322110", codiceFiscale: "FRRMRC96B41H501Y" },
            { id: 13, nome: "Chiara", cognome: "Sartori", eta: 25, email: "chiara.sartori@example.com", numeroTelefonico: "+390334455667", codiceFiscale: "SRTCHR00C41H501Z" },
            { id: 14, nome: "Stefano", cognome: "Lombardi", eta: 32, email: "stefano.lombardi@example.com", numeroTelefonico: "+390778899001", codiceFiscale: "LMBSFN93D01H501W" },
            { id: 15, nome: "Laura", cognome: "Villa", eta: 27, email: "laura.villa@example.com", numeroTelefonico: "+390998877665", codiceFiscale: "VLLLRU98E41H501U" }
        ],
        image: "./img/rome.jpg"
    },
    {
        id: 4,
        citta: "Lipari",
        dataPartenza: "15-07-2025",
        dataArrivo: "25-07-2025",
        persone: [
            { id: 16, nome: "Davide", cognome: "Santoro", eta: 38, email: "davide.santoro@example.com", numeroTelefonico: "+390112233445", codiceFiscale: "SNTDVD85F01H501X" },
            { id: 17, nome: "Sara", cognome: "Caruso", eta: 31, email: "sara.caruso@example.com", numeroTelefonico: "+390556677889", codiceFiscale: "CRSARA94G41H501Y" },
            { id: 18, nome: "Vincenzo", cognome: "Barone", eta: 36, email: "vincenzo.barone@example.com", numeroTelefonico: "+390778899001", codiceFiscale: "BRNVNC89J41H501X" },
            { id: 19, nome: "Marta", cognome: "De Santis", eta: 28, email: "marta.desantis@example.com", numeroTelefonico: "+390998877665", codiceFiscale: "DSNMRT97M41H501Y" },
            { id: 20, nome: "Riccardo", cognome: "Gatti", eta: 34, email: "riccardo.gatti@example.com", numeroTelefonico: "+390334556677", codiceFiscale: "GTTRCC91G41H501Z" }
        ],
        image: "./img/lipari.jpg"
    },
    {
        id: 5,
        citta: "Castelvetrano",
        dataPartenza: "10-06-2025",
        dataArrivo: "15-06-2025",
        persone: [
            { id: 26, nome: "Antonio", cognome: "Lombardo", eta: 34, email: "antonio.lombardo@example.com", numeroTelefonico: "+390111223344", codiceFiscale: "LMBNTN89A01H501V" },
            { id: 27, nome: "Francesca", cognome: "Caruso", eta: 31, email: "francesca.caruso@example.com", numeroTelefonico: "+390112233445", codiceFiscale: "CRSFCN94D41H501X" },
            { id: 28, nome: "Paolo", cognome: "Giovanni", eta: 28, email: "paolo.giovanni@example.com", numeroTelefonico: "+390223344556", codiceFiscale: "GNNPLS99L01H501X" },
            { id: 29, nome: "Sofia", cognome: "Marino", eta: 25, email: "sofia.marino@example.com", numeroTelefonico: "+390334455667", codiceFiscale: "MRNSFA94C01H501Y" },
            { id: 30, nome: "Giorgio", cognome: "Pellegrini", eta: 33, email: "giorgio.pellegrini@example.com", numeroTelefonico: "+390556677889", codiceFiscale: "PLLGHR96A01H501Z" }
        ],
        image: "./img/castelvetrano.jpg"
    },
    {
        id: 6,
        citta: "Olbia",
        dataPartenza: "01-09-2025",
        dataArrivo: "05-09-2025",
        persone: [
            { id: 31, nome: "Raffaele", cognome: "Esposito", eta: 32, email: "raffaele.esposito@example.com", numeroTelefonico: "+390223344221", codiceFiscale: "SPTRFL92D41H501W" },
            { id: 32, nome: "Claudia", cognome: "Russo", eta: 30, email: "claudia.russo@example.com", numeroTelefonico: "+390445566778", codiceFiscale: "RSSLCD98C01H501X" },
            { id: 33, nome: "Alessandro", cognome: "Bianchi", eta: 33, email: "alessandro.bianchi@example.com", numeroTelefonico: "+390556677889", codiceFiscale: "BNCLSA91F01H501Z" },
            { id: 34, nome: "Sabrina", cognome: "Fiore", eta: 29, email: "sabrina.fiore@example.com", numeroTelefonico: "+390778899001", codiceFiscale: "FIRSBN94D01H501Y" },
            { id: 35, nome: "Federico", cognome: "Gallo", eta: 28, email: "federico.gallo@example.com", numeroTelefonico: "+390334567890", codiceFiscale: "GLLFRD93E01H501U" }
        ],
        image: "./img/olbia.jpg"
    }
];

export default travels;
