import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { getDevotionals, type Devotional } from '@/lib/devotionals-data';
import { Badge } from '@/components/ui/badge';

function DevotionalCard({ devotional }: { devotional: Devotional }) {
  return (
    <Link href={`/devotionals/${devotional.id}`} className="group block">
      <Card className="flex h-full flex-col overflow-hidden transition-all group-hover:shadow-lg group-hover:-translate-y-1">
        <CardHeader className="relative h-48 w-full p-0">
          <Image
            src={devotional.coloringPageUrl}
            alt={devotional.title}
            fill
            className="object-cover"
            data-ai-hint={devotional.imageHint}
          />
        </CardHeader>
        <CardContent className="flex-1 p-4">
          <CardTitle className="font-headline text-lg leading-tight group-hover:text-primary">
            {devotional.title}
          </CardTitle>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <Badge variant="secondary">Dia {devotional.day}</Badge>
        </CardFooter>
      </Card>
    </Link>
  );
}

export default function DevotionalsPage() {
  const devotionals = getDevotionals();

  return (
    <div className="container py-8">
      <div className="mb-8 space-y-2">
        <h1 className="font-headline text-4xl font-bold tracking-tighter">Seus Devocionais</h1>
        <p className="text-lg text-muted-foreground">
          Escolha um devocional para começar sua jornada de hoje!
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {devotionals.map((devotional) => (
          <DevotionalCard key={devotional.id} devotional={devotional} />
        ))}
      </div>
    </div>
  );
}
