import { Linkedin, Github, Mail, CodeXml } from "lucide-react";

export default function Footer() {
  const links = [
    { name: "linkedin", href: "https://www.linkedin.com/in/arghya-vyas-2a40a72b1/", icon: Linkedin },
    { name: "github", href: "https://github.com/arghya-v", icon: Github },
    { name: "email", href: "mailto:arghyavyas775@gmail.com", icon: Mail },
    { name: "repo", href: "https://github.com/arghya-v/arghya-v", icon: CodeXml },
  ];

  return (
    <footer className="relative z-10 mt-6 w-full">
      {/* Divider line */}
      <div className="border-t border-white/10 max-w-xl mx-auto" />

      {/* Centered icon group */}
      <div className="mt-6 flex justify-center">
        <div className="flex flex-wrap justify-center items-center gap-6 text-gray-400 text-sm">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-1 hover:text-white transition-colors duration-300"
            >
              <link.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <span className="hidden md:inline-block opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-300">
                {link.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
