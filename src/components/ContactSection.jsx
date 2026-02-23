'use client'

import { Check, Github, Instagram, Linkedin, Loader2, Mail } from "lucide-react"
import { useState } from "react"
import emailjs from "@emailjs/browser"

export function ContactSection() {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  })
  
  const [status, setStatus] = useState("idle") // idle | loading | success | error

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus("loading")

    try {
      await sendEmail()

      setStatus("success")
      setFormData({
        from_name: "",
        from_email: "",
        message: "",
      })
    } catch (error) {
      setStatus("error")
      console.log(error)
    }
  }

  const sendEmail = async () => {
    await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      formData,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    )
  }

  const MAX_LENGHT = 1000

  const handleUpdateCharsLabel = (message) => {
    formData.message.length <= MAX_LENGHT ?
      setFormData({ ...formData, message: message })
      : setFormData({ ...formData, message: message.slice(0, MAX_LENGHT) })
  }

  return (
    <section id="contact" className="relative py-32 border-t border-border">
      <div className="container">
        <div className="max-w-2xl mx-auto">
          <div className="mb-12 space-y-4">
            <p className="code-comment">get in touch</p>
            <h2 className="text-4xl font-bold tracking-tight">
              <span className="text-primary">{">"}</span> Contact
            </h2>
            <p className="text-muted-foreground font-mono text-sm">
              Have a project in mind? Wanna have a talk? Leave me a message!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="font-mono text-xs text-muted-foreground">
                <span className="text-primary/60">const </span>fullName
              </label>
              <input
                type="text"
                required
                value={formData.from_name}
                onChange={(e) =>
                  setFormData({ ...formData, from_name: e.target.value })
                }
                className="w-full bg-secondary border border-border rounded-md px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:shadow-[var(--glow-primary)] transition-all"
                placeholder='"your first and last name"'
              />
            </div>

            <div className="space-y-2">
              <label className="font-mono text-xs text-muted-foreground">
                <span className="text-primary/60">const </span>email
              </label>
              <input
                type="email"
                required
                value={formData.from_email}
                onChange={(e) => {
                  setFormData({ ...formData, from_email: e.target.value })
                }}
                className="w-full bg-secondary border border-border rounded-md px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:shadow-[var(--glow-primary)] transition-all"
                placeholder='"you@email.com"'
              />
            </div>

            <div className="space-y-0 mb-4">
              <label className="font-mono text-xs text-muted-foreground">
                <span className="text-primary/60">const </span>message
              </label>
              <textarea
                required
                rows={10}
                maxLength={MAX_LENGHT}
                value={formData.message}
                onChange={(e) =>
                  handleUpdateCharsLabel(e.target.value)
                }
                className="w-full bg-secondary border border-border rounded-md px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:shadow-[var(--glow-primary)] transition-all resize-none"
                placeholder='"tell me what you have in mind..."'
              />

              <div className="w-full text-sm text-muted-foreground flex justify-end">
                {formData.message.length} / {MAX_LENGHT}
              </div>
            </div>

            <button
              type="submit"
              disabled={status == "loading"}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-primary/30 bg-primary/10 text-primary font-mono text-sm transition-all hover:bg-primary/20 hover:shadow-[var(--glow-primary)] disabled:opacity-50"
            >
              {status == "loading" ? (
                <span className="inline-flex items-center gap-3">
                  {/* <Check size={16} className="mt-0.5" /> */}
                  {/* 200 MESSAGE SENT */}
                  <Loader2 size={16} className="mt-0.5 animate-spin" />
                  sending...
                </span>
              ) : "> send()"}
            </button>

            {status == "success" && (
              <div className="text-primary">
                Message sent successfully.
              </div>
            )}

            {status == "error" && (
              <div className="text-rose-400">
                Error while sending the message. Message not sent.
              </div>
            )}
          </form>

          {/* Social links */}
          <div className="mt-16 pt-8 border-t border-border">
            <p className="code-comment mb-4">you can also find me here</p>
            <div className="flex gap-6 font-mono text-sm">
              <a
                href="https://github.com/marcxzz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
              >
                <Github size={16} />
                github
              </a>
              <a
                href="https://linkedin.com/in/marco-angioni"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin size={16} />
                linkedin
              </a>
              <a
                href="https://instagram.com/shot_by_marcxzz_"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram size={16} />
                instagram
              </a>
              <a
                href="mailto:marcoangioni2006@gmail.com?subject=New%20Email%20from%20Portfolio&body=Hi%20Marco%2C%20let's%20get%20in%20touch!"
                target="_blank"
                className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail size={16} />
                email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}