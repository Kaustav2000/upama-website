import { fundraisingServices } from "../../../../utils/const";

const FundraisingServices = () => {
  return (
    <div className="mb-20">
      <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
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
  );
};

export default FundraisingServices;
