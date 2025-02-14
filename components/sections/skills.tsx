"use client";

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const skills = [
  {
    category: 'Game Development',
    items: [
      { name: 'Unity', level: 90 },
      { name: 'Unreal Engine', level: 75 },
      { name: 'Godot', level: 85 },
      { name: 'Game Design', level: 88 },
    ],
  },
  {
    category: 'Programming',
    items: [
      { name: 'C#', level: 92 },
      { name: 'JavaScript/TypeScript', level: 95 },
      { name: 'Python', level: 85 },
      { name: 'C++', level: 78 },
    ],
  },
  {
    category: 'Web Development',
    items: [
      { name: 'React', level: 95 },
      { name: 'Node.js', level: 88 },
      { name: 'Next.js', level: 90 },
      { name: 'Three.js', level: 82 },
    ],
  },
];

export function Skills() {
  return (
    <section className="py-20 px-4 bg-muted/50" id="skills">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((category) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">{category.category}</h3>
                  <div className="space-y-4">
                    {category.items.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">
                            {skill.level}%
                          </span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}