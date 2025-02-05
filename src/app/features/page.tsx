import React from 'react';
import { ShieldCheckIcon, TruckIcon, TrophyIcon, PhoneIcon } from '@heroicons/react/24/solid';

const Feature = () => {
  return (
    <div className="h-auto lg:h-[270px] bg-[#F9F1E7] mt-8 lg:mt-16 flex flex-col lg:flex-row items-center justify-evenly gap-6 lg:gap-0 px-4">
      {[
        {
          icon: <TrophyIcon className="w-[50px] lg:w-[60px] text-[#333333]" />,
          title: 'High Quality',
          desc: 'crafted from top materials',
        },
        {
          icon: <ShieldCheckIcon className="w-[50px] lg:w-[60px] text-[#333333]" />,
          title: 'Warranty Protection',
          desc: 'Over 2 years',
        },
        {
          icon: <TruckIcon className="w-[50px] lg:w-[60px] text-[#333333]" />,
          title: 'Free Shipping',
          desc: 'Order over 150 $',
        },
        {
          icon: <PhoneIcon className="w-[50px] lg:w-[60px] text-[#333333]" />,
          title: '24 / 7 Support',
          desc: 'Dedicated support',
        },
      ].map((feature) => (
        <div
          key={feature.title}
          className="flex flex-col items-center lg:flex-row gap-3 lg:gap-4 max-w-[300px] md:max-w-[350px] text-center lg:text-left"
        >
          <div>{feature.icon}</div>
          <div>
            <h3 className="font-bold text-[16px] md:text-[18px] lg:text-[20px] xl:text-[25px]">
              {feature.title}
            </h3>
            <p className="text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] text-gray-600">
              {feature.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feature;
