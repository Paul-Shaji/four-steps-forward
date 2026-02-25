import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "FinTrack ERP",
    description: "A comprehensive enterprise resource planning system for a leading finance company.",
    tags: ["React", "Node.js", "PostgreSQL"],
    color: "from-primary to-accent",
  },
  {
    title: "HealthHub",
    description: "Healthcare management platform connecting patients with providers seamlessly.",
    tags: ["React Native", "Firebase", "TypeScript"],
    color: "from-accent to-primary",
  },
  {
    title: "EcoStore",
    description: "Modern e-commerce platform with AI-powered recommendations and analytics.",
    tags: ["Next.js", "Stripe", "Tailwind"],
    color: "from-primary to-primary",
  },
  {
    title: "TaskFlow",
    description: "Project management tool for agile teams with real-time collaboration features.",
    tags: ["Vue.js", "GraphQL", "MongoDB"],
    color: "from-accent to-accent",
  },
];

const WorksSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="work" className="py-24 lg:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Portfolio</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            Our Work
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="group glass-card overflow-hidden hover:shadow-glow transition-all duration-300"
            >
              {/* Color band */}
              <div className={`h-48 bg-gradient-to-br ${project.color} opacity-80 relative overflow-hidden`}>
                <div className="absolute inset-0 bg-foreground/5 group-hover:bg-foreground/0 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-card/90 backdrop-blur-sm text-foreground font-medium text-sm px-5 py-2.5 rounded-lg flex items-center gap-2 cursor-pointer">
                    View Project <ExternalLink size={14} />
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-display font-semibold text-foreground text-lg mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorksSection;
