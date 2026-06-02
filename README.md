# Jenil Kukadiya - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern and responsive design
- 📱 Mobile-first approach
- 🚀 Fast loading and optimized performance
- 📧 Contact form with EmailJS integration
- 📄 Resume download functionality
- 🎭 Smooth animations and transitions

## Email Setup Instructions

To enable the contact form to send emails to your Gmail account, you need to set up EmailJS:

### Step 1: Create EmailJS Account
1. Go to [EmailJS](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### Step 2: Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" as your email service
4. Connect your Gmail account (jenilkukadiya82@gmail.com)
5. Note down the **Service ID** (e.g., `service_portfolio`)

### Step 3: Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

**Subject:** New Contact Form Message - {{subject}}

**Body:**
```
Hello Jenil,

You have received a new message from your portfolio website:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Save the template and note down the **Template ID** (e.g., `template_contact`)

### Step 4: Get Public Key
1. Go to "Account" > "General"
2. Find your **Public Key** (e.g., `YOUR_PUBLIC_KEY`)

### Step 5: Update the Code
Replace the placeholder values in `src/components/Contact.tsx`:

```typescript
const serviceId = 'your_service_id_here';
const templateId = 'your_template_id_here';
const publicKey = 'your_public_key_here';
```

### Step 6: Test the Contact Form
1. Fill out the contact form on your website
2. Submit the form
3. Check your Gmail inbox for the message

## Technologies Used

- React 18
- TypeScript
- Tailwind CSS
- Vite
- EmailJS
- Lucide React (icons)
- Framer Motion (animations)

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up EmailJS (see instructions above)
4. Start development server: `npm run dev`
5. Build for production: `npm run build`

## Contact

- Email: jenilkukadiya82@gmail.com
- LinkedIn: [Jenil Kukadiya](https://www.linkedin.com/in/jenil-kukadiya-341925210/)
- GitHub: [jenilkukadiya](https://github.com/jenilkukadiya)