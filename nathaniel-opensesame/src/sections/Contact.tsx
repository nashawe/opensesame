import { Mail, Linkedin, Github, CheckCircle2 } from "lucide-react";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";

export const Contact = () => {
  return (
    <Section id="contact" className="py-24 md:py-32 bg-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
              Let’s Build Something.
            </h2>

            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              I’m looking for an internship where I can contribute to a real
              engineering team. I’m ready to ship code, learn from code reviews,
              and help OpenSesame succeed.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="mailto:nathaniel.shawe@gmail.com"
                size="lg"
                className="gap-2"
              >
                <Mail className="w-4 h-4" /> Get in Touch
              </Button>
              <div className="flex gap-4">
                <Button
                  href="https://www.linkedin.com/in/nathaniel-shawe-520125342/"
                  variant="outline"
                  size="lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-5 h-5 text-[#0077b5]" />
                </Button>
                <Button
                  href="https://github.com/nashawe"
                  variant="outline"
                  size="lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-5 h-5 text-slate-900" />
                </Button>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 rounded-2xl p-8 md:p-10 border border-slate-100">
            <h3 className="text-lg font-bold text-slate-900 mb-6">
              What I'm looking for:
            </h3>
            <ul className="space-y-6">
              {[
                "Building a real feature end-to-end.",
                "Learning how to measure success in production.",
                "Working with a team that values clean code.",
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <CheckCircle2 className="w-5 h-5 text-brand-600 mt-0.5 shrink-0" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
};
