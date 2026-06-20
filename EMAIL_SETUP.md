# Email Setup Instructions

## Step 1: Install Dependencies

Run this command to install the backend dependencies:

```bash
npm install express cors resend dotenv
npm install --save-dev nodemon
```

## Step 2: Get Resend API Key

1. Go to [https://resend.com](https://resend.com)
2. Sign up for a free account
3. Go to API Keys section and copy your API key
4. Create a `.env.local` file in your project root (already created)
5. Add your Resend API key:
   ```
   RESEND_API_KEY=re_xxx...
   PORT=3001
   ```

## Step 3: Update package.json

Add these scripts to your `package.json`:

```json
"scripts": {
  "dev": "vite --open",
  "server": "node server.js",
  "server:dev": "nodemon server.js",
  "build": "vite build",
  "preview": "vite preview --open"
}
```

Or update it to run both frontend and backend concurrently:
```json
"dev:all": "concurrently \"npm run server:dev\" \"vite --open\"",
```

## Step 4: Run the Backend Server

In a new terminal, run:
```bash
npm run server:dev
```

Or for production:
```bash
npm run server
```

The server will run on `http://localhost:3001`

## Step 5: Test It Out

1. Make sure the backend server is running (port 3001)
2. Go to your Account page
3. Click "Add Prescription"
4. Fill in your email and prescription details
5. Click "Save Prescription & Send to Shop"
6. You should receive a confirmation, and the shop owner gets an email at lenshubhelp@gmail.com

## Important Notes

- The backend must be running for emails to work
- The frontend will try to connect to `http://localhost:3001`
- For production deployment, you'll need to:
  - Deploy the backend to a service like Heroku, Railway, or Vercel
  - Update the API URL in `src/api/prescriptionEmail.ts`
  - Set the RESEND_API_KEY environment variable on your hosting platform

## Troubleshooting

- **"Cannot POST /api/send-prescription"** → Make sure `npm run server:dev` is running
- **"Invalid API key"** → Check that RESEND_API_KEY is correct in `.env.local`
- **Email not sent** → Check browser console and server terminal for error messages
