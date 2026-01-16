/* FICHIER: data.js
   ROLE: Simule une base de données NoSQL locale (Version MASSIVE V5 - STAFF COMPLET)
*/

// 1. Initialisation des données (Seeding)
function initData() {
    // ⚠️ CHANGEMENT DE CLÉ POUR FORCER LA MISE À JOUR AUTOMATIQUE (v5)
    if (!localStorage.getItem('fit_initialized_v5_FULL_STAFF')) { 
        console.log("⚡ Initialisation de la BASE DE DONNÉES COMPLÈTE...");

        // --- A. DÉFINITION DES OFFRES ---
        const plans = [
            { id: 1, nom: "Standard", prix: 30 },
            { id: 2, nom: "Gold", prix: 50 },
            { id: 3, nom: "Platinum", prix: 90 },
            { id: 4, nom: "Diamond", prix: 120 },
            { id: 5, nom: "Superstar", prix: 250 },
            { id: 6, nom: "Mythique", prix: 500 }
        ];

        // --- B. ENTITÉ 1 : MEMBRES (50+ Personnes) ---
        const members = [
            // --- TIER 1 : LÉGENDES (Mythique) ---
            { id: 1, nom: "Arnold Schwarzenegger", plan: "Mythique", date: "2023-01-01", status: "Actif" },
            { id: 2, nom: "Ronnie Coleman", plan: "Mythique", date: "2023-01-02", status: "Honneur" },
            { id: 3, nom: "Dwayne 'The Rock' Johnson", plan: "Mythique", date: "2023-01-05", status: "Actif" },
            { id: 4, nom: "Mike Tyson", plan: "Mythique", date: "2023-01-10", status: "Actif" },
            { id: 5, nom: "Muhammad Ali", plan: "Mythique", date: "2023-01-12", status: "Honneur" },
            { id: 6, nom: "Bruce Lee", plan: "Mythique", date: "2023-01-15", status: "Honneur" },
            
            // --- TIER 2 : SUPERSTARS ---
            { id: 11, nom: "Conor McGregor", plan: "Superstar", date: "2023-03-01", status: "Suspendu" },
            { id: 12, nom: "Khabib Nurmagomedov", plan: "Superstar", date: "2023-03-02", status: "Actif" },
            { id: 13, nom: "Jon Jones", plan: "Superstar", date: "2023-03-05", status: "Actif" },
            { id: 14, nom: "Francis Ngannou", plan: "Superstar", date: "2023-03-10", status: "Actif" },
            { id: 15, nom: "Chris Hemsworth", plan: "Superstar", date: "2023-03-15", status: "Actif" },
            { id: 16, nom: "Henry Cavill", plan: "Superstar", date: "2023-03-20", status: "Actif" },
            { id: 17, nom: "Jason Momoa", plan: "Superstar", date: "2023-03-25", status: "Actif" },
            { id: 25, nom: "Derrick Rose", plan: "Superstar", date: "2023-05-10", status: "Actif" },

            // --- TIER 3 : INFLUENCEURS & PROS ---
            { id: 30, nom: "Tibo InShape", plan: "Diamond", date: "2023-06-01", status: "Actif" },
            { id: 31, nom: "Juju Fitcats", plan: "Diamond", date: "2023-06-01", status: "Actif" },
            { id: 32, nom: "Nassim Sahili", plan: "Diamond", date: "2023-06-05", status: "Actif" },
            { id: 33, nom: "Sam Sulek", plan: "Platinum", date: "2023-06-10", status: "Suspendu" },
            { id: 34, nom: "David Goggins", plan: "Platinum", date: "2023-06-15", status: "Actif" },
            { id: 36, nom: "Chris Bumstead (CBum)", plan: "Diamond", date: "2023-06-25", status: "Actif" },
            
            // --- TIER 4 : CLIENTS LAMBDA ---
            { id: 50, nom: "Lucas Martin", plan: "Standard", date: "2023-08-01", status: "Actif" },
            { id: 51, nom: "Emma Petit", plan: "Standard", date: "2023-08-02", status: "Actif" },
            { id: 52, nom: "Hugo Durand", plan: "Gold", date: "2023-08-05", status: "Actif" },
            { id: 53, nom: "Chloé Dubois", plan: "Standard", date: "2023-08-10", status: "Actif" },
            { id: 54, nom: "Thomas Lefebvre", plan: "Standard", date: "2023-08-12", status: "Suspendu" },
            { id: 55, nom: "Manon Leroy", plan: "Gold", date: "2023-08-15", status: "Actif" },
            { id: 56, nom: "Maxime Moreau", plan: "Standard", date: "2023-08-20", status: "Actif" },
            { id: 57, nom: "Léa Fournier", plan: "Gold", date: "2023-09-01", status: "Actif" },
            { id: 58, nom: "Alexandre Girard", plan: "Standard", date: "2023-09-05", status: "Invité" },
            { id: 59, nom: "Sarah Bonnet", plan: "Standard", date: "2023-09-10", status: "Actif" },
            { id: 60, nom: "Enzo Rossi", plan: "Gold", date: "2023-09-15", status: "Actif" },
            { id: 66, nom: "Mathis Morin", plan: "Gold", date: "2023-11-01", status: "Actif" },
            { id: 67, nom: "Inès Mathieu", plan: "Standard", date: "2023-11-05", status: "Actif" },
            { id: 68, nom: "Gabriel Clement", plan: "Standard", date: "2023-11-10", status: "Actif" }
        ];
        
        // --- C. ENTITÉ 2 : MACHINES (Parc Complet) ---
        const machines = [
            // CARDIO
            { id: 1, nom: "Tapis Technogym Skillrun #1", etat: "Bon", maintenance: "2023-11-01" },
            { id: 2, nom: "Tapis Technogym Skillrun #2", etat: "Bon", maintenance: "2023-11-01" },
            { id: 3, nom: "Tapis Technogym Skillrun #3", etat: "En panne", maintenance: "2023-12-28" },
            { id: 6, nom: "Vélo Elliptique Matrix #1", etat: "Bon", maintenance: "2023-10-15" },
            { id: 7, nom: "Vélo Elliptique Matrix #2", etat: "Bon", maintenance: "2023-10-15" },
            { id: 9, nom: "Rameur Concept 2 #1", etat: "Bon", maintenance: "2023-09-20" },
            { id: 10, nom: "Rameur Concept 2 #2", etat: "Bon", maintenance: "2023-09-20" },
            { id: 12, nom: "Escalier StairMaster Gauntlet", etat: "Bon", maintenance: "2023-11-10" },
            
            // MUSCU
            { id: 20, nom: "Presse à Cuisses 45° Panatta", etat: "Bon", maintenance: "2023-08-15" },
            { id: 22, nom: "Leg Extension Technogym", etat: "Bon", maintenance: "2023-08-20" },
            { id: 23, nom: "Leg Curl Couché Technogym", etat: "En panne", maintenance: "2023-12-25" },
            { id: 25, nom: "Pec Deck (Papillon) Matrix", etat: "Bon", maintenance: "2023-10-05" },
            { id: 28, nom: "Tirage Vertical (Lat Pull)", etat: "Bon", maintenance: "2023-10-10" },
            { id: 30, nom: "Poulie Vis-à-Vis Crossover", etat: "Bon", maintenance: "2023-11-01" },

            // FORCE
            { id: 40, nom: "Cage à Squat Olympique Eleiko", etat: "Bon", maintenance: "2023-06-01" },
            { id: 43, nom: "Plateforme Soulevé de Terre", etat: "Bon", maintenance: "2023-06-05" },
            { id: 45, nom: "Banc Développé Couché Compétition", etat: "Bon", maintenance: "2023-07-15" },
            { id: 49, nom: "Rack Haltères (2kg-60kg)", etat: "Bon", maintenance: "2023-01-01" },
            { id: 51, nom: "Smith Machine (Cadre Guidé)", etat: "Bon", maintenance: "2023-09-01" }
        ];

        // --- D. ENTITÉ 3 : COACHS (TOUS LES EXPERTS) ---
        // J'ai mis les chemins "images/..." pour ceux que tu as téléchargés
        const coaches = [
            { 
                id: 1, nom: "Dr Mike Israetel", spe: "Hypertrophie Scientifique", 
                image: "images/mike.jpg", rating: 5.0, voteCount: 42 
            },
            { 
                id: 2, nom: "Ronnie Coleman", spe: "Bodybuilding Légendaire", 
                image: "images/ronnie.jpg", rating: 5.0, voteCount: 108 
            },
            { 
                id: 3, nom: "Coach Carter", spe: "Mental & Discipline", 
                image: "images/carter.jpg", rating: 4.9, voteCount: 85 
            },
            { 
                id: 4, nom: "Rocky Balboa", spe: "Boxe & Résilience", 
                image: "images/rocky.jpg", rating: 5.0, voteCount: 200 
            },
            { 
                id: 5, nom: "Greg Doucette", spe: "Nutrition & Vérité", 
                image: "images/greg.jpg", rating: 4.7, voteCount: 60 
            },
            { 
                id: 6, nom: "Hany Rambod", spe: "Préparation Olympia", 
                image: "", rating: 5.0, voteCount: 30 // Pas d'image locale, utilisera le fallback
            },
            { 
                id: 7, nom: "Jillian Michaels", spe: "Transformation Totale", 
                image: "", rating: 4.5, voteCount: 55 
            },
            { 
                id: 8, nom: "Adriene Mishler", spe: "Yoga & Flexibilité", 
                image: "", rating: 4.8, voteCount: 90 
            }
        ];

        // --- E. GÉNÉRATION AUTOMATIQUE DES PAIEMENTS ---
        let payments = [];
        let payIdCounter = 5000;

        // 1. Abonnements membres
        members.forEach(member => {
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

        // 2. Ventes additionnelles
        const extras = [
            { motif: "Bouteille Eau 1.5L", prix: 2.50 },
            { motif: "Barre Protéinée Grenade", prix: 4.00 },
            { motif: "Séance Découverte", prix: 15.00 },
            { motif: "Serviette FITOS", prix: 12.00 },
            { motif: "Shaker Pre-Workout", prix: 4.50 }
        ];

        for(let i = 0; i < 30; i++) {
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
        
        // Marqueur de version v5
        localStorage.setItem('fit_initialized_v5_FULL_STAFF', 'true');
    }
}

// 2. Fonction LECTURE
function getData(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
}

// 3. Fonction ÉCRITURE
function saveData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

initData();