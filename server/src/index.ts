import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';

dotenv.config();

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Public Routes
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'Thinkers Mind Backend is running' });
});

// Services API
app.get('/api/services', async (req, res) => {
    try {
        const services = await prisma.service.findMany({
            where: { isActive: true },
            include: { details: true }
        });
        res.json(services);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch services' });
    }
});

// Lead Submission
app.post('/api/enquiries', async (req, res) => {
    try {
        const { fullName, email, company, serviceInterest, message } = req.body;

        // Get default 'New' status
        let status = await prisma.enquiryStatus.findFirst({ where: { name: 'New' } });
        if (!status) {
            status = await prisma.enquiryStatus.create({ data: { name: 'New', colorHex: '#3B82F6' } });
        }

        const enquiry = await prisma.enquiry.create({
            data: {
                fullName,
                email,
                company,
                serviceInterest,
                message,
                statusId: status.id
            }
        });
        res.status(201).json(enquiry);
    } catch (error) {
        res.status(500).json({ error: 'Failed to submit enquiry' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
