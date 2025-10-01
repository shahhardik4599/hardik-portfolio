'use client'
import { PrimeHeader } from "@/components/prime-header"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Github, Linkedin, Download, Send } from "lucide-react"
import { useEffect, useState } from 'react'

export default function ContactPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [autoFillMsg, setAutoFillMsg] = useState(true)

  useEffect(() => {
    if (!autoFillMsg) return
    if (name || email) {
      setMessage(`Hello Hardik,\n\nBest regards,\n${name || ''} \n${email || ''}`)
    }
  }, [name, email, autoFillMsg])

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "hardikshah21200@gmail.com",
      action: "mailto:hardikshah21200@gmail.com",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "(408) 207-2591",
      action: "tel:+14082072591",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Fremont, CA, 94538",
      action: null,
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "hardikpshah21",
      action: "https://github.com/hardikpshah21",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "shahhardik4599",
      action: "https://linkedin.com/in/shahhardik4599",
    },
  ]

  function handleMailtoSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const name = String(fd.get("name") || "").trim()
    const email = String(fd.get("email") || "").trim()
    const subject = String(fd.get("subject") || "").trim() || `Portfolio contact from ${name || "Anonymous"}`
    const message = String(fd.get("message") || "").trim()

    // Build email body
    const body =
      `${message}`

    // Your inbox (where you want to receive messages)
    const to = "hardikshah21200@gmail.com"

    // Optional: also CC the sender so they get a copy
    // const cc = `&cc=${encodeURIComponent(email)}`

    const mailto = `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailto
  }

  return (
    <main className="min-h-screen bg-[#0f171e]">
      <PrimeHeader />

      <div className="relative h-[50vh] bg-gradient-to-r from-[#0f171e] via-[#1a2332] to-[#0f171e] flex items-center">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-7xl mx-auto px-4 z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold text-white mb-4">Get In Touch</h1>
            <p className="text-xl text-gray-300 mb-6">
              Ready to collaborate on our next project? Let's connect and build something amazing together.
            </p>
            <div className="flex items-center gap-4">
              <span className="bg-green-600 text-white px-3 py-1 rounded text-sm font-medium">
                ✓ Available for Opportunities
              </span>
              <span className="bg-[#00a8e1] text-white px-3 py-1 rounded text-sm font-medium">
                → Quick Response Time
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <div
                  key={index}
                  className="bg-[#1a2332] rounded-lg p-4 border border-gray-700 hover:border-[#00a8e1] transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-[#00a8e1]">{contact.icon}</div>
                    <div className="flex-1">
                      <div className="text-gray-400 text-sm">{contact.label}</div>
                      {contact.action ? (
                        <a
                          href={contact.action}
                          className="text-white hover:text-[#00a8e1] transition-colors font-medium"
                          target={contact.action.startsWith("http") ? "_blank" : undefined}
                          rel={contact.action.startsWith("http") ? "noopener noreferrer" : undefined}
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <div className="text-white font-medium">{contact.value}</div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-[#1a2332] rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">Download Resume</h3>
              <p className="text-gray-300 mb-4">Get a detailed overview of my experience, skills, and achievements.</p>
              <a
                href="https://drive.google.com/uc?export=download&id=1ayXpXWdH_SlZ5f3kBwaKXyjromBmGEIk"
                className="bg-[#00a8e1] hover:bg-[#0086b3] text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors inline-flex"
                target="_blank"  // opens a tab if needed
                rel="noopener noreferrer"
              >
                <Download className="w-5 h-5" />
                Download PDF Resume
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>
            <form className="space-y-6" onSubmit={handleMailtoSubmit}>
              <div>
                <label htmlFor="name" className="block text-white font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"    
                  className="w-full bg-[#1a2332] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-[#00a8e1] focus:outline-none transition-colors"
                  placeholder="Your full name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"    
                  className="w-full bg-[#1a2332] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-[#00a8e1] focus:outline-none transition-colors"
                  placeholder="your.email@example.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-white font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full bg-[#1a2332] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-[#00a8e1] focus:outline-none transition-colors"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full bg-[#1a2332] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-[#00a8e1] focus:outline-none transition-colors resize-none"
                  placeholder="Any opportunities!!?"
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value)
                    // user started typing; stop auto-updating
                    setAutoFillMsg(e.target.value.trim() === '')
                  }}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#00a8e1] hover:bg-[#0086b3] text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 bg-[#1a2332] rounded-lg p-8 border border-gray-700 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <h3 className="text-xl font-bold text-white">Currently Available</h3>
          </div>
          <p className="text-gray-300 mb-6">
            I'm actively seeking new opportunities in Software Engineering, AI/ML, and Full-Stack Development roles.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-[#232f3e] text-gray-300 px-4 py-2 rounded-lg">Full-time Positions</span>
            {/* <span className="bg-[#232f3e] text-gray-300 px-4 py-2 rounded-lg">Contract Work</span>
            <span className="bg-[#232f3e] text-gray-300 px-4 py-2 rounded-lg">Consulting Projects</span>
            <span className="bg-[#232f3e] text-gray-300 px-4 py-2 rounded-lg">Freelance Opportunities</span> */}
          </div>
        </div>
      </div>
    </main>
  )
}
