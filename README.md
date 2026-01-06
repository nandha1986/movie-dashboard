# 🎬 Indian Films Revenue Dashboard

A comprehensive, interactive dashboard to track Indian film revenues year-over-year, featuring top 10 movies, OTT vs Theatre revenue analysis, and detailed metadata.

![Dashboard Preview](https://via.placeholder.com/800x400/667eea/ffffff?text=Indian+Films+Revenue+Dashboard)

## 🌟 Features

- **Year-over-Year Revenue Trends**: Interactive line chart showing revenue trends across years
- **OTT vs Theatre Distribution**: Doughnut chart comparing OTT and Theatre revenues
- **Top 10 Movies Display**: View movies in either table or tile/poster view
  - **Table View**: Detailed tabular data with sortable columns
  - **Tile View**: Beautiful movie poster cards with visual presentation
- **Summary Cards**: Quick overview of key metrics
- **Year Filter**: Filter movies by specific years
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices

## 📊 Dashboard Components

### 1. Summary Cards
- Total Revenue (Current Year)
- Theatre Revenue
- OTT Revenue
- Top Grossing Film

### 2. Charts
- **Yearly Revenue Chart**: Line chart showing total, theatre, and OTT revenue trends
- **OTT vs Theatre Chart**: Doughnut chart showing revenue distribution

### 3. Top 10 Movies Table
Displays the following metadata:
- Movie Name
- Release Year
- Cast
- Production House
- Theatre Revenue (₹ Crores)
- OTT Revenue (₹ Crores)
- Total Revenue (₹ Crores)

## 🚀 Quick Start

### Local Development

1. Clone this repository:
```bash
git clone https://github.com/YOUR-USERNAME/indian-films-dashboard.git
cd indian-films-dashboard
```

2. Open `index.html` in your web browser:
   - Simply double-click the file, or
   - Use a local server (recommended):
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js (http-server)
     npx http-server
     ```

3. Visit `http://localhost:8000` in your browser

## 🌐 Deploy to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it something like `indian-films-dashboard`
3. Make it public (required for free GitHub Pages)
4. Don't initialize with README (we already have one)

### Step 2: Push Your Code

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Indian Films Revenue Dashboard"

# Add remote repository (replace YOUR-USERNAME and REPO-NAME)
git remote add origin https://github.com/YOUR-USERNAME/REPO-NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** (top right)
3. Scroll down to **Pages** section (left sidebar)
4. Under **Source**, select `main` branch
5. Click **Save**
6. Your site will be published at: `https://YOUR-USERNAME.github.io/REPO-NAME/`

It may take a few minutes for the site to go live!

## 📝 Customizing the Data

### Update Movie Data

Edit the `data.js` file to add your own movie data. Follow this structure:

```javascript
const moviesData = [
    {
        name: "Movie Name",
        year: 2024,
        cast: "Actor 1, Actor 2, Actor 3",
        productionHouse: "Production House Name",
        theatreRevenue: 500,  // in Crores
        ottRevenue: 150,      // in Crores
        totalRevenue: 650,    // in Crores
        posterUrl: "https://example.com/poster.jpg"  // Movie poster URL (optional)
    },
    // Add more movies...
];
```

**Note on Poster URLs:**
- For the tile view to show actual movie posters, add the `posterUrl` field with a link to the movie poster image
- If no `posterUrl` is provided, a placeholder with 🎬 emoji will be shown
- Recommended poster dimensions: 400x600px or similar aspect ratio
- You can use image hosting services like Imgur, or link directly to official poster images

### Modify Styling

Edit `styles.css` to customize:
- Colors
- Fonts
- Layout
- Card styles
- Chart appearance

### Change Chart Types

In `script.js`, you can modify the Chart.js configurations to:
- Change chart types (bar, line, pie, etc.)
- Adjust colors
- Modify tooltips
- Add animations

## 📁 File Structure

```
indian-films-dashboard/
├── index.html          # Main HTML structure
├── styles.css          # Styling and layout
├── script.js           # Dashboard logic and interactivity
├── data.js            # Movie data (EDIT THIS!)
└── README.md          # This file
```

## 🎨 Color Scheme

The dashboard uses a purple gradient theme:
- Primary: `#667eea` (Purple Blue)
- Secondary: `#764ba2` (Deep Purple)
- Accent: `#f093fb` (Light Pink)

Feel free to modify these in `styles.css`!

## 🛠️ Technologies Used

- **HTML5**: Structure
- **CSS3**: Styling with modern features (Grid, Flexbox, Gradients)
- **Vanilla JavaScript**: Functionality
- **Chart.js**: Data visualization
- **GitHub Pages**: Free hosting

## 📱 Responsive Design

The dashboard is fully responsive and works on:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## 🔄 Updating Data

To update the dashboard with new data:

1. Edit `data.js` with new movie information
2. Commit changes:
   ```bash
   git add data.js
   git commit -m "Update movie data for [month/year]"
   git push
   ```
3. Changes will be live on GitHub Pages within a few minutes

## 📈 Future Enhancements

Ideas for extending the dashboard:
- [ ] Add genre-based filtering
- [ ] Include international vs domestic revenue breakdown
- [ ] Add director information
- [ ] Include movie ratings/reviews
- [ ] Add budget vs revenue analysis
- [ ] Export data to CSV/PDF
- [ ] Add search functionality
- [ ] Include box office milestones

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

Your Name
- GitHub: [@YOUR-USERNAME](https://github.com/YOUR-USERNAME)

## 🙏 Acknowledgments

- Chart.js for beautiful charts
- GitHub Pages for free hosting
- Indian film industry for the amazing content!

---

**Note**: The sample data included is for demonstration purposes. Please replace it with actual, verified revenue data.

**Last Updated**: January 2026
