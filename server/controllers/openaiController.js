const OpenAI = require("openai");

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

// =========================
// Summary Controller
// =========================
exports.summaryController = async (req, res) => {
    try {
        const { text } = req.body;

        if (!text) {
            return res.status(400).json({
                message: "Text is required",
            });
        }

        const response = await openai.responses.create({
            model: "gpt-5",
            input: `Summarize the following text:\n\n${text}`,
        });

        return res.status(200).json(response.output_text);

    } catch (err) {
        console.error("Summary Error:", err);

        return res.status(500).json({
            message: err.message,
        });
    }
};


// =========================
// Paragraph Controller
// =========================
exports.paragraphController = async (req, res) => {
    try {
        const { text } = req.body;

        if (!text) {
            return res.status(400).json({
                message: "Text is required",
            });
        }

        const response = await openai.responses.create({
            model: "gpt-5",
            input: `Write a detailed paragraph about:\n\n${text}`,
        });

        return res.status(200).json(response.output_text);

    } catch (err) {
        console.error("Paragraph Error:", err);

        return res.status(500).json({
            message: err.message,
        });
    }
};


// =========================
// Chatbot Controller
// =========================
exports.chatbotController = async (req, res) => {
    try {
        const { text } = req.body;

        if (!text) {
            return res.status(400).json({
                message: "Text is required",
            });
        }

        const response = await openai.responses.create({
            model: "gpt-5",
            input: text,
        });

        return res.status(200).json(response.output_text);

    } catch (err) {
        console.error("Chatbot Error:", err);

        return res.status(500).json({
            message: err.message,
        });
    }
};


// =========================
// JavaScript Converter
// =========================
exports.jsconverterController = async (req, res) => {
    try {
        const { text } = req.body;

        if (!text) {
            return res.status(400).json({
                message: "Instructions are required",
            });
        }

        const response = await openai.responses.create({
            model: "gpt-5",
            input: `Convert the following instructions into JavaScript code.

Instructions:
${text}

Return only the JavaScript code.`,
        });

        return res.status(200).json(response.output_text);

    } catch (err) {
        console.error("JavaScript Converter Error:", err);

        return res.status(500).json({
            message: err.message,
        });
    }
};


// =========================
// Sci-Fi Image Controller
// =========================
exports.scifiImageController = async (req, res) => {
    try {
        const { text } = req.body;

        if (!text) {
            return res.status(400).json({
                message: "Image description is required",
            });
        }

        const result = await openai.images.generate({
            model: "gpt-image-1",
            prompt: `Generate a sci-fi image of ${text}`,
            size: "1024x1024",
        });

        return res.status(200).json(
            result.data[0]
        );

    } catch (err) {
        console.error("Image Generation Error:", err);

        return res.status(500).json({
            message: err.message,
        });
    }
};