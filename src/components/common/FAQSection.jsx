import React from "react";

const faqs = [
  {
    question: "Comment collaborer avec SBS Research ?",
    answer:
      "Contactez-nous via le formulaire ci-dessus en précisant votre domaine d'intérêt et vos objectifs. Nous étudierons les possibilités de collaboration.",
  },
  {
    question: "Proposez-vous des stages ?",
    answer:
      "Oui, nous accueillons régulièrement des stagiaires et doctorants. Consultez nos offres ou envoyez-nous votre candidature spontanée.",
  },
  {
    question: "Temps de réponse habituel ?",
    answer:
      "Nous nous efforçons de répondre à toutes les demandes dans un délai de 48h ouvrées maximum.",
  },
  {
    question: "Services de consultation ?",
    answer:
      "Nous proposons des services de consultation technique et d'expertise pour les entreprises. Contactez-nous pour discuter de vos besoins.",
  },
];

export default function FAQSection() {
  return (
    <section className="bg-gray-100 py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
          Questions fréquentes
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Trouvez rapidement les réponses aux questions les plus courantes
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {faq.question}
              </h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
