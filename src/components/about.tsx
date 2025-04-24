import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { About as AboutType } from "@/lib/types";

interface AboutProps {
  about: AboutType;
}

export function About({ about }: AboutProps) {
  const { name, description, skills, image } = about;

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
    <section id="about" className="py-20 px-4 md:px-6 bg-muted/50">
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
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {image && (
            <motion.div variants={itemVariants}>
              <Card>
                <CardContent className="p-0 overflow-hidden rounded-lg">
                  <img
                    src={image || "/placeholder.svg"}
                    alt={name || "Profile"}
                    className="w-full h-auto object-cover aspect-square"
                  />
                </CardContent>
              </Card>
            </motion.div>
          )}

          <motion.div
            variants={itemVariants}
            className={`space-y-6 ${!image ? "md:col-span-2" : ""}`}
          >
            {description && (
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {description}
                </p>
              </div>
            )}

            {skills && skills.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <Badge key={index} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
