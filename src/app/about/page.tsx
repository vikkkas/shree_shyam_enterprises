import type { Metadata } from "next";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import { Award, CheckCircle2, Users, TrendingUp } from "lucide-react";
import Process from "@/components/Process";
import CTAStrip from "@/components/CTAStrip";
import { certifications, machineList } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Shree Shyam Enterprise — founded 2022 in Ankleshwar, Gujarat. ISO 9001:2015 & ZED Bronze certified aluminium casting manufacturer. Trusted by BHEL & Aditya Birla.",
  keywords: [
    "about Shree Shyam Enterprise",
    "aluminium manufacturer Gujarat",
    "ISO 9001 casting",
    "Bhrigunath Prasad",
    "Ankleshwar manufacturer",
  ],
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Us | Shree Shyam Enterprise",
    description:
      "Learn how Shree Shyam Enterprise grew from ₹10 Lakh to ₹1 Crore revenue with ISO-certified precision aluminium manufacturing.",
    url: "/about",
    images: [{ url: "/images/intro-1.png", width: 1200, height: 630 }],
  },
};

const galleryImages = Array.from({ length: 12 }, (_, i) => ({
  src: `/images/gallery/g${i + 1}.jpg`,
  alt: `Manufacturing gallery image ${i + 1}`,
}));

const milestones = [
  {
    year: "2022",
    event: "Founded",
    detail: "Shree Shyam Enterprise established with ₹10 Lakh investment",
  },
  {
    year: "2023",
    event: "ISO Certified",
    detail: "Achieved ISO 9001:2015 Quality Management System certification",
  },
  {
    year: "2024",
    event: "ZED Bronze",
    detail:
      "Earned ZED Bronze certification by Ministry of MSME for quality & sustainability",
  },
  {
    year: "2025",
    event: "₹50 Lakh Revenue",
    detail: "Expanded client base including BHEL and Aditya Birla Insulators",
  },
  {
    year: "2026",
    event: "₹1 Crore Milestone",
    detail: "Reached ₹1 Crore annual revenue with 6+ major industrial clients",
  },
  {
    year: "2030",
    event: "Target ₹10 Crore",
    detail: "Expansion plan targeting ₹10 Crore revenue and national scale",
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.shreeshyam-enterprise.com" },
    { "@type": "ListItem", position: 2, name: "About Us", item: "https://www.shreeshyam-enterprise.com/about" },
  ],
};

export default function AboutPage() {
  return (
    <>
      <Script id="about-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {/* Page Hero */}
      <section className="relative min-h-[50vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/intro-1.png"
            alt="About Shree Shyam Enterprise"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0E1B2E]/95 via-[#0E1B2E]/80 to-[#0E1B2E]/50" />
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#E05A1E]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 pt-32">
          <p className="text-[#E05A1E] font-body font-medium tracking-[0.25em] uppercase text-xs mb-3">
            Who We Are
          </p>
          <h1 className="font-heading font-black text-white uppercase text-5xl md:text-7xl leading-none mb-4">
            About Us
          </h1>
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm font-body">
            <Link href="/" className="text-[#8BA3BF] hover:text-white transition-colors">
              Home
            </Link>
            <span className="text-[#8BA3BF]">/</span>
            <span className="text-[#E05A1E]">About Us</span>
          </nav>
        </div>
      </section>

      {/* Company Story */}
      <section className="bg-[#0E1B2E] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#E05A1E] font-body font-medium tracking-[0.25em] uppercase text-xs mb-3">
                Our Story
              </p>
              <h2 className="font-heading font-bold text-4xl md:text-5xl text-white mb-6 leading-tight">
                Built on Precision,<br />Driven by Vision
              </h2>
              <p className="text-[#8BA3BF] font-body leading-relaxed mb-5">
                Shree Shyam Enterprise was founded in 2022 in the heart of
                Gujarat&apos;s industrial belt — Ankleshwar — with a clear purpose:
                to provide precision aluminium castings and flanges that meet
                the exacting standards of India&apos;s leading industries.
              </p>
              <p className="text-[#8BA3BF] font-body leading-relaxed mb-5">
                Starting with a modest ₹10 Lakh investment and a deep passion
                for precision engineering, we built our facility from the ground
                up at Kamdhenu Industrial Park 2. Within two years, we achieved
                ISO 9001:2015 certification and ZED Bronze status — milestones
                that reflect our unwavering commitment to quality.
              </p>
              <p className="text-[#8BA3BF] font-body leading-relaxed mb-8">
                Today, we proudly serve industrial giants including BHEL,
                Aditya Birla Insulators, RC Ravikiran Ceramic, and Mahalaxmi
                Ceramic Industries. With ₹1 Crore revenue in 2026, our sights
                are firmly set on the ₹10 Crore milestone by 2030.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: "2022", label: "Founded" },
                  { value: "₹1 Cr", label: "2026 Revenue" },
                  { value: "ISO", label: "9001:2015" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-[#1A2D48] p-4 text-center">
                    <p className="font-heading font-black text-[#E05A1E] text-2xl">
                      {stat.value}
                    </p>
                    <p className="text-[#8BA3BF] text-xs uppercase tracking-widest font-body mt-1">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Designed growth visualization card */}
            <div className="relative">
              {/* Main card */}
              <div className="bg-[#1A2D48] border border-white/5 overflow-hidden">
                {/* Orange header bar */}
                <div className="bg-[#E05A1E] px-6 py-4 flex items-center justify-between">
                  <span className="font-heading font-black text-white text-lg uppercase tracking-wide">
                    Company Growth
                  </span>
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>

                {/* Timeline visual */}
                <div className="px-6 pt-8 pb-6">
                  <div className="relative">
                    {/* Connector line */}
                    <div className="absolute top-4 left-4 right-4 h-0.5 bg-gradient-to-r from-[#E05A1E] via-[#E05A1E] to-[#E05A1E]/30" />
                    <div className="flex justify-between relative z-10">
                      {[
                        { year: "2022", amount: "₹10 Lakh", label: "Founded", done: true },
                        { year: "2026", amount: "₹1 Crore", label: "Achieved", done: true },
                        { year: "2030", amount: "₹10 Crore", label: "Target", done: false },
                      ].map((m) => (
                        <div key={m.year} className="flex flex-col items-center gap-2">
                          <div
                            className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ${
                              m.done
                                ? "bg-[#E05A1E] border-[#E05A1E]"
                                : "bg-[#1A2D48] border-[#E05A1E] border-dashed"
                            }`}
                          >
                            {m.done ? (
                              <div className="w-2.5 h-2.5 bg-white rounded-full" />
                            ) : (
                              <div className="w-2.5 h-2.5 border border-[#E05A1E] rounded-full" />
                            )}
                          </div>
                          <span className="font-heading font-black text-[#E05A1E] text-xl leading-none">
                            {m.amount}
                          </span>
                          <span className="text-white font-body font-semibold text-xs">
                            {m.year}
                          </span>
                          <span className="text-[#8BA3BF] text-[10px] uppercase tracking-widest font-body">
                            {m.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-white/5 mx-6" />

                {/* Certifications row */}
                <div className="grid grid-cols-3 divide-x divide-white/5 px-0">
                  {[
                    { name: "ISO", sub: "9001:2015" },
                    { name: "ZED", sub: "Bronze" },
                    { name: "Udyam", sub: "Registered" },
                  ].map((c) => (
                    <div key={c.name} className="flex flex-col items-center py-5 px-3">
                      <span className="font-heading font-black text-white text-base">{c.name}</span>
                      <span className="text-[#8BA3BF] text-[10px] uppercase tracking-widest font-body text-center">
                        {c.sub}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating clients box */}
              <div className="mt-4 bg-[#070F1A] border border-white/5 p-5">
                <p className="text-[#8BA3BF] text-[10px] uppercase tracking-widest font-body mb-3">
                  Trusted by
                </p>
                <div className="flex flex-wrap gap-2">
                  {["BHEL", "Aditya Birla", "RC Ravikiran", "Mahalaxmi Ceramic"].map((c) => (
                    <span
                      key={c}
                      className="border border-[#E05A1E]/30 text-white/70 text-xs font-body px-3 py-1"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline / Milestones */}
      <section className="bg-[#152338] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#E05A1E] font-body font-medium tracking-[0.25em] uppercase text-xs mb-3">
              Our Journey
            </p>
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-white mb-4">
              Growth Milestones
            </h2>
          </div>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#E05A1E]/20 hidden md:block" />
            <div className="space-y-8 md:space-y-0">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`relative flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-0 mb-8 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`}>
                    <div className={`bg-[#1A2D48] p-6 inline-block max-w-sm ${index % 2 === 0 ? "md:ml-auto" : ""}`}>
                      <span className="text-[#E05A1E] font-heading font-black text-3xl">
                        {milestone.year}
                      </span>
                      <h3 className="font-heading font-bold text-white text-xl mt-1 mb-2">
                        {milestone.event}
                      </h3>
                      <p className="text-[#8BA3BF] text-sm font-body leading-relaxed">
                        {milestone.detail}
                      </p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-[#E05A1E] rounded-full border-4 border-[#152338]" />

                  {/* Empty spacer for alternating */}
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="bg-[#0E1B2E] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Founder portrait card — designed, no raw presentation image */}
            <div className="relative">
              {/* Main portrait card */}
              <div className="bg-[#1A2D48] border border-white/5 overflow-hidden">
                {/* Portrait photo section */}
                <div className="relative bg-[#152338] overflow-hidden">
                  {/* Orange left accent bar */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#E05A1E] z-10" />
                  {/* Grid overlay */}
                  <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(0deg,transparent,transparent 30px,white 30px,white 31px),repeating-linear-gradient(90deg,transparent,transparent 30px,white 30px,white 31px)",
                    }}
                  />

                  {/* Photo + name row */}
                  <div className="relative z-10 flex items-center gap-6 px-8 py-8">
                    {/* Circular portrait */}
                    <div className="relative flex-shrink-0">
                      <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-[#E05A1E]/60 ring-4 ring-[#E05A1E]/10">
                        <Image
                          src="/images/founder.png"
                          alt="Bhrigunath Prasad — Founder & MD, Shree Shyam Enterprise"
                          width={96}
                          height={96}
                          className="object-cover object-top w-full h-full"
                        />
                      </div>
                      {/* Small orange dot badge */}
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#E05A1E] rounded-full flex items-center justify-center">
                        <TrendingUp className="w-3 h-3 text-white" />
                      </div>
                    </div>

                    {/* Name + title */}
                    <div>
                      <h3 className="font-heading font-black text-white text-xl leading-tight">
                        Bhrigunath Prasad
                      </h3>
                      <p className="text-[#E05A1E] text-[10px] font-body tracking-[0.2em] uppercase mt-1">
                        Founder &amp; Managing Director
                      </p>
                      <p className="text-[#8BA3BF] text-xs font-body mt-1">
                        Shree Shyam Enterprise · Est. 2022
                      </p>
                    </div>
                  </div>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 divide-x divide-white/5">
                  {[
                    { val: "2022", label: "Founded" },
                    { val: "₹1 Cr", label: "Revenue" },
                    { val: "6+", label: "Clients" },
                  ].map((s) => (
                    <div key={s.label} className="flex flex-col items-center py-5">
                      <span className="font-heading font-black text-[#E05A1E] text-xl leading-none">
                        {s.val}
                      </span>
                      <span className="text-[#8BA3BF] text-[10px] uppercase tracking-widest font-body mt-1">
                        {s.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certification badges below */}
              <div className="mt-4 flex gap-3">
                {["ISO 9001:2015", "ZED Bronze", "Udyam Reg."].map((cert) => (
                  <div
                    key={cert}
                    className="flex-1 bg-[#070F1A] border border-[#E05A1E]/20 py-3 px-2 text-center"
                  >
                    <span className="text-[#E05A1E] text-[10px] font-bold tracking-wide uppercase font-body block">
                      {cert}
                    </span>
                  </div>
                ))}
              </div>

              {/* Orange corner accent */}
              <div className="absolute -bottom-3 -right-3 w-12 h-12 bg-[#E05A1E] z-[-1]" />
            </div>

            {/* Content */}
            <div>
              <p className="text-[#E05A1E] font-body font-medium tracking-[0.25em] uppercase text-xs mb-3">
                Founder&apos;s Vision
              </p>
              <h2 className="font-heading font-bold text-4xl text-white mb-6 leading-tight">
                Engineering Excellence,<br />Built from Ground Up
              </h2>

              {/* Quote */}
              <div className="border-l-4 border-[#E05A1E] pl-6 mb-8">
                <p className="text-white/90 font-body italic text-lg leading-relaxed">
                  "Our mission is simple — deliver aluminium components of the
                  highest precision, on time, every time. Quality is not just
                  our standard; it is our identity."
                </p>
                <p className="text-[#E05A1E] font-body font-semibold text-sm mt-3">
                  — Bhrigunath Prasad
                </p>
              </div>

              <p className="text-[#8BA3BF] font-body leading-relaxed mb-5">
                With a vision to transform Gujarat&apos;s aluminium manufacturing
                landscape, Bhrigunath Prasad established Shree Shyam Enterprise
                with a relentless focus on precision engineering and customer
                satisfaction.
              </p>
              <p className="text-[#8BA3BF] font-body leading-relaxed mb-8">
                His hands-on approach to quality control and deep understanding
                of industrial requirements has earned the trust of marquee
                clients across India&apos;s ceramics, power, and heavy engineering
                sectors.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Award, text: "ISO 9001:2015 Certified" },
                  { icon: CheckCircle2, text: "ZED Bronze Certified" },
                  { icon: Users, text: "6+ Major Clients" },
                  { icon: TrendingUp, text: "500% Revenue Growth" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3">
                    <item.icon className="w-5 h-5 text-[#E05A1E] flex-shrink-0" />
                    <span className="text-white/80 text-sm font-body">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Women Empowerment */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/women-empowerment.png"
            alt="Women Empowerment at Shree Shyam Enterprise"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#0E1B2E]/85" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <p className="text-[#E05A1E] font-body font-medium tracking-[0.25em] uppercase text-xs mb-3">
              Social Responsibility
            </p>
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-white mb-6 leading-tight">
              Empowering Women<br />in Manufacturing
            </h2>
            <p className="text-white/80 font-body leading-relaxed mb-5">
              At Shree Shyam Enterprise, we believe in creating opportunities
              for all. We actively encourage and support women&apos;s participation
              in our manufacturing operations — from quality inspection to
              administrative roles — fostering an inclusive workplace that
              reflects the India of tomorrow.
            </p>
            <p className="text-white/80 font-body leading-relaxed mb-8">
              Our commitment extends beyond manufacturing excellence to building
              a team that is diverse, empowered, and proud of the work they do
              every day.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-[#E05A1E] px-6 py-3">
                <p className="font-heading font-black text-white text-2xl">30%</p>
                <p className="text-white/80 text-xs uppercase tracking-widest font-body">Women Workforce</p>
              </div>
              <div className="bg-white/10 border border-white/20 px-6 py-3">
                <p className="font-heading font-black text-white text-2xl">Equal Pay</p>
                <p className="text-white/80 text-xs uppercase tracking-widest font-body">For Equal Work</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-[#152338] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#E05A1E] font-body font-medium tracking-[0.25em] uppercase text-xs mb-3">
              Our Credentials
            </p>
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-white mb-4">
              Certifications &amp; Recognition
            </h2>
            <p className="text-[#8BA3BF] max-w-xl mx-auto font-body">
              Independently verified quality standards that our clients can rely on.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="bg-[#1A2D48] p-8 border border-white/5 hover:border-[#E05A1E]/30 transition-colors group"
              >
                <div className="relative w-24 h-24 mb-6 mx-auto">
                  <Image
                    src={cert.image}
                    alt={cert.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="font-heading font-bold text-white text-2xl text-center mb-3">
                  {cert.name}
                </h3>
                <p className="text-[#8BA3BF] text-sm font-body text-center leading-relaxed">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Machinery */}
      <section className="bg-[#0E1B2E] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#E05A1E] font-body font-medium tracking-[0.25em] uppercase text-xs mb-3">
              Our Facility
            </p>
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-white mb-4">
              State-of-the-Art Machinery
            </h2>
            <p className="text-[#8BA3BF] max-w-xl mx-auto font-body">
              Modern equipment enabling precision manufacturing and consistent quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {machineList.map((machine) => (
              <div key={machine.name} className="group overflow-hidden bg-[#1A2D48]">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={machine.image}
                    alt={machine.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E1B2E] via-[#0E1B2E]/30 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-bold text-white text-xl mb-2">
                    {machine.name}
                  </h3>
                  <p className="text-[#8BA3BF] text-sm font-body leading-relaxed">
                    {machine.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-[#152338] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#E05A1E] font-body font-medium tracking-[0.25em] uppercase text-xs mb-3">
              Gallery
            </p>
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-white mb-4">
              Our Work in Pictures
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {galleryImages.map((img, index) => (
              <div
                key={img.src}
                className={`relative overflow-hidden group ${
                  index === 0 || index === 7 ? "col-span-2 row-span-2" : ""
                }`}
                style={{
                  aspectRatio: index === 0 || index === 7 ? "1/1" : "4/3",
                }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#0E1B2E]/0 group-hover:bg-[#0E1B2E]/40 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Process />
      <CTAStrip />
    </>
  );
}
