import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Briefcase } from 'lucide-react';

const highlights = [
  {
    icon: GraduationCap,
    title: 'Education',
    description: "Bachelor's Degree in Economics from Jiwaji University",
  },
  {
    icon: Briefcase,
    title: 'Experience',
    description: 'Hands-on project & internship experience across FMCG, Real Estate, Retail & Finance',
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding bg-secondary" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
            About Me
          </span>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
           Data is the key to smarter decisions — let’s unlock its potential together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative mb-4 md:mb-6">
              <h3 className="font-display text-xl md:text-2xl lg:text-3xl font-bold text-foreground">
                My Story
              </h3>
              <div className="mt-2 w-16 h-1 bg-gradient-to-r from-accent to-primary rounded-full" />
            </div>
            
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-3">
              Being an economics student and a business enthusiast, I’ve always been curious about how organizations function behind the scenes. That curiosity led me to Excel, where I learned pivot tables, lookups, charts, and even macros and VBA.
            </p>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              As my interest grew, I began using Power BI and Tableau to present insights visually and break complex business questions into simple, actionable answers. To strengthen my foundation, I pursued a diploma in Data Science, building skills in statistics and machine learning.
         </p>
         <br />
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              This curiosity-driven journey led me to pursue a career in data and business analytics. </p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="mt-8"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all"
              >
                Let's work together
                <span className="text-xl">→</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl lg:max-w-none"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="card-elevated p-6 rounded-xl group hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <h4 className="font-display text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
