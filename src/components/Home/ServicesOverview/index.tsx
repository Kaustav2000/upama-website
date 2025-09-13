import FinancialAdvisoryServices from "./FinancialAdvisoryServices";
import FundraisingServices from "./FundraisingServices";

const ServicesOverview = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 w-full relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22%23f3f4f6%22%20fill-opacity%3D%220.5%22%3E%3Cpath%20d%3D%22M20%2020c0-11.046-8.954-20-20-20v20h20z%22/%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>

      <div className="relative w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
            <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
            Our Expertise
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We provide comprehensive financial advisory services across
            fundraising and strategic advisory domains with proven expertise
          </p>
        </div>

        {/* Fundraising Services */}
        <FundraisingServices />
        {/* Financial Advisory Services */}
        <FinancialAdvisoryServices />
      </div>
    </section>
  );
};

export default ServicesOverview;
