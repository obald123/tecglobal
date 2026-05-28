"use client";

import { FadeImage } from "@/components/fade-image";

const solutions = [
  {
    id: 1,
    name: "Supply & Procurement",
    description: "Sourcing certified electrical components and equipment from global brands",
    image: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?q=80&w=800",
  },
  {
    id: 2,
    name: "On-Site Installation",
    description: "Professional setup and commissioning of electrical systems at your worksite",
    image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=800",
  },
  {
    id: 3,
    name: "Maintenance & Upgrades",
    description: "Scheduled servicing and system upgrades to keep operations running smoothly",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=800",
  },
  {
    id: 4,
    name: "Solar Water Heating",
    description: "Energy-efficient Hototech solar water heater supply and installation",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=800",
  },
  {
    id: 5,
    name: "Medium Voltage Systems",
    description: "Design and deployment of medium voltage distribution infrastructure",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800",
  },
  {
    id: 6,
    name: "Metering & Instruments",
    description: "Precision measurement tools and ground resistance testing equipment",
    image: "https://images.unsplash.com/photo-1616628188859-7a11abb6fcc9?q=80&w=800",
  },
];

export function CollectionSection() {
  return (
    <section id="solutions" className="bg-background">
      {/* Section Title */}
      <div className="px-6 py-20 md:px-12 lg:px-20 md:py-10">
        <h2 className="text-3xl font-medium tracking-tight text-foreground md:text-4xl">
          Our Solutions
        </h2>
      </div>

      {/* Solutions Grid/Carousel */}
      <div className="pb-24">
        {/* Mobile: Horizontal Carousel */}
        <div className="flex gap-6 overflow-x-auto px-6 pb-4 md:hidden snap-x snap-mandatory scrollbar-hide">
          {solutions.map((solution) => (
            <div key={solution.id} className="group flex-shrink-0 w-[75vw] snap-center">
              {/* Image */}
              <div className="relative aspect-[2/3] overflow-hidden rounded-2xl bg-secondary">
                <FadeImage
                  src={solution.image || "/placeholder.svg"}
                  alt={solution.name}
                  fill
                  className="object-cover group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="py-6">
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-medium leading-snug text-foreground">
                      {solution.name}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {solution.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 md:px-12 lg:px-20">
          {solutions.map((solution) => (
            <div key={solution.id} className="group">
              {/* Image */}
              <div className="relative aspect-[2/3] overflow-hidden rounded-2xl bg-secondary">
                <FadeImage
                  src={solution.image || "/placeholder.svg"}
                  alt={solution.name}
                  fill
                  className="object-cover group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="py-6">
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-medium leading-snug text-foreground">
                      {solution.name}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {solution.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
