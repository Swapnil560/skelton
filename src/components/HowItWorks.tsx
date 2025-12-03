export default function HowItWorks() {
  return (
    <section className="py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img 
              src="/images/gdw.png" 
              alt="How GentleDental.ai works" 
              className="w-full h-auto rounded-lg"
            />
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              How GentleDental.ai works
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Just brush your teeth, and we handle the rest, turning data into better health.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Brush Your Teeth</h3>
                  <p className="text-gray-600">Advanced sensors in the toothbrush track coverage, pressure, and duration in real-time.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Sync with the App</h3>
                  <p className="text-gray-600">Data syncs instantly and wirelessly to the GentleDental.ai app on your smartphone.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">AI Analyzes Data</h3>
                  <p className="text-gray-600">Our algorithms process your brushing data, identify trends, and generate personalized scores.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">4</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Share with Your Dentist</h3>
                  <p className="text-gray-600">Easily share detailed reports with your dental professional for more informed appointments.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}