import React from 'react';
import { ShieldCheck, Lightbulb, BadgeDollarSign, Truck, Heart, Zap, Users, Package, Globe } from 'lucide-react';
import '../../styles/about-story.css';

export default function OurStory() {
  const stats = [
    {
      icon: <Zap style={{ width: '50px', height: '50px', color: '#0066CC' }} strokeWidth={2} />,
      number: '12+',
      label: 'Years of Experience',
    },
    {
      icon: <Users style={{ width: '50px', height: '50px', color: '#0066CC' }} strokeWidth={2} />,
      number: '500+',
      label: 'Happy Clients',
    },
    {
      icon: <Package style={{ width: '50px', height: '50px', color: '#0066CC' }} strokeWidth={2} />,
      number: '1000+',
      label: 'Products',
    },
    {
      icon: <Globe style={{ width: '50px', height: '50px', color: '#0066CC' }} strokeWidth={2} />,
      number: 'PAN India',
      label: 'Supply Network',
    },
  ];

  const capabilities = [
    {
      icon: <ShieldCheck style={{ width: '58px', height: '58px' }} strokeWidth={1.8} />,
      title: 'QUALITY PRODUCTS',
      description: 'We partner with leading brands to deliver dependable products.',
    },
    {
      icon: <Lightbulb style={{ width: '58px', height: '58px' }} strokeWidth={1.8} />,
      title: 'TECHNICAL EXPERTISE',
      description: 'Our technical team understands industrial requirements and applications.',
    },
    {
      icon: <BadgeDollarSign style={{ width: '58px', height: '58px' }} strokeWidth={1.8} />,
      title: 'COMPETITIVE PRICING',
      description: 'Best price with practical value for your requirements.',
    },
    {
      icon: <Truck style={{ width: '58px', height: '58px' }} strokeWidth={1.8} />,
      title: 'TIMELY DELIVERY',
      description: 'Reliable delivery support across India.',
    },
    {
      icon: <Heart style={{ width: '58px', height: '58px' }} strokeWidth={1.8} />,
      title: 'CUSTOMER SATISFACTION',
      description: 'Long-term customer relationships are at the heart of our approach.',
    },
  ];

  return (
    <section className="about-story">
      <div className="about-story__container">

        {/* Section Heading — centered, matching homepage pattern */}
        <div className="about-story__section-heading">
          <h2>
            OUR STORY
            <span className="about-story__heading-underline" />
          </h2>
        </div>

        {/* Two-column layout */}
        <div className="about-story__grid">

          {/* ── LEFT COLUMN: Story + Stats ── */}
          <div className="about-story__left">
            <p className="about-story__paragraph">
              RDAPOWER TECH is a trusted supplier of industrial automation and
              electrical products based in Patna, Bihar. We deliver high-quality
              products and engineering solutions that help industries operate
              smarter, safer and more efficiently.
            </p>
            <p className="about-story__paragraph">
              With a strong commitment to quality, timely service and customer
              satisfaction, we aim to be a dependable partner for industries
              across India.
            </p>

            {/* Statistics Cards */}
            <div className="about-story__stats-grid">
              {stats.map((stat, idx) => (
                <div key={idx} className="about-story__stat-card">
                  <div className="about-story__stat-icon">
                    {stat.icon}
                  </div>
                  <div className="about-story__stat-content">
                    <div className="about-story__stat-number">{stat.number}</div>
                    <div className="about-story__stat-label">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT COLUMN: Capabilities ── */}
          <div className="about-story__right">
            {capabilities.map((item, idx) => (
              <div key={idx} className="about-story__capability">
                <div className="about-story__capability-icon">
                  {item.icon}
                </div>
                <div className="about-story__capability-text">
                  <h4 className="about-story__capability-title">{item.title}</h4>
                  <p className="about-story__capability-desc">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
