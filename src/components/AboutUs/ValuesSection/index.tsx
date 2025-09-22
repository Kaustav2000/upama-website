import { values } from "../../../utils/const";

const ValuesSection = () => {
  return (
    <section
      className="py-20 w-full"
      style={{ backgroundColor: "var(--light)" }}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: "var(--dark)" }}
          >
            Our Values
          </h2>
          <p
            className="text-xl max-w-3xl mx-auto"
            style={{ color: "var(--gray-dark)" }}
          >
            The principles that guide everything we do
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: "var(--light)" }}
              >
                <span className="text-2xl">{value.icon}</span>
              </div>
              <h3
                className="text-xl font-semibold mb-3"
                style={{ color: "var(--dark)" }}
              >
                {value.title}
              </h3>
              <p style={{ color: "var(--gray-dark)" }}>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
