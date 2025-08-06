import { MapPin, Mail, Phone, Github, Linkedin } from "lucide-react";
import { useTheme } from "@/context/ThemeProvider";
import { cn } from "@/lib/utils";

export function ContactSection() {
  const { theme } = useTheme();

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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Contact Information
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-400 dark:text-gray-300 max-w-2xl mx-auto text-justify">
            Feel free to reach out to me through any of the following methods.
            I'm always open to discussing new projects, creative ideas, or
            opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}

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
        </div>
      </div>
    </section>
  );
}
