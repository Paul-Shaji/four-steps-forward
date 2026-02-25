import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Server, Globe, Smartphone } from "lucide-react";

const services = [
  {
    icon: Server,
    title: "ERP Development",
    description:
      "Custom ERP systems, business automation, and scalable enterprise solutions tailored to streamline your operations.",
  },
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Modern, high-performance, SEO-friendly websites that captivate users and drive conversions.",
  },
  {
    icon: Smartphone,
    title: "App Development",
    description:
      "Cross-platform mobile and web applications built with cutting-edge technologies for seamless user experiences.",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 lg:py-32 hero-gradient" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Our expertise</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3">
            What We Do
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              className="group glass-card p-8 hero-gradient hover:shadow-glow hover:scale-[1.02] transition-all duration-300 cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="text-primary-foreground" size={22} />
              </div>
              <h3 className="font-display font-semibold text-white  text-xl mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
