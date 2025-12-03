export default function Audience() {
  return (
    <section className="py-20 lg:py-28 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl border border-gray-200">
            <div className="w-40 h-40 bg-orange-100 rounded-lg mb-6 flex items-center justify-center">
              <img src="/images/pf.png" alt="For Patients & Families" className="w-full h-full object-cover rounded-lg" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">For Patients & Families</h3>
            <p className="text-gray-600 mb-4">
              Take control of your family's oral health with tools that make brushing effective and engaging.
            </p>
            <ul className="space-y-2 text-sm mb-6">
              <li className="flex gap-2">
                <span className="text-green-500 text-base">✓</span>
                Improve your brushing technique.
              </li>
              <li className="flex gap-2">
                <span className="text-green-500 text-base">✓</span>
                Track progress between dental visits.
              </li>
              <li className="flex gap-2">
                <span className="text-green-500 text-base">✓</span>
                Make oral hygiene a fun family activity.
              </li>
            </ul>
            <a className="font-semibold text-blue-500 hover:underline" href="#">
              Learn more for patients →
            </a>
          </div>
          
          <div className="bg-white p-8 rounded-xl border border-gray-200">
            <div className="w-40 h-40 bg-teal-100 rounded-lg mb-6 flex items-center justify-center">
              <img src="/images/dc.png" alt="For Dentists & Clinics" className="w-full h-full object-cover rounded-lg" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">For Dentists & Clinics</h3>
            <p className="text-gray-600 mb-4">
              Access powerful, data-driven insights into your patients' at-home care to elevate your practice.
            </p>
            <ul className="space-y-2 text-sm mb-6">
              <li className="flex gap-2">
                <span className="text-green-500 text-base">✓</span>
                View objective patient brushing data.
              </li>
              <li className="flex gap-2">
                <span className="text-green-500 text-base">✓</span>
                Provide more personalized care.
              </li>
              <li className="flex gap-2">
                <span className="text-green-500 text-base">✓</span>
                Improve patient outcomes and retention.
              </li>
            </ul>
            <a className="font-semibold text-blue-500 hover:underline" href="#">
              Explore the professional portal →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}