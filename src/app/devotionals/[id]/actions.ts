'use server';

import {
  generateInteractiveQuestions,
  type InteractiveQuestionsInput,
  type InteractiveQuestionsOutput,
} from '@/ai/flows/interactive-devotional-questions';

export async function getInteractiveQuestionsAction(
  input: InteractiveQuestionsInput
): Promise<InteractiveQuestionsOutput> {
  try {
    const output = await generateInteractiveQuestions(input);
    return output;
  } catch (error) {
    console.error('Error generating interactive questions:', error);
    throw new Error('Failed to generate questions');
  }
}
