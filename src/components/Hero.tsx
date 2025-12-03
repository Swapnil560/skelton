import { Activity, Lightbulb, Users } from 'lucide-react'

export default function Hero() {
  return (
    <section className="bg-gray-50 px-6 py-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold mb-8">
            AI Powered Dental Care
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            A smart toothbrush that turns every brush into real-time oral health monitoring.
          </h1>
          
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Experience the future of oral health with our comprehensive AI-powered platform for personalized insights and professional care.
          </p>
          
          <div className="flex flex-wrap gap-8 mb-10">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                <Activity className="w-3 h-3 text-white" />
              </div>
              <span className="text-gray-800 font-medium">AI Health Monitoring</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                <Lightbulb className="w-3 h-3 text-white" />
              </div>
              <span className="text-gray-800 font-medium">Smart Insights</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                <Users className="w-3 h-3 text-white" />
              </div>
              <span className="text-gray-800 font-medium">Doctor Connect</span>
            </div>
          </div>
          
          <div className="flex gap-4 mb-8">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600">
              Get started free
            </button>
            <button className="text-blue-500 font-semibold hover:text-blue-600">
              See how it works
            </button>
          </div>
          
          <p className="text-sm text-gray-500 mb-4">
            Backed by dental experts and AI researchers
          </p>
          
          <div className="flex gap-2">
            <div className="w-8 h-2 bg-gray-400 rounded"></div>
            <div className="w-8 h-2 bg-gray-400 rounded"></div>
            <div className="w-8 h-2 bg-gray-400 rounded"></div>
            <div className="w-8 h-2 bg-gray-400 rounded"></div>
          </div>
        </div>
        
        <div className="relative">
          <img 
            src="/images/smart toothbrush.png" 
            alt="Smart toothbrush with GentleDental.ai app" 
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  )
}