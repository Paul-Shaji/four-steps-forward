import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Ticket, Zap, Shield, Clock } from "lucide-react";

const project = {
  name: "Chavara Shows",
  client: "Chavara Cultural Center",
  year: "2026",
  location: "Kerala, India",
  duration: "5 Weeks",
  description:
    "A full-stack event booking platform with online ticketing, per-booking QR code generation, role-based access for admins and staff, and a browser-native QR scanner for live gate entry — no app install required.",
  stack: ["React.js", "Tailwind CSS", "Frappe Python", "MYSQL", "Razorpay", "AWS"],
  stats: [
    { icon: Clock,  value: "5",  unit: "wks",   label: "Delivered In"    },
    { icon: Shield, value: "3",  unit: "roles",  label: "Access Levels"   },
    { icon: Ticket, value: "QR", unit: "",       label: "Smart Ticketing" },
    { icon: Zap,    value: "3",  unit: "mo",     label: "Post-Launch Care"},
  ],
  phases: [
    { label: "Design & Setup",     week: "Week 1",   pct: 30 },
    { label: "Backend & Frontend", week: "Week 2",   pct: 35 },
    { label: "Features & Testing", week: "Week 3–4", pct: 25 },
    { label: "Deploy & Training",  week: "Week 5",   pct: 10 },
  ],
  features: [
    "Event creation & management by admin",
    "Online ticket booking with Razorpay",
    "QR code generation per ticket",
    "Browser-based QR scanner for staff",
    "Role-based access — Admin / Staff / User",
    "Responsive across mobile & desktop",
    "3 months post-launch support",
    "Full technical documentation & handover",
  ],
};

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=JetBrains+Mono:wght@300;400;500&display=swap');

  .cw-title {
    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(64px, 13vw, 140px);
    line-height: 0.9;
    letter-spacing: 0.02em;
    color: hsl(var(--foreground));
    position: relative;
  }

  .cw-title-ghost {
    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(64px, 13vw, 140px);
    line-height: 0.9;
    letter-spacing: 0.02em;
    color: transparent;
    -webkit-text-stroke: 1px hsl(var(--primary) / 0.18);
    user-select: none;
    position: absolute;
    top: 6px; left: 6px;
    pointer-events: none;
  }

  .cw-mono { font-family: 'JetBrains Mono', monospace; }

  .cw-eyebrow-line {
    height: 1px;
    background: linear-gradient(90deg, hsl(var(--primary) / 0.5), hsl(var(--primary) / 0.05));
  }

  .cw-stat-card {
    border: 1px solid hsl(var(--border));
    background: hsl(var(--card) / 0.6);
    backdrop-filter: blur(8px);
    padding: 20px 16px;
    text-align: center;
    border-radius: var(--radius);
    position: relative;
    overflow: hidden;
    transition: box-shadow 0.25s ease, border-color 0.25s ease, background 0.25s ease;
  }
  .cw-stat-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 2px;
    background: linear-gradient(90deg, hsl(var(--gradient-start)), hsl(var(--gradient-end)));
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s ease;
  }
  .cw-stat-card:hover {
    border-color: hsl(var(--primary) / 0.35);
    box-shadow: 0 0 24px hsl(var(--primary) / 0.1);
    background: hsl(var(--card));
  }
  .cw-stat-card:hover::before { transform: scaleX(1); }

  .cw-stat-val {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 42px;
    line-height: 1;
    color: hsl(var(--foreground));
    letter-spacing: 0.03em;
  }
  .cw-stat-unit {
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px;
    color: hsl(var(--primary));
    margin-left: 2px;
  }
  .cw-stat-lbl {
    font-family: 'JetBrains Mono', monospace;
    font-size: 8.5px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: hsl(var(--muted-foreground));
    margin-top: 4px;
  }

  .cw-section-rule {
    height: 1px;
    background: hsl(var(--border));
  }

  .cw-phase-row {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    gap: 16px;
    padding: 14px 0;
    border-bottom: 1px solid hsl(var(--border) / 0.6);
  }
  .cw-phase-track {
    height: 2px;
    background: hsl(var(--muted));
    border-radius: 2px;
    overflow: hidden;
    margin-top: 6px;
  }
  .cw-phase-fill {
    height: 100%;
    background: linear-gradient(90deg, hsl(var(--gradient-start)), hsl(var(--gradient-end)));
    border-radius: 2px;
  }

  .cw-feature-item {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    padding: 10px 0;
    border-bottom: 1px solid hsl(var(--border) / 0.5);
    font-size: 14px;
    color: hsl(var(--muted-foreground));
    font-weight: 300;
    transition: color 0.2s ease;
  }
  .cw-feature-item:hover { color: hsl(var(--foreground)); }
  .cw-feature-num {
    font-family: 'JetBrains Mono', monospace;
    font-size: 9px;
    color: hsl(var(--primary) / 0.5);
    flex-shrink: 0;
    margin-top: 3px;
  }

  .cw-stack-pill {
    font-family: 'JetBrains Mono', monospace;
    font-size: 9px;
    letter-spacing: 0.06em;
    padding: 4px 12px;
    border: 1px solid hsl(var(--primary) / 0.25);
    color: hsl(var(--primary));
    background: hsl(var(--primary) / 0.06);
    border-radius: calc(var(--radius) - 4px);
    transition: all 0.18s ease;
  }
  .cw-stack-pill:hover {
    background: hsl(var(--primary) / 0.12);
    border-color: hsl(var(--primary) / 0.5);
  }

  .cw-ticket-edge {
    position: relative;
  }
  .cw-ticket-edge::before {
    content: '';
    position: absolute;
    left: 0; right: 0; top: -1px;
    height: 1px;
    background: repeating-linear-gradient(
      90deg,
      transparent, transparent 6px,
      hsl(var(--primary) / 0.3) 6px, hsl(var(--primary) / 0.3) 12px
    );
  }
`;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, delay, ease: "easeOut" },
});

const WorksSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="work" className="py-24 lg:py-32 bg-background" ref={ref}>
      <style>{css}</style>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative">

        {/* Eyebrow */}
        <motion.div {...fadeUp(0)} className="flex items-center gap-4 mb-10">
          <span className="cw-mono text-[9px] tracking-[0.35em] uppercase text-primary">Portfolio</span>
          <div className="flex-1 cw-eyebrow-line" />
          <span className="cw-mono text-[9px] tracking-[0.2em] uppercase text-muted-foreground">{project.year}</span>
        </motion.div>

        {/* Title */}
        <motion.div {...fadeUp(0.1)} className="mb-10 relative">
          <div className="cw-title-ghost" aria-hidden="true">CHAVARA<br />SHOWS</div>
          <div className="cw-title relative">CHAVARA<br />SHOWS</div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1 mt-4">
            {[project.client, project.location, project.duration].map((item, i) => (
              <span key={i} className="flex items-center gap-5">
                {i > 0 && <span className="text-primary/30 text-xs">·</span>}
                <span className="cw-mono text-[9px] tracking-widest uppercase text-muted-foreground">{item}</span>
              </span>
            ))}
          </div>
        </motion.div>

        {/* Description + CTA */}
        <motion.div {...fadeUp(0.18)} className="grid sm:grid-cols-3 gap-8 mb-12 items-end">
          <p className="sm:col-span-2 text-sm leading-relaxed text-muted-foreground font-light">
            {project.description}
          </p>
          <div className="flex sm:justify-end">
            <a
              href="https://chavarashows.com/"
              className="gradient-bg text-primary-foreground font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity flex items-center gap-2 text-sm"
            >
              link <ArrowRight size={15} />
            </a>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div {...fadeUp(0.22)} className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-14">
          {project.stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="cw-stat-card"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.08, duration: 0.45 }}
            >
              <s.icon size={14} className="text-primary mx-auto mb-2" />
              <div className="cw-stat-val">
                {s.value}<span className="cw-stat-unit">{s.unit}</span>
              </div>
              <div className="cw-stat-lbl">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Two column: Features + Timeline */}
        <div className="grid sm:grid-cols-2 gap-12">

          {/* Features */}
          <motion.div {...fadeUp(0.28)}>
            <div className="flex items-center gap-3 mb-4">
              <span className="cw-mono text-[8px] tracking-[0.28em] uppercase text-primary/60">
                What's Included
              </span>
              <div className="flex-1 cw-section-rule" />
            </div>
            {project.features.map((f, i) => (
              <motion.div
                key={i}
                className="cw-feature-item"
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35 + i * 0.055, duration: 0.35 }}
              >
                <span className="cw-feature-num">{String(i + 1).padStart(2, "0")}</span>
                {f}
              </motion.div>
            ))}
          </motion.div>

          {/* Timeline + Stack */}
          <motion.div {...fadeUp(0.32)}>
            <div className="flex items-center gap-3 mb-4">
              <span className="cw-mono text-[8px] tracking-[0.28em] uppercase text-primary/60">
                Delivery Timeline
              </span>
              <div className="flex-1 cw-section-rule" />
            </div>

            <div className="mb-10">
              {project.phases.map((p, i) => (
                <motion.div
                  key={i}
                  className="cw-phase-row"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.38 + i * 0.07 }}
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-light text-foreground/70">{p.label}</span>
                      <span className="cw-mono text-[9px] text-muted-foreground">{p.week}</span>
                    </div>
                    <div className="cw-phase-track mt-2">
                      <motion.div
                        className="cw-phase-fill"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${p.pct * 3}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.45 + i * 0.1, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                  <span className="cw-mono text-[11px] font-medium text-primary">{p.pct}%</span>
                </motion.div>
              ))}
            </div>

            <div className="flex items-center gap-3 mb-3">
              <span className="cw-mono text-[8px] tracking-[0.28em] uppercase text-primary/60">
                Tech Stack
              </span>
              <div className="flex-1 cw-section-rule" />
            </div>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((t) => (
                <span key={t} className="cw-stack-pill">{t}</span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Footer rule */}
        <motion.div
          {...fadeUp(0.5)}
          className="cw-ticket-edge mt-16 pt-5 flex items-center justify-between"
        >
          <span className="cw-mono text-[8px] tracking-widest uppercase text-muted-foreground/60">
            Chavara Shows · Chavara Cultural Center
          </span>
          <span className="cw-mono text-[8px] text-muted-foreground/60">Kerala, India · 2026</span>
        </motion.div>

      </div>
    </section>
  );
};

export default WorksSection;