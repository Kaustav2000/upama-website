const StatsSection = () => {
  return (
    <section
      className="py-20 text-white w-full"
      style={{ backgroundColor: "var(--primary-dark)" }}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
          <p className="text-xl" style={{ color: "var(--light)" }}>
            Numbers that speak to our success
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
            <div style={{ color: "var(--light)" }}>Transactions Completed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold mb-2">$2B+</div>
            <div style={{ color: "var(--light)" }}>Capital Raised</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
            <div style={{ color: "var(--light)" }}>Countries Served</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold mb-2">95%</div>
            <div style={{ color: "var(--light)" }}>Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
