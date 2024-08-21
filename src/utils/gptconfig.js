import OpenAI from 'openai';
import { GPT_KEY } from './constant';

export const openai = new OpenAI({
  apiKey:import.meta.env.VITE_GPT_KEY,
  dangerouslyAllowBrowser: true  // This is the default and can be omitted
});