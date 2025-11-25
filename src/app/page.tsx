import Image from 'next/image';
import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  BookOpen,
  CheckCircle,
  Download,
  Heart,
  HelpCircle,
  Palette,
  Sparkles,
  Users,
  Church,
  Home as HomeIcon,
  Lock,
} from 'lucide-react';
import { Logo } from '@/components/logo';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const heroImage = PlaceHolderImages.find(p => p.id === 'hero');
const coloringImage = PlaceHolderImages.find(p => p.id === 'coloring');

export default function Home() {
  const features = [
    {
      icon: <Palette className="size-8 text-accent" />,
      title: 'Desenho para Colorir',
      description: 'Ilustrações exclusivas e temáticas para reforçar o aprendizado.',
    },
    {
      icon: <BookOpen className="size-8 text-accent" />,
      title: 'Devocional Infantil',
      description: 'Reflexão bíblica adaptada para a linguagem e compreensão das crianças.',
    },
    {
      icon: <HelpCircle className="size-8 text-accent" />,
      title: 'Perguntas Interativas',
      description: 'Questões que ajudam a criança a entender, pensar e aplicar o tema do dia.',
    },
    {
      icon: <Sparkles className="size-8 text-accent" />,
      title: 'Versículo para Memorização',
      description: 'Passagens selecionadas especialmente para desenvolver valores cristãos.',
    },
  ];

  const howItWorks = [
    {
      step: 1,
      title: 'Faça sua Adesão',
      description: 'Garanta agora o acesso aos primeiros devocionais.',
    },
    {
      step: 2,
      title: 'Acesso Imediato',
      description: 'Receba login e senha para entrar no portal exclusivo.',
    },
    {
      step: 3,
      title: 'Baixe, Imprima e Aplique',
      description: 'Use em casa, na igreja ou em atividades educativas.',
    },
    {
      step: 4,
      title: 'Atualizações Todo Mês',
      description: 'Você recebe novos devocionais mensalmente até completar 365 dias!',
    },
  ];

  const idealFor = [
    {
      icon: <Users className="size-8 text-primary" />,
      title: 'Famílias Cristãs',
      description: 'Momentos devocionais que aproximam pais e filhos.',
    },
    {
      icon: <HomeIcon className="size-8 text-primary" />,
      title: 'Crianças em Casa',
      description: 'Atividades diárias para fortalecer valores e fé.',
    },
    {
      icon: <Church className="size-8 text-primary" />,
      title: 'Ministérios Infantis',
      description: 'Material pronto para usar em aulas, encontros e cultos infantis.',
    },
  ];

  const faqs = [
    {
      question: 'Como vou receber os devocionais?',
      answer: 'Você receberá um acesso ao portal exclusivo, com login e senha pessoais.',
    },
    {
      question: 'Vou receber tudo de uma vez?',
      answer: 'Você recebe os primeiros devocionais imediatamente e novos conteúdos todos os meses até completar 365.',
    },
    {
      question: 'Recebo algo em casa?',
      answer: 'Não. Todo o material é 100% digital para você baixar e imprimir.',
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
          <Logo />
          <Button asChild>
            <Link href="/login">Acessar Portal</Link>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 lg:py-32">
          <div className="container grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div className="space-y-6 text-center md:text-left">
              <span className="rounded-full bg-primary/20 px-4 py-1.5 text-sm font-semibold text-primary-foreground tracking-wider">
                🌟 LANÇAMENTO OFICIAL – EDIÇÃO LIMITADA
              </span>
              <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Conect Kids – Devocionais que Transformam o Coração das Crianças
              </h1>
              <p className="max-w-[600px] text-lg text-muted-foreground md:text-xl">
                Uma jornada de fé, aprendizado e conexão em família — começando hoje mesmo!
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
                <Button asChild size="lg" className="font-bold">
                  <Link href="#pricing">GARANTIR MEU DEVOCIONAL AGORA</Link>
                </Button>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-md">
              {heroImage && (
                <Image
                  src={heroImage.imageUrl}
                  alt={heroImage.description}
                  width={600}
                  height={600}
                  className="rounded-xl shadow-2xl"
                  data-ai-hint={heroImage.imageHint}
                />
              )}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="bg-secondary py-16 md:py-24">
          <div className="container">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
                ✨ O que você recebe
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Cada dia do devocional foi criado para que a criança aprenda, pratique e memorize os ensinamentos bíblicos de forma simples e divertida.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature) => (
                <Card key={feature.title} className="text-center">
                  <CardContent className="flex flex-col items-center gap-4 p-6">
                    {feature.icon}
                    <h3 className="text-xl font-bold font-headline">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-16 md:py-24">
          <div className="container">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
                🚀 Como funciona
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Começar é simples, rápido e prático.
              </p>
            </div>
            <div className="relative">
              <div className="absolute left-1/2 top-10 hidden h-full w-px -translate-x-1/2 bg-border md:block"></div>
              <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                {howItWorks.map((item, index) => (
                  <div key={item.step} className={`relative flex items-start gap-6 ${index % 2 === 1 ? 'md:flex-row-reverse md:text-right' : ''}`}>
                    <div className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground">
                      {item.step}
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold font-headline">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Ideal For Section */}
        <section id="ideal-for" className="bg-secondary py-16 md:py-24">
          <div className="container text-center">
             <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
                💛 Ideal para:
              </h2>
            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
              {idealFor.map((item) => (
                <div key={item.title} className="flex flex-col items-center gap-4">
                  {item.icon}
                  <h3 className="text-xl font-bold font-headline">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-16 md:py-24">
          <div className="container">
            <Card className="mx-auto max-w-2xl overflow-hidden bg-gradient-to-br from-primary/80 to-accent/80 text-primary-foreground shadow-2xl">
              <CardContent className="p-8 text-center">
                <span className="rounded-full bg-background px-4 py-1.5 text-sm font-semibold text-foreground">
                  🎁 OFERTA ESPECIAL DE LANÇAMENTO
                </span>
                <p className="mt-6 text-2xl">De <span className="line-through">R$ 97</span> por apenas:</p>
                <p className="my-4 font-headline text-7xl font-bold">R$ 39</p>
                <Button asChild size="lg" variant="secondary" className="w-full font-bold text-lg">
                  <Link href="/login">💥 GARANTIR MEU DEVOCIONAL AGORA</Link>
                </Button>
                <div className="mt-6 grid grid-cols-1 gap-2 text-left sm:grid-cols-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="size-5 shrink-0" />
                    <span>Download imediato</span>
                  </div>
                   <div className="flex items-center gap-2">
                    <CheckCircle className="size-5 shrink-0" />
                    <span>Acesso vitalício</span>
                  </div>
                   <div className="flex items-center gap-2">
                    <CheckCircle className="size-5 shrink-0" />
                    <span>Oferta por tempo limitado</span>
                  </div>
                   <div className="flex items-center gap-2">
                    <CheckCircle className="size-5 shrink-0" />
                    <span>Arquivos em alta qualidade</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Guarantee Section */}
        <section className="py-16 md:py-24">
          <div className="container grid grid-cols-1 items-center gap-12 md:grid-cols-2">
             <div className="relative mx-auto w-full max-w-sm">
              {coloringImage && (
                <Image
                  src={coloringImage.imageUrl}
                  alt={coloringImage.description}
                  width={400}
                  height={500}
                  className="rounded-xl shadow-xl transform -rotate-6"
                  data-ai-hint={coloringImage.imageHint}
                />
              )}
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Lock className="size-10 text-primary" />
                <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
                  Garantia Incondicional de 7 Dias
                </h2>
              </div>
              <p className="text-lg text-muted-foreground">
                Experimente sem risco! Se por qualquer motivo você não ficar satisfeito, devolvemos 100% do seu dinheiro, sem burocracia, sem perguntas.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <CheckCircle className="size-5 shrink-0 text-green-500 mt-1" />
                  <span>Você testa o material por 7 dias.</span>
                </li>
                 <li className="flex items-start gap-3">
                  <CheckCircle className="size-5 shrink-0 text-green-500 mt-1" />
                  <span>Não gostou? Devolvemos tudo.</span>
                </li>
                 <li className="flex items-start gap-3">
                  <CheckCircle className="size-5 shrink-0 text-green-500 mt-1" />
                  <span>Simples assim.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="bg-secondary py-16 md:py-24">
          <div className="container mx-auto max-w-3xl">
            <h2 className="font-headline text-center text-3xl font-bold tracking-tighter sm:text-4xl">
              ❓ Dúvidas Frequentes
            </h2>
            <Accordion type="single" collapsible className="mt-8 w-full">
              {faqs.map((faq) => (
                <AccordionItem value={faq.question} key={faq.question}>
                  <AccordionTrigger className="text-lg font-semibold">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>

      <footer className="border-t py-8">
        <div className="container flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="text-center sm:text-left">
            <p className="font-semibold">© Conect Kids</p>
            <p className="text-sm text-muted-foreground">
              Desenvolvido com <Heart className="inline size-4 text-red-500" /> para famílias cristãs e ministérios infantis.
            </p>
          </div>
          <Button variant="outline" asChild>
            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
              📞 Precisa de ajuda? Fale no WhatsApp
            </a>
          </Button>
        </div>
      </footer>
    </div>
  );
}
