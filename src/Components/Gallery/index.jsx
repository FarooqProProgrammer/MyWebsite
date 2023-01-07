import React from 'react'

function Gallery() {
  return (
    <div>
        <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Social Work of Sylani</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Social work is a profession that focuses on helping individuals, families, and communities to improve their well-being and achieve their goals. It involves the application of social science knowledge and principles to the assessment, diagnosis, and treatment of social problems, as well as the promotion of social justice and social change.</p>
    </div>
    <div class="flex flex-wrap -m-4">
      <div class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="flex relative">
          <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="data:image/jpeg;base64,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"/>
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Education</h1>
            <p class="leading-relaxed">Education is a basic Need and many people did not get this need</p>
          </div>
        </div>
      </div>
      <div class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="flex relative">
          <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/601x361"/>
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1>
            <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="flex relative">
          <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/603x363"/>
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">The 400 Blows</h1>
            <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="flex relative">
          <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/602x362"/>
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Neptune</h1>
            <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="flex relative">
          <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/605x365"/>
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Holden Caulfield</h1>
            <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="flex relative">
          <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/606x366"/>
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Alper Kamu</h1>
            <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Gallery