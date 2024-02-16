// Accordion.js
import React from 'react';
import AccordionItem from './AccordionItem';
import './Accordion.css';

const Accordion = () => {
  const petCareData = [
    {
      question: 'How often should I groom my dog?',
      answer:
        'The frequency of grooming depends on the breed and type of coat. Long-haired breeds may require grooming every 4-6 weeks, while short-haired breeds may need grooming every 8-12 weeks.',
    },
    {
      question: 'What vaccinations does my cat need?',
      answer:
        'Cats typically need core vaccinations, including those for feline distemper, calicivirus, and rhinotracheitis. Consult your veterinarian for a personalized vaccination schedule based on your cat’s lifestyle.',
    },
    {
      question: 'How to prevent ticks and fleas in pets?',
      answer:
        'Use vet-recommended flea and tick prevention products. Regularly check your pet for ticks, especially after outdoor activities. Keep your living spaces clean and vacuum regularly to reduce the risk of infestations.',
    },
    {
        question: 'How much exercise does my dog need?',
        answer:
          'The amount of exercise varies based on your dog’s breed, age, and health. Generally, dogs benefit from daily walks and playtime. Consult your vet for personalized exercise recommendations.',
      },
      {
        question: 'What should I feed my cat?',
        answer:
          'Choose a high-quality cat food that meets your cat’s specific nutritional needs. Wet or dry cat food is acceptable, but always provide fresh water. Avoid feeding your cat human food.',
      },
      {
        question: "How can I keep my pet's teeth clean?",
        answer:
          'Regular dental care is essential for pets. Brush your pet’s teeth regularly using pet-friendly toothpaste and provide dental chews or toys. Schedule dental checkups with your vet.',
      },
      {
        question: 'Should I spay/neuter my pet?',
        answer:
          'Spaying or neutering your pet is an important part of responsible pet ownership. It can prevent certain health issues and contribute to controlling the pet population. Consult your vet for the best time.',
      }
  ];

  return (
    <div className="accordion">
      <h2>Pet Care Q&A</h2>
      {petCareData.map((item, index) => (
        <AccordionItem key={index} {...item} />
      ))}
    </div>
  );
};

export default Accordion;
