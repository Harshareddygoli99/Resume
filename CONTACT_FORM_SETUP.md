# Setting Up the Contact Form with EmailJS

The contact form in this portfolio website uses [EmailJS](https://www.emailjs.com/) to send emails directly from the client-side JavaScript without requiring a server. Follow these steps to set it up:

## Step 1: Create an EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/) and sign up for a free account
2. Verify your email address

## Step 2: Add an Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps
5. Name your service `service_portfolio` (or update the code to match your service ID)

## Step 3: Create an Email Template

1. In your EmailJS dashboard, go to "Email Templates"
2. Click "Create New Template"
3. Design your email template with the following variables:
   - `{{name}}` - Sender's name
   - `{{email}}` - Sender's email
   - `{{subject}}` - Email subject
   - `{{message}}` - Email message
4. Name your template `template_contact` (or update the code to match your template ID)

## Step 4: Update the Contact Component

1. Open `src/components/Contact.tsx`
2. Replace `YOUR_PUBLIC_KEY` with your actual EmailJS public key
   ```typescript
   const publicKey = 'YOUR_PUBLIC_KEY'
   ```
   You can find your public key in the EmailJS dashboard under "Account" > "API Keys"

## Step 5: Test the Form

1. Deploy your website
2. Fill out the contact form and submit
3. Check if you receive the email

## Troubleshooting

If the form is not working:

1. Check the browser console for errors
2. Verify that your EmailJS service, template, and public key are correct
3. Make sure your email service is properly connected in the EmailJS dashboard
4. Check if you've reached the free tier limits (200 emails per month)

## Additional Customization

You can customize the email template in the EmailJS dashboard to match your branding and include additional information as needed. 