"use client";

import React, { useState } from "react";
import { Download, Mail } from "lucide-react";
import Image from "next/image";

export function Header() {
  const [isDownloading, setIsDownloading] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);

  const handleDownloadResume = () => {
    setIsDownloading(true);
    const link = document.createElement("a");
    link.href = "/justin_decastro_resume.pdf";
    link.download = "Justin_DeCastro_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => setIsDownloading(false), 1500);
  };

  const handleSendEmail = async () => {
    setIsEmailSent(true);
    try {
      window.location.href =
        "mailto:decastrojustin321@gmail.com?subject=Hello%20Justin";
    } catch (error) {
      console.error("Error sending email:", error);
    }
    setTimeout(() => setIsEmailSent(false), 2000);
  };

  return (
    <section className="relative min-h-screen bg-background flex items-center justify-center px-4 py-8 md:py-16">
      {/* Mobile Layout - Vertical Card */}
      <div className="w-full md:hidden max-w-md mx-auto">
        <div className="bg-secondary/30 rounded-2xl overflow-hidden border border-border/50 shadow-2xl">
          {/* Profile Image - Mobile */}
          <div className="w-full aspect-square relative overflow-hidden">
            <Image
              src="/justin.png"
              alt="Justin M. De Castro"
              fill
              className="object-cover object-top"
              priority
            />
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3 whitespace-nowrap">
                Justin M. De Castro
              </h1>
              <div className="h-1 w-16 bg-accent rounded-full mb-4"></div>
              <p className="text-base sm:text-lg text-accent font-semibold">
                Full Stack Developer / Junior IT Manager
              </p>
              <p className="text-muted-foreground mt-2 flex items-center gap-2">
                <span>📍</span> Philippines
              </p>
            </div>

            <div>
              <p className="text-foreground/90 leading-relaxed text-sm sm:text-base">
                Full Stack Developer with 2+ years of hands-on experience
                building web applications and managing IT infrastructure.
                Specialized in Next.js, Laravel, MySQL, and TypeScript.
                Passionate about creating scalable solutions and mentoring
                junior developers.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 py-4">
              <div className="bg-secondary/40 rounded-lg p-4 border border-border">
                <p className="text-accent font-bold text-2xl sm:text-3xl">2+</p>
                <p className="text-muted-foreground text-xs sm:text-sm mt-1">
                  Years Experience
                </p>
              </div>
              <div className="bg-secondary/40 rounded-lg p-4 border border-border">
                <p className="text-accent font-bold text-2xl sm:text-3xl">6</p>
                <p className="text-muted-foreground text-xs sm:text-sm mt-1">
                  Projects Delivered
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3 pt-4">
              <button
                onClick={handleDownloadResume}
                disabled={isDownloading}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all disabled:opacity-50"
              >
                <Download size={20} />
                {isDownloading ? "Downloading..." : "Download Resume"}
              </button>
              <button
                onClick={handleSendEmail}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-all"
              >
                <Mail size={20} />
                {isEmailSent ? "Email opened!" : "Send Message"}
              </button>
            </div>

            <div className="pt-4 border-t border-border/50">
              <p className="text-muted-foreground text-xs sm:text-sm mb-3 font-semibold">
                Get in touch:
              </p>
              <div className="flex flex-col gap-2 text-xs sm:text-sm">
                <a
                  href="mailto:decastrojustin321@gmail.com"
                  className="text-accent hover:text-accent/80 transition-colors break-all"
                >
                  decastrojustin321@gmail.com
                </a>
                <a
                  href="tel:+639456754591"
                  className="text-accent hover:text-accent/80 transition-colors"
                >
                  +63 945-675-4591
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout - Two Column */}
      <div className="hidden md:block w-full max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Profile Image */}
          <div className="flex justify-center">
            <div className="w-80 h-96 rounded-2xl overflow-hidden border border-border/50 shadow-2xl relative">
              <Image
                src="/justin.png"
                alt="Justin M. De Castro"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4 whitespace-nowrap">
                Justin M. De Castro
              </h1>
              <div className="h-1 w-20 bg-accent rounded-full mb-6"></div>
              <p className="text-xl text-accent font-semibold mb-2">
                Full Stack Developer / Junior IT Manager
              </p>
              <p className="text-muted-foreground flex items-center gap-2">
                <span>📍</span> Philippines
              </p>
            </div>

            <p className="text-foreground/90 leading-relaxed text-lg max-w-lg">
              Full Stack Developer with 2+ years of hands-on experience building
              web applications and managing IT infrastructure. Specialized in
              Next.js, Laravel, MySQL, and TypeScript. Passionate about creating
              scalable solutions and mentoring junior developers.
            </p>

            <div className="grid grid-cols-2 gap-6 max-w-md">
              <div className="bg-secondary/30 rounded-lg p-6 border border-border">
                <p className="text-accent font-bold text-4xl">2+</p>
                <p className="text-muted-foreground mt-2">Years Experience</p>
              </div>
              <div className="bg-secondary/30 rounded-lg p-6 border border-border">
                <p className="text-accent font-bold text-4xl">6</p>
                <p className="text-muted-foreground mt-2">Projects Delivered</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={handleDownloadResume}
                disabled={isDownloading}
                className="flex items-center justify-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all disabled:opacity-50"
              >
                <Download size={20} />
                {isDownloading ? "Downloading..." : "Download Resume"}
              </button>
              <button
                onClick={handleSendEmail}
                className="flex items-center justify-center gap-2 px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-all"
              >
                <Mail size={20} />
                {isEmailSent ? "Email opened!" : "Send Message"}
              </button>
            </div>

            <div className="pt-6 border-t border-border/50">
              <p className="text-muted-foreground text-sm mb-3 font-semibold">
                Get in touch:
              </p>
              <div className="flex flex-col gap-2 text-sm">
                <a
                  href="mailto:decastrojustin321@gmail.com"
                  className="text-accent hover:text-accent/80 transition-colors"
                >
                  decastrojustin321@gmail.com
                </a>
                <a
                  href="tel:+639456754591"
                  className="text-accent hover:text-accent/80 transition-colors"
                >
                  +63 945-675-4591
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
