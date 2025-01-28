import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Database, Layout, Server, ChevronDown } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white min-h-screen flex items-center">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-6 py-24 relative">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Hi, I'm <span className="text-blue-300">Suchith Reddy Kunta</span>
                <br />Full Stack Developer
              </h1>
              <p className="text-xl mb-8 text-blue-100 max-w-2xl">
                Crafting exceptional digital experiences with modern technologies and a passion for clean, efficient code.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <a href="#contact" className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all transform hover:scale-105">
                  Contact Me
                </a>
                <a href="#projects" className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-all transform hover:scale-105">
                  View Projects
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img 
                  src="https://i.ibb.co/9cnsWSg/Passport-Size-Photo.jpg" 
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg">
                <Code2 className="w-12 h-12 text-blue-600" />
              </div>
            </div>
          </div>
          <a href="#skills" className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-white/80" />
          </a>
        </div>
      </header>

      {/* Skills Section */}
      <section className="py-32 bg-white" id="skills">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-bold mb-6">Technical Expertise</h2>
            <p className="text-gray-600 text-lg">Leveraging cutting-edge technologies to build scalable and efficient solutions</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Layout className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Frontend Development</h3>
              <p className="text-gray-600 mb-6">Crafting responsive and intuitive user interfaces with modern frameworks and tools.</p>
              <div className="flex flex-wrap gap-2">
                {['React', 'HTML', 'CSS', 'JavaScript'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="group p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Server className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Backend Development</h3>
              <p className="text-gray-600 mb-6">Building robust and scalable server-side applications and APIs.</p>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'Express', 'Python', 'SQL'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="group p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Database className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Database & Tools</h3>
              <p className="text-gray-600 mb-6">Managing data with modern database solutions and development tools.</p>
              <div className="flex flex-wrap gap-2">
                {['MongoDB', 'Firebase', 'Git', 'Bootstrap'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-32 bg-gray-50" id="projects">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-bold mb-6">Featured Projects</h2>
            <p className="text-gray-600 text-lg">Showcasing some of my best work and technical achievements</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "BookEase",
                description: "A web-based scheduling application designed to streamline appointment bookings. Features include availability management, appointment booking, schedule management, and notifications. Built with HTML, CSS, Bootstrap, JavaScript, and Firebase.",
                image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&q=80",
                liveLink: "https://book-ease.netlify.app/",
                githubLink: "https://github.com/shubham-sangale-11/Book-Ease"
              },
              {
                title: "Social Media Analytics Platform",
                description: "A comprehensive platform for monitoring and analyzing social media presence. Collects and visualizes data from various social media channels in an organized and visually appealing manner. Built with HTML, CSS, and JavaScript.",
                image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
                liveLink: "https://radiant-crostata-11596d.netlify.app/",
                githubLink: "https://github.com/Shivamshrivaastava/Solar-Stackers_016"
              }
            ].map((project, index) => (
              <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                  <p className="text-gray-600 mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-4">
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:text-blue-700 transition-colors">
                      <Github className="w-5 h-5 mr-2" />
                      <span>View Code</span>
                    </a>
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:text-blue-700 transition-colors">
                      <ExternalLink className="w-5 h-5 mr-2" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 bg-white" id="contact">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
            <p className="text-gray-600 text-lg">Let's discuss how we can work together on your next project</p>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <a href="mailto:suchith0113@gmail.com" className="group flex flex-col items-center p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Mail className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <p className="text-gray-600 text-center">suchith0113@gmail.com</p>
              </a>
              <a href="https://github.com/Suchith-13" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Github className="w-8 h-8 text-gray-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">GitHub</h3>
                <p className="text-gray-600 text-center">View My Code</p>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Linkedin className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">LinkedIn</h3>
                <p className="text-gray-600 text-center">Connect With Me</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} Suchith Reddy Kunta. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;