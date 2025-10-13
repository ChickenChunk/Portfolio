# MyPortfolioAngular
### 🌐 [[Live Site](https://happy-grass-0838a111e.1.azurestaticapps.net/)] (Azure Static Web Apps)
- **URL**: [Your Azure Static Web Apps URL]
- **Features**: Global CDN, automatic HTTPS, GitHub integration
- **Build**: Automated via GitHub Actions

### 🐳 Docker Alternative
- **Purpose**: Demonstrates containerization skills
- **Build**: `docker build -t portfolio .`
- **Run**: `docker run -p 8080:80 portfolio`
- **Features**: Multi-stage build, nginx serving, production-ready

This is my personal portfolio built with **Angular** and deployed using **GitHub Actions** + **Azure Static Web Apps**.

Showcasing:
- **Source Control** -> Code tracked in Github
- **Continuous Integration** -> Automatic build/test on every push
- **Continuous Deployment** -> Successful builds redeploy automatically to Azure

## 🛠 Tech Stack
- **Frontend:** Angular  
- **CI/CD:** GitHub Actions  
- **Cloud Hosting:** Azure Static Web Apps (Free Tier)  

## How to Run Locally
in bash terminal:
- npm install
- ng serve
- open http://localhost:4200
