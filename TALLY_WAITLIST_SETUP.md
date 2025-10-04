# 🎯 Tally Waitlist Setup Guide

## ✅ What We Just Added

Your avinshi.com website now has a **beautiful waitlist section** that will capture early access signups!

**Location:** Right after the hero section (scrolls into view perfectly)

**Features Added:**
- ✅ Embedded Tally form (seamless, no branding)
- ✅ "Join Waitlist" button in navigation
- ✅ Pulsing green badge showing "Launching Saturday"
- ✅ Social proof bullets (no credit card, 14-day trial, etc.)
- ✅ 50% off first 3 months messaging

---

## 🚀 Next Steps: Set Up Your Tally Account

### **Step 1: Create Tally Form (5 minutes)**

1. **Go to:** https://tally.so
2. **Sign up** with your email (free forever)
3. **Click:** "Create new form"
4. **Name it:** "Avinshi Early Access Waitlist"

### **Step 2: Add Questions**

Add these 3 questions to your Tally form:

**Question 1:** Email
- Type: Email
- Label: "Work Email"
- Required: Yes
- Placeholder: "you@company.com"

**Question 2:** Text Input
- Type: Text
- Label: "Company Name" 
- Required: No
- Placeholder: "Your company"

**Question 3:** Text Area
- Type: Long Text
- Label: "What would you use Avinshi for?"
- Required: No
- Placeholder: "e.g., Automate our testing pipeline, accelerate feature development..."

### **Step 3: Customize Design**

1. Click "Design" tab
2. Set **Primary Color:** `#0EA5E9` (Sky Blue - matches avinshi.com)
3. Set **Background:** Transparent
4. Enable **Hide title** (already shown on website)
5. Enable **Align left** (looks better embedded)

### **Step 4: Set Thank You Page**

1. Click "After submit" tab
2. Choose "Show message"
3. Add this text:

```
🎉 You're on the list!

Thanks for joining the Avinshi waitlist. We're launching THIS SATURDAY (October 5, 2025).

You'll get:
✅ Early access link to the platform
✅ 50% off first 3 months (waitlist exclusive)  
✅ Priority 1-on-1 onboarding call

We'll email you on Saturday morning!

- Veera, Founder @ Avinshi
```

### **Step 5: Get Your Form ID**

1. Click "Share" tab
2. Copy the **Form ID** from the URL
   - Example: `https://tally.so/r/w4jQXb` → Form ID is `w4jQXb`

### **Step 6: Update Website**

**Open:** `C:\Veera\avinshi\website\index.html`

**Find this line (around line 141):**
```html
data-tally-src="https://tally.so/embed/w4jQXb?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
```

**Replace `w4jQXb` with YOUR form ID**

Example if your form ID is `abc123`:
```html
data-tally-src="https://tally.so/embed/abc123?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
```

### **Step 7: Enable Notifications**

1. In Tally, go to "Integrate" tab
2. **Email Notifications:**
   - Add your email: `your@email.com`
   - Enable "New response" notifications
   - You'll get instant alerts when someone joins!

3. **Optional - Slack Integration:**
   - Connect to your Slack workspace
   - Get notifications in #marketing or #sales channel

---

## 📧 Auto-Response Email Setup

**Tally will automatically send this to signups:**

1. Go to "Integrate" → "Email autoresponder"
2. Enable autoresponder
3. From email: `hello@avinshi.com` (or your email)
4. Subject: `You're on the Avinshi Waitlist! 🎉`
5. Message:

```
Hi {{answer_1}},

Thanks for joining the Avinshi Early Access waitlist!

You're one of the first to know about Avinshi - AI agents that code, test, 
deploy, and optimize autonomously.

🚀 WE'RE LAUNCHING THIS SATURDAY (October 5, 2025)

As a waitlist member, you'll get:
✅ Early access to the platform (before public launch)
✅ 50% off your first 3 months (exclusive discount)
✅ Priority 1-on-1 onboarding call with our team
✅ Direct line to the founders for feedback

We'll email you Saturday morning with your access link!

Want to chat before launch? Just reply to this email.

Best,
Veera
Founder, Avinshi
https://avinshi.com
```

---

## 🎨 What It Looks Like

**Desktop View:**
- Beautiful gradient background (sky blue tint)
- Form centered, clean design
- Pulsing green badge "🚀 launching this saturday"
- Social proof bullets below form

**Mobile View:**
- Fully responsive
- Form adapts to screen size
- Easy thumb typing on phone

---

## 📊 Track Your Signups

**View Responses:**
1. Go to https://tally.so
2. Click on "Avinshi Early Access Waitlist"
3. Click "Responses" tab
4. See all signups in real-time!

**Export Data:**
- Click "Export" button
- Download CSV with all emails
- Import to your email service (Mailchimp, etc.)

---

## 🔥 Quick Wins

### **Share Waitlist Link Directly:**

Instead of sharing full avinshi.com, share:
- `https://avinshi.com#waitlist` - Scrolls directly to form
- `https://tally.so/r/YOUR-FORM-ID` - Direct form link

### **Social Media Posts:**

**LinkedIn:**
```
🚀 Launching Avinshi this Saturday!

AI agents that code, test, deploy, and optimize—autonomously.
65+ specialized agents, $555M in documented value.

Join the waitlist for 50% off first 3 months:
https://avinshi.com#waitlist

#AI #Automation #EnterpriseAI
```

**Twitter:**
```
🚀 launching avinshi saturday

ai agents that code, test, deploy, optimize—autonomously

65+ agents | $555m value | built on microsoft frameworks

join waitlist → 50% off first 3 months
https://avinshi.com#waitlist
```

---

## ✅ Pre-Launch Checklist

**Before Saturday:**
- [ ] Set up Tally account
- [ ] Add 3 questions to form
- [ ] Customize design (sky blue color)
- [ ] Set thank you message
- [ ] Get form ID
- [ ] Update index.html with your form ID
- [ ] Test submission (use your own email)
- [ ] Enable email notifications
- [ ] Set up auto-responder
- [ ] Share waitlist on social media TONIGHT

**Expected Results:**
- **Tonight (Thu):** 10-20 signups from social posts
- **Friday:** 20-30 more signups
- **Saturday AM:** 50-100 total (announce launch to them!)

---

## 🎯 Goal: 100 Waitlist Signups Before Saturday Launch

**Why This Matters:**
- ✅ Validate demand before going live
- ✅ Build momentum ("200 companies already using Avinshi")
- ✅ Have customers ready DAY ONE
- ✅ Get feedback on messaging

**Saturday Morning Strategy:**
1. Email all waitlist members: "We're live! Your access link →"
2. Post on social: "Just launched! 100+ companies already in"
3. Track conversions: waitlist → paid customers

---

## 💡 Pro Tips

**Tip 1: A/B Test Your Messaging**
- Change "What would you use Avinshi for?" to see responses
- Refine your value prop based on answers

**Tip 2: Offer Urgency**
- "First 50 signups get 75% off" (not 50%)
- Create scarcity, increase conversions

**Tip 3: Leverage Social Proof**
- After 50 signups: Update badge to "🔥 50+ companies on waitlist"
- After 100: "🚀 100+ early access members"

---

## 🚨 Troubleshooting

**Form not showing?**
- Check you replaced `w4jQXb` with YOUR form ID
- Make sure Tally embed script is loading (check browser console)

**Not getting notifications?**
- Verify email in Tally settings
- Check spam folder

**Form looks weird on mobile?**
- Clear cache, refresh browser
- Tally forms are responsive by default

---

## 📞 Need Help?

- **Tally Support:** support@tally.so
- **Tally Docs:** https://tally.so/help

---

## ✅ Status

- [x] Waitlist section added to website
- [x] Navigation updated with "Join Waitlist" button  
- [x] Pushed to GitHub
- [ ] Set up Tally account → **DO THIS NOW!**
- [ ] Get your form ID
- [ ] Update index.html with your ID
- [ ] Test submission
- [ ] Share on social media

**Time to complete:** 10 minutes
**Impact:** Capture 50-100 signups before Saturday! 🚀

---

**Remember:** The form is already on your website, you just need to create your Tally account and update the form ID!
