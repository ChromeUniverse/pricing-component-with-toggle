import React, { useState } from 'react'
import Card from './components/Card'

function App() {

  const [annual, setAnnual] = useState(false);

  const tiers = [
    {
      title: "Basic",
      annualPrice: "199.99",
      monthlyPrice: "19.99",
      storage: "500 GB",
      users: "2",
      transfer: "3",
      highlight: false
    },
    {
      title: "Professional",
      annualPrice: "249.99",
      monthlyPrice: "24.99",
      storage: "1 TB",
      users: "5",
      transfer: "10",
      highlight: true
    },
    {
      title: "Master",
      annualPrice: "399.99",
      monthlyPrice: "39.99",
      storage: "2 TB",
      users: "10",
      transfer: "20",
      highlight: false
    },
  ]

  function toggleHandler() {
    // console.log('Clicked');
    setAnnual(oldAnnual => !oldAnnual);
  }

  return (
    <main className="mx-auto flex flex-col items-center">

      {/* Title */}
      <h1 className='text-3xl text-grayishBlue'>Our Pricing</h1>

      {/* Toggle */}
      <div className='flex space-x-6 pt-6 pb-12 items-center' onClick={toggleHandler}>
        <p className='text-md text-lightGrayishBlue'>Annually</p>
        <div className='relative bg-gradient-to-r from-lightPurple to-strongPurple w-14 h-8 rounded-full cursor-pointer hover:to-[#c5c8f3] hover:from-[#c5c8f3]'>
          <div className={`absolute transition-all w-6 h-6 bg-white top-1 rounded-full ${annual ? 'left-1' : 'left-7'}`}></div>
        </div>
        <p className='text-md text-lightGrayishBlue'>Monthly</p>
      </div>

      {/* Cards container */}
      <div className='flex flex-row items-center'>
        {tiers.map((tier, index) => (
          <Card
            highlight={tier.highlight}
            title={tier.title}
            price={annual ? tier.annualPrice : tier.monthlyPrice}
            storage={tier.storage}
            users={tier.users}
            transfer={tier.transfer}
            index={index}
          />
        ))}
      </div>
    </main>
  );
}

export default App