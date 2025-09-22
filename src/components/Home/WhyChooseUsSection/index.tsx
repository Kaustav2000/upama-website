const WhyChooseUsSection = () => {
  return (
    <section
      className="py-20 w-full"
      style={{ backgroundColor: "var(--primary-dark)" }}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: "var(--white)" }}
          >
            Why Choose Finnacle Advisors?
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ backgroundColor: "var(--light)" }}
            >
              <span className="text-2xl">🎯</span>
            </div>
            <h3
              className="text-xl font-semibold mb-2"
              style={{ color: "var(--white)" }}
            >
              Expertise
            </h3>
            <p style={{ color: "var(--white)" }}>
              Deep industry knowledge and proven track record in financial
              advisory
            </p>
          </div>
          <div className="text-center">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ backgroundColor: "var(--light)" }}
            >
              <span className="text-2xl">⚡</span>
            </div>
            <h3
              className="text-xl font-semibold mb-2"
              style={{ color: "var(--white)" }}
            >
              Efficiency
            </h3>
            <p style={{ color: "var(--white)" }}>
              Streamlined processes and quick turnaround times for all services
            </p>
          </div>
          <div className="text-center">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ backgroundColor: "var(--light)" }}
            >
              <span className="text-2xl">🤝</span>
            </div>
            <h3
              className="text-xl font-semibold mb-2"
              style={{ color: "var(--white)" }}
            >
              Partnership
            </h3>
            <p style={{ color: "var(--white)" }}>
              Long-term relationships built on trust and mutual success
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
