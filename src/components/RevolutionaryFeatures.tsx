export default function RevolutionaryFeatures() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Revolutionary Features
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              A complete ecosystem for proactive oral healthcare, built on advanced technology and data science.
            </p>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-900">Smart Monitoring</h3>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-900">Personal Guidance</h3>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-900">Care & Security</h3>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-8 bg-white p-8 lg:p-12 rounded-xl shadow-sm">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <span className="text-blue-500 text-3xl">🧠</span>
                  <h4 className="font-bold text-lg text-gray-900">Smart Monitoring</h4>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2">
                    <span className="text-blue-500 text-base">✓</span>
                    AI-Powered Analysis
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-500 text-base">✓</span>
                    Vital Signs Monitoring
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-500 text-base">✓</span>
                    Plaque & Gum Health
                  </li>
                </ul>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <span className="text-blue-500 text-3xl">💡</span>
                  <h4 className="font-bold text-lg text-gray-900">Personal Guidance</h4>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2">
                    <span className="text-blue-500 text-base">✓</span>
                    Smart Insights & Tips
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-500 text-base">✓</span>
                    AI Health Assistant
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-500 text-base">✓</span>
                    Progress Tracking
                  </li>
                </ul>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <span className="text-blue-500 text-3xl">🛡️</span>
                  <h4 className="font-bold text-lg text-gray-900">Care & Security</h4>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2">
                    <span className="text-blue-500 text-base">✓</span>
                    Smart Appointments
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-500 text-base">✓</span>
                    Secure & Private Data
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-500 text-base">✓</span>
                    Doctor Connect Portal
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}