/* FICHIER: data.js
   ROLE: Simule une base de données NoSQL locale (Version MASSIVE).
*/

// 1. Initialisation des données (Seeding)
function initData() {
    // ⚠️ CHANGEMENT DE CLÉ POUR FORCER LA MISE À JOUR (v3_ULTIMATE)
    if (!localStorage.getItem('fit_initialized_v3_ULTIMATE')) { 
        console.log("⚡ Initialisation de la base de données ULTIME...");

        // --- A. DÉFINITION DES OFFRES (RÉFÉRENCE) ---
        const plans = [
            { id: 1, nom: "Standard", prix: 30 }, // Accès Heures creuses
            { id: 2, nom: "Gold", prix: 50 },     // Accès 24/7
            { id: 3, nom: "Platinum", prix: 90 }, // + Cours collectifs
            { id: 4, nom: "Diamond", prix: 120 }  // + Spa & Coaching privé
        ];

        // --- B. ENTITÉ 1 : MEMBRES (Mélange Stars & Lambda) ---
        const members = [
            // --- LES STARS (Gros Budget) ---
            { id: 1, nom: "Dwayne 'The Rock' Johnson", plan: "Diamond", date: "2023-01-01", status: "Actif" },
            { id: 2, nom: "Usain Bolt", plan: "Diamond", date: "2023-01-15", status: "Actif" },
            { id: 3, nom: "Serena Williams", plan: "Diamond", date: "2023-02-01", status: "Actif" },
            { id: 4, nom: "Conor McGregor", plan: "Platinum", date: "2023-02-10", status: "Suspendu" }, // Bagarre dans le vestiaire
            { id: 5, nom: "Elon Musk", plan: "Diamond", date: "2023-02-20", status: "Invité" },
            { id: 6, nom: "Derrick Rose", plan: "Diamond", date: "2023-03-01", status: "Actif" }, // 🌹
            { id: 7, nom: "Mike Tyson", plan: "Platinum", date: "2023-03-15", status: "Actif" },
            { id: 8, nom: "Cristiano Ronaldo", plan: "Diamond", date: "2023-04-01", status: "Actif" },
            { id: 9, nom: "Leo Messi", plan: "Diamond", date: "2023-04-02", status: "Actif" },
            { id: 10, nom: "Zlatan Ibrahimovic", plan: "Diamond", date: "2023-04-05", status: "Actif" },

            // --- LES INFLUENCEURS FITNESS (Budget Moyen/Haut) ---
            { id: 11, nom: "Tibo InShape", plan: "Gold", date: "2023-05-01", status: "Actif" },
            { id: 12, nom: "Juju Fitcats", plan: "Gold", date: "2023-05-02", status: "Actif" },
            { id: 13, nom: "Nassim Sahili", plan: "Platinum", date: "2023-05-10", status: "Actif" },
            { id: 14, nom: "Sam Sulek", plan: "Standard", date: "2023-05-15", status: "Suspendu" }, // A cassé une machine
            { id: 15, nom: "David Goggins", plan: "Standard", date: "2023-06-01", status: "Actif" }, // N'a pas besoin de luxe, juste de souffrir

            // --- LES GENS NORMAUX (Petit Budget / Locaux) ---
            { id: 16, nom: "Lucas Martin", plan: "Standard", date: "2023-06-10", status: "Actif" },
            { id: 17, nom: "Emma Petit", plan: "Standard", date: "2023-06-12", status: "Actif" },
            { id: 18, nom: "Hugo Durand", plan: "Standard", date: "2023-06-15", status: "Actif" },
            { id: 19, nom: "Chloé Dubois", plan: "Gold", date: "2023-07-01", status: "Actif" },
            { id: 20, nom: "Thomas Lefebvre", plan: "Standard", date: "2023-07-05", status: "Suspendu" }, // Paiement refusé
            { id: 21, nom: "Manon Leroy", plan: "Standard", date: "2023-07-20", status: "Actif" },
            { id: 22, nom: "Maxime Moreau", plan: "Gold", date: "2023-08-01", status: "Actif" },
            { id: 23, nom: "Léa Fournier", plan: "Standard", date: "2023-08-15", status: "Actif" },
            { id: 24, nom: "Alexandre Girard", plan: "Platinum", date: "2023-09-01", status: "Actif" },
            { id: 25, nom: "Sarah Bonnet", plan: "Standard", date: "2023-09-10", status: "Invité" }
        ];
        
        // --- C. ENTITÉ 2 : MACHINES (Parc Complet) ---
        const machines = [
            // CARDIO
            { id: 1, nom: "Tapis Roulant Technogym #1", etat: "Bon", maintenance: "2023-11-01" },
            { id: 2, nom: "Tapis Roulant Technogym #2", etat: "Bon", maintenance: "2023-11-01" },
            { id: 3, nom: "Tapis Roulant Technogym #3", etat: "En panne", maintenance: "2023-12-28" },
            { id: 4, nom: "Vélo Elliptique Matrix #1", etat: "Bon", maintenance: "2023-10-15" },
            { id: 5, nom: "Vélo Elliptique Matrix #2", etat: "Maintenance", maintenance: "2023-12-29" },
            { id: 6, nom: "Rameur Concept 2 #1", etat: "Bon", maintenance: "2023-09-20" },
            { id: 7, nom: "Rameur Concept 2 #2", etat: "Bon", maintenance: "2023-09-20" },
            { id: 8, nom: "Escalier (StairMaster)", etat: "Bon", maintenance: "2023-11-10" },
            
            // MUSCULATION GUIDÉE
            { id: 9, nom: "Presse à Cuisses 45°", etat: "Bon", maintenance: "2023-08-15" },
            { id: 10, nom: "Leg Extension", etat: "Bon", maintenance: "2023-08-20" },
            { id: 11, nom: "Leg Curl Ischio", etat: "En panne", maintenance: "2023-12-25" },
            { id: 12, nom: "Pec Deck (Papillon)", etat: "Bon", maintenance: "2023-10-05" },
            { id: 13, nom: "Tirage Vertical (Lat Pull)", etat: "Bon", maintenance: "2023-10-10" },
            { id: 14, nom: "Poulie Vis-à-Vis", etat: "Bon", maintenance: "2023-11-01" },

            // POIDS LIBRES & FORCE
            { id: 15, nom: "Cage à Squat Olympique #1", etat: "Bon", maintenance: "2023-06-01" },
            { id: 16, nom: "Cage à Squat Olympique #2", etat: "Bon", maintenance: "2023-06-01" },
            { id: 17, nom: "Banc Développé Couché", etat: "Bon", maintenance: "2023-07-15" },
            { id: 18, nom: "Banc Développé Incliné", etat: "Maintenance", maintenance: "2023-12-30" },
            { id: 19, nom: "Rack Haltères (2kg-50kg)", etat: "Bon", maintenance: "2023-01-01" },
            { id: 20, nom: "Smith Machine (Cadre Guidé)", etat: "Bon", maintenance: "2023-09-01" }
        ];

        // --- D. ENTITÉ 3 : COACHS (Staff Complet) ---
        const coaches = [
            { id: 1, nom: "Hany Rambod", spe: "Musculation", rating: 5.0 },
            { id: 2, nom: "Coach Carter", spe: "Crossfit", rating: 4.8 },
            { id: 3, nom: "Rocky Balboa", spe: "Boxe", rating: 5.0 },
            { id: 4, nom: "Jillian Michaels", spe: "Cardio", rating: 4.2 },
            { id: 5, nom: "Adriene Mishler", spe: "Yoga", rating: 4.9 },
            { id: 6, nom: "Greg Doucette", spe: "Nutrition", rating: 4.5 },
            { id: 7, nom: "Ronnie Coleman", spe: "Musculation", rating: 5.0 },
            { id: 8, nom: "Kayla Itsines", spe: "Cardio", rating: 4.6 }
        ];

        // --- E. GÉNÉRATION AUTOMATIQUE DES PAIEMENTS ---
        // Pour éviter d'écrire 100 lignes, on génère les paiements basés sur les membres !
        let payments = [];
        let payIdCounter = 1000;

        // 1. On crée un paiement d'abonnement pour CHAQUE membre
        members.forEach(member => {
            // Trouver le prix du plan
            const plan = plans.find(p => p.nom === member.plan);
            const price = plan ? plan.prix : 30; // 30 par défaut

            payIdCounter++;
            
            // On décale un peu les dates pour faire réaliste
            // (Ceci est une simulation simple)
            payments.push({
                id: payIdCounter,
                memberId: member.id,
                memberName: member.nom,
                motif: "Abonnement " + member.plan,
                montant: price,
                date: member.date, // Date d'inscription
                type: (Math.random() > 0.5) ? "Carte Bancaire" : "Virement"
            });
        });

        // 2. On ajoute quelques "Ventes au comptoir" (Eau, Protéines, Pass journée)
        // Pour que le tableau ne soit pas monatone
        const extras = [
            { motif: "Bouteille Eau 1L", prix: 2.00 },
            { motif: "Barre Protéinée", prix: 3.50 },
            { motif: "Séance Découverte", prix: 15.00 },
            { motif: "Serviette FITOS", prix: 12.00 },
            { motif: "Shaker Pre-Workout", prix: 4.00 }
        ];

        for(let i = 0; i < 15; i++) { // Ajouter 15 ventes random
            payIdCounter++;
            const item = extras[Math.floor(Math.random() * extras.length)];
            const randomDay = Math.floor(Math.random() * 28) + 1;
            const randomMonth = Math.floor(Math.random() * 12) + 1;
            
            payments.push({
                id: payIdCounter,
                memberId: null,
                memberName: null,
                client: "Client Passage",
                motif: item.motif,
                montant: item.prix,
                date: `2023-${randomMonth.toString().padStart(2, '0')}-${randomDay.toString().padStart(2, '0')}`,
                type: "Espèces"
            });
        }

        // --- SAUVEGARDE FINALE ---
        localStorage.setItem('fit_members', JSON.stringify(members));
        localStorage.setItem('fit_machines', JSON.stringify(machines));
        localStorage.setItem('fit_coaches', JSON.stringify(coaches));
        localStorage.setItem('fit_payments', JSON.stringify(payments));
        localStorage.setItem('fit_plans', JSON.stringify(plans));
        
        // Marqueur de version
        localStorage.setItem('fit_initialized_v3_ULTIMATE', 'true');
    }
}

// 2. Fonction pour LIRE les données (READ)
function getData(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
}

// 3. Fonction pour ÉCRIRE les données (CREATE / UPDATE / DELETE)
function saveData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

// Lancement automatique au chargement du script
initData();