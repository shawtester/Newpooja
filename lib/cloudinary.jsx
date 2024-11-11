// pages/api/upload.js
import cloudinary from 'cloudinary';
import formidable from 'formidable';
import fs from 'fs';
import path from 'path';

// Cloudinary configuration (directly set in the code)
cloudinary.config({
  cloud_name: 'dzk0kk3gh', // Your Cloudinary Cloud Name
  api_key: '632891551573564', // Your Cloudinary API Key
  api_secret: 'e7A5_EJiBazJNoTGsbXW3gUEmZM', // Your Cloudinary API Secret
});

export const config = {
  api: {
    bodyParser: false, // Disable body parsing to handle the file manually
  },
};

export default function handler(req, res) {
  if (req.method === 'POST') {
    const form = new formidable.IncomingForm();
    form.uploadDir = path.join(process.cwd(), '/public/tmp');
    form.keepExtensions = true;
    form.parse(req, async (err, fields, files) => {
      if (err) {
        res.status(500).json({ error: 'Error parsing the file' });
        return;
      }

      try {
        const imagePath = files.file[0].filepath;

        // Upload the image to Cloudinary
        const result = await cloudinary.v2.uploader.upload(imagePath, {
          folder: 'nextjs_uploads', // Optional folder name
        });

        // Clean up the temporary file
        fs.unlinkSync(imagePath);

        // Respond with the uploaded image's URL
        res.status(200).json({
          message: 'File uploaded successfully',
          imageUrl: result.secure_url,  // The URL of the uploaded image
        });
      } catch (uploadError) {
        res.status(500).json({ error: 'Error uploading to Cloudinary', details: uploadError });
      }
    });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
