import React from 'react'

const Hero = () => (
    <div className="bg-bannerBackground h-[721px] border-b border-gray-200">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="items-center justify-center h-16">
      <h2 className="font-poppins font-semibold xs:text-[40px] text-[40px] text-white xs:leading-[60.8px] leading-[66.8px]">Empowering Customer Engagement <br/>Through Technology</h2>
      <div className="border-b border-gray-300 w-1/2 mt-12"></div>
    </div>
    <div className="py-4 mt-32">
      <p className="text-white-700 font-poppins text-white">ATENDI empowers customer engagement through innovative technology solutions.<br/> Our services optimize operations, enhance data insights, and create a seamless <br/>customer experience, helping businesses of all sizes achieve their goals with ease</p>
      <button className="font-poppins text-white bg-orange rounded-sm">Book Consultation</button>
    </div>
  </div>
</div>
  )

export default Hero