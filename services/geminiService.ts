import { GoogleGenAI, Type } from "@google/genai";
import { Video } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const searchVideosWithGemini = async (query: string): Promise<Video[]> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Generate a list of 10 realistic Bilibili-style video metadata items related to the search query: "${query}". 
      The titles should be catchy, clickbait-style or informative as per Bilibili culture. 
      The 'views' should be formatted like "10.2万" or "5000".
      The 'date' should be relative (e.g., "10-24") or absolute.
      The 'duration' should be formatted like "12:30".
      The 'uploader' should be a realistic username.
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
    
    // Map the text data to include random placeholder images since Gemini can't generate the actual image URLs for us in this JSON mode efficiently for a grid
    return data.map((item: any, index: number) => ({
      ...item,
      coverUrl: `https://picsum.photos/seed/${item.id + query}/640/360`,
      id: `${Date.now()}-${index}`,
    }));

  } catch (error) {
    console.error("Failed to fetch videos from Gemini:", error);
    return [];
  }
};
