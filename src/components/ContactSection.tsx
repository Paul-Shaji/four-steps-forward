import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, Send, Linkedin, Twitter, Github } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      toast.error("Please enter a valid email.");
      return;
    }
    toast.success("Message sent successfully! We'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-secondary/50" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Get in touch</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            Let's Work Together
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 space-y-6"
          >
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Name</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                placeholder="Your name"
                maxLength={100}
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                placeholder="your@email.com"
                maxLength={255}
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Message</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={4}
                className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                placeholder="Tell us about your project..."
                maxLength={1000}
              />
            </div>
            <button
              type="submit"
              className="w-full gradient-bg text-primary-foreground font-semibold py-3.5 rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2 text-sm"
            >
              Send Message <Send size={16} />
            </button>
          </motion.form>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col justify-center space-y-8"
          >
            <div>
              <h3 className="font-display font-semibold text-foreground text-xl mb-4">
                Reach Out to Us
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Ready to start your next project? We'd love to hear from you. Drop us a message
                and we'll get back to you within 24 hours.
              </p>
            </div>

            <div className="space-y-4">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="text-primary" size={20} />
                  <span className="text-sm break-all">paulshaji.dev@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="text-primary" size={20} />
                  <span className="text-sm break-all">sivasankar.ml12@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Phone className="text-primary" size={20} />
                  <span className="text-sm">+91 8078517622</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Phone className="text-primary" size={20} />
                  <span className="text-sm">+91 9567182583</span>
                </div>
            </div>

            <div className="flex gap-4">
              {[Linkedin, Twitter, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="https://www.linkedin.com/in/paul-shaji/"
                  className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
