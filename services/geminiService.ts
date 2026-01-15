import { GoogleGenAI, Type } from "@google/genai";
import { Video } from "../types";
import { getRandomCover } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const searchVideosWithGemini = async (query: string): Promise<Video[]> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `You are a data generator for a Bilibili clone. Generate a list of 12 video metadata items related to the search query: "${query}". 
      
      RULES FOR TITLES:
      - Titles MUST be "clickbait" style, typical of Bilibili/YouTube culture.
      - Use punctuation like 【】, ！, ｜ to make them stand out.
      - Examples: "Shocking result!", "I spent 100 days...", "Don't buy this until you watch!", "Top 10 anime moments".
      - Keep titles mixed between informative and sensational.
      
      RULES FOR METADATA:
      - 'views': Format as "XX.X万" (e.g., 10.2万, 5000, 233万).
      - 'date': Relative (e.g., "6 hours ago", "Yesterday") or date "3-24".
      - 'duration': "MM:SS" (e.g., 12:30, 05:01).
      - 'uploader': Realistic usernames.

      OUTPUT FORMAT:
      Return JSON array only.
      `,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              id: { type: Type.STRING },
              title: { type: Type.STRING },
              uploader: { type: Type.STRING },
              views: { type: Type.STRING },
              date: { type: Type.STRING },
              duration: { type: Type.STRING },
            },
            required: ["id", "title", "uploader", "views", "date", "duration"],
          },
        },
      },
    });

    const data = JSON.parse(response.text || "[]");
    
    // Map the text data to include REAL Bilibili assets from our local pool
    // We try to match category loosely based on query, otherwise random
    return data.map((item: any, index: number) => {
      const lowerQuery = query.toLowerCase();
      let category: 'gaming' | 'anime' | 'tech' | 'life' | undefined = undefined;
      
      if (lowerQuery.includes('game') || lowerQuery.includes('play') || lowerQuery.includes('原神')) category = 'gaming';
      else if (lowerQuery.includes('anime') || lowerQuery.includes('动画')) category = 'anime';
      else if (lowerQuery.includes('tech') || lowerQuery.includes('code') || lowerQuery.includes('review')) category = 'tech';

      return {
        ...item,
        coverUrl: getRandomCover(category), // Use our robust local pool
        id: `${Date.now()}-${index}-${Math.random()}`, // Ensure unique ID
      };
    });

  } catch (error) {
    console.error("Failed to fetch videos from Gemini:", error);
    return [];
  }
};