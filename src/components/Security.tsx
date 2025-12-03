import { Shield, Lock, Link, Building } from 'lucide-react'

export default function Security() {
  return (
    <section className="py-20 lg:py-28 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto lg:mx-0">
              <Shield className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Secure & Private by Design
            </h2>
            <p className="text-lg text-gray-600">
              We believe your health data is yours alone. Our platform is built with industry-leading security and privacy protocols to ensure your information is always protected and under your control.
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="flex gap-4 p-4 bg-white rounded-lg shadow-sm">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <Lock className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">End-to-End Encrypted Data</h4>
                <p className="text-sm text-gray-600">Your data is encrypted both in transit and at rest.</p>
              </div>
            </div>
            
            <div className="flex gap-4 p-4 bg-white rounded-lg shadow-sm">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <Link className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">You Control Sharing</h4>
                <p className="text-sm text-gray-600">Share data with your dentist only when you choose to.</p>
              </div>
            </div>
            
            <div className="flex gap-4 p-4 bg-white rounded-lg shadow-sm">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <Building className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Enterprise-Level Security</h4>
                <p className="text-sm text-gray-600">We use bank-grade infrastructure to protect our systems.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}