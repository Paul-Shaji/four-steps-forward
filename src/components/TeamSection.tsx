import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin } from "lucide-react";
import abel from "../assets/abel.jpeg";
import paul from "../assets/paul.jpeg";
import vishnu from "../assets/vishnu_kg.jpeg";
import siva from "../assets/sivasankar.jpeg";
import amal from "../assets/amal.jpg"

const team = [
  {
    name: "Sivasankar M",
    role: "CEO & co-founder",
    linkedin: "https://www.linkedin.com/in/sivasankar22",
    initials: "AM",
    image: siva,
    intro: "Visionary leader with 2+ years in tech startups.",
    techStack: "Strategy, Product, Leadership,ErpNEXT,React,",
    education: "BTech in Computer Science",
  },
  {
    name: "Paul Shaji",
    role: "CTO & co-founder",
    image: paul,
    linkedin: "https://www.linkedin.com/in/paul-shaji/",
    initials: "",
    intro: "Architecting scalable systems that power millions.",
    techStack: "React,Node,Frappe, Kubernetes, AWS,Docker",
    education: "BTech in Computer Science",
  },
  {
    name: "Abel Shibu",
    role: "Lead Developer",
    linkedin: "https://www.linkedin.com/in/abel-shibu-b91072236",
    initials: "JW",
    image: abel,
    intro: "Full-stack craftsman obsessed with clean code.",
    techStack: "React, TypeScript, PostgreSQL",
    education: "BTech in Computer Science",
  },
  {
    name: "Kg Vishnu",
    role: "UI/UX Designer",
    linkedin: "https://www.linkedin.com/in/vishnu-kg-a53a40238/",
    initials: "PS",
    image: vishnu,
    intro: "Designing intuitive experiences users love.",
    techStack: "Figma, Framer, Tailwind, CSS",
    education: "BTech in Computer Science",
  },
  {
    name: "Amal Francis Saji",
    role: "Full Stack Developer",
    linkedin: "https://www.linkedin.com/in/amal-francis-saji-821a9628b/",
    initials: "PS",
    image: amal,
    intro: "Full-Stack Enthusiast with 2+ year experience.",
    techStack: "Django,Python,AI,Cyber Security,Flask,JavaScript",
    education: "Master's in Computer Applications",
  },
];

const css = `
  @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500&display=swap');

  .tm-mono { font-family: 'JetBrains Mono', monospace; }

  .tm-eyebrow-line {
    height: 1px;
    background: hsl(var(--border));
  }


  .tm-card {
    position: relative;
    background: hsl(var(--card) / 0.7);
    backdrop-filter: blur(8px);
    border: 1px solid hsl(var(--border) / 0.5);
    padding: 28px;
    overflow: hidden;
    transition: background 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
  }
  .tm-card:hover {
    background: hsl(var(--card));
    border-color: hsl(var(--primary) / 0.3);
    box-shadow: 0 0 32px hsl(var(--primary) / 0.08);
  }

  /* Gradient top bar slides in on hover */
  .tm-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 2px;
    background: linear-gradient(90deg, hsl(var(--gradient-start)), hsl(var(--gradient-end)));
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.45s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .tm-card:hover::before { transform: scaleX(1); }

  .tm-photo {
    width: 52px;
    height: 52px;
    border-radius: 6px;
    overflow: hidden;
    border: 1px solid hsl(var(--primary) / 0.25);
    flex-shrink: 0;
    transition: box-shadow 0.3s ease, border-color 0.3s ease;
  }
  .tm-card:hover .tm-photo {
    border-color: hsl(var(--primary) / 0.5);
    box-shadow: 0 0 16px hsl(var(--primary) / 0.15);
  }

  .tm-index {
    font-family: 'JetBrains Mono', monospace;
    font-size: 9px;
    letter-spacing: 0.2em;
    color: hsl(var(--muted-foreground) / 0.4);
    margin-bottom: 18px;
  }

  .tm-role {
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: hsl(var(--primary));
  }

  .tm-divider {
    height: 1px;
    background: hsl(var(--border) / 0.6);
    margin: 18px 0;
  }

  .tm-label {
    font-family: 'JetBrains Mono', monospace;
    font-size: 8px;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    color: hsl(var(--muted-foreground) / 0.5);
    margin-bottom: 8px;
  }

  .tm-tag {
    font-family: 'JetBrains Mono', monospace;
    font-size: 9px;
    padding: 3px 9px;
    border-radius: calc(var(--radius) - 6px);
    border: 1px solid hsl(var(--primary) / 0.2);
    background: hsl(var(--primary) / 0.06);
    color: hsl(var(--primary));
    letter-spacing: 0.04em;
    transition: all 0.18s ease;
  }
  .tm-card:hover .tm-tag {
    border-color: hsl(var(--primary) / 0.35);
    background: hsl(var(--primary) / 0.1);
  }

  .tm-linkedin {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 9px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: hsl(var(--muted-foreground) / 0.45);
    text-decoration: none;
    transition: color 0.2s ease;
  }
  .tm-linkedin:hover { color: hsl(var(--primary)); }

  /* Grid separator lines */
  .tm-grid-wrapper {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1px;
    background: hsl(var(--border) / 0.4);
    border: 1px solid hsl(var(--border) / 0.4);
    border-radius: var(--radius);
    overflow: hidden;
  }

  @media (min-width: 640px) {
    .tm-grid-wrapper {
      grid-template-columns: 1fr 1fr;
    }
  }
`;

const TeamSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="team" className="py-24 lg:py-32 bg-background" ref={ref}>
      <style>{css}</style>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-5">
            <span className="h-px w-8 tm-eyebrow-line block" />
            <span className="tm-mono text-[10px] tracking-[0.35em] uppercase text-muted-foreground">
              Our People
            </span>
            <span className="h-px w-8 tm-eyebrow-line block" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground tracking-tight">
            Meet the{" "}
            <span className="gradient-text">Team</span>
          </h2>
        </motion.div>

        {/* 2×2 grid */}
        <div className="tm-grid-wrapper max-w-4xl mx-auto">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              className="tm-card group"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
            >
             

              {/* Photo + name row */}
              <div className="flex items-start gap-4 mb-5">
                <div className="tm-photo">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="pt-0.5">
                  <h3 className="font-semibold text-foreground text-base leading-tight mb-1.5">
                    {member.name}
                  </h3>
                  <p className="tm-role">{member.role}</p>
                </div>
              </div>

              {/* Intro */}
              <p className="text-sm text-muted-foreground italic leading-relaxed font-light">
                {member.intro}
              </p>

              <div className="tm-divider" />

              {/* Stack */}
              <p className="tm-label">Stack</p>
              <div className="flex flex-wrap gap-1.5 mb-5">
                {member.techStack.split(",").map((tech, j) => (
                  <span key={j} className="tm-tag">{tech.trim()}</span>
                ))}
              </div>

              {/* Education */}
              <p className="text-xs text-muted-foreground font-light mb-5">
                {member.education}
              </p>

              {/* LinkedIn */}
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="tm-linkedin"
              >
                <Linkedin size={13} />
                LinkedIn
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;