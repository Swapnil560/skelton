

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Trusted by Thousands</h2>
          <p className="text-lg mt-2 text-gray-600 max-w-2xl mx-auto">
            See what our users and dental professionals are saying.
          </p>
        </div>
        
        <div className="flex justify-center items-center gap-12 mb-12 opacity-50 grayscale flex-wrap">
          <div className="h-6 w-16 bg-gray-300 rounded"></div>
          <div className="h-6 w-16 bg-gray-300 rounded"></div>
          <div className="h-6 w-16 bg-gray-300 rounded"></div>
          <div className="h-6 w-16 bg-gray-300 rounded"></div>
          <div className="h-6 w-16 bg-gray-300 rounded"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full mr-4 overflow-hidden">
                <img src="/images/SC.png" alt="Dr. Sarah Chen" className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Dr. Sarah Chen</h4>
                <p className="text-sm text-gray-600">Dental Hygienist</p>
              </div>
            </div>
            <div className="flex text-yellow-400 mb-2">★★★★★</div>
            <p className="text-gray-600">
              "GentleDental.ai has revolutionized how I monitor my patients' oral health between visits."
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full mr-4 overflow-hidden">
                <img src="/images/MJ.png" alt="Mike Johnson" className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Mike Johnson</h4>
                <p className="text-sm text-gray-600">Beta User</p>
              </div>
            </div>
            <div className="flex text-yellow-400 mb-2">★★★★★</div>
            <p className="text-gray-600">
              "The AI insights helped me catch early gum disease. This toothbrush literally saved my smile!"
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full mr-4 overflow-hidden">
                <img src="/images/LP.png" alt="Lisa Park" className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Lisa Park</h4>
                <p className="text-sm text-gray-600">Health Enthusiast</p>
              </div>
            </div>
            <div className="flex text-yellow-400 mb-2">★★★★★</div>
            <p className="text-gray-600">
              "I love how it tracks my vital signs while I brush. It's like having a health checkup twice daily."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}