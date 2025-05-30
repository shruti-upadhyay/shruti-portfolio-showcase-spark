
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Remote Leaps",
      position: "Full Stack Intern",
      duration: "Dec 2024 – Apr 2025",
      location: "Remote",
      technologies: ["Next.js", "Node.js", "Prisma ORM", "PostgreSQL"],
      responsibilities: [
        "Full-stack development with Next.js and Node.js",
        "Database management using Prisma ORM and PostgreSQL",
        "Implementation of authentication systems",
        "Development of reusable UI components",
        "Git collaboration and version control"
      ]
    },
    {
      company: "YOGI IT SOLUTION",
      position: "MERN Intern",
      duration: "May 2024 – Jul 2024",
      location: "Gujarat, India",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
      responsibilities: [
        "Developed 'SmileScribe' - Dental Appointment Management System",
        "Created comprehensive admin, dentist, and user role management",
        "Implemented full appointment booking and scheduling system",
        "Built responsive user interfaces with React.js",
        "Designed and optimized MongoDB database schemas"
      ]
    },
    {
      company: "APSL",
      position: "Web Developer",
      duration: "Dec 2022 – Jan 2023",
      location: "Surat, India",
      technologies: ["PHP", "MySQL", "JavaScript", "HTML/CSS"],
      responsibilities: [
        "Built comprehensive seaport logistics website",
        "Developed cost calculators for shipping services",
        "Created global seaport directory with search functionality",
        "Implemented SSL security protocols",
        "Led development team as Team Leader"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover-scale">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <Briefcase className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold text-gray-900">{exp.position}</CardTitle>
                      <p className="text-lg text-blue-600 font-semibold">{exp.company}</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{exp.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Key Responsibilities:</h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((responsibility, respIndex) => (
                      <li key={respIndex} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
