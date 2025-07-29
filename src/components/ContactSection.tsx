import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Mail, Phone, Github, Linkedin } from "lucide-react";
import { useState } from "react";
import { useTheme } from "@/context/ThemeProvider";
import { cn } from "@/lib/utils";

export function ContactSection() {
  const { theme } = useTheme();
  // const [formState, setFormState] = useState({
  //   name: '',
  //   email: '',
  //   subject: '',
  //   message: ''
  // });
  // const [isSubmitting, setIsSubmitting] = useState(false);
  // const [submitMessage, setSubmitMessage] = useState<{
  //   type: 'success' | 'error';
  //   text: string;
  // } | null>(null);

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //   setFormState({
  //     ...formState,
  //     [e.target.name]: e.target.value
  //   });
  // };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);

  //   // Simulate form submission
  //   try {
  //     // In a real application, this would be replaced with an actual API call
  //     await new Promise(resolve => setTimeout(resolve, 1500));

  //     // Clear form
  //     setFormState({
  //       name: '',
  //       email: '',
  //       subject: '',
  //       message: ''
  //     });

  //     setSubmitMessage({
  //       type: 'success',
  //       text: 'Your message has been sent successfully! I will get back to you soon.'
  //     });
  //   } catch (error) {
  //     setSubmitMessage({
  //       type: 'error',
  //       text: 'Failed to send message. Please try again later.'
  //     });
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };

  return (
    <section
      id="contact"
      className={cn(
        "py-20 px-4",
        theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-50 text-gray-800"
      )}
    >
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-400 dark:text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to chat? Feel free to contact me
            through the form below or via email directly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          {/* <div>
            <Card className="shadow-xl">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="bg-white dark:bg-gray-700"
                    />
                  </div>
                  
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="bg-white dark:bg-gray-700"
                    />
                  </div>
                  
                  <div>
                    <Input
                      name="subject"
                      placeholder="Subject"
                      value={formState.subject}
                      onChange={handleChange}
                      required
                      className="bg-white dark:bg-gray-700"
                    />
                  </div>
                  
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="resize-none bg-white dark:bg-gray-700"
                    />
                  </div>
                  
                  <div>
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </div>
                  
                  {submitMessage && (
                    <div className={cn(
                      "p-3 rounded-md mt-4",
                      submitMessage.type === 'success' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' 
                        : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                    )}>
                      {submitMessage.text}
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </div> */}

          {/* Contact Info */}
          <div className="space-y-10">
            <div>
              <h3 className="text-2xl font-semibold mb-6">
                Contact Information
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Feel free to reach out to me through any of the following
                methods. I'm always open to discussing new projects, creative
                ideas, or opportunities.
              </p>
            </div>

            <div className="space-y-5">
              <div className="flex items-start">
                <div className="p-3 bg-primary/10 rounded-full mr-4">
                  <MapPin size={24} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Manchester, UK
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 bg-primary/10 rounded-full mr-4">
                  <Mail size={24} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <a
                    href="mailto:contact@example.com"
                    className="text-primary hover:underline"
                  >
                    arunmanokaran1@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 bg-primary/10 rounded-full mr-4">
                  <Phone size={24} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <a
                    href="tel:+1234567890"
                    className="text-primary hover:underline"
                  >
                    +44 7741004108
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 bg-primary/10 rounded-full mr-4">
                  <Github size={24} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">GitHub</h4>
                  <a
                    href="tel:+1234567890"
                    className="text-primary hover:underline"
                  >
                    https://github.com/arunmanokaran
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 bg-primary/10 rounded-full mr-4">
                  <Linkedin size={24} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">LinkedIn</h4>
                  <a
                    href="tel:+1234567890"
                    className="text-primary hover:underline"
                  >
                    https://www.linkedin.com/in/arundotmano
                  </a>
                </div>
              </div>

            </div>

            {/* <div>
              <h4 className="font-semibold mb-3">Follow Me</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="p-2 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors"
                >
                  <svg
                    className="w-5 h-5 text-primary"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="p-2 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors"
                >
                  <svg
                    className="w-5 h-5 text-primary"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="p-2 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors"
                >
                  <svg
                    className="w-5 h-5 text-primary"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
