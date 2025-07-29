import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Code, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Front-End Developer with 2.6 years of experience in building
            scalable, responsive web applications using JavaScript, React, and
            Tailwind CSS. Proficient in translating complex UI/UX designs into
            high-performance solutions. Strong understanding of modern
            development practices, testing, and version control. Eager to
            contribute to dynamic teams driving innovative digital products.
            Eligible to work in the UK.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left Column - Bio */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
              My Journey
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              As a dedicated React developer and user interface designer, I
              excel in fast-paced, collaborative environments that foster
              innovation and creativity. With a strong foundation in HTML5,
              CSS3, and JavaScript (ES6+), I create scalable, responsive, and
              high-performance web applications focused on user experience and
              accessibility.
              <br />
              <br />
              I specialize in building dynamic single-page applications (SPAs)
              using React.js, utilizing features like hooks, context API, and
              state management tools such as Redux, Zustand, or Recoil. My
              workflow often includes TypeScript, React Router, Next.js, and
              Styled Components or Tailwind CSS to ensure modular and
              maintainable code. On the backend, I leverage Node.js and RESTful
              APIs for full-stack development, alongside Git for version
              control. I also work with CI/CD pipelines, unit testing frameworks
              like Jest and React Testing Library, and deployment tools such as
              Vercel, Netlify, or Docker.
              <br />
              <br />
              With a strong grasp of UX/UI principles, I design user-centric
              solutions that align with business goals and exceed expectations.
              I stay updated on emerging front-end trends and performance
              optimization techniques, ensuring my work remains efficient and
              future-proof. I am eager to tackle new challenges and contribute
              my expertise to innovative projects where front-end excellence and
              user experience converge. Let’s connect to discuss how I can
              enhance your digital products through clean code, modern design,
              and thoughtful interactions.
            </p>
            {/* <p className="text-gray-600 dark:text-gray-400">
              Additionally, I took pride in mentoring junior developers,
              resulting in a 20% improvement in code quality and onboarding
              time. My role involved leading front-end development efforts
              alongside UX/UI designers, where I created user-friendly
              administrative pages and interactive features. This experience not
              only sharpened my technical abilities but also deepened my
              understanding of user experience, as I conducted user testing and
              feedback sessions to ensure our platform met the evolving needs of
              its users.
            </p> */}

            <div className="pt-4">
              <h4 className="text-xl font-medium mb-4 text-gray-800 dark:text-white">
                My Focus
              </h4>
              <ul className="space-y-2">
                {[
                  "Responsive Web Development",
                  "Bug Reduction",
                  "SEO Optimization",
                  "Security Protocols",
                  "Mentorship",
                  "Functionality Enhancement",
                  "Performance Optimization",
                  "Cross-Browser Compatibility",
                  "User Testing",
                ].map((skill, index) => (
                  <li key={index} className="flex items-center">
                    <span className="mr-2 text-primary">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - Timeline */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">
              Experience & Education
            </h3>
            <div className="space-y-6">
              {/* <Card>
                <CardContent className="p-6 flex items-start">
                  <div className="mr-4 p-2 bg-primary/10 rounded-full">
                    <Briefcase size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">
                      Senior Front-end Developer
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Tech Company • 2022 - Present
                    </p>
                    <p className="mt-2 text-gray-700 dark:text-gray-300">
                      Leading front-end development for client projects,
                      mentoring junior developers, and implementing modern web
                      technologies.
                    </p>
                  </div>
                </CardContent>
              </Card> */}

              <Card>
                <CardContent className="p-6 flex items-start">
                  <div className="mr-4 p-2 bg-primary/10 rounded-full">
                    <Code size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">
                      Front-end Developer
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Tata Consultancy Services • 2021 - 2023
                    </p>
                    <p className="mt-2 text-gray-700 dark:text-gray-300">
                      During my time as a Front-End Developer at Tata
                      Consultancy Services in Chennai, I developed responsive
                      web pages using React, JavaScript, and Tailwind CSS,
                      achieving a 25% increase in dashboard workflow efficiency.
                      <br />
                      <br />
                      I debugged over 10 enterprise applications, reducing
                      reported bugs by 32%, and implemented SEO-optimized
                      components that improved page load times by 6%.
                      Collaborating on SSO and token-based authentication for
                      over 1,000 users enhanced security, while integrating
                      third-party APIs boosted functionality.
                      <br />
                      <br />
                      I also mentored junior developers, leading to a 20%
                      improvement in code quality and onboarding time. My role
                      included collaborating with UX/UI designers to create
                      user-friendly administrative pages and interactive
                      features. This experience sharpened my technical skills
                      and deepened my understanding of user experience through
                      user testing and feedback sessions, ensuring our platform
                      met evolving user needs.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 flex items-start">
                  <div className="mr-4 p-2 bg-primary/10 rounded-full">
                    <GraduationCap size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">
                      MSc, Managing Innovation and Information Technology
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      University • 2024 - 2025
                    </p>
                    <p className="mt-2 text-gray-700 dark:text-gray-300">
                      I have developed multi-skilled managers who can identify
                      and leverage the latest developments in information
                      systems and emerging technologies for the benefit of the
                      business. I have explored the intricate intersection of
                      information management and technology leadership.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
