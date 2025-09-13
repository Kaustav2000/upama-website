const AboutUs = () => {
  const values = [
    {
      title: "Integrity",
      description:
        "We maintain the highest ethical standards in all our advisory relationships",
      icon: "🏛️",
    },
    {
      title: "Excellence",
      description:
        "We deliver superior results through deep expertise and attention to detail",
      icon: "⭐",
    },
    {
      title: "Innovation",
      description:
        "We leverage cutting-edge approaches to solve complex financial challenges",
      icon: "💡",
    },
    {
      title: "Partnership",
      description:
        "We build long-term relationships based on trust and mutual success",
      icon: "🤝",
    },
  ];

  return (
    <div className="min-h-screen w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white w-full overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-indigo-500/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-2000"></div>

        <div className="relative w-full px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-8 border border-white/20">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              About Our Company
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent leading-tight font-['Playfair_Display']">
              About Upama Financial
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Your trusted partner in financial advisory and fundraising. We
              combine decades of experience with innovative solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50 w-full relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22%23f3f4f6%22%20fill-opacity%3D%220.5%22%3E%3Cpath%20d%3D%22M20%2020c0-11.046-8.954-20-20-20v20h20z%22/%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>

        <div className="relative w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                Our Story
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 font-['Playfair_Display']">
                Our Story
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  Founded with a vision to democratize access to sophisticated
                  financial advisory services, Upama Financial has grown into a
                  leading boutique advisory firm specializing in fundraising and
                  strategic financial guidance.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our team combines decades of experience from top-tier
                  investment banks, private equity firms, and venture capital
                  funds to deliver unparalleled expertise to our clients across
                  all stages of their growth journey.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We pride ourselves on our client-first approach, ensuring that
                  every engagement is tailored to meet the unique needs and
                  objectives of each organization we serve.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-10 rounded-2xl border border-blue-100 shadow-xl">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 font-['Playfair_Display']">
                Our Expertise
              </h3>
              <div className="space-y-6">
                <div className="flex items-center group">
                  <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mr-4 group-hover:scale-125 transition-transform"></div>
                  <span className="text-gray-700 font-medium text-lg group-hover:text-blue-600 transition-colors">
                    Fundraising across all stages
                  </span>
                </div>
                <div className="flex items-center group">
                  <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mr-4 group-hover:scale-125 transition-transform"></div>
                  <span className="text-gray-700 font-medium text-lg group-hover:text-blue-600 transition-colors">
                    M&A advisory and execution
                  </span>
                </div>
                <div className="flex items-center group">
                  <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mr-4 group-hover:scale-125 transition-transform"></div>
                  <span className="text-gray-700 font-medium text-lg group-hover:text-blue-600 transition-colors">
                    Strategic financial planning
                  </span>
                </div>
                <div className="flex items-center group">
                  <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mr-4 group-hover:scale-125 transition-transform"></div>
                  <span className="text-gray-700 font-medium text-lg group-hover:text-blue-600 transition-colors">
                    Capital structure optimization
                  </span>
                </div>
                <div className="flex items-center group">
                  <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mr-4 group-hover:scale-125 transition-transform"></div>
                  <span className="text-gray-700 font-medium text-lg group-hover:text-blue-600 transition-colors">
                    Market analysis and valuation
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50 w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{value.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-900 text-white w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl text-blue-100">
              Numbers that speak to our success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Transactions Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">$2B+</div>
              <div className="text-blue-100">Capital Raised</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">95%</div>
              <div className="text-blue-100">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gray-50 w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Let's discuss how we can help you achieve your financial goals and
            growth objectives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors">
              Schedule a Consultation
            </button>
            <button className="bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors">
              Download Our Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
