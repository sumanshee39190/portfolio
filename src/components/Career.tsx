import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Education <span>&</span>
          <br /> Experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Secondary</h4>
                <h5>Kushbasan High School (Percentage: 70.42%)</h5>
              </div>
              <h3>2020</h3>
            </div>
            <p>
              Completed Secondary education with a focus on Pure Science, achieving 70.42% marks.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Higher Secondary, Pure Science</h4>
                <h5>Kushbasan High School (Percentage: 85%)</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Completed Higher Secondary education with a focus on Pure Science, achieving 85% marks.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech, Computer Science and Engineering</h4>
                <h5>Techno International Batanagar (CGPA: 7.00)</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Expected graduation in August 2026.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Developer Intern</h4>
                <h5>UptoSkills (Remote)</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Developed responsive web applications using HTML, CSS, and JavaScript, improving user interface consistency and performance. Collaborated in a remote team to deliver client-based projects within deadlines.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
