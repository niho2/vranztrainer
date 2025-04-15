"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Brain,
  Activity,
  ArrowRight,
  Stars
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
const SimpleLandingPage = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-slate-100">
      {/* Header */}
      <header className="container mx-auto py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="bg-indigo-600 rounded-full p-2"
          >
            <Stars className="w-5 h-5 text-white" />
          </motion.div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
            VranzTrainer
          </span>
        </div>

        <nav className="hidden md:block">
          <ul className="flex gap-6">
            <li><a className="hover:text-indigo-400 transition-colors" href="#features">Features</a></li>
            <li><a className="hover:text-indigo-400 transition-colors" href="#pricing">Preise</a></li>
          </ul>

        </nav>

        <Button className="bg-indigo-600 hover:bg-indigo-700">
          Starten
        </Button>
      </header>

      {/* Hero */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-indigo-600 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-10 w-64 h-64 bg-purple-600 rounded-full filter blur-3xl opacity-20"></div>

        <div className="container mx-auto text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-2xl mx-auto"
          >
            <Badge className="mb-4 bg-indigo-900 text-indigo-300">Neu: KI-Trainingsmodule</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
              Revolutioniere dein Lernen
            </h1>
            <p className="text-lg text-slate-300 mb-6">
              KI-basiertes personalisiertes Training für deine kognitiven Fähigkeiten.
            </p>

            <Button className="bg-indigo-600 hover:bg-indigo-700 text-lg">
              Jetzt starten <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-12 relative mx-auto max-w-4xl"
          >
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg p-1">
              <div className="bg-slate-900 rounded-lg p-3 h-48 flex items-center justify-center">
                <motion.div
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="text-center"
                >
                  <Stars className="w-10 h-10 mx-auto mb-2 text-indigo-400" />
                  <p className="text-slate-300">Dashboard-Vorschau</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-12 bg-slate-900/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Hauptfunktionen</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "KI-Training",
                description: "Adaptive Methoden basierend auf deinem Fortschritt",
                icon: <Brain className="w-6 h-6 text-indigo-500" />
              },
              {
                title: "Fortschrittstracking",
                description: "Detaillierte Statistiken deiner Lernfortschritte",
                icon: <Activity className="w-6 h-6 text-indigo-500" />
              },
              {
                title: "Personalisiert",
                description: "Maßgeschneiderte Trainingseinheiten für deine Stärken",
                icon: <Stars className="w-6 h-6 text-indigo-500" />
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-slate-800/80 border-slate-700 h-full hover:border-indigo-500 transition-colors">
                  <CardHeader>
                    <div className="mb-3 bg-slate-700/50 w-12 h-12 rounded-lg flex items-center justify-center">
                      {feature.icon}
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                    <CardDescription className="text-slate-400">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Unsere Preise</h2>

          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Basis",
                price: "9,99€",
                description: "Starter-Paket für Einsteiger",
                features: ["Grundlegende Trainingsmodule", "Persönliches Dashboard", "Wöchentliche Berichte"]
              },
              {
                title: "Premium",
                price: "19,99€",
                description: "Voller Funktionsumfang",
                features: ["Alle Basis-Features", "KI-Empfehlungen", "Unbegrenzte Übungen", "Prioritäts-Support"]
              }
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className={index === 1 ? "relative border-2 border-indigo-500 rounded-lg" : ""}
              >
                {index === 1 && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-indigo-600">
                    Empfohlen
                  </Badge>
                )}
                <Card className="bg-slate-800/80 border-none h-full">
                  <CardHeader>
                    <CardTitle className="text-xl">{plan.title}</CardTitle>
                    <CardDescription className="text-slate-400">{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <span className="text-3xl font-bold">{plan.price}</span>
                      <span className="text-slate-400"> / Monat</span>
                    </div>
                    <ul className="space-y-2 text-sm">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <span className="text-indigo-400 mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className={`w-full mt-4 ${index === 1 ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-slate-700 hover:bg-slate-600'}`}>
                      Auswählen
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-gradient-to-r from-indigo-900/50 to-purple-900/50">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Bereit für den nächsten Schritt?</h2>
            <p className="text-lg text-slate-300 max-w-xl mx-auto mb-6">
              Starte heute mit VranzTrainer und bringe deine Fähigkeiten auf ein neues Level.
            </p>

            <Button className="bg-indigo-600 hover:bg-indigo-700">
              Kostenlose Testphase starten
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-900">
        <div className="container mx-auto text-center text-slate-400">
          <div className="flex justify-center gap-6 mb-4">
            <a href="#" className="hover:text-indigo-400 transition-colors">Über uns</a>
            <a href="#" className="hover:text-indigo-400 transition-colors">Kontakt</a>
            <a href="#" className="hover:text-indigo-400 transition-colors">Impressum</a>
            <a href="#" className="hover:text-indigo-400 transition-colors">Datenschutz</a>
          </div>
          <p>© 2025 VranzTrainer. Alle Rechte vorbehalten.</p>
        </div>
      </footer>
    </div>
  );
};

export default SimpleLandingPage;