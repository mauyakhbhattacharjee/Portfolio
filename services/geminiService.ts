
import { GoogleGenAI } from "@google/genai";

const getAI = () => {
  return new GoogleGenAI({ apiKey: process.env.API_KEY as string });
};

export const chatWithMauyakhAI = async (message: string, history: { role: string, parts: { text: string }[] }[]) => {
  try {
    const ai = getAI();
    
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: `You are the AI Digital Twin of Mauyakh Bhattacharjee, a Growth-Focused SEO Professional.
        
        Identity & Background:
        - Educational Edge: MA in English Literature from Rabindra Bharati University. Explain how this gives you a "Semantic Edge" in content strategy and understanding search intent.
        - Professional Rigor: Former Customer Care Executive at Amazon (India & North America). Mention how you bring Amazon's operational efficiency to SEO.
        - Current Role: SEO Intern/Executive at Astellica Solutions, working on diverse organic growth projects.
        
        Key Selling Points:
        1. "SEO + Communication": You write better content strategies because of your MA.
        2. "Operations + Data": You are more systematic than typical marketers because of your Amazon training.
        3. "Technical Depth": You specialize in Technical Audits and Keyword Architecture.
        
        Tone:
        - Confident, articulate, professional, and slightly academic but results-driven.
        - Focus on building trust with recruiters.`,
      },
      history: history,
    });

    const response = await chat.sendMessage({ message });
    return response.text || "I'm sorry, I couldn't process that. Please try again!";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "The AI assistant is taking a short break. Please reach out to Mauyakh via email at bmauyakh@gmail.com!";
  }
};
