import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Github,
  CheckCircle2,
  Lightbulb,
  Target,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ProjectNavigation from "@/components/ProjectNavigation";
import Footer from "@/components/Footer";
import VideoPlaceholder from "@/components/VideoPlaceholder";
import { getProjectById } from "@/data/projects";
import { useEffect } from "react";

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projectId ? getProjectById(projectId) : undefined;
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <ProjectNavigation />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Project Not Found
            </h1>
            <p className="text-muted-foreground mb-6">
              The project you're looking for doesn't exist.
            </p>
            <Button asChild>
              <Link to="/#projects">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Projects
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <ProjectNavigation />

      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section
          className={`relative overflow-hidden bg-gradient-to-br ${project.gradient} py-16 md:py-24`}
        >
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 dot-pattern" />
          </div>

          <div className="container-custom relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold rounded-full mb-6">
                {project.domain}
              </span>

              <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                {project.title}
              </h1>

              <p className="text-lg md:text-xl text-white/90 max-w-3xl mb-8">
                {project.fullDescription}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-4 py-2 bg-background/95 text-foreground text-sm font-medium rounded-xl shadow-lg"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-black border border-black hover:bg-white/90"
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5 mr-2" />
                    View Code
                  </a>
                </Button>

                <Button
                  size="lg"
                  className="bg-black text-white border border-white hover:bg-black/90"
                  onClick={() => navigate(-1)}
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Previous Page
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Power BI Section */}
        {project.powerBiEmbed && (
          <section className="py-12 md:py-16 bg-secondary/30">
            <div className="container-custom">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <FileText className="w-7 h-7 text-accent" />
                Interactive Dashboard
              </h2>

              <div className="rounded-2xl overflow-hidden border border-border shadow-xl bg-card">
                {project.powerBiEmbed?.includes("1drv.ms") ? (
                  <div className="flex justify-center">
                    <iframe
                      title={`${project.title} Excel Embed`}
                      src={project.powerBiEmbed}
                      className="w-[900px]"
                      style={{ height: "680px" }}
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <iframe
                    title={`${project.title} Power BI Report`}
                    src={project.powerBiEmbed}
                    className="w-full aspect-[16/10] min-h-[500px] md:min-h-[600px]"
                    allowFullScreen
                  />
                )}
              </div>
            </div>
          </section>
        )}

        {/* Video Section */}
        {project.id === "gurgaon-real-estate" ? (
          <section className="py-12 md:py-16 bg-secondary/30">
            <div className="container-custom">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                Project Walkthrough
              </h2>

              <div className="rounded-2xl overflow-hidden border border-border shadow-xl bg-card flex justify-center">
                <iframe
                  src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7171490010184032257?compact=1"
                  className="w-full max-w-3xl aspect-video"
                  allowFullScreen
                  title="Gurgaon Real Estate Project Demo"
                />
              </div>
            </div>
          </section>
        ) : (
          <VideoPlaceholder />
        )}

        {/* PDF Section */}
        {project.pdf && (
          <section className="py-12 md:py-16 bg-secondary/30">
            <div className="container-custom">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <FileText className="w-7 h-7 text-accent" />
                Detailed Project Report
              </h2>

              <div className="rounded-2xl overflow-hidden border border-border shadow-xl bg-card">
                <iframe
                  src={project.pdf}
                  className="w-full h-[85vh]"
                  title={`${project.title} PDF Report`}
                />
              </div>
            </div>
          </section>
        )}

        {/* Outcomes + Approach */}
        <section className="py-12 md:py-16">
          <div className="container-custom grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Key Outcomes */}
            <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-lg">
              <h2 className="font-display text-xl md:text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Target className="w-6 h-6 text-accent" />
                Key Outcomes
              </h2>

              <ul className="space-y-4">
                {project.outcomes.map((outcome, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Approach */}
            <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-lg">
              <h2 className="font-display text-xl md:text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <FileText className="w-6 h-6 text-accent" />
                Approach
              </h2>

              <ul className="space-y-4">
                {project.approach.map((step, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent/10 text-accent text-sm font-bold flex items-center justify-center shrink-0">
                      {index + 1}
                    </span>
                    <span className="text-muted-foreground">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Key Insights */}
        {project.insights?.length > 0 && (
          <section className="py-16 md:py-20 bg-secondary/30">
            <div className="container-custom">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-10 flex items-center gap-3">
                <Lightbulb className="w-7 h-7 text-accent" />
                Key Insights
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {project.insights.map((insight, index) => (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-2xl p-6 shadow-lg hover:shadow-xl transition"
                  >
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      <span className="text-accent font-bold mr-2">•</span>
                      {insight}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Conclusion */}
        {project.conclusion?.length > 0 && (
          <section className="py-16 md:py-20">
            <div className="container-custom">
              <div className="bg-gradient-to-br from-accent/10 via-accent/5 to-transparent border border-border rounded-2xl p-10 md:p-14 shadow-xl">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-10 text-center">
                  Conclusion & Recommendations
                </h2>

                <div className="space-y-6 max-w-4xl mx-auto">
                  {project.conclusion.map((point, index) => (
                    <p
                      key={index}
                      className="text-muted-foreground leading-relaxed text-lg"
                    >
                      {point}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;