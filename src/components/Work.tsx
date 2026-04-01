import { useState, useCallback } from "react";
import "./styles/Work.css";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "Luminor Bank IT Support",
    category: "Enterprise Incident Management · Kyndryl",
    tools: "ServiceNow, ITIL, SLA Management, Multi-country Operations",
    description: "End-to-end IT support across Estonia, Latvia & Lithuania — 98% SLA adherence, 98% CSAT, 100+ critical incidents resolved.",
    stat: "98%",
    statLabel: "SLA Adherence",
  },
  {
    title: "Access Management Optimization",
    category: "Identity & Infrastructure · Kyndryl",
    tools: "Azure AD, Active Directory, Access Provisioning",
    description: "Redesigned access management workflows using Azure AD and Active Directory, reducing provisioning times by 30%.",
    stat: "30%",
    statLabel: "Faster Provisioning",
  },
  {
    title: "Incident Resolution Acceleration",
    category: "Process Improvement · Kyndryl",
    tools: "ServiceNow, SOP Design, Cross-functional Collaboration",
    description: "Built troubleshooting guides and optimized SOPs, cutting average resolution time by 25% and escalation restoration time by 20%.",
    stat: "25%",
    statLabel: "Faster Resolution",
  },
  {
    title: "Team Enablement Program",
    category: "Leadership & Mentorship · Kyndryl",
    tools: "ServiceNow, Knowledge Management, Onboarding",
    description: "Mentored new team members on tooling and incident handling best practices, improving team throughput and service quality.",
    stat: "100+",
    statLabel: "Incidents Led",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback((index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  const goToPrev = useCallback(() => {
    goToSlide(currentIndex === 0 ? projects.length - 1 : currentIndex - 1);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    goToSlide(currentIndex === projects.length - 1 ? 0 : currentIndex + 1);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>My <span>Work</span></h2>
        <div className="carousel-wrapper">
          <button className="carousel-arrow carousel-arrow-left" onClick={goToPrev} aria-label="Previous" data-cursor="disable"><MdArrowBack /></button>
          <button className="carousel-arrow carousel-arrow-right" onClick={goToNext} aria-label="Next" data-cursor="disable"><MdArrowForward /></button>
          <div className="carousel-track-container">
            <div className="carousel-track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number"><h3>0{index + 1}</h3></div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">{project.category}</p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Focus</span>
                          <p>{project.tools}</p>
                        </div>
                        <p style={{ marginTop: "1rem", opacity: 0.6, fontSize: "0.9rem", lineHeight: 1.6 }}>{project.description}</p>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <div style={{ width: "100%", height: "100%", minHeight: 260, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "rgba(94,234,212,0.04)", border: "1px solid rgba(94,234,212,0.15)", gap: "1rem", padding: "2rem" }}>
                        <div style={{ fontSize: "clamp(3rem,6vw,5rem)", fontWeight: 800, color: "var(--accentColor)", lineHeight: 1, letterSpacing: "-0.03em" }}>{project.stat}</div>
                        <div style={{ fontSize: "0.72rem", color: "rgba(234,229,236,0.5)", textTransform: "uppercase", letterSpacing: "0.12em" }}>{project.statLabel}</div>
                        <div style={{ fontSize: "0.68rem", color: "rgba(94,234,212,0.5)", letterSpacing: "0.15em", textTransform: "uppercase", border: "1px solid rgba(94,234,212,0.2)", padding: "0.3rem 0.8rem" }}>Kyndryl · 2021–Present</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button key={index} className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""}`} onClick={() => goToSlide(index)} data-cursor="disable" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
