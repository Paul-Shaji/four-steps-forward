import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Lightbulb, Rocket } from "lucide-react";

const MissionSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const items = [
    { icon: Target, title: "Focused", text: "Laser-targeted solutions for real business challenges." },
    { icon: Lightbulb, title: "Innovative", text: "Cutting-edge tech with creative problem solving." },
    { icon: Rocket, title: "Scalable", text: "Built to grow with your ambition." },
  ];

  return (
    <section id="mission" className="py-24 lg:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Who we are</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
            Our Mission
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We believe in the power of technology to transform businesses. Our mission is to deliver
            innovative, scalable, and high-quality digital solutions that empower organizations to
            thrive in an ever-evolving digital landscape.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              className="text-center"
            >
              <div className="w-14 h-14 rounded-xl gradient-bg-subtle flex items-center justify-center mx-auto mb-4">
                <item.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-display font-semibold text-foreground text-lg mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
