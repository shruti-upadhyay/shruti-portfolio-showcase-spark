
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="hover-scale">
            <CardContent className="p-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  My journey into technology began with a curiosity about how digital solutions can solve real-world problems. 
                  I completed my <strong>Master's in Information Technology at DAIICT, Gandhinagar</strong>, I’ve developed 
                  a comprehensive understanding of full-stack development and modern web technologies.
                </p>

                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Throughout my academic and professional journey, I've gained hands-on experience working with cutting-edge 
                  technologies including React.js, Node.js, Next.js, and various database systems. My passion lies in creating 
                  scalable, user-friendly applications that make a meaningful impact.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  I'm driven by the challenge of transforming complex problems into elegant solutions. Whether it's developing 
                  a dental appointment system, building seaport logistics platforms, or creating interactive web applications, 
                  I approach each project with dedication, innovation, and a commitment to excellence. My goal is to contribute 
                  to the tech industry by building applications that enhance user experiences and drive business growth.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
