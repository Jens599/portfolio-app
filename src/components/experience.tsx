"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Experience as ExperienceType } from "@/lib/types";

interface ExperienceProps {
  experience: ExperienceType[];
}

export function Experience({ experience }: ExperienceProps) {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="experience" className="py-20 px-4 md:px-6">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="container mx-auto max-w-5xl"
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl font-bold tracking-tighter mb-8 text-center"
        >
          Experience
        </motion.h2>

        <div className="space-y-6">
          {experience.map((job, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                    <CardTitle>{job.title}</CardTitle>
                    <div className="text-sm text-muted-foreground">
                      {job.dates}
                    </div>
                  </div>
                  <div className="text-lg font-medium">{job.company}</div>
                </CardHeader>
                <CardContent>
                  {job.description && (
                    <p className="text-muted-foreground mb-4">
                      {job.description}
                    </p>
                  )}
                  {job.responsibilities && job.responsibilities.length > 0 && (
                    <ul className="list-disc pl-5 space-y-2">
                      {job.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="text-muted-foreground">
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
