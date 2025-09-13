const CompanyOverview = () => {
  return (
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 ">
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
                Our team combines decades of experience from top-tier investment
                banks, private equity firms, and venture capital funds to
                deliver unparalleled expertise to our clients across all stages
                of their growth journey.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We pride ourselves on our client-first approach, ensuring that
                every engagement is tailored to meet the unique needs and
                objectives of each organization we serve.
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-10 rounded-2xl border border-blue-100 shadow-xl">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 ">
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
  );
};

export default CompanyOverview;
