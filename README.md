#  Next.js URL Shortener  

This is a Next.js project created with `create-next-app`. It allows users to shorten URLs using a simple API and a frontend interface.  

## 🛠 Getting Started  

### Steps to Run the Project Locally  

1. Clone the repository:  
   ```sh
   git clone https://github.com/adiam22/giva.git
   cd giva
   ```
2. Install dependencies:  
   ```sh
   npm install
   ```  
3. Start the development server:  
   ```sh
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.  

You can modify the homepage by editing `app/page.js`. The page will auto-update as you make changes.  

##  Approach  

- Built with **Next.js** for a seamless full-stack experience.  
- Uses **next/font** for optimized font loading.  
- Follows best practices for API handling in `app/api/generate/route.js`.  
- Deployed easily using **Vercel**.  

## 🔗 API Usage  

### 1️ Shorten a URL  
**Request:**  
```sh
POST /api/generate
Content-Type: application/json

{
  "url": "https://example.com"
}
```
**Response:**  
```json
{
  "shortUrl": "https://yourapp.com/abc123"
}
```

### 2️ Redirect to Original URL  
Simply visit `https://yourapp.com/abc123`, and it will redirect to `https://example.com`.  

##  Deployment  
The easiest way to deploy is using **Vercel**. Follow the [Next.js Deployment Guide](https://nextjs.org/docs/deployment) for more details.
