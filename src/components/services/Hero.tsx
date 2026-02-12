import React from 'react'
import { Button } from '../ui/button'
import { suite } from 'node:test';

export interface HeroProps {
  title: string;
  subtitle?: string;
  description: string;
  imageUrl: string;
}

const Hero = ({ title, subtitle, description, imageUrl }: HeroProps) => {
  return (
    <section className="relative py-20 lg:py-20 flex items-center justify-center overflow-hidden">
        {/* Background Image with Light Warm Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundPosition: "center 30%", // adjusts focus on faces if needed
          }}
        >
          {/* Light warm overlay - creates soft, golden, elegant feel */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/80 to-white/90" />
          <div className="absolute inset-0 bg-gradient-to-t from-amber-50/70 via-transparent to-transparent" />

          {/* Subtle warm radial glow in center */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(251,191,36,0.12)_0%,transparent_60%)]" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-5xl md:text-6xl font-semibold font-serif mb-6 text-foreground">
              {title}
            </h1>
            <div className='flex flex-col gap-2'>
            <p className="text-xl italic font-semibold text-muted-foreground">
              {subtitle}
            </p>
            <p className="text-xl text-muted-foreground">
              {description}
            </p>
            </div>

            <Button
              variant="secondary"
              size="lg"
              className="text-lg gap-3"
              onClick={() => window.open("https://wa.me/66817342027", "_blank")}
            >
              BOOK A CONSULTANT
            </Button>
            {/* </div> */}
          </div>
        </div>
      </section>
  )
}

export default Hero