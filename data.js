// Sample data structure for Indian films
// Replace this with your actual data

const moviesData = [
    {
        name: "Jawan",
        year: 2023,
        cast: "Shah Rukh Khan, Nayanthara, Vijay Sethupathi",
        productionHouse: "Red Chillies Entertainment",
        theatreRevenue: 1148,
        ottRevenue: 250,
        totalRevenue: 1398,
        posterUrl: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=400&h=600&fit=crop" // Replace with actual poster
    },
    {
        name: "Pathaan",
        year: 2023,
        cast: "Shah Rukh Khan, Deepika Padukone, John Abraham",
        productionHouse: "Yash Raj Films",
        theatreRevenue: 1055,
        ottRevenue: 180,
        totalRevenue: 1235,
        posterUrl: "https://images.unsplash.com/photo-1585951237318-9ea5e175b891?w=400&h=600&fit=crop"
    },
    {
        name: "Gadar 2",
        year: 2023,
        cast: "Sunny Deol, Ameesha Patel",
        productionHouse: "Zee Studios",
        theatreRevenue: 685,
        ottRevenue: 150,
        totalRevenue: 835,
        posterUrl: "https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=400&h=600&fit=crop"
    },
    {
        name: "Animal",
        year: 2023,
        cast: "Ranbir Kapoor, Rashmika Mandanna, Anil Kapoor",
        productionHouse: "T-Series",
        theatreRevenue: 917,
        ottRevenue: 200,
        totalRevenue: 1117,
        posterUrl: "https://images.unsplash.com/photo-1574267432553-4b4628081c31?w=400&h=600&fit=crop"
    },
    {
        name: "Dunki",
        year: 2023,
        cast: "Shah Rukh Khan, Taapsee Pannu",
        productionHouse: "Red Chillies Entertainment",
        theatreRevenue: 475,
        ottRevenue: 120,
        totalRevenue: 595,
        posterUrl: "https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=400&h=600&fit=crop"
    },
    {
        name: "Salaar",
        year: 2023,
        cast: "Prabhas, Prithviraj Sukumaran, Shruti Haasan",
        productionHouse: "Hombale Films",
        theatreRevenue: 715,
        ottRevenue: 180,
        totalRevenue: 895,
        posterUrl: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=600&fit=crop"
    },
    {
        name: "Tiger 3",
        year: 2023,
        cast: "Salman Khan, Katrina Kaif",
        productionHouse: "Yash Raj Films",
        theatreRevenue: 466,
        ottRevenue: 110,
        totalRevenue: 576,
        posterUrl: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=600&fit=crop"
    },
    {
        name: "12th Fail",
        year: 2023,
        cast: "Vikrant Massey, Medha Shankar",
        productionHouse: "Vidhu Vinod Chopra Films",
        theatreRevenue: 68,
        ottRevenue: 85,
        totalRevenue: 153,
        posterUrl: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=600&fit=crop"
    },
    {
        name: "Rocky Aur Rani Kii Prem Kahaani",
        year: 2023,
        cast: "Ranveer Singh, Alia Bhatt",
        productionHouse: "Dharma Productions",
        theatreRevenue: 355,
        ottRevenue: 95,
        totalRevenue: 450,
        posterUrl: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=400&h=600&fit=crop"
    },
    {
        name: "OMG 2",
        year: 2023,
        cast: "Akshay Kumar, Pankaj Tripathi",
        productionHouse: "Vipul D. Shah",
        theatreRevenue: 235,
        ottRevenue: 80,
        totalRevenue: 315,
        posterUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=600&fit=crop"
    },
    {
        name: "RRR",
        year: 2022,
        cast: "Ram Charan, Jr NTR, Alia Bhatt",
        productionHouse: "DVV Entertainment",
        theatreRevenue: 1387,
        ottRevenue: 220,
        totalRevenue: 1607,
        posterUrl: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=600&fit=crop"
    },
    {
        name: "KGF Chapter 2",
        year: 2022,
        cast: "Yash, Sanjay Dutt, Raveena Tandon",
        productionHouse: "Hombale Films",
        theatreRevenue: 1250,
        ottRevenue: 200,
        totalRevenue: 1450,
        posterUrl: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=600&fit=crop"
    },
    {
        name: "Brahmastra",
        year: 2022,
        cast: "Ranbir Kapoor, Alia Bhatt, Amitabh Bachchan",
        productionHouse: "Dharma Productions",
        theatreRevenue: 431,
        ottRevenue: 150,
        totalRevenue: 581,
        posterUrl: "https://images.unsplash.com/photo-1533613220915-609f661a6fe1?w=400&h=600&fit=crop"
    },
    {
        name: "Drishyam 2",
        year: 2022,
        cast: "Ajay Devgn, Tabu, Shriya Saran",
        productionHouse: "Panorama Studios",
        theatreRevenue: 332,
        ottRevenue: 90,
        totalRevenue: 422,
        posterUrl: "https://images.unsplash.com/photo-1567095751004-aa51a2690368?w=400&h=600&fit=crop"
    },
    {
        name: "Vikram",
        year: 2022,
        cast: "Kamal Haasan, Vijay Sethupathi, Fahadh Faasil",
        productionHouse: "Raaj Kamal Films International",
        theatreRevenue: 443,
        ottRevenue: 120,
        totalRevenue: 563,
        posterUrl: "https://images.unsplash.com/photo-1512070679279-8988d32161be?w=400&h=600&fit=crop"
    },
    {
        name: "Baahubali 2: The Conclusion",
        year: 2017,
        cast: "Prabhas, Rana Daggubati, Anushka Shetty",
        productionHouse: "Arka Media Works",
        theatreRevenue: 1810,
        ottRevenue: 150,
        totalRevenue: 1960,
        posterUrl: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=400&h=600&fit=crop"
    },
    {
        name: "Dangal",
        year: 2016,
        cast: "Aamir Khan, Sakshi Tanwar, Fatima Sana Shaikh",
        productionHouse: "Aamir Khan Productions",
        theatreRevenue: 2070,
        ottRevenue: 180,
        totalRevenue: 2250,
        posterUrl: "https://images.unsplash.com/photo-1518281420975-50db6e5d0a97?w=400&h=600&fit=crop"
    },
    {
        name: "PK",
        year: 2014,
        cast: "Aamir Khan, Anushka Sharma",
        productionHouse: "Rajkumar Hirani Films",
        theatreRevenue: 832,
        ottRevenue: 100,
        totalRevenue: 932,
        posterUrl: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=600&fit=crop"
    },
    {
        name: "Pushpa: The Rise",
        year: 2021,
        cast: "Allu Arjun, Rashmika Mandanna, Fahadh Faasil",
        productionHouse: "Mythri Movie Makers",
        theatreRevenue: 373,
        ottRevenue: 180,
        totalRevenue: 553,
        posterUrl: "https://images.unsplash.com/photo-1574267432553-4b4628081c31?w=400&h=600&fit=crop"
    },
    {
        name: "Sooryavanshi",
        year: 2021,
        cast: "Akshay Kumar, Katrina Kaif",
        productionHouse: "Rohit Shetty Productions",
        theatreRevenue: 295,
        ottRevenue: 85,
        totalRevenue: 380,
        posterUrl: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=600&fit=crop"
    }
];

// Calculate yearly revenue data
const yearlyRevenueData = moviesData.reduce((acc, movie) => {
    if (!acc[movie.year]) {
        acc[movie.year] = {
            year: movie.year,
            theatreRevenue: 0,
            ottRevenue: 0,
            totalRevenue: 0
        };
    }
    acc[movie.year].theatreRevenue += movie.theatreRevenue;
    acc[movie.year].ottRevenue += movie.ottRevenue;
    acc[movie.year].totalRevenue += movie.totalRevenue;
    return acc;
}, {});

// Convert to array and sort by year
const yearlyRevenueArray = Object.values(yearlyRevenueData).sort((a, b) => a.year - b.year);
