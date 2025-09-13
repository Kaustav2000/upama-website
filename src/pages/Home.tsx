import { Link } from "react-router-dom";

const HomePage = () => {
  const fundraisingServices = [
    {
      title: "Venture Capital (VC)",
      description:
        "Strategic investment in early-stage companies with high growth potential",
      icon: "🚀",
    },
    {
      title: "Private Equity (PE)",
      description:
        "Investment in mature companies to drive operational improvements and growth",
      icon: "💼",
    },
    {
      title: "Pre-IPO Advisory",
      description:
        "Preparation and guidance for companies planning to go public",
      icon: "📈",
    },
    {
      title: "IPO Services",
      description:
        "Complete support for Initial Public Offering process and execution",
      icon: "🏛️",
    },
    // {
    //   title: "Sell Side Advisory",
    //   description:
    //     "Strategic guidance for companies looking to sell or divest assets",
    //   icon: "💰",
    // },
  ];

  const advisoryServices = [
    // {
    //   title: "M&A Advisory",
    //   description: "Comprehensive merger and acquisition advisory services",
    //   icon: "🤝",
    // },
    {
      title: "Sell Side Advisory",
      description:
        "Strategic guidance for companies looking to sell or divest assets",
      icon: "💰",
    },
    {
      title: "Buy Side Advisory",
      description:
        "Strategic guidance for companies seeking acquisition opportunities",
      icon: "🎯",
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
              Trusted by 500+ Companies Worldwide
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent leading-tight">
              Expert Financial Advisory Services
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Strategic guidance for fundraising and financial advisory needs.
              We help businesses navigate complex financial landscapes with
              confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25">
                <span className="flex items-center">
                  Get Started
                  <svg
                    className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
              </button>
              <Link to="/about">
                <button className="group border-2 border-white/30 text-white px-10 py-4 rounded-xl font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm">
                  <span className="flex items-center">
                    Learn More
                    <svg
                      className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50 w-full relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22%23f3f4f6%22%20fill-opacity%3D%220.5%22%3E%3Cpath%20d%3D%22M20%2020c0-11.046-8.954-20-20-20v20h20z%22/%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>

        <div className="relative w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
              Our Expertise
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 font-['Playfair_Display']">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We provide comprehensive financial advisory services across
              fundraising and strategic advisory domains with proven expertise
            </p>
          </div>

          {/* Fundraising Services */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center font-['Playfair_Display']">
              Fundraising Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {fundraisingServices.map((service, index) => (
                <div
                  key={index}
                  className="group bg-white p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-blue-200"
                >
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-6 flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform">
                    Learn More
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Financial Advisory Services */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center font-['Playfair_Display']">
              MKA Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {advisoryServices.map((service, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-blue-50 to-indigo-50 p-10 rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100 hover:border-blue-300"
                >
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {service.description}
                  </p>
                  <div className="mt-6 flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform">
                    Learn More
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50 w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Upama Financial?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Expertise
              </h3>
              <p className="text-gray-600">
                Deep industry knowledge and proven track record in financial
                advisory
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Efficiency
              </h3>
              <p className="text-gray-600">
                Streamlined processes and quick turnaround times for all
                services
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Partnership
              </h3>
              <p className="text-gray-600">
                Long-term relationships built on trust and mutual success
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Contact us today to discuss your financial advisory needs
          </p>
          <button className="bg-blue-900  px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
