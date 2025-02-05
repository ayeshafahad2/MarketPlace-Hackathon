// "use client";
// import React, { useState } from 'react';
// import Image from 'next/image';


// const CheckOut = () => {
//   const [selectedCountry, setSelectedCountry] = useState('');
//   const [selectedProvince, setSelectedProvince] = useState('');
//   const [paymentMethod, setPaymentMethod] = useState('');

//   const countries = ['United States', 'Canada', 'Pakistan', 'India', 'Australia'];
//   const provinces = ['Province 1', 'Province 2', 'Province 3', 'Province 4'];

//   return (
//     <>
//       <div>
//         <div className="relative">
//           <Image
//             src="/blog.png"
//             alt="Hero Image"
//             width={1400}
//             height={400}
//             className="object-cover w-full h-[300px] sm:h-[400px]"
//           />
//           <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
//             <Image
//               src="/logo.png"
//               alt="Logo"
//               width={80}
//               height={80}
//               className="object-contain cursor-pointer sm:w-[100px] sm:h-[100px]"
//             />
//             <h1 className="mt-4 text-2xl sm:text-4xl font-bold text-gray-800">
//               Checkout
//             </h1>
//             <p className="mt-2 text-sm sm:text-lg text-gray-600">
//               Home &gt; Checkout
//             </p>
//           </div>
//         </div>

//         <div className="container mx-auto px-4 lg:px-12 mt-16">
//           <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
//             {/* Left Side: Billing Form */}
//             <div className="w-full lg:w-[60%]">
//               <h1 className="text-[36px] font-semibold mb-5">Billing details</h1>
//               <div className="flex flex-wrap items-center justify-start gap-6">
//                 <div className="w-full sm:w-auto">
//                   <label>
//                     First Name
//                     <br />
//                     <input
//                       type="text"
//                       className="w-full sm:w-[211px] h-[75px] border border-black rounded-md mt-2"
//                     />
//                   </label>
//                 </div>
//                 <div className="w-full sm:w-auto">
//                   <label>
//                     Last Name
//                     <br />
//                     <input
//                       type="text"
//                       className="w-full sm:w-[211px] h-[75px] border border-black rounded-md mt-2"
//                     />
//                   </label>
//                 </div>
//               </div>
//               <br />
//               Company Name (Optional)
//               <br />
//               <br />
//               <input
//                 type="text"
//                 className="w-full lg:w-[453px] h-[75px] border border-black rounded-md"
//               />
//               <br />
//               <br />
//               Country / Region
//               <br />
//               <br />
//               <select
//                 value={selectedCountry}
//                 onChange={(e) => setSelectedCountry(e.target.value)}
//                 className="w-full lg:w-[453px] h-[75px] border border-black rounded-md pl-4"
//               >
//                 <option value="">Select your country/region</option>
//                 {countries.map((country) => (
//                   <option key={country} value={country}>
//                     {country}
//                   </option>
//                 ))}
//               </select>
//               <br />
//               <br />
//               Street address
//               <br />
//               <br />
//               <input
//                 type="text"
//                 className="w-full lg:w-[453px] h-[75px] border border-black rounded-md"
//               />
//               <br />
//               <br />
//               Town / City
//               <br />
//               <br />
//               <input
//                 type="text"
//                 className="w-full lg:w-[453px] h-[75px] border border-black rounded-md"
//               />
//               <br />
//               <br />
//               Province
//               <br />
//               <br />
//               <select
//                 value={selectedProvince}
//                 onChange={(e) => setSelectedProvince(e.target.value)}
//                 className="w-full lg:w-[453px] h-[75px] border border-black rounded-md pl-4"
//               >
//                 <option value="">Select your province</option>
//                 {provinces.map((province) => (
//                   <option key={province} value={province}>
//                     {province}
//                   </option>
//                 ))}
//               </select>
//               <br />
//               <br />
//               ZIP code
//               <br />
//               <br />
//               <input
//                 type="text"
//                 className="w-full lg:w-[453px] h-[75px] border border-black rounded-md"
//               />
//               <br />
//               <br />
//               Phone
//               <br />
//               <br />
//               <input
//                 type="text"
//                 className="w-full lg:w-[453px] h-[75px] border border-black rounded-md"
//               />
//               <br />
//               <br />
//               Email address
//               <br />
//               <br />
//               <input
//                 type="text"
//                 className="w-full lg:w-[453px] h-[75px] border border-black rounded-md"
//               />
//               <br />
//               <br />
//               Additional information
//               <br />
//               <br />
//               <input
//                 placeholder="Additional information"
//                 type="text"
//                 className="w-full lg:w-[453px] h-[75px] border border-black rounded-md text-[#9F9F9F] pl-4"
//               />
//             </div>

//             {/* Right Side: Order Summary */}
//             <div className="w-full lg:w-[35%]">
//               <div className="flex items-start justify-between">
//                 <div className="flex flex-col gap-3">
//                   <h2 className="text-[24px] font-semibold">Product</h2>
//                   <p className="text-[#9F9F9F]">
//                     Asgaard sofa <span className="text-black">X 1</span>
//                   </p>
//                   <span className="font-semibold">Subtotal</span>
//                   <span className="font-semibold">Total</span>
//                 </div>
//                 <div className="flex flex-col gap-3 text-right">
//                   <h2 className="text-[24px] font-semibold">Subtotal</h2>
//                   <span>Rs. 250,000.00</span>
//                   <span>Rs. 250,000.00</span>
//                   <span className="text-[#B88E2F] text-[24px] font-semibold">
//                     Rs. 250,000.00
//                   </span>
//                 </div>
//               </div>
//               <div className="border-b border-[#D9D9D9] w-full mt-6"></div>
//               <div className="mt-8">
//                 <div className="flex items-center gap-3">
//                   <input
//                     type="radio"
//                     id="directBankTransfer"
//                     name="paymentMethod"
//                     value="directBankTransfer"
//                     checked={paymentMethod === 'directBankTransfer'}
//                     onChange={() => setPaymentMethod('directBankTransfer')}
//                   />
//                   <h1 className="text-[20px] font-semibold">Direct Bank Transfer</h1>
//                 </div>
//                 <p className="text-[#9F9F9F] mt-2">
//                   Make your payment directly into our bank account. Please use your
//                   Order ID as the payment reference. Your order will not be shipped
//                   until the funds have cleared in our account.
//                 </p>
//                 <div className="flex items-center gap-3 mt-6">
//                   <input
//                     type="radio"
//                     id="cashOnDelivery"
//                     name="paymentMethod"
//                     value="cashOnDelivery"
//                     checked={paymentMethod === 'cashOnDelivery'}
//                     onChange={() => setPaymentMethod('cashOnDelivery')}
//                   />
//                   <h1 className="text-[18px] font-semibold text-[#9F9F9F]">
//                     Cash On Delivery
//                   </h1>
//                 </div>
//                 <div className="flex items-center gap-3 mt-6">
//                   <input
//                     type="radio"
//                     id="bankTransfer"
//                     name="paymentMethod"
//                     value="bankTransfer"
//                     checked={paymentMethod === 'bankTransfer'}
//                     onChange={() => setPaymentMethod('bankTransfer')}
//                   />
//                   <h1 className="text-[18px] font-semibold text-[#9F9F9F]">
//                     Bank Transfer
//                   </h1>
//                 </div>
//               </div>
//               <div className="mt-6 text-sm text-gray-600">
//                 <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>
//               </div>
//               <div className="mt-10">
//                 <button className="w-full lg:w-[318px] h-[64px] border border-black rounded-2xl hover:bg-selfcolors-darkBrown">
//                   Place order
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default CheckOut;
"use client";
import React, { useState } from "react";
import axios from "axios";
import { Address, Rate, trackingObjType } from "@/types";
import { cartProductsWhichCanBeShipped } from "@/data";
import Link from "next/link";

// don't judge frontend code i have build it to uderstand shipengine api 😁

const ShippingRatesPage = () => {
  // to ship address
  // i added defualt address which help you understand structure of address
  const [shipeToAddress, setshipeToAddress] = useState<Address>({
    name: "John Doe",
    phone: "+1 555-678-1234",
    addressLine1: "1600 Pennsylvania Avenue NW",
    addressLine2: "", // Optional
    cityLocality: "Washington",
    stateProvince: "DC",
    postalCode: "20500",
    countryCode: "US",
    addressResidentialIndicator: "no", // 'no' means a commercial address
  });

  const [rates, setRates] = useState<Rate[]>([]);
  const [rateId, setrateId] = useState<string | null>(null);
  const [labelPdf, setLabelPdf] = useState<string | null>(null);
  const [trackingObj, setTrackingObj] = useState<trackingObjType | null>(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);

  // Function to handle form submission of shipping rates
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrors([]);
    setRates([]);

    try {
      const response = await axios.post("/api/shipengine/get-rates", {
        shipeToAddress,
        // map the cart products which can be shipped and use only weight and dimensions
        packages: cartProductsWhichCanBeShipped.map((product) => ({
          weight: product.weight,
          dimensions: product.dimensions,
        })),
      });
      // see the response in browser
      console.log(response.data);
      // Update the state with the fetched rates
      setRates(response.data.shipmentDetails.rateResponse.rates);
    } catch (error) {
      console.log(error);
      setErrors(["An error occurred while fetching rates."]);
    } finally {
      setLoading(false);
    }
  };

  // Function to create label from selected rate
  const handleCreateLabel = async () => {
    if (!rateId) {
      alert("Please select a rate to create a label.");
    }

    setLoading(true);
    setErrors([]);

    try {
      // get rateId which user selected
      const response = await axios.post("/api/shipengine/label", {
        rateId: rateId,
      });
      const labelData = response.data;
      // see the response of label in browser
      console.log(labelData);
      // set pdf url
      setLabelPdf(labelData.labelDownload.href);
      // set tracking obj
      setTrackingObj({
        trackingNumber: labelData.trackingNumber,
        labelId: labelData.labelId,
        carrierCode: labelData.carrierCode,
      });
    } catch (error) {
      console.log(error);
      setErrors(["An error occurred while creating the label."]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen text-black bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Shipping Rates Calculator
        </h1>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* To Address Section */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Ship To Address
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                value={shipeToAddress.name}
                onChange={(e) =>
                  setshipeToAddress({ ...shipeToAddress, name: e.target.value })
                }
                className="p-2 border border-gray-300 rounded-md"
                required
              />
              <input
                type="text"
                placeholder="Phone"
                value={shipeToAddress.phone}
                onChange={(e) =>
                  setshipeToAddress({
                    ...shipeToAddress,
                    phone: e.target.value,
                  })
                }
                className="p-2 border border-gray-300 rounded-md"
                required
              />
              <input
                type="text"
                placeholder="Address Line 1"
                value={shipeToAddress.addressLine1}
                onChange={(e) =>
                  setshipeToAddress({
                    ...shipeToAddress,
                    addressLine1: e.target.value,
                  })
                }
                className="p-2 border border-gray-300 rounded-md"
                required
              />
              <input
                type="text"
                placeholder="Address Line 2"
                value={shipeToAddress.addressLine2}
                onChange={(e) =>
                  setshipeToAddress({
                    ...shipeToAddress,
                    addressLine2: e.target.value,
                  })
                }
                className="p-2 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                placeholder="City"
                value={shipeToAddress.cityLocality}
                onChange={(e) =>
                  setshipeToAddress({
                    ...shipeToAddress,
                    cityLocality: e.target.value,
                  })
                }
                className="p-2 border border-gray-300 rounded-md"
                required
              />
              <input
                type="text"
                placeholder="State/Province"
                value={shipeToAddress.stateProvince}
                onChange={(e) =>
                  setshipeToAddress({
                    ...shipeToAddress,
                    stateProvince: e.target.value,
                  })
                }
                className="p-2 border border-gray-300 rounded-md"
                required
              />
              <input
                type="text"
                placeholder="Postal Code"
                value={shipeToAddress.postalCode}
                onChange={(e) =>
                  setshipeToAddress({
                    ...shipeToAddress,
                    postalCode: e.target.value,
                  })
                }
                className="p-2 border border-gray-300 rounded-md"
                required
              />
              <input
                type="text"
                placeholder="Country Code (e.g., PK)"
                value={shipeToAddress.countryCode}
                onChange={(e) =>
                  setshipeToAddress({
                    ...shipeToAddress,
                    countryCode: e.target.value,
                  })
                }
                className="p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 disabled:bg-gray-400"
          >
            {loading ? "Calculating..." : "Get Shipping Rates"}
          </button>
        </form>

        {/* Display Available Rates */}
        {rates.length > 0 && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Available Shipping Rates
            </h2>
            <div className="gap-4 flex items-center flex-wrap">
              {rates.map((rate) => (
                <div
                  key={rate.rateId}
                  className={`p-4 border rounded-lg shadow-md transition-transform transform hover:scale-105 cursor-pointer ${
                    rateId === rate.rateId
                      ? "border-blue-500 bg-blue-100"
                      : "border-gray-200 bg-gray-50"
                  }`}
                  onClick={() => setrateId(rate.rateId)}
                >
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="shippingRate"
                      checked={rateId === rate.rateId}
                      onChange={() => setrateId(rate.rateId)}
                      className="form-radio h-4 w-4 text-blue-500"
                    />
                    <div>
                      <p className="text-lg font-medium text-gray-700">
                        <strong>Carrier:</strong> {rate.carrierFriendlyName}
                      </p>
                      <p className="text-gray-600">
                        <strong>Service:</strong> {rate.serviceType}
                      </p>
                      <p className="text-gray-800 font-semibold">
                        <strong>Cost:</strong> {rate.shippingAmount.amount}{" "}
                        {rate.shippingAmount.currency}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Create Label Button */}
        {rateId && (
          <div className="mt-8">
            <button
              onClick={handleCreateLabel}
              disabled={loading}
              className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-gray-400"
            >
              {loading ? "Creating Label..." : "Create Label"}
            </button>
          </div>
        )}
        {labelPdf && (
         <Link target="_blank" href={labelPdf}> <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">Download Label</button></Link>
        )}
        {trackingObj && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Tracking thinks (We are using ShipEngine test api key so order will not trace)
            </h2>
            <p>tracking number: {trackingObj.trackingNumber}</p>
            <p> labelId: {trackingObj.labelId}</p>
            <p> carrierCode: {trackingObj.carrierCode}</p>
            <Link href={`/tracking/?labelId=${trackingObj.labelId}`}>
              <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Track Order</button>
            </Link>
          </div>
        )}
        {errors.length > 0 && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Errors</h2>
            <div className="space-y-2">
              {errors.map((error, index) => (
                <p key={index} className="text-red-500">
                  {error}
                </p>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShippingRatesPage;