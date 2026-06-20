import express from 'express';
import cors from 'cors';
import { Resend } from 'resend';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const app = express();
const resend = new Resend(process.env.RESEND_API_KEY);

app.use(cors());
app.use(express.json());

// For trial mode: send to verified email. Update this once domain is verified.
const SHOP_OWNER_EMAIL = 'rushithube7709@gmail.com'; // Your Resend verified email

app.post('/api/send-prescription', async (req, res) => {
  try {
    const { prescription, userEmail } = req.body;

    if (!userEmail || !prescription) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const emailContent = `
      <h2>New Prescription Order</h2>
      <p><strong>Customer Email:</strong> ${userEmail}</p>
      
      <h3>Prescription Details</h3>
      <p><strong>Label:</strong> ${prescription.label}</p>
      <p><strong>Date Issued:</strong> ${prescription.date}</p>
      <p><strong>Expiry Date:</strong> ${prescription.expiryDate || 'Not specified'}</p>
      
      <h4>Right Eye (OD)</h4>
      <ul>
        <li>SPH: ${prescription.od.sph || '-'}</li>
        <li>CYL: ${prescription.od.cyl || '-'}</li>
        <li>AXIS: ${prescription.od.axis || '-'}</li>
        <li>ADD: ${prescription.od.add || '-'}</li>
      </ul>
      
      <h4>Left Eye (OS)</h4>
      <ul>
        <li>SPH: ${prescription.os.sph || '-'}</li>
        <li>CYL: ${prescription.os.cyl || '-'}</li>
        <li>AXIS: ${prescription.os.axis || '-'}</li>
        <li>ADD: ${prescription.os.add || '-'}</li>
      </ul>
      
      <p><strong>Pupillary Distance (PD):</strong> ${prescription.pd || '-'} mm</p>
      <p><strong>Doctor's Name:</strong> ${prescription.doctorName || 'Not specified'}</p>
    `;

    const response = await resend.emails.send({
      from: 'LensHub <onboarding@resend.dev>',
      to: SHOP_OWNER_EMAIL,
      replyTo: userEmail,
      subject: `New Prescription Order - ${prescription.label}`,
      html: emailContent,
    });

    if (response.error) {
      console.error('Resend error:', response.error);
      return res.status(500).json({ error: 'Failed to send email' });
    }

    res.json({ success: true, messageId: response.data.id });
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
