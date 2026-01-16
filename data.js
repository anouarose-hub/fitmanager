/* FICHIER: data.js
   ROLE: Simule une base de données NoSQL locale (Version MASSIVE V4)
*/

// 1. Initialisation des données (Seeding)
function initData() {
    // ⚠️ CHANGEMENT DE CLÉ POUR FORCER LA MISE À JOUR (v4_MEGA_DB)
    if (!localStorage.getItem('fit_initialized_v4_MEGA_DB')) { 
        console.log("⚡ Initialisation de la MEGA BASE DE DONNÉES...");

        // --- A. DÉFINITION DES OFFRES (RÉFÉRENCE) ---
        const plans = [
            { id: 1, nom: "Standard", prix: 30 },
            { id: 2, nom: "Gold", prix: 50 },
            { id: 3, nom: "Platinum", prix: 90 },
            { id: 4, nom: "Diamond", prix: 120 },
            { id: 5, nom: "Superstar", prix: 250 }, // Offre VIP
            { id: 6, nom: "Mythique", prix: 500 }   // Offre "God Tier"
        ];

        // --- B. ENTITÉ 1 : MEMBRES (Mélange Massif) ---
        const members = [
            // --- TIER 1 : LES LÉGENDES (MYTHIQUE) ---
            { id: 1, nom: "Arnold Schwarzenegger", plan: "Mythique", date: "2023-01-01", status: "Actif" },
            { id: 2, nom: "Ronnie Coleman", plan: "Mythique", date: "2023-01-02", status: "Actif" },
            { id: 3, nom: "Dwayne 'The Rock' Johnson", plan: "Mythique", date: "2023-01-05", status: "Actif" },
            { id: 4, nom: "Mike Tyson", plan: "Mythique", date: "2023-01-10", status: "Actif" },
            { id: 5, nom: "Muhammad Ali", plan: "Mythique", date: "2023-01-12", status: "Honneur" },
            { id: 6, nom: "Bruce Lee", plan: "Mythique", date: "2023-01-15", status: "Honneur" },
            { id: 7, nom: "Usain Bolt", plan: "Mythique", date: "2023-02-01", status: "Actif" },
            { id: 8, nom: "Michael Jordan", plan: "Mythique", date: "2023-02-05", status: "Actif" },
            { id: 9, nom: "LeBron James", plan: "Mythique", date: "2023-02-10", status: "Actif" },
            { id: 10, nom: "Cristiano Ronaldo", plan: "Mythique", date: "2023-02-15", status: "Actif" },

            // --- TIER 2 : LES SUPERSTARS (SUPERSTAR) ---
            { id: 11, nom: "Conor McGregor", plan: "Superstar", date: "2023-03-01", status: "Suspendu" }, // Bagarre
            { id: 12, nom: "Khabib Nurmagomedov", plan: "Superstar", date: "2023-03-02", status: "Actif" },
            { id: 13, nom: "Jon Jones", plan: "Superstar", date: "2023-03-05", status: "Actif" },
            { id: 14, nom: "Francis Ngannou", plan: "Superstar", date: "2023-03-10", status: "Actif" },
            { id: 15, nom: "Chris Hemsworth", plan: "Superstar", date: "2023-03-15", status: "Actif" },
            { id: 16, nom: "Henry Cavill", plan: "Superstar", date: "2023-03-20", status: "Actif" },
            { id: 17, nom: "Jason Momoa", plan: "Superstar", date: "2023-03-25", status: "Actif" },
            { id: 18, nom: "Tom Hardy", plan: "Superstar", date: "2023-04-01", status: "Actif" },
            { id: 19, nom: "Mark Wahlberg", plan: "Superstar", date: "2023-04-05", status: "Actif" },
            { id: 20, nom: "Zlatan Ibrahimovic", plan: "Superstar", date: "2023-04-10", status: "Actif" },
            { id: 21, nom: "Kylian Mbappé", plan: "Superstar", date: "2023-04-15", status: "Actif" },
            { id: 22, nom: "Neymar Jr", plan: "Superstar", date: "2023-04-20", status: "Suspendu" }, // Blessure
            { id: 23, nom: "Serena Williams", plan: "Superstar", date: "2023-05-01", status: "Actif" },
            { id: 24, nom: "Ronda Rousey", plan: "Superstar", date: "2023-05-05", status: "Actif" },
            { id: 25, nom: "Derrick Rose", plan: "Superstar", date: "2023-05-10", status: "Actif" },

            // --- TIER 3 : LES INFLUENCEURS & PROS (DIAMOND / PLATINUM) ---
            { id: 30, nom: "Tibo InShape", plan: "Diamond", date: "2023-06-01", status: "Actif" },
            { id: 31, nom: "Juju Fitcats", plan: "Diamond", date: "2023-06-01", status: "Actif" },
            { id: 32, nom: "Nassim Sahili", plan: "Diamond", date: "2023-06-05", status: "Actif" },
            { id: 33, nom: "Sam Sulek", plan: "Platinum", date: "2023-06-10", status: "Suspendu" }, // Casse du matériel
            { id: 34, nom: "David Goggins", plan: "Platinum", date: "2023-06-15", status: "Actif" },
            { id: 35, nom: "Larry Wheels", plan: "Diamond", date: "2023-06-20", status: "Actif" },
            { id: 36, nom: "Chris Bumstead (CBum)", plan: "Diamond", date: "2023-06-25", status: "Actif" },
            { id: 37, nom: "Noel Deyzel", plan: "Platinum", date: "2023-07-01", status: "Actif" },
            { id: 38, nom: "Jeff Seid", plan: "Gold", date: "2023-07-05", status: "Actif" },
            { id: 39, nom: "Zyzz Legacy", plan: "Gold", date: "2023-07-10", status: "Honneur" },

            // --- TIER 4 : LES CLIENTS LAMBDA (STANDARD / GOLD) ---
            { id: 50, nom: "Lucas Martin", plan: "Standard", date: "2023-08-01", status: "Actif" },
            { id: 51, nom: "Emma Petit", plan: "Standard", date: "2023-08-02", status: "Actif" },
            { id: 52, nom: "Hugo Durand", plan: "Gold", date: "2023-08-05", status: "Actif" },
            { id: 53, nom: "Chloé Dubois", plan: "Standard", date: "2023-08-10", status: "Actif" },
            { id: 54, nom: "Thomas Lefebvre", plan: "Standard", date: "2023-08-12", status: "Suspendu" }, // Impayé
            { id: 55, nom: "Manon Leroy", plan: "Gold", date: "2023-08-15", status: "Actif" },
            { id: 56, nom: "Maxime Moreau", plan: "Standard", date: "2023-08-20", status: "Actif" },
            { id: 57, nom: "Léa Fournier", plan: "Gold", date: "2023-09-01", status: "Actif" },
            { id: 58, nom: "Alexandre Girard", plan: "Standard", date: "2023-09-05", status: "Invité" },
            { id: 59, nom: "Sarah Bonnet", plan: "Standard", date: "2023-09-10", status: "Actif" },
            { id: 60, nom: "Enzo Rossi", plan: "Gold", date: "2023-09-15", status: "Actif" },
            { id: 61, nom: "Camille Faure", plan: "Standard", date: "2023-09-20", status: "Actif" },
            { id: 62, nom: "Antoine Blanc", plan: "Standard", date: "2023-10-01", status: "Suspendu" },
            { id: 63, nom: "Julie Garnier", plan: "Gold", date: "2023-10-05", status: "Actif" },
            { id: 64, nom: "Nicolas Moulin", plan: "Standard", date: "2023-10-10", status: "Actif" },
            { id: 65, nom: "Alice Francois", plan: "Standard", date: "2023-10-15", status: "Actif" },
            { id: 66, nom: "Mathis Morin", plan: "Gold", date: "2023-11-01", status: "Actif" },
            { id: 67, nom: "Inès Mathieu", plan: "Standard", date: "2023-11-05", status: "Actif" },
            { id: 68, nom: "Gabriel Clement", plan: "Standard", date: "2023-11-10", status: "Actif" },
            { id: 69, nom: "Jade Gautier", plan: "Gold", date: "2023-11-15", status: "Actif" }
        ];
        
        // --- C. ENTITÉ 2 : MACHINES (Parc Gigantesque) ---
        const machines = [
            // ZONE CARDIO (High Tech)
            { id: 1, nom: "Tapis Technogym Skillrun #1", etat: "Bon", maintenance: "2023-11-01" },
            { id: 2, nom: "Tapis Technogym Skillrun #2", etat: "Bon", maintenance: "2023-11-01" },
            { id: 3, nom: "Tapis Technogym Skillrun #3", etat: "Bon", maintenance: "2023-11-01" },
            { id: 4, nom: "Tapis Technogym Skillrun #4", etat: "En panne", maintenance: "2023-12-28" },
            { id: 5, nom: "Tapis Technogym Skillrun #5", etat: "Bon", maintenance: "2023-11-05" },
            { id: 6, nom: "Vélo Elliptique Matrix #1", etat: "Bon", maintenance: "2023-10-15" },
            { id: 7, nom: "Vélo Elliptique Matrix #2", etat: "Bon", maintenance: "2023-10-15" },
            { id: 8, nom: "Vélo Elliptique Matrix #3", etat: "Maintenance", maintenance: "2023-12-29" },
            { id: 9, nom: "Rameur Concept 2 #1", etat: "Bon", maintenance: "2023-09-20" },
            { id: 10, nom: "Rameur Concept 2 #2", etat: "Bon", maintenance: "2023-09-20" },
            { id: 11, nom: "Rameur Concept 2 #3", etat: "Bon", maintenance: "2023-09-20" },
            { id: 12, nom: "Escalier StairMaster Gauntlet #1", etat: "Bon", maintenance: "2023-11-10" },
            { id: 13, nom: "Escalier StairMaster Gauntlet #2", etat: "En panne", maintenance: "2023-12-25" },
            { id: 14, nom: "Assault Bike Rogue #1", etat: "Bon", maintenance: "2023-08-01" },
            { id: 15, nom: "Assault Bike Rogue #2", etat: "Bon", maintenance: "2023-08-01" },
            
            // ZONE MUSCULATION GUIDÉE (Panatta / Hammer Strength)
            { id: 20, nom: "Presse à Cuisses 45° Panatta", etat: "Bon", maintenance: "2023-08-15" },
            { id: 21, nom: "Hack Squat Panatta", etat: "Bon", maintenance: "2023-08-15" },
            { id: 22, nom: "Leg Extension Technogym", etat: "Bon", maintenance: "2023-08-20" },
            { id: 23, nom: "Leg Curl Couché Technogym", etat: "En panne", maintenance: "2023-12-25" },
            { id: 24, nom: "Leg Curl Assis Technogym", etat: "Bon", maintenance: "2023-08-22" },
            { id: 25, nom: "Pec Deck (Papillon) Matrix", etat: "Bon", maintenance: "2023-10-05" },
            { id: 26, nom: "Chest Press Convergent", etat: "Bon", maintenance: "2023-10-06" },
            { id: 27, nom: "Shoulder Press Convergent", etat: "Bon", maintenance: "2023-10-07" },
            { id: 28, nom: "Tirage Vertical (Lat Pull)", etat: "Bon", maintenance: "2023-10-10" },
            { id: 29, nom: "Tirage Horizontal (Low Row)", etat: "Bon", maintenance: "2023-10-12" },
            { id: 30, nom: "Poulie Vis-à-Vis Crossover", etat: "Bon", maintenance: "2023-11-01" },
            { id: 31, nom: "Machine à Abdominaux", etat: "Bon", maintenance: "2023-11-05" },

            // ZONE POIDS LIBRES & FORCE (Eleiko)
            { id: 40, nom: "Cage à Squat Olympique Eleiko #1", etat: "Bon", maintenance: "2023-06-01" },
            { id: 41, nom: "Cage à Squat Olympique Eleiko #2", etat: "Bon", maintenance: "2023-06-01" },
            { id: 42, nom: "Cage à Squat Olympique Eleiko #3", etat: "Bon", maintenance: "2023-06-01" },
            { id: 43, nom: "Plateforme Soulevé de Terre #1", etat: "Bon", maintenance: "2023-06-05" },
            { id: 44, nom: "Plateforme Soulevé de Terre #2", etat: "Bon", maintenance: "2023-06-05" },
            { id: 45, nom: "Banc Développé Couché Compétition #1", etat: "Bon", maintenance: "2023-07-15" },
            { id: 46, nom: "Banc Développé Couché Compétition #2", etat: "Bon", maintenance: "2023-07-15" },
            { id: 47, nom: "Banc Développé Incliné", etat: "Maintenance", maintenance: "2023-12-30" },
            { id: 48, nom: "Banc Développé Décliné", etat: "Bon", maintenance: "2023-07-20" },
            { id: 49, nom: "Rack Haltères (2kg-30kg)", etat: "Bon", maintenance: "2023-01-01" },
            { id: 50, nom: "Rack Haltères Lourds (32kg-60kg)", etat: "Bon", maintenance: "2023-01-01" },
            { id: 51, nom: "Smith Machine (Cadre Guidé) #1", etat: "Bon", maintenance: "2023-09-01" },
            { id: 52, nom: "Smith Machine (Cadre Guidé) #2", etat: "Bon", maintenance: "2023-09-01" }
        ];

        // --- D. ENTITÉ 3 : COACHS (Un seul Dieu) ---
        const coaches = [
            { 
                id: 1, 
                nom: "Dr Mike Israetel", 
                spe: "Hypertrophie Scientifique", 
                image: "images/mike.jpg", // Correspond à votre fichier local
                rating: 5.0,
                voteCount: 42 
            }
        ];

        // --- E. GÉNÉRATION AUTOMATIQUE DES PAIEMENTS ---
        let payments = [];
        let payIdCounter = 5000;

        // 1. Paiements d'abonnements pour TOUS les membres
        members.forEach(member => {
            // Trouver le prix du plan
            const plan = plans.find(p => p.nom === member.plan);
            const price = plan ? plan.prix : 30;

            if (member.status !== "Invité" && member.status !== "Honneur") {
                payIdCounter++;
                payments.push({
                    id: payIdCounter,
                    memberId: member.id,
                    memberName: member.nom,
                    motif: "Renouvellement : " + member.plan,
                    montant: price,
                    date: member.date,
                    type: (Math.random() > 0.4) ? "Carte Bancaire" : "Virement"
                });
            }
        });

        // 2. Ventes au comptoir (Boost du CA)
        const extras = [
            { motif: "Bouteille Eau 1.5L", prix: 2.50 },
            { motif: "Barre Protéinée Grenade", prix: 4.00 },
            { motif: "Séance Découverte", prix: 15.00 },
            { motif: "Serviette FITOS", prix: 12.00 },
            { motif: "Shaker Pre-Workout", prix: 4.50 },
            { motif: "Ceinture de Force", prix: 35.00 },
            { motif: "Sangles de Tirage", prix: 15.00 }
        ];

        for(let i = 0; i < 40; i++) { // 40 ventes additionnelles
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
                type: (Math.random() > 0.7) ? "Espèces" : "Carte Bancaire"
            });
        }

        // --- SAUVEGARDE FINALE ---
        localStorage.setItem('fit_members', JSON.stringify(members));
        localStorage.setItem('fit_machines', JSON.stringify(machines));
        localStorage.setItem('fit_coaches', JSON.stringify(coaches));
        localStorage.setItem('fit_payments', JSON.stringify(payments));
        localStorage.setItem('fit_plans', JSON.stringify(plans));
        
        // Marqueur de version
        localStorage.setItem('fit_initialized_v4_MEGA_DB', 'true');
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