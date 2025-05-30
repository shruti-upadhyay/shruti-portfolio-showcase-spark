
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "M.Sc (IT)",
      institution: "DAIICT, Gandhinagar",
      duration: "July 2023 – June 2025",
      status: "In Progress",
      description: "Master's program focusing on advanced information technology concepts, software development, and research methodologies."
    },
    {
      degree: "BCA",
      institution: "VNSGU, Surat", 
      duration: "Nov 2020 – April 2023",
      status: "Completed",
      description: "Bachelor's degree in Computer Applications with strong foundation in programming, database management, and software engineering."
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <Card key={index} className="hover-scale">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <GraduationCap className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold text-gray-900">{edu.degree}</CardTitle>
                      <p className="text-lg text-blue-600 font-semibold">{edu.institution}</p>
                    </div>
                  </div>
                  <Badge 
                    variant={edu.status === "Completed" ? "default" : "secondary"}
                    className="text-sm"
                  >
                    {edu.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-2 mb-4">
                  <Calendar className="h-4 w-4 text-gray-500" />
                  <span className="text-gray-600">{edu.duration}</span>
                </div>
                <p className="text-gray-700">{edu.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
