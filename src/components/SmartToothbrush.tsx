import { Bluetooth, Wifi, Battery, Smartphone } from 'lucide-react'

export default function SmartToothbrush() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="rounded-3xl p-16 flex items-center justify-center">
              <img src="/images/mt.png" alt="Smart Toothbrush" className="max-w-full max-h-96 object-contain rounded-3xl" />
            </div>
          </div>
          
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet your new smart toothbrush.
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Elegantly designed and packed with technology to guide you to a perfect clean, every time.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Bluetooth className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Bluetooth 5.0</h4>
                  <p className="text-sm text-gray-600">Seamless Sync</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Wifi className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">WiFi Enabled</h4>
                  <p className="text-sm text-gray-600">Direct Updates</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Battery className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">30-Day Battery</h4>
                  <p className="text-sm text-gray-600">Long-lasting</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Smartphone className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">App Control</h4>
                  <p className="text-sm text-gray-600">iOS & Android</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Real-time Plaque Detection</h4>
                <p className="text-gray-600">AI sensors <span className="text-blue-600 underline">identify and map plaque buildup</span> as you brush.</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Gum Health Monitoring</h4>
                <p className="text-gray-600">Advanced pressure sensors protect and monitor gum health.</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Vital Signs Tracking</h4>
                <p className="text-gray-600">Monitor heart rate and other <span className="text-blue-600 underline">health metrics</span> during brushing.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}