import React from 'react'

const Hero = () => {
  return (
    <div>
       <section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Donate us to support
        <br class="hidden lg:inline-block"/>flood-affected families in Pakistan
      </h1>
      <p class="mb-8 leading-relaxed">Saylani Welfare is on the ground and already working with local communities to assess how best to support affected families, who urgently need food, Ration, shelter, bedding, Medical Facility and hygiene items.</p>
      <div class="flex justify-center">
        <button class="inline-flex text-black border-2 bg-white hover:text-white py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Read More</button>
    </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover h-[400px] object-center rounded" alt="hero" src="https://res.cloudinary.com/saylani-welfare/image/upload/v1646926708/website-images/static/99.png"/>
    </div>
  </div>
</section>
    </div>
  )
}

export default Hero