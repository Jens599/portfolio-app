"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { Contact as ContactType } from "@/lib/types";

interface ContactProps {
  contact: ContactType;
}

export function Contact({ contact }: ContactProps) {
  const { email, social } = contact;

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

  // Function to get the appropriate icon for a social platform
  const getSocialIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case "github":
        return <Github className="h-5 w-5" />;
      case "linkedin":
        return <Linkedin className="h-5 w-5" />;
      case "twitter":
        return <Twitter className="h-5 w-5" />;
      default:
        return null;
    }
  };

  return (
    <section id="contact" className="py-20 px-4 md:px-6">
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
          Get In Touch
        </motion.h2>

        <Card>
          <CardContent className="p-6 md:p-10">
            <div className="grid md:grid-cols-2 gap-10">
              <motion.div variants={itemVariants} className="space-y-4">
                <h3 className="text-xl font-semibold">Contact Information</h3>
                {email && (
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                    <a
                      href={`mailto:${email}`}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {email}
                    </a>
                  </div>
                )}

                {social && social.length > 0 && (
                  <div className="space-y-4 mt-6">
                    <h4 className="text-lg font-medium">Connect with me</h4>
                    <div className="flex flex-wrap gap-3">
                      {social.map(
                        (item, index) =>
                          item.url && (
                            <Button
                              key={index}
                              variant="outline"
                              size="icon"
                              asChild
                            >
                              <a
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={item.platform}
                              >
                                {getSocialIcon(item.platform)}
                              </a>
                            </Button>
                          )
                      )}
                    </div>
                  </div>
                )}
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-4">
                <h3 className="text-xl font-semibold">Send a Message</h3>
                <p className="text-muted-foreground">
                  I'm always open to discussing new projects, creative ideas or
                  opportunities to be part of your vision.
                </p>
                <Button size="lg" className="mt-2">
                  <Mail className="mr-2 h-4 w-4" /> Email Me
                </Button>
              </motion.div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
