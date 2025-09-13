const CTASection = () => {
  return (
    <section className="py-20 bg-blue-900 text-white w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-xl mb-8 text-blue-100">
          Contact us today to discuss your financial advisory needs
        </p>
        <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white group border-2 border-blue-500/50 px-10 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 hover:border-blue-400/70 transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-xl">
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default CTASection;
