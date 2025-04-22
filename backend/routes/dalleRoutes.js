import express from 'express';
import * as dotenv from 'dotenv';
import FormData from 'form-data';
import axios from 'axios'; // <-- Make sure axios is imported!

dotenv.config();

const router = express.Router();

router.route('/').get((req, res) => {
  res.status(200).json({ message: 'Hello from DALL-E!' });
});

router.route('/').post(async (req, res) => {
  try {
    const { prompt } = req.body;     
    const form = new FormData();
    form.append('prompt', prompt);
    const { data } = await axios.post('https://clipdrop-api.co/text-to-image/v1', form, {
      headers: {
        ...form.getHeaders(),
        'x-api-key': process.env.CLIPDROP_API_KEY,
      },
      responseType: 'arraybuffer',
    });

    const base64Img = Buffer.from(data, 'binary').toString('base64'); 
    const resultImg = `data:image/png;base64,${base64Img}`;
    res.json({ success: true, message: "Image Generated", resultImg });
    
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: error?.response?.data || 'Something went wrong',
    });
  }
});

export default router;
