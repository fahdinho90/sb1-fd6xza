import React from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Quels sont les documents nécessaires pour une transaction immobilière ?",
    answer: "Pour une transaction immobilière, vous aurez généralement besoin du titre de propriété, de la carte d'identité des parties, d'un certificat de propriété récent, et des documents cadastraux. Le notaire vous guidera sur les documents spécifiques requis pour votre situation."
  },
  {
    question: "Combien coûtent les services d'un notaire ?",
    answer: "Les honoraires des notaires sont réglementés par la loi marocaine. Ils varient selon le type d'acte et la valeur de la transaction. Contactez directement un notaire pour obtenir un devis précis."
  },
  {
    question: "Combien de temps prend une procédure notariale ?",
    answer: "La durée varie selon le type de procédure. Une transaction immobilière simple peut prendre 2-3 semaines, tandis qu'une succession peut nécessiter plusieurs mois selon sa complexité."
  },
  {
    question: "Un notaire peut-il refuser ses services ?",
    answer: "Un notaire peut refuser ses services s'il constate une illégalité dans la transaction ou s'il existe un conflit d'intérêts. Il doit motiver son refus."
  }
];

export default function FAQ() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Questions Fréquentes</h1>
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <details key={index} className="group bg-white rounded-lg shadow-md">
              <summary className="flex items-center justify-between cursor-pointer p-6">
                <h2 className="text-lg font-semibold pr-8">{faq.question}</h2>
                <ChevronDown className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="px-6 pb-6 text-gray-600">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}