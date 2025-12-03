export default function AppInAction() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">See GentleDental in Action</h2>
          <p className="text-lg mt-2 text-gray-600 max-w-2xl mx-auto">
            From live coaching to detailed reports, our app is your personal dental expert.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="group cursor-pointer">
            <div className="bg-gray-50 rounded-xl p-8 mb-4 group-hover:shadow-lg transition-shadow">
              <img src="/images/m1.png" alt="Live Brushing Session" className="mx-auto max-h-96 object-contain rounded-3xl" />
            </div>
            <p className="text-center font-medium text-gray-900">Live Brushing Session</p>
          </div>
          
          <div className="group cursor-pointer">
            <div className="bg-gray-50 rounded-xl p-8 mb-4 group-hover:shadow-lg transition-shadow">
              <img src="/images/m2.png" alt="Daily Oral Health Report" className="mx-auto max-h-96 object-contain rounded-3xl" />
            </div>
            <p className="text-center font-medium text-gray-900">Daily Oral Health Report</p>
          </div>
          
          <div className="group cursor-pointer">
            <div className="bg-gray-50 rounded-xl p-8 mb-4 group-hover:shadow-lg transition-shadow">
              <img src="/images/m3.png" alt="Dentist Report Screen" className="mx-auto max-h-96 object-contain rounded-3xl" />
            </div>
            <p className="text-center font-medium text-gray-900">Dentist Report Screen</p>
          </div>
        </div>
      </div>
    </section>
  )
}