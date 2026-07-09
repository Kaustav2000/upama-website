import { advisoryServices } from "../../../../utils/const";

const FinancialAdvisoryServices = () => {
  return (
    <div>
      <h3
        className="text-3xl font-bold mb-12 text-center"
        style={{ color: "var(--dark)" }}
      >
        M&A Services
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {advisoryServices.map((service, index) => (
          <div
            key={index}
            className="group p-10 rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2"
            style={{
              backgroundColor: "var(--white)",
              borderColor: "var(--secondary)",
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          >
            <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
              {service.icon}
            </div>
            <h4
              className="text-2xl font-bold mb-4 transition-colors"
              style={{ color: "var(--dark)" }}
            >
              {service.title}
            </h4>
            <p
              className="leading-relaxed text-lg"
              style={{ color: "var(--gray-dark)" }}
            >
              {service.description}
            </p>
            <div
              className="mt-6 flex items-center font-semibold group-hover:translate-x-2 transition-transform"
              style={{ color: "var(--primary)" }}
            >
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
