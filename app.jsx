import { Canvas } from "@react-three/fiber"
import { OrbitControls, Float, Text } from "@react-three/drei"
import { motion } from "framer-motion"
import { useState } from "react"

function FloatingSphere() {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh>
        <sphereGeometry args={[1.2, 64, 64]} />
        <meshStandardMaterial
          color="#00f5ff"
          metalness={0.6}
          roughness={0.2}
          emissive="#00f5ff"
          emissiveIntensity={0.1}
        />
      </mesh>
    </Float>
  )
}

function Hero3D() {
  return (
    <Canvas camera={{ position: [0, 0, 4] }} className="rounded-3xl">
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} />
      <pointLight position={[-5, -5, -5]} intensity={0.5} />
      <FloatingSphere />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
    </Canvas>
  )
}

function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
          >
            HARUN
          </motion.div>

          <div className="hidden md:flex space-x-8">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 pb-4"
          >
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  )
}

export default function App() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white min-h-screen overflow-x-hidden">
      <Navigation />

      {/* HERO */}
      <section id="home" className="min-h-screen flex items-center pt-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <p className="text-cyan-400 font-medium">Hello, I'm</p>
              <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-white via-cyan-100 to-purple-200 bg-clip-text text-transparent">
                Harun Al Roshid Mollah
              </h1>
              <p className="text-xl text-gray-400">
                Frontend Engineer · UI Architect · Animation Enthusiast
              </p>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed max-w-lg">
              Crafting exceptional digital experiences with modern web technologies.
              Passionate about performance, design, and user-centered solutions.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#projects"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500 hover:text-black transition-all duration-300"
              >
                Get In Touch
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="relative"
          >
            <div className="w-full h-96 lg:h-[500px] relative">
              <Hero3D />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Passionate about creating digital experiences that matter
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold text-cyan-400">Who I Am</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm a frontend developer with over 5 years of experience crafting
                exceptional user experiences. My journey began with a fascination
                for how technology can solve real-world problems and create
                beautiful, functional interfaces.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                I specialize in modern web technologies, from React and Next.js
                to Three.js and advanced animations. My approach combines technical
                expertise with creative problem-solving to deliver solutions that
                not only work flawlessly but also delight users.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/20">
                  <div className="text-3xl font-bold text-cyan-400">50+</div>
                  <div className="text-gray-400">Projects Completed</div>
                </div>
                <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20">
                  <div className="text-3xl font-bold text-purple-400">5+</div>
                  <div className="text-gray-400">Years Experience</div>
                </div>
                <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-cyan-500/10 border border-green-500/20">
                  <div className="text-3xl font-bold text-green-400">100%</div>
                  <div className="text-gray-400">Client Satisfaction</div>
                </div>
                <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20">
                  <div className="text-3xl font-bold text-orange-400">24/7</div>
                  <div className="text-gray-400">Support Available</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-32 px-6 bg-gradient-to-b from-gray-900/50 to-black/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A comprehensive toolkit for modern web development
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: "React", color: "from-cyan-500 to-blue-500", icon: "⚛️" },
              { name: "Next.js", color: "from-gray-700 to-gray-900", icon: "▲" },
              { name: "Three.js", color: "from-purple-500 to-pink-500", icon: "🎲" },
              { name: "Framer Motion", color: "from-pink-500 to-rose-500", icon: "🎭" },
              { name: "GSAP", color: "from-green-500 to-emerald-500", icon: "🎬" },
              { name: "Tailwind CSS", color: "from-cyan-400 to-blue-400", icon: "🎨" },
              { name: "TypeScript", color: "from-blue-500 to-indigo-500", icon: "🔷" },
              { name: "Node.js", color: "from-green-500 to-lime-500", icon: "🟢" },
              { name: "WebGL", color: "from-orange-500 to-red-500", icon: "🌐" },
              { name: "Figma", color: "from-purple-400 to-pink-400", icon: "🎯" },
              { name: "Git", color: "from-orange-500 to-red-500", icon: "📚" },
              { name: "AWS", color: "from-yellow-500 to-orange-500", icon: "☁️" },
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.05 }}
                className={`group relative p-6 rounded-2xl bg-gradient-to-br ${skill.color} bg-opacity-10 border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-300 cursor-pointer overflow-hidden`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 text-center">
                  <div className="text-4xl mb-3">{skill.icon}</div>
                  <h3 className="font-semibold text-white group-hover:text-cyan-300 transition-colors">
                    {skill.name}
                  </h3>
                </div>
                <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Showcasing my latest work and creative solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "E-Commerce Platform",
                description: "A modern, responsive e-commerce solution with advanced animations and seamless user experience.",
                tech: ["React", "Next.js", "Stripe", "Tailwind"],
                gradient: "from-blue-500/20 to-cyan-500/20",
                border: "border-blue-500/30"
              },
              {
                title: "3D Portfolio Website",
                description: "Interactive portfolio featuring Three.js animations and immersive web experiences.",
                tech: ["Three.js", "React", "Framer Motion", "WebGL"],
                gradient: "from-purple-500/20 to-pink-500/20",
                border: "border-purple-500/30"
              },
              {
                title: "Design System",
                description: "Comprehensive design system with reusable components and consistent branding.",
                tech: ["React", "Storybook", "TypeScript", "Figma"],
                gradient: "from-green-500/20 to-emerald-500/20",
                border: "border-green-500/30"
              },
              {
                title: "Real-time Dashboard",
                description: "Analytics dashboard with real-time data visualization and interactive charts.",
                tech: ["React", "D3.js", "Socket.io", "Node.js"],
                gradient: "from-orange-500/20 to-red-500/20",
                border: "border-orange-500/30"
              },
              {
                title: "Mobile App UI",
                description: "Cross-platform mobile application with native-like performance and animations.",
                tech: ["React Native", "Expo", "GSAP", "Firebase"],
                gradient: "from-pink-500/20 to-rose-500/20",
                border: "border-pink-500/30"
              },
              {
                title: "AI-Powered Tool",
                description: "Machine learning integrated web application for automated content generation.",
                tech: ["Python", "TensorFlow", "React", "FastAPI"],
                gradient: "from-indigo-500/20 to-purple-500/20",
                border: "border-indigo-500/30"
              }
            ].map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className={`group relative p-8 rounded-3xl bg-gradient-to-br ${project.gradient} backdrop-blur-sm border ${project.border} hover:border-white/30 transition-all duration-300 overflow-hidden`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm bg-white/10 rounded-full text-cyan-300 border border-white/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button className="w-full py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105">
                    View Project
                  </button>
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-2xl group-hover:blur-3xl transition-all duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-32 px-6 bg-gradient-to-b from-black/50 to-gray-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Let's Work Together
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Ready to bring your ideas to life? I'd love to hear about your project
              and discuss how we can create something amazing together.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 mb-12"
          >
            <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20">
              <div className="text-3xl mb-4">📧</div>
              <h3 className="font-semibold mb-2 text-cyan-400">Email</h3>
              <p className="text-gray-300">harun@example.com</p>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20">
              <div className="text-3xl mb-4">📱</div>
              <h3 className="font-semibold mb-2 text-purple-400">Phone</h3>
              <p className="text-gray-300">+1 (555) 123-4567</p>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20">
              <div className="text-3xl mb-4">📍</div>
              <h3 className="font-semibold mb-2 text-green-400">Location</h3>
              <p className="text-gray-300">San Francisco, CA</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex justify-center space-x-6"
          >
            {[
              { name: "GitHub", icon: "🐙", link: "#" },
              { name: "LinkedIn", icon: "💼", link: "#" },
              { name: "Twitter", icon: "🐦", link: "#" },
              { name: "Dribbble", icon: "🏀", link: "#" }
            ].map((social) => (
              <a
                key={social.name}
                href={social.link}
                className="w-14 h-14 rounded-full bg-gradient-to-br from-white/10 to-white/5 border border-white/20 flex items-center justify-center hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 transform hover:scale-110"
                aria-label={social.name}
              >
                <span className="text-xl">{social.icon}</span>
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400 mb-4">
              © {new Date().getFullYear()} Harun Al Roshid Mollah. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm">
              Built with ❤️ using React, Three.js, and Tailwind CSS
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}