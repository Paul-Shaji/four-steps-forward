import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin } from "lucide-react";

const team = [
  {
    name: "Sivasankar M",
    role: "CEO & Founder",
    linkedin: "https://www.linkedin.com/in/sivasankar22",
    initials: "AM",
    intro: "Visionary leader with 2+ years in tech startups.",
    techStack: "Strategy, Product, Leadership",
    education: "MBA, Stanford University",
  },
  {
    name: "Paul Shaji",
    role: "CTO",
    linkedin: "https://www.linkedin.com/in/paul-shaji/",
    initials: "SC",
    intro: "Architecting scalable systems that power millions.",
    techStack: "Go, Kubernetes, AWS, Terraform",
    education: "MS Computer Science, MIT",
  },
  {
    name: "Able Shibu",
    role: "Lead Developer",
    linkedin: "https://www.linkedin.com/in/abel-shibu-b91072236",
    initials: "JW",
    intro: "Full-stack craftsman obsessed with clean code.",
    techStack: "React, TypeScript, Node.js, PostgreSQL",
    education: "BS Software Engineering, Georgia Tech",
  },
  {
    name: "Kg Vishnu",
    role: "UI/UX Designer",
    linkedin: "https://www.linkedin.com/in/vishnu-kg-a53a40238/",
    initials: "PS",
    intro: "Designing intuitive experiences users love.",
    techStack: "Figma, Framer, Tailwind, CSS",
    education: "BFA Interaction Design, RISD",
  },
];

const TeamSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="team" className="py-24 lg:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Our people</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            Meet Our Team
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="group glass-card p-6 text-center hover:shadow-glow hover:scale-[1.02] transition-all duration-300"
            >
              <div className="w-20 h-20 rounded-full gradient-bg flex items-center justify-center mx-auto mb-4 text-primary-foreground font-display font-bold text-xl group-hover:scale-110 transition-transform duration-300">
                {member.initials}
              </div>
              <h3 className="font-display font-semibold text-foreground text-lg">
                {member.name}
              </h3>
              <p className="text-muted-foreground text-sm mb-2">{member.role}</p>
              <p className="text-foreground/80 text-xs italic mb-3">{member.intro}</p>
              <div className="text-left space-y-1 mb-3">
                <p className="text-muted-foreground text-xs"><span className="font-semibold text-foreground/70">Tech:</span> {member.techStack}</p>
                <p className="text-muted-foreground text-xs"><span className="font-semibold text-foreground/70">Edu:</span> {member.education}</p>
              </div>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin size={18} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
