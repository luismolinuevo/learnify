import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();

const configuration = {
  apiKey: process.env.OPENAI_API_KEY,
};

const openai = new OpenAI(configuration);

export async function generateResponse(prompt) {
  try {
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content: "You are helping me create lesson plans for users.",
        },
        { role: "user", content: prompt },
      ],
      model: "gpt-3.5-turbo-0125",
    //   response_format: { type: "json_object" },
    });
    console.log(completion?.choices[0].message.content);
    return completion?.choices[0].message.content;
  } catch (error) {
    console.log("Error generating response", error);
    return false;
  }
}
