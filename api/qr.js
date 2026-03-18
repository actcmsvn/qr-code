import QRCode from "qrcode";

export default async function handler(req, res) {
    try {
        const { text, size = 250 } = req.query;

        if (!text) {
            return res.status(400).json({ error: "Missing text" });
        }

        // tạo QR dạng PNG buffer
        const qrBuffer = await QRCode.toBuffer(text, {
            width: parseInt(size),
            margin: 2,
            errorCorrectionLevel: "H"
        });

        res.setHeader("Content-Type", "image/png");
        res.setHeader("Cache-Control", "public, max-age=31536000");

        return res.send(qrBuffer);

    } catch (err) {
        return res.status(500).json({
            error: err.message
        });
    }
}