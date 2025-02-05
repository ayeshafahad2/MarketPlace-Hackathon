import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhone, faClock } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";


const Contact = () => {
  return (
    <>
    <div className="relative">
  <Image
    src="/blog.png"
    alt="Hero Image"
    width={1400}
    height={400}
    className="object-cover w-full h-[300px] sm:h-[400px]"
  />
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
    <Image
      src="/logo.png"
      alt="Logo"
      width={80}
      height={80}
      className="object-contain cursor-pointer sm:w-[100px] sm:h-[100px]"
    />
    <h1 className="mt-4 text-2xl sm:text-4xl font-bold text-gray-800">
      Contact Us
    </h1>
    <p className="mt-2 text-sm sm:text-lg text-gray-600">
      Home &gt; Contact Us
    </p>
  </div>
</div>

        {/* Contact Intro */}
        <div className="flex flex-col items-center justify-center mt-10 px-4 lg:mt-20">
          <h1 className="text-[24px] sm:text-[30px] lg:text-[36px] font-semibold text-center">
            Get In Touch With Us
          </h1>
          <p className="text-[14px] sm:text-[16px] text-[#9F9F9F] mt-4 text-center max-w-[90%] lg:max-w-[644px]">
            For More Information About Our Product & Services. Please Feel Free To Drop Us An Email.
            Our Staff Always Be There To Help You Out. Do Not Hesitate!
          </p>
        </div>

        {/* Contact Details */}
        <div className="flex flex-col lg:flex-row items-start justify-between mt-12 px-4 lg:px-16 gap-10">
          <div className="flex flex-col gap-8 lg:w-1/2">
            <div className="flex items-start gap-4">
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className="text-[10px] h-6 text-black hover:text-[#3A2501] transition-colors duration-300"
              />
              <div>
                <h2 className="text-[18px] sm:text-[20px] lg:text-[24px] font-semibold">Address</h2>
                <p className="text-[14px] sm:text-[16px] text-gray-700 whitespace-pre-line">
               <span> 236 5th SE Avenue</span>
               <br/>
               <span> New York NY10000 </span>
               <br/>
               <span> United States</span>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FontAwesomeIcon
                icon={faPhone}
                className="text-[10px] h-6 text-black hover:text-[#3A2501] transition-colors duration-300"
              />
              <div>
                <h2 className="text-[18px] sm:text-[20px] lg:text-[24px] font-semibold">Phone</h2>
                <p className="text-[14px] sm:text-[16px] text-gray-700 whitespace-pre-line">
                 <span> Mobile: +(84) 546-6789</span> 
                 <br/>
                  <span>Hotline: +(84) 456-6789</span>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FontAwesomeIcon
                icon={faClock}
                className="text-[10px] h-6   text-black hover:text-[#3A2501] transition-colors duration-300"
              />
              <div>
                <h2 className="text-[18px] sm:text-[20px] lg:text-[24px] font-semibold">Working Time</h2>
                <p className="text-[14px] sm:text-[16px] text-gray-700 whitespace-pre-line">
                  <span> Monday-Friday: 9:00 - 22:00  </span>
                  <br/>
                  <span> Saturday-Sunday: 9:00 - 21:00</span>
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex flex-col lg:w-1/2 gap-6">
            {[
              { label: "Your Name", placeholder: "Enter your name" },
              { label: "Email Address", placeholder: "Enter your email" },
              { label: "Subject", placeholder: "Enter subject (optional)" },
              { label: "Message", placeholder: "Enter your message" },
            ].map((field, index) => (
              <div key={index} className="flex flex-col">
                <label className="text-[16px] font-semibold mb-2">{field.label}</label>
                <input
                  type="text"
                  placeholder={field.placeholder}
                  className="border border-gray-300 rounded-md px-4 py-3 w-full text-[14px] focus:ring-2 focus:ring-[#B88E2F] focus:outline-none"
                />
              </div>
            ))}
            <button className="w-full lg:w-[237px] h-[55px] bg-[#B88E2F] text-white rounded-md mt-4 flex items-center justify-center text-[16px] font-semibold">
              Submit
            </button>
          </div>
        </div>

    </>
  );
};

export default Contact;
