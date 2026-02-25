import { Linkedin, Twitter, Github } from "lucide-react";

const Footer = () => {
  const links = [
    { label: "Mission", href: "#mission" },
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "Team", href: "#team" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="hero-gradient border-t border-border/10 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <a href="#" className="font-display text-xl font-bold gradient-text">
              4 Steps
            </a>
            <p className="text-hero-muted text-sm mt-2">
              Transforming businesses, one step at a time.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-hero-muted hover:text-hero-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex gap-3">
            {[Linkedin, Twitter, Github].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 rounded-lg bg-hero-foreground/5 flex items-center justify-center text-hero-muted hover:text-primary transition-colors"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-hero-foreground/10 mt-8 pt-8 text-center">
          <p className="text-hero-muted text-xs">
            © {new Date().getFullYear()} 4 Steps. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
