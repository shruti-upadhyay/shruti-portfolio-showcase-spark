
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Users, Code } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      title: "Team Leader at APSL",
      description: "Led a development team during web development project, managing project timelines and coordinating with stakeholders.",
      date: "Dec 2022 – Jan 2023",
      icon: <Users className="h-6 w-6" />,
      category: "Leadership"
    },
    {
      title: "DAIICT Hackathon - Second Level",
      description: "Advanced to the second level in the competitive DAIICT Hackathon, showcasing innovative problem-solving skills.",
      date: "Oct 2023",
      icon: <Code className="h-6 w-6" />,
      category: "Competition"
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Achievements & Awards</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <Card key={index} className="hover-scale">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <div className="p-3 bg-yellow-100 rounded-lg">
                    {achievement.icon}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg font-bold text-gray-900">{achievement.title}</CardTitle>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                        {achievement.category}
                      </span>
                      <span className="text-sm text-gray-500">{achievement.date}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
