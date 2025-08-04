export const mockHorses = [
    {
        id: 'H001',
        name: 'Thunderbolt',
        breed: 'Thoroughbred',
        age: 5,
        status: 'Active', // 2) Capitalised
        lastVetCheck: '2025-07-15',
        avatar: '🐴',
        healthStats: { heartRate: 65, temperature: 38.0, recoveryRate: 'Good' },
        trainingLogs: [ // 1) 3 logs
            { date: '2025-07-28', activity: 'Speed Training', duration: '45 mins', notes: 'Excellent performance.' },
            { date: '2025-07-27', activity: 'Endurance Run', duration: '60 mins', notes: 'Consistent pace.' },
            { date: '2025-07-26', activity: 'Light Trot', duration: '30 mins', notes: 'Good recovery.' },
        ],
    },
    {
        id: 'H002',
        name: 'Willow',
        breed: 'Arabian',
        age: 7,
        status: 'Resting', // 2) Capitalised
        lastVetCheck: '2025-06-20',
        avatar: '🦄',
        healthStats: { heartRate: 50, temperature: 37.8, recoveryRate: 'Normal' },
        trainingLogs: [ // 1) 3 logs
            { date: '2025-07-25', activity: 'Light Gallop', duration: '30 mins', notes: 'Relaxed and calm.' },
            { date: '2025-07-24', activity: 'Pasture Time', duration: '120 mins', notes: 'Grazing peacefully.' },
            { date: '2025-07-23', activity: 'Grooming', duration: '20 mins', notes: 'Very cooperative.' },
        ],
    },
    {
        id: 'H003',
        name: 'Rocky',
        breed: 'Quarter Horse',
        age: 4,
        status: 'Active', // 2) Capitalised
        lastVetCheck: '2025-07-10',
        avatar: '🐎',
        healthStats: { heartRate: 70, temperature: 38.2, recoveryRate: 'Excellent' },
        trainingLogs: [ // 1) 3 logs
            { date: '2025-07-28', activity: 'Agility Drills', duration: '50 mins', notes: 'Sharp turns, very responsive.' },
            { date: '2025-07-27', activity: 'Barrel Racing Practice', duration: '45 mins', notes: 'Slight hesitation on the second barrel.' },
            { date: '2025-07-26', activity: 'Trail Ride', duration: '60 mins', notes: 'Confident and sure-footed.' },
        ],
    },
    {
        id: 'H004',
        name: 'Stardust',
        breed: 'Andalusian',
        age: 8,
        status: 'Injured', // 2) Capitalised
        lastVetCheck: '2025-07-25',
        avatar: '🤕',
        healthStats: { heartRate: 55, temperature: 37.9, recoveryRate: 'N/A' },
        trainingLogs: [ // 1) 3 logs
            { date: '2025-07-20', activity: 'Hand Walk', duration: '15 mins', notes: 'Slight limp on front left leg. Vet advised rest.' },
            { date: '2025-07-19', activity: 'Stall Rest', duration: 'All day', notes: 'Appears comfortable.' },
            { date: '2025-07-18', activity: 'Vet Examination', duration: '30 mins', notes: 'Diagnosed with minor sprain.' },
        ],
    },
    {
        id: 'H005',
        name: 'Blaze',
        breed: 'Mustang',
        age: 6,
        status: 'Active', // 2) Capitalised
        lastVetCheck: '2025-01-10', // 3) Overdue vet check
        avatar: '🐴',
        healthStats: { heartRate: 68, temperature: 38.1, recoveryRate: 'Good' },
        trainingLogs: [ // 1) 3 logs
             { date: '2025-07-29', activity: 'Trail Ride', duration: '90 mins', notes: 'Handled varied terrain well.' },
             { date: '2025-07-28', activity: 'River Crossing Practice', duration: '40 mins', notes: 'Confident entering the water.' },
             { date: '2025-07-27', activity: 'Canter Work', duration: '35 mins', notes: 'Strong and energetic.' },
        ],
    },
    {
        id: 'H006',
        name: 'Luna',
        breed: 'Friesian',
        age: 9,
        status: 'Resting', // 2) Capitalised
        lastVetCheck: '2025-07-01',
        avatar: '🦄',
        healthStats: { heartRate: 48, temperature: 37.7, recoveryRate: 'Normal' },
        trainingLogs: [ // 1) 3 logs
            { date: '2025-07-22', activity: 'Pasture Time', duration: '120 mins', notes: 'Peaceful grazing.' },
            { date: '2025-07-21', activity: 'Light Lunging', duration: '15 mins', notes: 'Moving freely.' },
            { date: '2025-07-20', activity: 'Flexibility Stretches', duration: '10 mins', notes: 'Good range of motion.' },
        ],
    },
    {
        id: 'H007',
        name: 'Comet',
        breed: 'Clydesdale',
        age: 10,
        status: 'Active', // 2) Capitalised
        lastVetCheck: '2024-12-20', // 3) Overdue vet check
        avatar: '🐎',
        healthStats: { heartRate: 60, temperature: 37.9, recoveryRate: 'Good' },
        trainingLogs: [ // 1) 3 logs
            { date: '2025-07-30', activity: 'Harness Training', duration: '75 mins', notes: 'Strong pulling, steady effort.' },
            { date: '2025-07-29', activity: 'Groundwork', duration: '30 mins', notes: 'Responsive to commands.' },
            { date: '2025-07-28', activity: 'Walking on Pavement', duration: '40 mins', notes: 'Calm with traffic noise.' },
        ],
    },
    {
        id: 'H008',
        name: 'Duchess',
        breed: 'Shire',
        age: 8,
        status: 'Resting', // 2) Capitalised
        lastVetCheck: '2025-07-18',
        avatar: '🐴',
        healthStats: { heartRate: 49, temperature: 37.6, recoveryRate: 'Normal' },
        trainingLogs: [ // 1) 3 logs
            { date: '2025-07-26', activity: 'Light Trotting', duration: '40 mins', notes: 'Maintaining fitness during rest period.' },
            { date: '2025-07-25', activity: 'Pasture Time', duration: '180 mins', notes: 'Socializing with Luna.' },
            { date: '2025-07-24', activity: 'Grooming & Bonding', duration: '25 mins', notes: 'Very relaxed.' },
        ],
    },
    {
        id: 'H009',
        name: 'Maverick',
        breed: 'Thoroughbred',
        age: 3,
        status: 'Active', // 2) Capitalised
        lastVetCheck: '2025-07-20',
        avatar: '🏇',
        healthStats: { heartRate: 72, temperature: 38.3, recoveryRate: 'Excellent' },
        trainingLogs: [ // 1) 3 logs
            { date: '2025-08-01', activity: 'Gate Practice', duration: '30 mins', notes: 'Quick start, needs focus.' },
            { date: '2025-07-31', activity: 'Gallop on track', duration: '20 mins', notes: 'Impressive speed, but tires quickly.' },
            { date: '2025-07-30', activity: 'Cool Down Walk', duration: '15 mins', notes: 'Recovery rate is improving.' },
        ],
    },
    {
        id: 'H010',
        name: 'Galaxy',
        breed: 'Paint Horse',
        age: 5,
        status: 'Active', // 2) Capitalised
        lastVetCheck: '2025-01-25', // 3) Overdue vet check
        avatar: '🐴',
        healthStats: { heartRate: 66, temperature: 38.0, recoveryRate: 'Good' },
        trainingLogs: [ // 1) 3 logs
            { date: '2025-07-29', activity: 'Barrel Racing', duration: '45 mins', notes: 'Tight turns, improving time.' },
            { date: '2025-07-28', activity: 'Reining Patterns', duration: '50 mins', notes: 'Excellent sliding stop.' },
            { date: '2025-07-27', activity: 'Obstacle Course', duration: '60 mins', notes: 'A bit hesitant at the water box.' },
        ],
    },
    {
        id: 'H011',
        name: 'Spirit',
        breed: 'Mustang',
        age: 7,
        status: 'Injured', // 2) Capitalised
        lastVetCheck: '2025-08-02',
        avatar: '🤕',
        healthStats: { heartRate: 58, temperature: 38.0, recoveryRate: 'N/A' },
        trainingLogs: [ // 1) 3 logs
            { date: '2025-08-02', activity: 'Stall Rest', duration: 'All day', notes: 'Minor tendon strain. Vet check scheduled for next week.' },
            { date: '2025-08-01', activity: 'Cold Hosing', duration: '15 mins', notes: 'To reduce swelling.' },
            { date: '2025-07-31', activity: 'Initial Injury Assessment', duration: '25 mins', notes: 'Horse pulled up lame during trot.' },
        ],
    },
    {
        id: 'H012',
        name: 'Princess',
        breed: 'Shetland Pony',
        age: 12,
        status: 'Resting', // 2) Capitalised
        lastVetCheck: '2025-07-05',
        avatar: '🦄',
        healthStats: { heartRate: 52, temperature: 37.8, recoveryRate: 'Normal' },
        trainingLogs: [ // 1) 3 logs
            { date: '2025-07-30', activity: 'Grooming Session', duration: '20 mins', notes: 'Enjoys being pampered.' },
            { date: '2025-07-29', activity: 'Lead-line walk with kids', duration: '30 mins', notes: 'Patient and gentle.' },
            { date: '2025-07-28', activity: 'Pasture Time', duration: '90 mins', notes: 'Grazing near the gate.' },
        ],
    },
    {
        id: 'H013',
        name: 'Titan',
        breed: 'Belgian Draft',
        age: 9,
        status: 'Active', // 2) Capitalised
        lastVetCheck: '2024-11-05', // 3) Overdue vet check
        avatar: '🐎',
        healthStats: { heartRate: 62, temperature: 37.9, recoveryRate: 'Good' },
        trainingLogs: [ // 1) 3 logs
            { date: '2025-07-28', activity: 'Heavy Pulling', duration: '60 mins', notes: 'Exceptional strength and stamina.' },
            { date: '2025-07-27', activity: 'Logging Practice', duration: '120 mins', notes: 'Moved three large logs.' },
            { date: '2025-07-26', activity: 'Harrowing the field', duration: '90 mins', notes: 'Consistent work rate.' },
        ],
    },
    {
        id: 'H014',
        name: 'Shadow',
        breed: 'Morgan',
        age: 6,
        status: 'Active', // 2) Capitalised
        lastVetCheck: '2025-07-11',
        avatar: '🐴',
        healthStats: { heartRate: 69, temperature: 38.1, recoveryRate: 'Excellent' },
        trainingLogs: [ // 1) 3 logs
            { date: '2025-08-01', activity: 'Dressage Practice', duration: '55 mins', notes: 'Elegant movements, very focused.' },
            { date: '2025-07-31', activity: 'Trail Riding', duration: '75 mins', notes: 'Alert and responsive on the trail.' },
            { date: '2025-07-30', activity: 'Lunging', duration: '20 mins', notes: 'Balanced and listening to cues.' },
        ],
    },
    {
        id: 'H015',
        name: 'Gypsy',
        breed: 'Gypsy Vanner',
        age: 5,
        status: 'Resting', // 2) Capitalised
        lastVetCheck: '2025-06-28',
        avatar: '🐴',
        healthStats: { heartRate: 50, temperature: 37.7, recoveryRate: 'Normal' },
        trainingLogs: [ // 1) 3 logs
            { date: '2025-07-27', activity: 'Free Roam', duration: '180 mins', notes: 'Socializing well with other horses in the pasture.' },
            { date: '2025-07-26', activity: 'Grooming', duration: '30 mins', notes: 'Mane and tail are looking great.' },
            { date: '2025-07-25', activity: 'Light walking', duration: '20 mins', notes: 'Calm and relaxed.' },
        ],
    },
    {
        id: 'H016',
        name: 'Apollo',
        breed: 'Appaloosa',
        age: 7,
        status: 'Active', // 2) Capitalised
        lastVetCheck: '2025-07-22',
        avatar: '🐎',
        healthStats: { heartRate: 67, temperature: 38.0, recoveryRate: 'Good' },
        trainingLogs: [ // 1) 3 logs
            { date: '2025-08-03', activity: 'Jumping Drills', duration: '50 mins', notes: 'Cleared all jumps, great energy.' },
            { date: '2025-08-02', activity: 'Flatwork', duration: '40 mins', notes: 'Working on transitions.' },
            { date: '2025-08-01', activity: 'Hacking', duration: '60 mins', notes: 'Enjoyed the change of scenery.' },
        ],
    },
    {
        id: 'H017',
        name: 'Misty',
        breed: 'Paso Fino',
        age: 6,
        status: 'Resting', // 2) Capitalised
        lastVetCheck: '2025-08-01',
        avatar: '🐴',
        healthStats: { heartRate: 51, temperature: 37.8, recoveryRate: 'Normal' },
        trainingLogs: [ // 1) 3 logs
            { date: '2025-08-02', activity: 'Gait Work', duration: '30 mins', notes: 'Smooth and natural gait.' },
            { date: '2025-08-01', activity: 'Pasture Time', duration: '120 mins', notes: 'Resting in the shade.' },
            { date: '2025-07-31', activity: 'Hand Grazing', duration: '20 mins', notes: 'Calm and content.' },
        ],
    },
    {
        id: 'H018',
        name: 'Samson',
        breed: 'Percheron',
        age: 11,
        status: 'Active', // 2) Capitalised
        lastVetCheck: '2025-01-02', // 3) Overdue vet check
        avatar: '🐎',
        healthStats: { heartRate: 63, temperature: 37.9, recoveryRate: 'Good' },
        trainingLogs: [ // 1) 3 logs
            { date: '2025-07-31', activity: 'Carriage Pulling', duration: '90 mins', notes: 'Steady and powerful performance.' },
            { date: '2025-07-30', activity: 'Strength Conditioning', duration: '60 mins', notes: 'Improving pulling power.' },
            { date: '2025-07-29', activity: 'Ground Driving', duration: '45 mins', notes: 'Focused and obedient.' },
        ],
    },
    {
        id: 'H019',
        name: 'Jewel',
        breed: 'Saddlebred',
        age: 5,
        status: 'Injured', // 2) Capitalised
        lastVetCheck: '2025-08-04',
        avatar: '🤕',
        healthStats: { heartRate: 60, temperature: 38.5, recoveryRate: 'N/A' },
        trainingLogs: [ // 1) 3 logs
            { date: '2025-08-04', activity: 'Veterinary Observation', duration: 'All day', notes: 'Under observation for colic symptoms. Vet monitoring.' },
            { date: '2025-08-03', activity: 'Stall Rest', duration: 'All day', notes: 'No signs of improvement yet.' },
            { date: '2025-08-02', activity: 'Administering Medication', duration: '5 mins', notes: 'Took medication without issue.' },
        ],
    },
    {
        id: 'H020',
        name: 'Phoenix',
        breed: 'Thoroughbred',
        age: 4,
        status: 'Active', // 2) Capitalised
        lastVetCheck: '2025-07-30',
        avatar: '🏇',
        healthStats: { heartRate: 75, temperature: 38.4, recoveryRate: 'Excellent' },
        trainingLogs: [ // 1) 3 logs
            { date: '2025-08-03', activity: 'Sprint Drills', duration: '35 mins', notes: 'Set a new personal best time for the furlong.' },
            { date: '2025-08-02', activity: 'Paddock Turnout', duration: '60 mins', notes: 'High energy, needs to settle.' },
            { date: '2025-08-01', activity: 'Warm-up canter', duration: '20 mins', notes: 'Powerful but controlled.' },
        ],
    }
];