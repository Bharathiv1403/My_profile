import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  User, 
  Code, 
  Briefcase, 
  GraduationCap, 
  Menu, 
  X,
  ChevronRight,
  MapPin,
  Phone,
  ExternalLink,
  Award,
  BookOpen,
  Activity
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed w-full bg-white shadow-sm z-50">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <span className="text-xl font-bold text-blue-600">Bharathi V</span>
            
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>

            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-600 hover:text-blue-600 transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-blue-600 transition-colors">About</button>
              <button onClick={() => scrollToSection('experience')} className="text-gray-600 hover:text-blue-600 transition-colors">Experience</button>
              <button onClick={() => scrollToSection('skills')} className="text-gray-600 hover:text-blue-600 transition-colors">Skills</button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-600 hover:text-blue-600 transition-colors">Projects</button>
              <button onClick={() => scrollToSection('activities')} className="text-gray-600 hover:text-blue-600 transition-colors">Activities</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-blue-600 transition-colors">Contact</button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden py-4">
              <div className="flex flex-col space-y-4">
                <button onClick={() => scrollToSection('home')} className="text-gray-600 hover:text-blue-600">Home</button>
                <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-blue-600">About</button>
                <button onClick={() => scrollToSection('experience')} className="text-gray-600 hover:text-blue-600">Experience</button>
                <button onClick={() => scrollToSection('skills')} className="text-gray-600 hover:text-blue-600">Skills</button>
                <button onClick={() => scrollToSection('projects')} className="text-gray-600 hover:text-blue-600">Projects</button>
                <button onClick={() => scrollToSection('activities')} className="text-gray-600 hover:text-blue-600">Activities</button>
                <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-blue-600">Contact</button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <header id="home" className={`bg-gradient-to-r from-blue-600 to-indigo-700 text-white pt-24 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="container mx-auto px-6 py-24">
          <div className="flex flex-col items-center text-center">
            <img
              src="https://ibb.co/3yqWSZbp"
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-white shadow-lg mb-6 hover:scale-105 transition-transform duration-300"
            />
            <h1 className="text-4xl font-bold mb-4">Hi, I'm Bharathi V</h1>
            <p className="text-xl text-blue-100 mb-4">Data Analyst & Frontend Developer</p>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl">
              Passionate about leveraging data analysis and frontend development to create impactful digital solutions
            </p>
            <div className="flex space-x-4 mb-8">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:bharathivragav206@gmail.com" className="hover:text-blue-200 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-blue-50 transition-colors"
              >
                View Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-transparent border-2 border-white text-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
              <User className="w-8 h-8 mr-3 text-blue-600" />
              About Me
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <GraduationCap className="w-5 h-5 mr-2 text-blue-600" />
                    Education
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium">B.Sc - Statistics</p>
                      <p className="text-gray-600">Arignar Anna Arts College, Villupuram</p>
                      <p className="text-gray-500">2020-2023</p>
                    </div>
                    <div>
                      <p className="font-medium">MCA (Pursuing)</p>
                      <p className="text-gray-600">Alagappa University, Karaikal</p>
                      <p className="text-gray-500">2025-2027</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Professional Summary</h3>
                <p className="text-gray-600 leading-relaxed">
                  I am passionate about leveraging data analysis and frontend development to drive business decisions and create user-friendly digital experiences. My experience as a Junior Data Analyst and Frontend Developer has helped me build expertise in Python, Power BI, and web development technologies like React and WordPress. I am actively involved in the FOSS community and have contributed to various open-source projects and hackathons. I am always eager to learn and grow in the tech space while embracing opportunities to innovate and solve real-world problems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
              <Briefcase className="w-8 h-8 mr-3 text-blue-600" />
              Experience
            </h2>
            <div className="space-y-8">
              <div className="relative pl-8 border-l-2 border-blue-600">
                <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[9px] top-0"></div>
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold text-gray-800">Junior Data Analyst & Frontend Developer</h3>
                  <p className="text-blue-600">Sagasoft Technologies Pvt. Ltd.</p>
                  <p className="text-gray-500">August 2024 - Present</p>
                  <ul className="mt-4 text-gray-600 list-disc list-inside space-y-2">
                    <li>Developing data visualizations using Power BI and Python</li>
                    <li>Creating responsive web applications with React</li>
                    <li>Contributing to WordPress theme development</li>
                  </ul>
                </div>
              </div>
              
              <div className="relative pl-8 border-l-2 border-blue-600">
                <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[9px] top-0"></div>
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold text-gray-800">Junior Data Analyst Intern</h3>
                  <p className="text-blue-600">Sagasoft Technologies</p>
                  <p className="text-gray-500">February 2024 - July 2024</p>
                  <ul className="mt-4 text-gray-600 list-disc list-inside space-y-2">
                    <li>Learned and applied data analysis techniques</li>
                    <li>Assisted in frontend development projects</li>
                    <li>Participated in team projects and learning activities</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
              <Code className="w-8 h-8 mr-3 text-blue-600" />
              Skills
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">Data Analysis</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" className="w-8 h-8" alt="Python" />
                    <div className="flex-1">
                      <div className="h-2 bg-gray-200 rounded-full">
                        <div className="h-2 bg-blue-600 rounded-full" style={{width: '90%'}}></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" className="w-8 h-8" alt="MySQL" />
                    <div className="flex-1">
                      <div className="h-2 bg-gray-200 rounded-full">
                        <div className="h-2 bg-blue-600 rounded-full" style={{width: '85%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">Frontend Development</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="w-8 h-8" alt="React" />
                    <div className="flex-1">
                      <div className="h-2 bg-gray-200 rounded-full">
                        <div className="h-2 bg-blue-600 rounded-full" style={{width: '80%'}}></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" className="w-8 h-8" alt="WordPress" />
                    <div className="flex-1">
                      <div className="h-2 bg-gray-200 rounded-full">
                        <div className="h-2 bg-blue-600 rounded-full" style={{width: '75%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
              <Code className="w-8 h-8 mr-3 text-blue-600" />
              Projects
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <img 
                  src="https://images.unsplash.com/photo-1590859808308-3d2d9c515b1a?auto=format&fit=crop&q=80&w=800"
                  alt="Power BI Dashboard"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Power BI Visualizations</h3>
                  <p className="text-gray-600 mb-4">Created interactive dashboards for IPL Data, Student Data, Political Data, and Business Data analysis.</p>
                  <div className="flex space-x-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Power BI</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Data Analysis</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <img 
                  src="https://images.unsplash.com/photo-1526040652367-ac003a0475fe?auto=format&fit=crop&q=80&w=800"
                  alt="TTS Project"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Tamil Text to Speech</h3>
                  <p className="text-gray-600 mb-4">Hackathon project for converting Tamil text to natural-sounding speech using AI.</p>
                  <div className="flex space-x-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Python</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">AI/ML</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section id="activities" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
              <Activity className="w-8 h-8 mr-3 text-blue-600" />
              Activities & Achievements
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <BookOpen className="w-5 h-5 mr-2 text-blue-600" />
                  FOSS Activities
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• India FOSS 3.0 (Bangalore)</li>
                  <li>• Chennai FOSS 2.0</li>
                  <li>• Software Freedom Day 2023 & 2024</li>
                  <li>• VGLUG Hackathon 2024</li>
                  <li>• Hacktoberfest 2023 & 2024</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <Award className="w-5 h-5 mr-2 text-blue-600" />
                  Certifications
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Python AI/ML (VGLUG)</li>
                  <li>• Power BI (Jobaaj)</li>
                  <li>• Excel with AI (Office Master)</li>
                  <li>• Digital Marketing Bootcamp (BTREE)</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <Award className="w-5 h-5 mr-2 text-blue-600" />
                  Achievements
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Metabase Linux Configuration</li>
                  <li>• Hacktoberfest 2023 & 2024 Badges</li>
                  <li>• FOSS Hack 2024 Participant</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
              <Mail className="w-8 h-8 mr-3 text-blue-600" />
              Contact Me
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <p className="text-gray-600">+91 9363524498</p>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <p className="text-gray-600">bharathivragav206@gmail.com</p>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                  <p className="text-gray-600">
                    2/152, Mariyamman Kovil St,<br />
                    Bharammadesam (Post),<br />
                    Villupuram, Tamil Nadu - 605203
                  </p>
                </div>
              </div>

              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
                    placeholder="Your Name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:bharathivragav206@gmail.com" className="hover:text-blue-400 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
          <p>© 2024 Bharathi V. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
