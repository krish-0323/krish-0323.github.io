
export const generateInterviewQuestions = async (jobPosition, jobDesc, jobExperience) => {
  const prompt = `
    Generate ${process.env.NEXT_NUMBER_OF_QUESTION} interview questions for the position of ${jobPosition} 
    with the following job description: ${jobDesc} and required experience: ${jobExperience}. 
    Format the output in JSON with "Question" and "Answer" fields.
  `;
  
  const response = await chatSession.sendMessage(prompt);
  return JSON.parse(response.text());
};

export const speechToText = async (audioFile) => {
  const formData = new FormData();
  formData.append("file", audioFile);

  const response = await fetch(`${process.env.NEXT_PUBLIC_AZURE_ENDPOINT}/speech-to-text`, {
    method: "POST",
    headers: {
      "Ocp-Apim-Subscription-Key": process.env.NEXT_PUBLIC_AZURE_API_KEY,
    },
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Speech to text conversion failed");
  }

  return await response.json();
};

export const textToSpeech = async (text) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_AZURE_ENDPOINT}/text-to-speech`, {
    method: "POST",
    headers: {
      "Ocp-Apim-Subscription-Key": process.env.NEXT_PUBLIC_AZURE_API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text }),
  });

  if (!response.ok) {
    throw new Error("Text to speech conversion failed");
  }

  return await response.blob();
};

export const evaluateAnswer = async (userAnswer, expectedAnswer) => {
  const prompt = `
    Evaluate the following answer: "${userAnswer}" 
    against the expected answer: "${expectedAnswer}". 
    Provide feedback on the quality of the answer.
  `;

  const response = await chatSession.sendMessage(prompt);
  return response.text();
};

export const generateFeedback = async (evaluation) => {
  const prompt = `
    Based on the evaluation: "${evaluation}", 
    generate constructive feedback for the user to improve their answer.
  `;

  const response = await chatSession.sendMessage(prompt);
  return response.text();
};



const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_AZURE_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
  },
];

export const chatSession = model.startChat({
  generationConfig,
  safetySettings
});
