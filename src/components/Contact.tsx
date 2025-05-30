
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, Linkedin, Github, FileText } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations. Let's connect!
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="hover-scale">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mail className="mr-3 h-6 w-6 text-blue-600" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a 
                  href="mailto:shrutiupadhyay601@gmail.com" 
                  className="text-blue-600 hover:text-blue-800 text-lg"
                >
                  shrutiupadhyay601@gmail.com
                </a>
              </CardContent>
            </Card>

            <Card className="hover-scale">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Phone className="mr-3 h-6 w-6 text-blue-600" />
                  Phone
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a 
                  href="tel:+919313461040" 
                  className="text-blue-600 hover:text-blue-800 text-lg"
                >
                  +91 9313461040
                </a>
              </CardContent>
            </Card>

            <div className="flex flex-col space-y-4">
              <Button 
                onClick={() => window.open('https://www.linkedin.com/in/shruti-upadhyay-7460b62a8/', '_blank')}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white p-4 text-lg hover-scale"
              >
                <Linkedin className="mr-3 h-6 w-6" />
                Connect on LinkedIn
              </Button>
              
              <Button 
                onClick={() => window.open('https://github.com/shruti-Upadhyay', '_blank')}
                variant="outline"
                className="w-full p-4 text-lg hover-scale"
              >
                <Github className="mr-3 h-6 w-6" />
                View GitHub Profile
              </Button>

              <Button 
                onClick={() => window.open('https://drive.google.com/file/d/1DgiH9MzLKKZS2NQq7LGjFtTtcufBjBQw/view?usp=drive_link', '_blank')}
                variant="outline"
                className="w-full p-4 text-lg hover-scale"
              >
                <FileText className="mr-3 h-6 w-6" />
                Download Resume
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="hover-scale">
            <CardHeader>
              <CardTitle>Send Me a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 text-lg hover-scale"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
