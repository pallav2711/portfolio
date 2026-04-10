# 📬 How to Check Contact Form Messages

## Simple Setup - No Email Required!

Your contact form now saves all messages directly to MongoDB. No email configuration needed!

## 3 Ways to Check Messages

### 1️⃣ Using Browser (Easiest)

Visit: **http://localhost:5000/api/contact**

You'll see all messages in JSON format:
```json
{
  "success": true,
  "count": 5,
  "data": [
    {
      "_id": "...",
      "name": "John Doe",
      "email": "john@example.com",
      "service": "Full Stack Development",
      "message": "I need a website for my startup",
      "status": "new",
      "createdAt": "2024-01-15T10:30:00.000Z"
    }
  ]
}
```

### 2️⃣ Using MongoDB Shell

```bash
# Open MongoDB shell
mongosh

# Switch to portfolio database
use portfolio

# View all messages (newest first)
db.contacts.find().sort({createdAt: -1}).pretty()

# Count total messages
db.contacts.countDocuments()

# View only new messages
db.contacts.find({status: "new"}).pretty()

# Mark message as read
db.contacts.updateOne(
  {_id: ObjectId("message-id-here")},
  {$set: {status: "read"}}
)
```

### 3️⃣ Using MongoDB Compass (Visual Tool)

1. Download: https://www.mongodb.com/try/download/compass
2. Install and open
3. Connect to: `mongodb://localhost:27017`
4. Select database: `portfolio`
5. Click collection: `contacts`
6. View all messages in a nice table format!

## Message Structure

Each message contains:
```javascript
{
  name: "Sender's name",
  email: "sender@email.com",
  service: "Service they selected",
  message: "Their message",
  status: "new",  // Can be: new, read, replied
  createdAt: "Timestamp"
}
```

## Quick Commands

### View Latest 5 Messages:
```bash
mongosh
use portfolio
db.contacts.find().sort({createdAt: -1}).limit(5).pretty()
```

### Count New Messages:
```bash
mongosh
use portfolio
db.contacts.countDocuments({status: "new"})
```

### Delete All Messages (if needed):
```bash
mongosh
use portfolio
db.contacts.deleteMany({})
```

### Export Messages to JSON:
```bash
mongoexport --db=portfolio --collection=contacts --out=messages.json --pretty
```

## Daily Routine

**Every day, just:**
1. Open browser
2. Go to: http://localhost:5000/api/contact
3. Check for new messages
4. Reply to them via email

OR

1. Open MongoDB Compass
2. Check the `contacts` collection
3. See all messages in a nice table

## Server Must Be Running

Make sure your backend server is running:
```bash
cd server
npm start
```

You should see:
```
🚀 Server running on port 5000
✅ MongoDB Connected - Contact form ready!
📧 Contact form will save to MongoDB
📊 View submissions: http://localhost:5000/api/contact
```

## Testing

1. Go to: http://localhost:3000/#contact
2. Fill the form and submit
3. Check: http://localhost:5000/api/contact
4. You should see your test message!

---

**That's it! No email setup needed. Just check MongoDB daily!** 📊
