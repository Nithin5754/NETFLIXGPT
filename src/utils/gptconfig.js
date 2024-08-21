import OpenAI from 'openai';


export const openai = new OpenAI({
  apiKey:GPT_KEY,
  dangerouslyAllowBrowser: true  // This is the default and can be omitted
});