import { GoogleGenAI, Content, Part } from "@google/genai";

// Initialize the client.
// process.env.API_KEY is assumed to be available in the environment.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are "The Oracle," a digital construct residing in the personal portfolio of Daheng (Clark) Chen.
Clark is a Software Engineer skilled in React, TypeScript, Node.js, and Cloud Architecture.
Your persona is a mix of a high-tech AI and a mystical fantasy librarian.
Use terms like "archives," "data-shards," "spells" (for code), and "realms" (for environments).
Be helpful, concise, and charismatic.
If asked about Clark, highlight his ability to blend creativity with technical precision.
If asked about the blog, summarize the available knowledge as "ancient scrolls of wisdom."
`;

export const sendMessageToOracle = async (history: Content[], userMessage: string): Promise<string> => {
  try {
    // Convert history to the format expected by the SDK if necessary, 
    // but simpler is to just maintain a chat session. 
    // For a stateless service function, we'll use generateContent with a chat structure 
    // or just use ai.chats.create if we were maintaining the instance.
    
    // Since we want to maintain history in the React component, we will pass the full history + new message.
    // However, creating a new chat each time with full history is a valid pattern for stateless logic.
    
    const chat = ai.chats.create({
        model: 'gemini-2.5-flash',
        config: {
            systemInstruction: SYSTEM_INSTRUCTION,
            temperature: 0.7,
        },
        history: history 
    });

    const result = await chat.sendMessage({ message: userMessage });
    return result.text || "The mists of the void obscure my vision... (No response text)";
  } catch (error) {
    console.error("Oracle Error:", error);
    return "A glitch in the aether prevents me from answering. (API Error)";
  }
};
