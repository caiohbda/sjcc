import { GoogleGenerativeAI } from "@google/generative-ai";
import { MODERATION_PROMPT } from "../../infra/prompts/moderationPrompt";

export class GeminiModerationService {
  private gemini: GoogleGenerativeAI;

  constructor(apiKey: string) {
    this.gemini = new GoogleGenerativeAI(apiKey);
  }

  async analyzeComment(content: string): Promise<"approved" | "rejected" | "pending"> {
    try {
      const model = this.gemini.getGenerativeModel({ model: "models/gemini-2.0-flash" });
  
      const prompt = MODERATION_PROMPT.replace("{{content}}", content);
  
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text().toLowerCase().trim();
  
      if (text.includes("rejected")) {
        return "rejected";
      }
  
      if (text.includes("approved")) {
        return "approved";
      }
  
      return "pending";
    } catch (error) {
      console.error("Erro ao usar a API Gemini:", error);
      return "pending";
    }
  }  
}
