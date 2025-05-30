
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, FileText } from "lucide-react";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 px-4">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <div className="mb-8">
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=300&fit=crop&crop=face"
            alt="Shruti Upadhyay"
            className="w-48 h-48 rounded-full mx-auto mb-6 object-cover border-4 border-white shadow-xl hover-scale"
          />
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
          Shruti Upadhyay
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Full-Stack Developer | Passionate About Web Development & Scalable Applications
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button 
            onClick={() => window.open('https://drive.google.com/file/d/1DgiH9MzLKKZS2NQq7LGjFtTtcufBjBQw/view?usp=drive_link', '_blank')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-lg hover-scale"
          >
            <FileText className="mr-2 h-5 w-5" />
            View Resume
          </Button>
          
          <Button 
            variant="outline" 
            onClick={() => scrollToSection('contact')}
            className="px-6 py-3 text-lg hover-scale"
          >
            Contact Me
          </Button>
          
          <Button 
            variant="outline"
            onClick={() => window.open('https://www.linkedin.com/in/shruti-upadhyay-7460b62a8/', '_blank')}
            className="px-6 py-3 text-lg hover-scale"
          >
            <Linkedin className="mr-2 h-5 w-5" />
            LinkedIn
          </Button>
          
          <Button 
            variant="outline"
            onClick={() => window.open('https://github.com/shruti-Upadhyay', '_blank')}
            className="px-6 py-3 text-lg hover-scale"
          >
            <Github className="mr-2 h-5 w-5" />
            GitHub
          </Button>
        </div>
        
        <div className="animate-bounce">
          <ArrowDown className="h-8 w-8 text-gray-600 mx-auto cursor-pointer" onClick={() => scrollToSection('about')} />
        </div>
      </div>
    </header>
  );
};

export default Header;
