import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, Building2, Award } from 'lucide-react';

interface Experience {
  role: string;
  company: string;
  type: string;
  duration: string;
  responsibilities: string[];
  tools: string[];
  certificate?: string;
}

const experienceData: Experience[] = [
  {
    role: 'Data Analyst',
    company: 'Independent Projects',
    type: 'Projects',
    duration: 'Ongoing',
    responsibilities: [
      'Built 6+ end-to-end analytics projects across FMCG, Retail, Real Estate, and Transportation domains',
      'Created interactive Power BI dashboards with DAX measures to track KPIs and business performance',
      'Applied Python (Pandas, Matplotlib) for EDA, trend analysis, and automated data pipelines',
      'Delivered executive-ready reports with actionable recommendations that simulate real business scenarios',
    ],
    tools: ['SQL', 'Python', 'Power BI', 'Excel', 'Pandas'],
  },
  {
    role: 'Operations Data Analyst Intern',
    company: 'Speed Force',
    type: 'Internship',
    duration: 'Jun 2023 – Nov 2023',
    certificate:
      'https://drive.google.com/file/d/1rod1P8B7tS-IxDh6sGDwAuvM9pnb7ezE/preview',
    responsibilities: [
      'Analyzed customer data, inventory data, and service records for Speed Force, a bike servicing startup, to optimize inventory and enhance service quality.',
      'Analyzed inventory data using Python and Advanced Excel to identify high-demand parts and optimize stock planning.',
      'Built a dashboard to prioritize essential inventory and reduce over-purchasing, contributing to an 8–10% increase in revenue.',
    ],
    tools: ['SQL', 'Excel', 'Power BI', 'Data Analysis'],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
            Professional Journey
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Experience
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            My professional experience and hands-on project work in data analytics
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent/50 to-transparent -translate-x-1/2" />

          <div className="space-y-8 md:space-y-12">
            {experienceData.map((exp, index) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.2, duration: 0.6 }}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-14 h-14 bg-background border-2 border-accent rounded-full items-center justify-center z-10 shadow-lg shadow-accent/20">
                  <Briefcase className="w-6 h-6 text-accent" />
                </div>

                <div className={`w-full md:w-[calc(50%-3rem)] ${index % 2 === 0 ? 'md:pr-4' : 'md:pl-4'}`}>
                  <div className="card-elevated p-6 rounded-xl group hover:shadow-xl hover:border-accent/30 transition-all duration-300 hover:-translate-y-1">

                    <div className="flex items-start gap-4 mb-4">
                      <div className="md:hidden w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                        <Briefcase className="w-5 h-5 text-accent" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="px-2 py-0.5 bg-accent/10 text-accent text-xs font-medium rounded">
                            {exp.type}
                          </span>
                        </div>
                        <h3 className="font-display text-lg font-semibold text-foreground leading-tight">
                          {exp.role}
                        </h3>
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-2 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1.5">
                            <Building2 className="w-4 h-4 text-accent" />
                            {exp.company}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Calendar className="w-4 h-4" />
                            {exp.duration}
                          </span>
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 shrink-0" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-3 py-1 bg-accent/5 border border-accent/20 text-accent text-xs font-medium rounded-full hover:bg-accent/10 transition-colors"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>

                    {/* Certificate Button */}
                    {exp.certificate && (
                      <a
                        href={exp.certificate}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-accent hover:bg-accent/90 text-white text-sm font-medium rounded-lg transition"
                      >
                        <Award className="w-4 h-4" />
                        View Certificate
                      </a>
                    )}

                  </div>
                </div>

                <div className="hidden md:block w-[calc(50%-3rem)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;