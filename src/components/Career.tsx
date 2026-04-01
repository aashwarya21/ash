import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>IT Specialist</h4>
                <h5>Kyndryl · Hyderabad</h5>
              </div>
              <h3>Aug 2025</h3>
            </div>
            <p>
              Managing IT support for Luminor Bank across Estonia, Latvia, and
              Lithuania. Achieved 98% SLA adherence and 98% CSAT score. Led
              resolution of 100+ critical incidents, optimized access management
              via Active Directory and Azure AD reducing provisioning times by
              30%, and mentored new team members on ServiceNow and incident SOPs.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Key Achievements</h4>
                <h5>Kyndryl</h5>
              </div>
              <h3>2021–24</h3>
            </div>
            <p>
              Reduced average incident resolution time by 25% through SOP
              optimization and cross-team collaboration. Minimized service
              restoration time by 20% by leading multi-vendor escalations.
              Created troubleshooting guides that improved resolution efficiency
              by 30%. Collaborated with vendors to implement process improvements
              enhancing overall system reliability.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech CSE</h4>
                <h5>Malla Reddy Engineering College</h5>
              </div>
              <h3>2016–20</h3>
            </div>
            <p>
              Bachelor of Technology in Computer Science Engineering with a CGPA
              of 8.03. Built a strong foundation in software systems, networking,
              and computer science fundamentals that underpins my work in
              enterprise IT infrastructure and incident management.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
