'use client';

import { useState } from 'react';
import { getInteractiveQuestionsAction } from '@/app/devotionals/[id]/actions';
import { Button } from '@/components/ui/button';
import { Sparkles, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';

type InteractiveQuestionsProps = {
  devotionalContent: string;
};

export function InteractiveQuestions({ devotionalContent }: InteractiveQuestionsProps) {
  const [questions, setQuestions] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleGenerate = async () => {
    setIsLoading(true);
    setQuestions(null);
    try {
      const result = await getInteractiveQuestionsAction({ devotionalContent });
      if (result.interactiveQuestions) {
        setQuestions(result.interactiveQuestions);
      } else {
        throw new Error('Não foi possível gerar as perguntas.');
      }
    } catch (error) {
      console.error(error);
      toast({
        variant: 'destructive',
        title: 'Erro!',
        description: 'Ocorreu um erro ao gerar as perguntas. Tente novamente.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <Button onClick={handleGenerate} disabled={isLoading} className="w-full">
        {isLoading ? (
          <Loader2 className="mr-2 size-4 animate-spin" />
        ) : (
          <Sparkles className="mr-2 size-4" />
        )}
        {isLoading ? 'Gerando...' : 'Gerar Perguntas com IA'}
      </Button>

      {isLoading && (
         <div className="space-y-2">
            <div className="h-4 bg-muted rounded w-3/4 animate-pulse"></div>
            <div className="h-4 bg-muted rounded w-full animate-pulse"></div>
            <div className="h-4 bg-muted rounded w-1/2 animate-pulse"></div>
        </div>
      )}

      {questions && (
        <Alert>
          <AlertTitle className="font-bold font-headline">Vamos Conversar!</AlertTitle>
          <AlertDescription>
            <ul className="mt-2 list-disc space-y-2 pl-5">
              {questions.split('\n').filter(q => q.trim().length > 0).map((q, i) => (
                <li key={i}>{q.replace(/^- /, '')}</li>
              ))}
            </ul>
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
}
