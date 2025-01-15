import React from 'react';
import Customer_Feedbacks from '../assets/Customer_Feedbacks.png';
import customer from '../assets/customer.png';
import dot2 from '../assets/dot2.png';

const Customers = () => {
  return (
    <div className="relative py-8 px-4 md:px-16 bg-gray-100">
      {/* Header Section */}
      <div className="flex flex-col items-center justify-center text-center mb-12">
        <div
          className="flex flex-col items-center justify-center bg-cover bg-no-repeat bg-center py-12 px-6 w-full md:w-2/3 rounded-lg"
          style={{
            backgroundImage: `url(${Customer_Feedbacks})`,
          }}
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            WHAT OUR <span className="text-colorThree">CUSTOMERS</span> ARE SAYING
          </h3>
        </div>
      </div>

      {/* Feedback Section */}
      <div className="grid grid-cols-1 mb-10 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Feedback 1 */}
        <div className="bg-primary p-12 rounded shadow-lg">
          <p className="text-base mb-4">
            Your Amal baby has arrived o. The neem soap is so fabulous. The grandma that came to bathe him just kept praising you when she saw my Amal products.
          </p>
          <div className="flex items-center gap-4">
            <img src={customer} alt="Customer" className="w-12 h-12 rounded-full" />
            <p className="font-semibold">Mrs. Owolabi</p>
          </div>
        </div>

        {/* Feedback 2 */}
        <div className="bg-primary p-12 rounded shadow-lg">
          <p className="text-base mb-4">
            My son's skin has improved drastically. His skin is no longer dry. He doesn't have any rash anymore. His skin is soft and supple...like he is so ruby.
          </p>
          <div className="flex items-center gap-4">
            <img src={customer} alt="Customer" className="w-12 h-12 rounded-full" />
            <p className="font-semibold">Ajoke</p>
          </div>
        </div>

        {/* Feedback 3 */}
        <div className="bg-primary p-12 rounded shadow-lg">
          <p className="text-base mb-4">
            Everyone is commenting that my son's skin is now glowing. My hubby and my kid sister are now believers. The liquid black soap and the miracle moisturizing cream did the trick.
          </p>
          <div className="flex items-center gap-4 ">
            <img src={customer} alt="Customer" className="w-12 h-12 rounded-full" />
            <p className="font-semibold">Ayodele A.</p>
          </div>
        </div>
      </div>

      
      <img
        src={dot2}
        alt="Dot"
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 "
      />
    </div>
  );
};

export default Customers;
