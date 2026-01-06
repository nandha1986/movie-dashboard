// Initialize charts and data
let yearlyChart, ottTheatreChart;

// Initialize the dashboard
document.addEventListener('DOMContentLoaded', function() {
    initializeDashboard();
});

function initializeDashboard() {
    // Update summary cards
    updateSummaryCards();
    
    // Create charts
    createYearlyRevenueChart();
    createOttVsTheatreChart();
    
    // Populate year filter
    populateYearFilter();
    
    // Populate movies table
    populateMoviesTable();
    
    // Add event listener to year filter
    document.getElementById('yearFilter').addEventListener('change', filterMovies);
    
    // Update last updated date
    updateLastUpdated();
}

function updateSummaryCards() {
    // Get current year data (2023 as default)
    const currentYear = 2023;
    const currentYearMovies = moviesData.filter(movie => movie.year === currentYear);
    
    const totalRevenue = currentYearMovies.reduce((sum, movie) => sum + movie.totalRevenue, 0);
    const theatreRevenue = currentYearMovies.reduce((sum, movie) => sum + movie.theatreRevenue, 0);
    const ottRevenue = currentYearMovies.reduce((sum, movie) => sum + movie.ottRevenue, 0);
    
    // Find top grossing film
    const topFilm = moviesData.reduce((max, movie) => 
        movie.totalRevenue > max.totalRevenue ? movie : max, moviesData[0]);
    
    // Update DOM
    document.getElementById('totalRevenue').textContent = `₹${totalRevenue.toFixed(0)} Cr`;
    document.getElementById('theatreRevenue').textContent = `₹${theatreRevenue.toFixed(0)} Cr`;
    document.getElementById('ottRevenue').textContent = `₹${ottRevenue.toFixed(0)} Cr`;
    document.getElementById('topFilm').textContent = topFilm.name;
}

function createYearlyRevenueChart() {
    const ctx = document.getElementById('yearlyRevenueChart').getContext('2d');
    
    const years = yearlyRevenueArray.map(data => data.year);
    const theatreRevenues = yearlyRevenueArray.map(data => data.theatreRevenue);
    const ottRevenues = yearlyRevenueArray.map(data => data.ottRevenue);
    const totalRevenues = yearlyRevenueArray.map(data => data.totalRevenue);
    
    yearlyChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: years,
            datasets: [
                {
                    label: 'Total Revenue',
                    data: totalRevenues,
                    borderColor: '#667eea',
                    backgroundColor: 'rgba(102, 126, 234, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4
                },
                {
                    label: 'Theatre Revenue',
                    data: theatreRevenues,
                    borderColor: '#764ba2',
                    backgroundColor: 'rgba(118, 75, 162, 0.1)',
                    borderWidth: 2,
                    fill: false,
                    tension: 0.4
                },
                {
                    label: 'OTT Revenue',
                    data: ottRevenues,
                    borderColor: '#f093fb',
                    backgroundColor: 'rgba(240, 147, 251, 0.1)',
                    borderWidth: 2,
                    fill: false,
                    tension: 0.4
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                    callbacks: {
                        label: function(context) {
                            return context.dataset.label + ': ₹' + context.parsed.y.toFixed(0) + ' Cr';
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return '₹' + value + ' Cr';
                        }
                    }
                }
            }
        }
    });
}

function createOttVsTheatreChart() {
    const ctx = document.getElementById('ottVsTheatreChart').getContext('2d');
    
    // Calculate total OTT and Theatre revenue across all years
    const totalTheatreRevenue = moviesData.reduce((sum, movie) => sum + movie.theatreRevenue, 0);
    const totalOttRevenue = moviesData.reduce((sum, movie) => sum + movie.ottRevenue, 0);
    
    ottTheatreChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Theatre Revenue', 'OTT Revenue'],
            datasets: [{
                data: [totalTheatreRevenue, totalOttRevenue],
                backgroundColor: [
                    '#667eea',
                    '#f093fb'
                ],
                borderWidth: 2,
                borderColor: '#fff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'bottom',
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.parsed;
                            const total = context.dataset.data.reduce((a, b) => a + b, 0);
                            const percentage = ((value / total) * 100).toFixed(1);
                            return label + ': ₹' + value.toFixed(0) + ' Cr (' + percentage + '%)';
                        }
                    }
                }
            }
        }
    });
}

function populateYearFilter() {
    const yearFilter = document.getElementById('yearFilter');
    const years = [...new Set(moviesData.map(movie => movie.year))].sort((a, b) => b - a);
    
    years.forEach(year => {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        yearFilter.appendChild(option);
    });
}

function populateMoviesTable(filteredData = null) {
    const tableBody = document.getElementById('moviesTableBody');
    tableBody.innerHTML = '';
    
    // Use filtered data or all movies, sorted by total revenue
    const dataToDisplay = filteredData || [...moviesData];
    dataToDisplay.sort((a, b) => b.totalRevenue - a.totalRevenue);
    
    // Get top 10
    const top10 = dataToDisplay.slice(0, 10);
    
    top10.forEach((movie, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td><strong>${movie.name}</strong></td>
            <td>${movie.year}</td>
            <td>${movie.cast}</td>
            <td>${movie.productionHouse}</td>
            <td>₹${movie.theatreRevenue.toFixed(0)}</td>
            <td>₹${movie.ottRevenue.toFixed(0)}</td>
            <td><strong>₹${movie.totalRevenue.toFixed(0)}</strong></td>
        `;
        tableBody.appendChild(row);
    });
}

function filterMovies() {
    const selectedYear = document.getElementById('yearFilter').value;
    
    if (selectedYear === 'all') {
        populateMoviesTable();
    } else {
        const filteredMovies = moviesData.filter(movie => movie.year === parseInt(selectedYear));
        populateMoviesTable(filteredMovies);
    }
}

function updateLastUpdated() {
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('lastUpdated').textContent = today.toLocaleDateString('en-IN', options);
}

// Utility function to format currency
function formatCurrency(amount) {
    return `₹${amount.toFixed(0)} Cr`;
}

// Responsive chart resize
window.addEventListener('resize', function() {
    if (yearlyChart) yearlyChart.resize();
    if (ottTheatreChart) ottTheatreChart.resize();
});
