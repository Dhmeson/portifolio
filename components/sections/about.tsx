"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function About() {
  return (
    <section className="py-20 px-4" id="about">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div className="relative h-[400px] lg:h-[600px]">
            <Image
              src="https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?w=800&h=1200&fit=crop"
              alt="Profile"
              fill
              className="object-cover rounded-lg"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <div className="space-y-4 text-lg text-muted-foreground mb-8">
              <p>
                With over 8 years of experience in game and application development,
                I've had the privilege of working on diverse projects that challenge
                and inspire me.
              </p>
              <p>
                My journey began with a passion for creating interactive experiences,
                leading me to explore both game development and web applications.
                I believe in crafting solutions that not only meet technical
                requirements but also deliver meaningful user experiences.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new game development
                techniques, contributing to open-source projects, or mentoring
                aspiring developers.
              </p>
            </div>

            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">Experience</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">Senior Game Developer</span>
                        <Badge>2020 - Present</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Leading game development projects and mentoring junior developers
                      </p>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">Full Stack Developer</span>
                        <Badge>2018 - 2020</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Building scalable web applications and APIs
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}