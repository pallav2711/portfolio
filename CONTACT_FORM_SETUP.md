# 📧 Contact Form Setup Guide

## How It Works

When someone fills out your contact form:
1. ✅ Form data is sent to your backend API
2. ✅ Data is saved in MongoDB database
3. ✅ You receive an email notification with the message
4. ✅ User sees a success message

## Setup Steps

### 1. Configure MongoDB

Your MongoDB is already running locally. The contact form will save all submissions to:
- Database: `portfolio`
- Collection: `contacts`

You can view submissions by:
```bash
mongosh
use portfolio
db.contacts.find()
```

### 2. Configure Gmail for Email Notifications

#### Get Gmail App Password:

1. Go to: https://myaccount.google.com/security
2. Enable "2-Step Verification" (if not enabled)
3. After enabling 2FA, scroll down and click "App passwords"
4. Select:
   - App: Mail
   - Device: Other (Custom name) → Type "Portfolio Website"
5. Click "Generate"
6. Copy the 16-character password (format: `xxxx xxxx xxxx xxxx`)

#### Update .env File:

Edit `server/.env`:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio
EMAIL_SERVICE=gmail
EMAIL_USER=pallavkanani27@gmail.com
EMAIL_PASS=your-16-char-app-password-here
```

**Important:** Use the App Password, NOT your regular Gmail password!

### 3. Restart Backend Server

After updating `.env`:
```bash
cd server
npm start
```

## Testing the Contact Form

1. Go to: http://localhost:3000/#contact
2. Fill out the form:
   - Name: Test User
   - Email: test@example.com
   - Service: Full Stack Development
   - Message: This is a test message
3. Click "Send Message"
4. You should:
   - See a success message on the website
   - Receive an email at pallavkanani27@gmail.com
   - See the submission in MongoDB

## Troubleshooting

### Email Not Sending?

**Check 1:** Is your App Password correct?
- Make sure you copied the entire 16-character password
- Remove any spaces when pasting

**Check 2:** Is 2-Step Verification enabled?
- App Passwords only work with 2FA enabled

**Check 3:** Check server logs
```bash
# Look for errors in the terminal where server is running
```

**Check 4:** Test email credentials
```bash
cd server
node -e "
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'pallavkanani27@gmail.com',
    pass: 'your-app-password'
  }
});
transporter.verify((error, success) => {
  if (error) console.log('Error:', error);
  else console.log('✅ Email configured correctly!');
});
"
```

### Form Not Submitting?

**Check 1:** Is backend running?
- Backend should be running on http://localhost:5000
- Check terminal for errors

**Check 2:** Is MongoDB running?
```bash
# Check if MongoDB is running
mongosh
```

**Check 3:** Check browser console
- Open DevTools (F12)
- Look for errors in Console tab
- Check Network tab for failed requests

## What Gets Saved in Database

Each contact form submission saves:
```javascript
{
  name: "User Name",
  email: "user@example.com",
  service: "Full Stack Development",
  message: "User's message",
  status: "new",  // Can be: new, read, replied
  createdAt: "2024-01-15T10:30:00.000Z"
}
```

## Email Notification Format

You'll receive an email like this:

```
Subject: New Contact Form Submission - Full Stack Development

New Contact Form Submission

Name: John Doe
Email: john@example.com
Service: Full Stack Development

Message:
I need a website for my startup. Can we discuss?

---
Submitted at: 1/15/2024, 10:30:00 AM
```

## Viewing All Submissions

### Using MongoDB Shell:
```bash
mongosh
use portfolio
db.contacts.find().pretty()
```

### Using MongoDB Compass:
1. Download: https://www.mongodb.com/try/download/compass
2. Connect to: mongodb://localhost:27017
3. Select database: portfolio
4. View collection: contacts

## Production Deployment

When deploying to production (Vercel, Netlify, etc.):

1. Use MongoDB Atlas (cloud database):
   - Sign up: https://www.mongodb.com/cloud/atlas
   - Create free cluster
   - Get connection string
   - Update `MONGODB_URI` in production environment variables

2. Set environment variables in hosting platform:
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio
   EMAIL_USER=pallavkanani27@gmail.com
   EMAIL_PASS=your-app-password
   ```

## Alternative: Use EmailJS (No Backend Required)

If you want a simpler solution without backend:

1. Sign up at: https://www.emailjs.com/
2. Get your Service ID, Template ID, and Public Key
3. Replace backend API call with EmailJS in Contact.jsx

## Security Notes

⚠️ **Never commit .env file to Git!**
- It's already in .gitignore
- Never share your App Password
- Rotate passwords if exposed

✅ **Current Security Features:**
- Input validation
- CORS protection
- Rate limiting ready
- Sanitized database queries

## Need Help?

If you're still having issues:
1. Check server terminal for error messages
2. Check browser console for errors
3. Verify MongoDB is running
4. Verify .env file is configured correctly
5. Make sure both frontend and backend are running

---

**Your contact form is ready to receive messages!** 🚀
