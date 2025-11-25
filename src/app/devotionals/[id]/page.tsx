import { getDevotionalById } from '@/lib/devotionals-data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Download, Palette, Sparkles, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { InteractiveQuestions } from '@/components/interactive-questions';

export default function DevotionalPage({ params }: { params: { id: string } }) {
  const devotional = getDevotionalById(params.id);

  if (!devotional) {
    notFound();
  }

  const devotionalContentForAI = `
    Reflexão: ${devotional.reflection}
    Versículo: ${devotional.verse.text} (${devotional.verse.reference})
  `;

  return (
    <div className="container max-w-4xl py-8">
      <div className="space-y-4 text-center mb-12">
        <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">{devotional.title}</h1>
        <p className="text-xl text-muted-foreground">Dia {devotional.day}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-8">
          {/* Coloring Page Card */}
          <Card>
            <CardHeader className="flex-row items-center gap-4 space-y-0">
              <Palette className="size-6 text-accent" />
              <CardTitle className="font-headline text-xl">Desenho para Colorir</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg border">
                <Image
                  src={devotional.coloringPageUrl}
                  alt={`Página de colorir para ${devotional.title}`}
                  fill
                  className="object-cover"
                  data-ai-hint={devotional.imageHint}
                />
              </div>
              <Button className="w-full mt-4" variant="outline">
                <Download className="mr-2 size-4" />
                Baixar e Imprimir
              </Button>
            </CardContent>
          </Card>

          {/* Memory Verse Card */}
          <Card>
            <CardHeader className="flex-row items-center gap-4 space-y-0">
              <Sparkles className="size-6 text-accent" />
              <CardTitle className="font-headline text-xl">Versículo para Memorização</CardTitle>
            </CardHeader>
            <CardContent>
              <blockquote className="border-l-4 border-primary pl-4 italic">
                <p className="text-lg">"{devotional.verse.text}"</p>
                <footer className="mt-2 text-base font-semibold not-italic">{devotional.verse.reference}</footer>
              </blockquote>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8">
          {/* Devotional Card */}
          <Card className="h-fit">
            <CardHeader className="flex-row items-center gap-4 space-y-0">
              <BookOpen className="size-6 text-accent" />
              <CardTitle className="font-headline text-xl">Devocional Infantil</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="whitespace-pre-wrap text-base leading-relaxed">{devotional.reflection}</p>
            </CardContent>
          </Card>
          
          {/* Interactive Questions Card */}
          <Card>
             <CardHeader className="flex-row items-center gap-4 space-y-0">
              <HelpCircle className="size-6 text-accent" />
              <CardTitle className="font-headline text-xl">Perguntas Interativas</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-4">Clique no botão para gerar perguntas que ajudarão a criança a refletir sobre a lição de hoje.</CardDescription>
              <InteractiveQuestions devotionalContent={devotionalContentForAI} />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
