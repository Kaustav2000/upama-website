import { advisoryServices } from "../../../../utils/const";

const FinancialAdvisoryServices = () => {
  return (
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
  );
};

export default FinancialAdvisoryServices;
