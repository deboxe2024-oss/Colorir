'use server';
/**
 * @fileOverview Generates interactive questions for a children's devotional.
 *
 * - generateInteractiveQuestions - A function to generate questions based on devotional content.
 * - InteractiveQuestionsInput - The input type for the generateInteractiveQuestions function.
 * - InteractiveQuestionsOutput - The return type for the generateInteractiveQuestions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const InteractiveQuestionsInputSchema = z.object({
  devotionalContent: z
    .string()
    .describe('The devotional content including verses and reflection.'),
});
export type InteractiveQuestionsInput = z.infer<
  typeof InteractiveQuestionsInputSchema
>;

const InteractiveQuestionsOutputSchema = z.object({
  interactiveQuestions: z
    .string()
    .describe('A list of interactive questions based on the devotional content.'),
});
export type InteractiveQuestionsOutput = z.infer<
  typeof InteractiveQuestionsOutputSchema
>;

export async function generateInteractiveQuestions(
  input: InteractiveQuestionsInput
): Promise<InteractiveQuestionsOutput> {
  return interactiveDevotionalQuestionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'interactiveDevotionalQuestionsPrompt',
  input: {schema: InteractiveQuestionsInputSchema},
  output: {schema: InteractiveQuestionsOutputSchema},
  prompt: `You are a children's ministry expert. Generate a list of questions based on the following devotional content that will help children understand and apply the lesson to their lives. Ensure the questions are engaging, age-appropriate, and promote critical thinking.

Devotional Content:
{{{devotionalContent}}}`,
});

const interactiveDevotionalQuestionsFlow = ai.defineFlow(
  {
    name: 'interactiveDevotionalQuestionsFlow',
    inputSchema: InteractiveQuestionsInputSchema,
    outputSchema: InteractiveQuestionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
