const CTASection = () => {
  return (
    <section
      className="py-20 text-white w-full"
      style={{ backgroundColor: "var(--primary-dark)" }}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-xl mb-8" style={{ color: "var(--light)" }}>
          Contact us today to discuss your financial advisory needs
        </p>
        <button
          className="text-white group border-2 px-10 py-4 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-xl"
          style={{
            background: `linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)`,
            borderColor: "var(--primary-light)",
          }}
        >
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default CTASection;
