
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Shield, Users } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      name: "PET STORE",
      description: "Comprehensive pet store management system with separate admin and user panels, featuring pet services booking and secure authentication.",
      technologies: ["ASP.NET MVC", "C#", "MySQL"],
      features: [
        "Admin panel for pet and service management",
        "User registration and authentication",
        "Pet services booking system",
        "Two-factor authentication security",
        "Inventory management",
        "Payment processing integration"
      ],
      icon: <Users className="h-6 w-6" />
    },
    {
      name: "ATM SYSTEM",
      description: "Complete banking operations system simulating real ATM functionality with comprehensive financial transaction management.",
      technologies: ["Java", "MySQL", "Swing GUI"],
      features: [
        "User registration and login",
        "Balance inquiry and statements",
        "Cash withdrawal and deposits",
        "Fast cash options",
        "PIN change functionality",
        "Transaction history tracking",
        "Account management"
      ],
      icon: <Shield className="h-6 w-6" />
    },
    {
      name: "SmileScribe",
      description: "Advanced dental appointment management system with role-based access for admins, dentists, and patients with comprehensive scheduling.",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
      features: [
        "Role-based user management",
        "Appointment scheduling system",
        "Doctor availability management",
        "Patient medical records",
        "Admin dashboard with analytics",
        "Email notifications",
        "Payment tracking"
      ],
      icon: <Database className="h-6 w-6" />
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Projects</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="hover-scale h-full">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    {project.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{project.name}</CardTitle>
                </div>
                <p className="text-gray-700">{project.description}</p>
              </CardHeader>

              <CardContent>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                    {project.features.length > 4 && (
                      <li className="text-sm text-blue-600 font-medium">
                        +{project.features.length - 4} more features
                      </li>
                    )}
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

export default Projects;
