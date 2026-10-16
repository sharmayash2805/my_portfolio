import { qaCorpus } from "@/data/qaCorpus";
import { buildResponse } from "@/engine/responseBuilder";
import type { BuiltResponse } from "@/types";
import { getApiEndpoint } from "@/utils/apiUtils";

interface ApiResponse<T> {
  success: boolean;
  message?: string;
  data?: T;
  error?: string;
}

export const chatService = {
  async ask(question: string): Promise<BuiltResponse> {
    const endpoint = getApiEndpoint("/chat/ask");
    if (endpoint) {
      try {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ question }),
        });

        if (res.ok) {
          const json = (await res.json()) as ApiResponse<BuiltResponse> | BuiltResponse;
          const response: BuiltResponse =
            "data" in json && json.data ? json.data : (json as BuiltResponse);
          return response;
        }
      } catch {
        // Backend not running, fallback to client-side NLP engine
      }
    }

    return buildResponse(question);
  },

  async getQuickPrompts(): Promise<string[]> {
    const endpoint = getApiEndpoint("/chat/prompts");
    if (endpoint) {
      try {
        const res = await fetch(endpoint);
        if (res.ok) {
          const json = (await res.json()) as ApiResponse<string[]> | string[];
          const prompts: string[] =
            "data" in json && Array.isArray(json.data) ? json.data : (json as string[]);
          if (Array.isArray(prompts) && prompts.length > 0) {
            return prompts;
          }
        }
      } catch {
        // Fallback below
      }
    }

    return [
      "Who are you?",
      "What is your tech stack?",
      "Tell me about your chess",
      "Are you available for work?",
    ].filter(() => qaCorpus.length > 0);
  },
};
