import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { useTheme } from '@/context/ThemeProvider';
import { cn } from '@/lib/utils';

// Skill data
const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "HTML5 & CSS3", level: 95 },
      { name: "JavaScript (ES6+)", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "React.js", level: 90 },
      { name: "Next.js", level: 80 },
    ]
  },
  {
    title: "UI Frameworks & Libraries",
    skills: [
      { name: "Tailwind CSS", level: 90 },
      { name: "Bootstrap", level: 90 },
      { name: "Material UI", level: 85 },
      { name: "Shadcn UI", level: 80 },
      { name: "JQuery", level: 85 },
      { name: "SASS", level: 85 },
      { name: "SCSS", level: 85 },
      { name: "Redux", level: 85 },
    ]
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git & GitHub", level: 85 },
      { name: "Bitbucket", level: 80 },
      { name: "Jest/Testing Library", level: 75 },
      { name: "Figma/Adobe XD", level: 70 },
      { name: "Responsive Design", level: 90 },
      { name: "RESTful API (Postman)", level: 90 },
      { name: "Visual Studio Code", level: 90 },
    ]
  }
];

export function SkillsSection() {
  const { theme } = useTheme();
  
  return (
    <section 
      id="skills" 
      className={cn(
        "py-20 px-4",
        theme === 'dark' 
          ? 'bg-gray-800 text-white' 
          : 'bg-gray-50 text-gray-800'
      )}
    >
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-400 dark:text-gray-300 max-w-2xl mx-auto">
            These are my main technical skills and areas of expertise in front-end development.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, idx) => (
            <Card key={idx} className="overflow-hidden border-none shadow-lg">
              <div className="h-2 bg-primary"></div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">{category.title}</h3>
                <div className="space-y-5">
                  {category.skills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}