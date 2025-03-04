import React from 'react';
import { CheckCircle } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '$29',
    description: 'Perfect for small businesses and startups',
    features: [
      'Up to 5 team members',
      '10GB storage',
      'Basic analytics',
      'Email support',
      'Custom domain',
    ],
    cta: 'Start with Starter',
    highlighted: false,
  },
  {
    name: 'Professional',
    price: '$79',
    description: 'Ideal for growing businesses',
    features: [
      'Up to 20 team members',
      '50GB storage',
      'Advanced analytics',
      'Priority support',
      'Custom domain',
      'API access',
      'Advanced security',
    ],
    cta: 'Choose Professional',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: '$199',
    description: 'For large organizations with complex needs',
    features: [
      'Unlimited team members',
      '500GB storage',
      'Enterprise analytics',
      '24/7 dedicated support',
      'Custom domain',
      'API access',
      'Advanced security',
      'Custom integrations',
      'Dedicated account manager',
    ],
    cta: 'Contact Sales',
    highlighted: false,
  },
];

const PricingSection = () => {
  return (
    <div id="pricing" className="bg-gray-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-purple-600 tracking-wide uppercase">Pricing</h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Plans for businesses of all sizes
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Choose the perfect plan to help your business grow and succeed.
          </p>
        </div>

        <div className="mt-12 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-8 bg-white border rounded-2xl shadow-sm flex flex-col ${
                plan.highlighted
                  ? 'border-purple-500 ring-2 ring-purple-500'
                  : 'border-gray-200'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="inline-flex rounded-full bg-purple-100 px-4 py-1 text-xs font-semibold leading-5 text-purple-600">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900">{plan.name}</h3>
                <p className="mt-4 flex items-baseline text-gray-900">
                  <span className="text-5xl font-extrabold tracking-tight">{plan.price}</span>
                  <span className="ml-1 text-xl font-semibold">/month</span>
                </p>
                <p className="mt-6 text-gray-500">{plan.description}</p>

                <ul role="list" className="mt-6 space-y-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex">
                      <CheckCircle className="flex-shrink-0 w-6 h-6 text-purple-500" aria-hidden="true" />
                      <span className="ml-3 text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#"
                className={`mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium ${
                  plan.highlighted
                    ? 'bg-purple-600 text-white hover:bg-purple-700'
                    : 'bg-purple-50 text-purple-700 hover:bg-purple-100'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingSection;