const { GoogleGenerativeAI } = require("@google/generative-ai");

console.log("Gemini Key:", process.env.GEMINI_API_KEY);

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function generateInsights(data) {
  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
    });

    const prompt = `
You are a Retail Business AI.

Analyze this data:
${JSON.stringify(data, null, 2)}

Give a business summary and recommendations.
`;

    const result = await model.generateContent(prompt);

    return result.response.text();

  } catch (err) {
    console.error("========== GEMINI ERROR ==========");
    console.error(err);
    console.error("Message:", err.message);

    throw err;
  }
}

module.exports = { generateInsights };