"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    id: 'Que Palavra é Essa?',
    title: 'Que Palavra é Essa?',
    description: 'Bem-vindo ao Que Palavra é Essa?, o jogo perfeito para quem adora desafios de palavras! Teste suas habilidades e descubra a palavra escondida digitando letras no teclado.',
    image: 'https://play-lh.googleusercontent.com/bzp9bibABERtzlKBchLL86GHLERrJNPGUwtUsROYbLJxSeOAdshTQ3DtUAL9pWylKTr7=w240-h480',
    technologies: ['React native','Expo'],
    category: 'Game',
  },
  {
    id: 'Safe Logic',
    title: 'Safe Logic',
    description: 'Jogo de quebra-cabeça que desafia suas habilidades de lógica e pensamento estratégico.As pistas podem incluir somas, diferenças, multiplicações, divisões ou relações de igualdade e desigualdade entre os números.',
    image: 'https://play-lh.googleusercontent.com/PUBdqofDinLTB_3iEGPrBPLeOfOTCDaMYSsp1LTGJ8AL_kx5dZ3uIPt0YpSNpQxygA=w240-h480',
    technologies: ['React native','Expo'],
    category: 'Game',
  },
  {
    id: 'Lermo',
    title: 'Lermo',
    description: 'Escrever e armazenar seus textos, adicionando títulos e conteúdos.Ler seus textos de uma forma única, onde cada palavra é exibida na tela uma por vez,',
    image: 'https://play-lh.googleusercontent.com/wC3oZ1V-lLHnjKtVH7MERxlwVIddLj5gExPXyzALyMcLEWSFi-fOTeeQuryGA4xkP3M=w240-h480',
    technologies: ['React native','Expo'],
    category: 'App',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export function FeaturedProjects() {
  return (
    <section className="py-20 px-4" id="projects">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of my best work in game development and web applications.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <Link href={`/projects/${project.id}`}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{project.category}</Badge>
                    </div>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}