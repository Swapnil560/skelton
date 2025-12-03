export default function Stats() {
  return (
    <section className="py-20 lg:py-28 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-2">
            <p className="text-sm font-semibold text-blue-500 mb-2">Why GentleDental</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Most people guess about their oral health between dentist visits.
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Traditional brushing leaves you in the dark, hoping you're doing enough. GentleDental changes that. Our smart toothbrush and AI platform provide real-time feedback and data-driven insights. Now, you can take control of your oral hygiene with the same precision as a dental professional.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 text-center lg:text-left">
            <div>
              <p className="text-4xl lg:text-5xl font-bold text-blue-500">10M+</p>
              <p className="text-sm text-gray-600 mt-1">Brushing sessions analyzed</p>
            </div>
            <div>
              <p className="text-4xl lg:text-5xl font-bold text-blue-500">32%</p>
              <p className="text-sm text-gray-600 mt-1">Average improved plaque score</p>
            </div>
            <div>
              <p className="text-4xl lg:text-5xl font-bold text-blue-500">1,200+</p>
              <p className="text-sm text-gray-600 mt-1">Clinics and professionals onboard</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}