"use client";

import { FadeImage } from "@/components/fade-image";

const features = [
  {
    title: "Circuit Breakers (MCCB & MCB)",
    description: "Schneider Electric · ABB",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800",
  },
  {
    title: "Soft Starters & Variable Speed Drives",
    description: "ABB · Siemens",
    image: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?q=80&w=800",
  },
  {
    title: "Medium & Low Voltage Equipment",
    description: "Schneider Electric · Siemens",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800",
  },
  {
    title: "Instruments & Meters",
    description: "Fluke · Hototech",
    image: "https://images.unsplash.com/photo-1616628188859-7a11abb6fcc9?q=80&w=800",
  },
  {
    title: "Solar Water Heaters",
    description: "Hototech",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=800",
  },
  {
    title: "Surge Protection & Arresters",
    description: "ABB · Schneider Electric",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=800",
  },
];

export function FeaturedProductsSection() {
  return (
    <section id="products" className="bg-background">
      {/* Section Title */}
      <div className="px-6 py-20 text-center md:px-12 md:py-28 lg:px-20 lg:py-32 lg:pb-20">
        <h2 className="text-3xl font-medium tracking-tight text-foreground md:text-4xl lg:text-5xl">
          Reliable Equipment.
          <br />
          Trusted Brands.
        </h2>
        <p className="mx-auto mt-6 max-w-md text-sm text-muted-foreground">
          Our product range
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 gap-4 px-6 pb-20 md:grid-cols-3 md:px-12 lg:px-20">
        {features.map((feature) => (
          <div key={feature.title} className="group">
            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <FadeImage
                src={feature.image || "/placeholder.svg"}
                alt={feature.title}
                fill
                className="object-cover group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="py-6">
              <p className="mb-2 text-xs uppercase tracking-widest text-muted-foreground">
                {feature.description}
              </p>
              <h3 className="text-foreground text-xl font-semibold">
                {feature.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Link */}
      <div className="flex justify-center px-6 pb-28 md:px-12 lg:px-20">
        
      </div>
    </section>
  );
}
