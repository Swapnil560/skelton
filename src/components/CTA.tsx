export default function CTA() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-t from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-xl shadow-lg p-12 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Ready to Transform Your Oral Health?
          </h2>
          <p className="text-lg text-gray-600 mt-4 mb-8">
            Join thousands of users who have already upgraded to AI-powered dental care.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-blue-500 text-white font-semibold py-3 px-6 rounded-full hover:bg-blue-600 transition-colors">
              Get started free
            </button>
            <button className="font-semibold text-blue-500 hover:text-blue-600 transition-colors">
              See how it works
            </button>
          </div>
          
          <p className="text-xs text-gray-500 mt-6 flex items-center justify-center gap-2">
            <span className="text-sm">🔒</span>
            Your privacy is protected. No credit card required.
          </p>
        </div>
      </div>
    </section>
  )
}