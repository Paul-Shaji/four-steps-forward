import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Briefcase, Users, Clock, UsersRound } from "lucide-react";

const milestones = [
  { icon: Briefcase, value: 50, suffix: "+", label: "Projects Completed" },
  { icon: Users, value: 40, suffix: "+", label: "Happy Clients" },
  { icon: Clock, value: 5, suffix: "+", label: "Years of Experience" },
  { icon: UsersRound, value: 15, suffix: "+", label: "Team Members" },
];

const Counter = ({ target, inView }: { target: number; inView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span>{count}</span>;
};

const MilestonesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="milestones" className="py-24 lg:py-32 hero-gradient" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Achievements</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-hero-foreground mt-3">
            Our Milestones
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {milestones.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="text-center"
            >
              <div className="w-14 h-14 rounded-xl gradient-bg-subtle flex items-center justify-center mx-auto mb-4">
                <item.icon className="text-primary" size={24} />
              </div>
              <div className="font-display text-4xl lg:text-5xl font-bold text-hero-foreground mb-1">
                <Counter target={item.value} inView={inView} />
                {item.suffix}
              </div>
              <p className="text-hero-muted text-sm">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MilestonesSection;
