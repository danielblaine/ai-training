import React from 'react';

interface PricingCardProps {
  plan: string;
  price: string;
  features: string[];
  isFeatured?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
  plan,
  price,
  features,
  isFeatured = false,
}) => {
  const baseStyles = "p-6 rounded-lg shadow-md flex flex-col items-center text-center";
  const textColor = isFeatured ? "text-gray-100" : "text-blue-900";
  const bgColor = isFeatured ? "bg-blue-900" : "bg-gray-100";

  return (
    <div className={`${baseStyles} ${bgColor}`}>
      <h2 className={`${textColor} text-lg font-bold mb-4`}>{plan}</h2>
      <p className={`${textColor} text-5xl font-bold mb-6`}>{price}</p>
      
      <div className="border-t border-gray-300 w-full mb-6" />
      
      <ul className="space-y-4 mb-6 w-full">
        {features.map((feature, index) => (
          <React.Fragment key={index}>
            <li className={`${textColor} text-lg font-bold`}>{feature}</li>
            {index < features.length - 1 && (
              <div className="border-t border-gray-300" />
            )}
          </React.Fragment>
        ))}
      </ul>
      
      <div className="border-t border-gray-300 w-full mb-6" />
      
      <button 
        className={`${textColor} w-full py-2 px-4 rounded-md border text-lg font-bold ${
          isFeatured ? 'border-gray-100' : 'border-blue-900'
        } hover:opacity-80 transition-opacity`}
      >
        SUBSCRIBE
      </button>
    </div>
  );
};

export default PricingCard; 