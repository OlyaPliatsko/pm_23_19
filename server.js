import express from 'express';
import cors from 'cors';
const app = express();
const port = 5000;

app.use(cors());

app.get('/data', (req, res) => {
    res.json({
        languages: [
            { name: "English", progress: "85%" },
            { name: "French", progress: "60%" },
            { name: "Spanish", progress: "72%" },
            { name: "German", progress: "55%" },
            { name: "Arabic", progress: "78%" }
        ],
        skills:[
            { name: "Adobe Photoshop", progress: "85%" },
            { name: "Adobe Illustrator", progress: "40%" },
            { name: "Microsoft Word", progress: "60%" },
            { name: "Microsoft Powerpoint", progress: "50%" },
            { name: "HTML-5/CSS-3", progress: "85%" }
        ],
        hobbies: [
            { name: "English", progress: "80%" },
            { name: "French", progress: "60%" },
            { name: "Spanish", progress: "70%" },
            { name: "German", progress: "57%" },
            { name: "Arabic", progress: "40%" }
        ],
        contacts: [
            {
                name: "DARWIN B. MAGANA",
                address: "2813 Shade Lane Mancos, CO.",
                phone: "+1-970-533-3339",
                email: "www.yourwebsite.com"
            },
            {
                name: "Robert J. Belvin",
                address: "2813 Shade Lane Mancos, CO.",
                phone: "Tel: +1-908-987-5103",
                email: "Email: www.yourwebsite.com"
            }
        ]
    });
});

app.listen(port, () => {
    console.log(`Server works on http://localhost:${port}`);
});