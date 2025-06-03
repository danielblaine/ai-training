import Dashboard from './components/Dashboard'
import PricingCard from './components/PricingCard'

const pricingPlans = [
  {
    plan: 'Standard',
    price: "$100",
    features: ['50,000 Requests', '4 contributors', 'Up to 3 GB storage space']
  },
  {
    plan: 'Pro',
    price: "$200",
    features: ['100,000 Requests', '7 contributors', 'Up to 6 GB storage space'],
    isFeatured: true
  },
  {
    plan: 'Expert',
    price: "$500",
    features: ['200,000 Requests', '11 contributors', 'Up to 10 GB storage space']
  }
]

function App() {
  return (
    <div className="min-h-screen w-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-900 mb-12">
          Pricing
        </h1>
        
        <div className="w-full flex flex-col sm:flex-row gap-8 justify-center">
          {pricingPlans.map((plan, index) => (
            <div key={index} className="w-full sm:w-1/3">
              <PricingCard
                plan={plan.plan}
                price={plan.price}
                features={plan.features}
                isFeatured={plan.isFeatured}
              />
            </div>
          ))}
        </div>
      </div>
      <Dashboard />
    </div>
  )
}

export default App
