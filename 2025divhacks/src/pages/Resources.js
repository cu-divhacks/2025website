import '../App.css';
import { useState } from 'react';
import CollapsibleText from '../components/CollapsibleText';
import resourcesHeader from '../assets/resources_header.png';
import workshopHeader from '../assets/workshop_header.png';

export default function Resources() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [activeSection, setActiveSection] = useState('glossary');
  const [checkedTools, setCheckedTools] = useState({
    replit: false,
    vscode: false,
    figma: false,
    github: false,
    slack: false
  });

  const sections = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'glossary', title: 'Glossary' },
    { id: 'starter-guide', title: 'Starter Guide' },
    { id: 'tools', title: 'Tools' },
    { id: 'past-projects', title: 'Past Projects' }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'glossary':
        return (
          <div>
            <h3 style={{
              fontSize: 'clamp(1.3rem, 2.5vw, 2rem)',
              color: '#fff',
              marginBottom: '2vw',
              fontWeight: 900,
              textAlign: 'center',
              fontFamily: "'Lato', sans-serif",
              letterSpacing: '0.05em'
            }}>
              HACKATHON GLOSSARY
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1vw' }}>
              <CollapsibleText
                title="1. Hackathon Specific Terms"
                isExpanded={openDropdown === "Hackathon Terms"}
                onToggle={() => setOpenDropdown(openDropdown === "Hackathon Terms" ? null : "Hackathon Terms")}
              >
                <div style={{ 
                  fontSize: 'clamp(1vw, 1.2vw, 1.5vw)', 
                  color: '#fff', 
                  lineHeight: '1.6',
                  maxHeight: '300px',
                  overflowY: 'auto',
                  paddingRight: '10px',
                  fontFamily: "'Lato', sans-serif",
                  fontWeight: 500
                }}>
                  <p><b>Hackathon:</b> A short event (1–3 days) where you team up to build a tech project with purpose, usually from scratch.</p>
                  <p><b>Track:</b> A theme you can choose for your project (e.g., Sustainability, AI, Healthcare).</p>
                  <p><b>Prompt:</b> A challenge or idea to base your project on.</p>
                  <p><b>Team Formation:</b> Finding people to work with. Happens before or at the start of the hackathon.</p>
                  <p><b>Mentor:</b> Someone who helps you during the hackathon with coding, design, or ideas.</p>
                  <p><b>Sponsor:</b> A company that supports the hackathon and sometimes gives out prizes, APIs, or tools.</p>
                  <p><b>Workshop:</b> A short class or tutorial during or before the hackathon.</p>
                  <p><b>Pitch:</b> A 1–2 minute explanation of your project.</p>
                  <p><b>Demo:</b> A quick walkthrough showing your project in action.</p>
                  <p><b>Devpost:</b> The website where you submit your hackathon project.</p>
                  <p><b>Swag:</b> Free stuff from sponsors! Stickers, t-shirts, water bottles and more.</p>
                  <p><b>Hacker:</b> Someone building cool stuff with code (or no code!).</p>
                </div>
              </CollapsibleText>

              <CollapsibleText
                title="2. Tech and Programming Tools"
                isExpanded={openDropdown === "Tech Terms"}
                onToggle={() => setOpenDropdown(openDropdown === "Tech Terms" ? null : "Tech Terms")}
              >
                <div style={{ 
                  fontSize: 'clamp(1vw, 1.2vw, 1.5vw)', 
                  color: '#fff', 
                  lineHeight: '1.6',
                  maxHeight: '300px',
                  overflowY: 'auto',
                  paddingRight: '10px',
                  fontFamily: "'Lato', sans-serif",
                  fontWeight: 500
                }}>
                  <p><b>Frontend:</b> The part of a website/app you can see and click on.</p>
                  <p><b>Backend:</b> The hidden part that does the thinking. It stores data, handles logins, runs logic.</p>
                  <p><b>Full-stack:</b> A project that has both frontend and backend.</p>
                  <p><b>API:</b> APIs let you easily add powerful features to your project without building everything from scratch.</p>
                  <p><b>Database:</b> A place your app stores info, like usernames, messages, or scores.</p>
                  <p><b>GitHub:</b> A place to save your code online, track changes, and work with teammates.</p>
                  <p><b>IDE:</b> Stands for Integrated Development Environment - a space where you write code.</p>
                  <p><b>Replit:</b> A free online tool where you can code without downloading anything.</p>
                  <p><b>VS Code:</b> A downloadable code editor.</p>
                  <p><b>Figma:</b> A drag-and-drop design tool for sketching how your app/website will look.</p>
                  <p><b>HTML/CSS/JS:</b> The basic languages for building websites.</p>
                  <p><b>Python:</b> A beginner-friendly programming language.</p>
                  <p><b>Terminal/CLI:</b> A text-based tool where you type instructions for your computer.</p>
                  <p><b>Bug:</b> A mistake in your code that makes things break.</p>
                  <p><b>Debugging:</b> Finding and fixing bugs.</p>
                </div>
              </CollapsibleText>

              <CollapsibleText
                title="3. Project Tools"
                isExpanded={openDropdown === "Project Tools"}
                onToggle={() => setOpenDropdown(openDropdown === "Project Tools" ? null : "Project Tools")}
              >
                <div style={{ 
                  fontSize: 'clamp(1vw, 1.2vw, 1.5vw)', 
                  color: '#fff', 
                  lineHeight: '1.6',
                  maxHeight: '300px',
                  overflowY: 'auto',
                  paddingRight: '10px',
                  fontFamily: "'Lato', sans-serif",
                  fontWeight: 500
                }}>
                  <p><b>Figma:</b> Designing your app visually without code.</p>
                  <p><b>Canva:</b> Making slides or designing posters.</p>
                  <p><b>Replit:</b> Writing and running code online without setup.</p>
                  <p><b>Notion:</b> Organizing your project plan or checklist.</p>
                  <p><b>Google Slides:</b> Making your final pitch deck.</p>
                  <p><b>Glitch:</b> Building web apps with simple templates.</p>
                  <p><b>Bubble:</b> Drag-and-drop builder to make apps without code.</p>
                </div>
              </CollapsibleText>

              <CollapsibleText
                title="4. Team and Communication Tools"
                isExpanded={openDropdown === "Communication Tools"}
                onToggle={() => setOpenDropdown(openDropdown === "Communication Tools" ? null : "Communication Tools")}
              >
                <div style={{ 
                  fontSize: 'clamp(1vw, 1.2vw, 1.5vw)', 
                  color: '#fff', 
                  lineHeight: '1.6',
                  maxHeight: '300px',
                  overflowY: 'auto',
                  paddingRight: '10px',
                  fontFamily: "'Lato', sans-serif",
                  fontWeight: 500
                }}>
                  <p><b>Slack:</b> A group chat platform for announcements and questions.</p>
                  <p><b>Google Drive:</b> Where you can store and share slides, docs, and designs with your team.</p>
                  <p><b>Discord:</b> Another group chat tool (may be used instead of Slack).</p>
                </div>
              </CollapsibleText>
            </div>
          </div>
        );

      case 'introduction':
        return (
          <div>
            <h3 style={{
              fontSize: 'clamp(1.3rem, 2.5vw, 2rem)',
              color: '#fff',
              marginBottom: '3vw',
              fontWeight: 900,
              textAlign: 'center',
              fontFamily: "'Lato', sans-serif",
              letterSpacing: '0.05em'
            }}>
              INTRODUCTION
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3vw' }}>
              <div style={{
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                borderRadius: '15px',
                padding: '2.5vw',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}>
                <h4 style={{
                  fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)',
                  color: '#fff',
                  marginBottom: '1.5vw',
                  fontWeight: 600
                }}>
                  What is a Hackathon?
                </h4>
                <div style={{ fontSize: 'clamp(1vw, 1.2vw, 1.5vw)', color: '#fff', lineHeight: '1.6' }}>
                  A hackathon is a fun, collaborative event where people come together to build creative technology projects in a short period of time (often 24–36 hours). You don't need to be an expert—hackathons are for everyone, especially beginners!
                </div>
              </div>

              <div style={{
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                borderRadius: '15px',
                padding: '2.5vw',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}>
                <h4 style={{
                  fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)',
                  color: '#fff',
                  marginBottom: '1.5vw',
                  fontWeight: 600
                }}>
                  What are hackathon tracks and how do they work?
                </h4>
                <div style={{ fontSize: 'clamp(1vw, 1.2vw, 1.5vw)', color: '#fff', lineHeight: '1.6' }}>
                  DivHacks projects are required to fall under 1 of 4 distinct "tracks", thematic focus areas intended to broadly guide your project. This year, our tracks are productivity, sustainability, entertainment, and immersive technology. During submission, you will be prompted to select 1 track that best fits your project.
                </div>
              </div>

              <div style={{
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                borderRadius: '15px',
                padding: '2.5vw',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}>
                <h4 style={{
                  fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)',
                  color: '#fff',
                  marginBottom: '1.5vw',
                  fontWeight: 600
                }}>
                  Do I need to submit a project?
                </h4>
                <div style={{ fontSize: 'clamp(1vw, 1.2vw, 1.5vw)', color: '#fff', lineHeight: '1.6' }}>
                  Submitting a project is not required, but is highly encouraged, and it's the only way you'll be eligible for a prize! This is a fantastic opportunity to leave the hackathon with a completed project and receive valuable feedback from industry leaders and professionals!
                </div>
              </div>
            </div>
          </div>
        );

      case 'starter-guide':
        return (
          <div>
            <h3 style={{
              fontSize: 'clamp(1.3rem, 2.5vw, 2rem)',
              color: '#fff',
              fontWeight: 900,
              fontFamily: "'Lato', sans-serif",
              textAlign: 'center'
            }}>
              BROWSE A STARTER GUIDE
            </h3>
            <div style={{ fontSize: 'clamp(1vw, 1.2vw, 1.5vw)', color: '#fff', lineHeight: '1.6' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '3vw' }}>
                {/* Build your first website */}
                <div>
                  <h4 style={{
                    fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)',
                    color: '#fff',
                    marginBottom: '1.5vw',
                    marginTop: '1vw',
                    fontWeight: 600
                  }}>
                    1. Build your first website
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1vw' }}>
                    <a href="https://www.freecodecamp.org/learn/2022/responsive-web-design/" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <div className="resource-box">
                        <div className="resource-description">
                          Free, interactive lessons to build real web pages from scratch
                        </div>
                      </div>
                    </a>
                    <a href="https://www.codecademy.com/learn/learn-html" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <div className="resource-box">
                        <div className="resource-description">
                          Short, beginner friendly HTML/CSS tutorials
                        </div>
                      </div>
                    </a>
                    <a href="https://replit.com/templates/html" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <div className="resource-box">
                        <div className="resource-description">
                          Open and edit a working website right in your browser
                        </div>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Make a Python chatbot */}
                <div>
                  <h4 style={{
                    fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)',
                    color: '#fff',
                    marginBottom: '1.5vw',
                    marginTop: '1vw',
                    fontWeight: 600
                  }}>
                    2. Make a Python chatbot
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1vw' }}>
                    <a href="https://www.youtube.com/watch?v=Jk4kuuwLTh4" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <div className="resource-box">
                        <div className="resource-description">
                          Create a Simple Chatbot with Python by freeCodeCamp YouTube
                        </div>
                      </div>
                    </a>
                    <a href="https://replit.com/@replit/Python-Chatbot?v=1" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <div className="resource-box">
                        <div className="resource-description">
                          Try a Chatbot Starter Project on Replit
                        </div>
                      </div>
                    </a>
                    <a href="https://www.geeksforgeeks.org/building-a-chatbot-in-python/" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <div className="resource-box">
                        <div className="resource-description">
                          Step-by-step Python Chatbot Tutorial (GeeksforGeeks)
                        </div>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Design your first app in Figma */}
                <div>
                  <h4 style={{
                    fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)',
                    color: '#fff',
                    marginBottom: '1.5vw',
                    marginTop: '1vw',
                    fontWeight: 600
                  }}>
                    3. Design your first app in Figma
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1vw' }}>
                    <a href="https://www.youtube.com/watch?v=FTFaQWZBqQ8" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <div className="resource-box">
                        <div className="resource-description">
                          Figma Crash Course For Beginners (YouTube)
                        </div>
                      </div>
                    </a>
                    <a href="https://help.figma.com/hc/en-us/articles/360040318613-Figma-for-beginners" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <div className="resource-box">
                        <div className="resource-description">
                          Figma Beginner Guide
                        </div>
                      </div>
                    </a>
                    <a href="https://www.figma.com/community?tab=files" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <div className="resource-box">
                        <div className="resource-description">
                          Figma Templates (Community Files)
                        </div>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Learn more about GitHub */}
                <div>
                  <h4 style={{
                    fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)',
                    color: '#fff',
                    marginBottom: '1.5vw',
                    marginTop: '1vw',
                    fontWeight: 600
                  }}>
                    4. Learn more about GitHub and How to share your projects
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1vw' }}>
                    <a href="https://www.youtube.com/watch?v=SWYqp7iY_Tc" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <div className="resource-box">
                        <div className="resource-description">
                          Git + GitHub Crash Course (YouTube)
                        </div>
                      </div>
                    </a>
                    <a href="https://skills.github.com/" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <div className="resource-box">
                        <div className="resource-description">
                          GitHub Skills (Official Courses)
                        </div>
                      </div>
                    </a>
                    <a href="https://www.youtube.com/watch?v=RGOj5yH7evk" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <div className="resource-box">
                        <div className="resource-description">
                          Using GitHub for the First Time (YouTube)
                        </div>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Beginner-Friendly Project Templates */}
                <div>
                  <h4 style={{
                    fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)',
                    color: '#fff',
                    marginBottom: '1.5vw',
                    marginTop: '1vw',
                    fontWeight: 600
                  }}>
                    5. Beginner-Friendly Project Templates
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '2vw' }}>
                    {/* Hackathon Starter Web App */}
                    <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.08)', borderRadius: '15px', padding: '2.5vw', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
                      <div style={{ marginBottom: '1.5vw' }}>
                        <a href="https://codesandbox.io/p/sandbox/hackathon-website-template-jnoizb" target="_blank" rel="noopener noreferrer" style={{ 
                          color: '#fff', 
                          textDecoration: 'none', 
                          fontWeight: 600, 
                          fontSize: 'clamp(1rem, 1.1vw, 1.2rem)',
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
                          padding: '0.8vw 1.5vw',
                          borderRadius: '25px',
                          border: '1px solid rgba(255, 255, 255, 0.3)',
                          display: 'inline-block',
                          transition: 'all 0.3s ease',
                          cursor: 'pointer'
                        }} onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                          e.currentTarget.style.transform = 'translateY(-2px)';
                          e.currentTarget.style.boxShadow = '0 4px 12px rgba(255, 255, 255, 0.2)';
                        }} onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.boxShadow = 'none';
                        }}>
                          Hackathon Starter Web App (No Experience Needed)
                        </a>
                        <p style={{ margin: '0.5vw 0 0 0', opacity: 0.9, fontSize: 'clamp(0.9rem, 1vw, 1.1rem)' }}>
                          This is a ready-to-use website template. You don’t need to know how to code! Just click the link, and you can change the words, colors, or pictures to make it your own. Perfect for your first hackathon project.
                        </p>
                      </div>
                    </div>
                    {/* MLH Hackathon Flask Starter */}
                    <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.08)', borderRadius: '15px', padding: '2.5vw', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
                      <div style={{ marginBottom: '1.5vw' }}>
                        <a href="https://codesandbox.io/p/sandbox/mlh-mlh-hackathon-flask-starter-20rlor" target="_blank" rel="noopener noreferrer" style={{ 
                          color: '#fff', 
                          textDecoration: 'none', 
                          fontWeight: 600, 
                          fontSize: 'clamp(1rem, 1.1vw, 1.2rem)',
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
                          padding: '0.8vw 1.5vw',
                          borderRadius: '25px',
                          border: '1px solid rgba(255, 255, 255, 0.3)',
                          display: 'inline-block',
                          transition: 'all 0.3s ease',
                          cursor: 'pointer'
                        }} onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                          e.currentTarget.style.transform = 'translateY(-2px)';
                          e.currentTarget.style.boxShadow = '0 4px 12px rgba(255, 255, 255, 0.2)';
                        }} onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.boxShadow = 'none';
                        }}>
                          MLH Hackathon Flask Starter (Python, No Experience Needed)
                        </a>
                        <p style={{ margin: '0.5vw 0 0 0', opacity: 0.9, fontSize: 'clamp(0.9rem, 1vw, 1.1rem)' }}>
                          This template lets you make a simple app using Python. You don’t need to write code from scratch—just follow the instructions, and you can build a tiny app by giving commands. Great for beginners who want to try something new!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'tools':
        return (
          <div>
            <h3 style={{
              fontSize: 'clamp(1.3rem, 2.5vw, 2rem)',
              color: '#fff',
              marginBottom: '3vw',
              fontWeight: 900,
              fontFamily: "'Lato', sans-serif",
              textAlign: 'center'
            }}>
              PICK YOUR TOOLS
            </h3>
            <div style={{ fontSize: 'clamp(1vw, 1.2vw, 1.5vw)', color: '#fff', lineHeight: '1.6' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5vw', alignItems: 'flex-start' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1vw' }}>
                  <div 
                    onClick={() => setCheckedTools(prev => ({ ...prev, replit: !prev.replit }))}
                    className={`tool-checkbox ${checkedTools.replit ? 'checked' : ''}`}
                  >
                    {checkedTools.replit ? '✓' : ''}
                  </div>
                  <span style={{ fontSize: 'clamp(1rem, 1.2vw, 1.3rem)', color: '#fff' }}><span style={{ fontWeight: 'bold', color: '#fff' }}>Replit</span> for coding</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1vw' }}>
                  <div 
                    onClick={() => setCheckedTools(prev => ({ ...prev, vscode: !prev.vscode }))}
                    className={`tool-checkbox ${checkedTools.vscode ? 'checked' : ''}`}
                  >
                    {checkedTools.vscode ? '✓' : ''}
                  </div>
                  <span style={{ fontSize: 'clamp(1rem, 1.2vw, 1.3rem)', color: '#fff' }}><span style={{ fontWeight: 'bold', color: '#fff' }}>VS Code</span> for coding</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1vw' }}>
                  <div 
                    onClick={() => setCheckedTools(prev => ({ ...prev, figma: !prev.figma }))}
                    className={`tool-checkbox ${checkedTools.figma ? 'checked' : ''}`}
                  >
                    {checkedTools.figma ? '✓' : ''}
                  </div>
                  <span style={{ fontSize: 'clamp(1rem, 1.2vw, 1.3rem)', color: '#fff' }}><span style={{ fontWeight: 'bold', color: '#fff' }}>Figma</span> for designing</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1vw' }}>
                  <div 
                    onClick={() => setCheckedTools(prev => ({ ...prev, github: !prev.github }))}
                    className={`tool-checkbox ${checkedTools.github ? 'checked' : ''}`}
                  >
                    {checkedTools.github ? '✓' : ''}
                  </div>
                  <span style={{ fontSize: 'clamp(1rem, 1.2vw, 1.3rem)', color: '#fff' }}><span style={{ fontWeight: 'bold', color: '#fff' }}>GitHub</span> for saving and sharing your project</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1vw' }}>
                  <div 
                    onClick={() => setCheckedTools(prev => ({ ...prev, slack: !prev.slack }))}
                    className={`tool-checkbox ${checkedTools.slack ? 'checked' : ''}`}
                  >
                    {checkedTools.slack ? '✓' : ''}
                  </div>
                  <span style={{ fontSize: 'clamp(1rem, 1.2vw, 1.3rem)', color: '#fff' }}>Join a <span style={{ fontWeight: 'bold', color: '#fff' }}>Slack</span> community and introduce yourself</span>
                </div>
              </div>
            </div>
          </div>
        );

      case 'past-projects':
        return (
          <div>
            <h3 style={{
              fontSize: 'clamp(1.3rem, 2.5vw, 2rem)',
              color: '#fff',
              marginBottom: '3vw',
              fontWeight: 900,
              fontFamily: "'Lato', sans-serif",
              textAlign: 'center'
            }}>
              PAST PROJECTS (DIVHACKS 2024)
            </h3>
            <div style={{ fontSize: 'clamp(1vw, 1.2vw, 1.5vw)', color: '#fff', lineHeight: '1.6' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '3vw' }}>
                
                {/* Project 1 */}
                <div style={{ display: 'flex', gap: '2vw', alignItems: 'flex-start' }}>
                  {/* Left Column - Video */}
                  <div style={{ flex: '1', minWidth: '0' }}>
                    <h4 style={{
                      fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)',
                      color: '#fff',
                      marginBottom: '1.5vw',
                      fontWeight: 600
                    }}>
                      StrokePlayAR
                    </h4>
                    <a href="https://www.youtube.com/watch?v=Xr6Wk-5L_8w" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <div className="resource-box" style={{ padding: '0', overflow: 'hidden', borderRadius: '10px', aspectRatio: '16/9' }}>
                        <iframe
                          width="100%"
                          height="100%"
                          src="https://www.youtube.com/embed/Xr6Wk-5L_8w"
                          title="StrokePlayAR Demo"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          style={{ border: 'none' }}
                        ></iframe>
                      </div>
                    </a>
                  </div>

                  {/* Right Column - Project Info */}
                  <div style={{ flex: '1', minWidth: '0' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1vw', height: '100%', paddingTop: '3vw' }}>
                      <div style={{
                        display: 'inline-block',
                        background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                        color: '#000',
                        padding: '0.5vw 1.5vw',
                        borderRadius: '20px',
                        fontSize: 'clamp(0.8rem, 1vw, 1.1rem)',
                        fontWeight: 'bold',
                        textShadow: '0 1px 2px rgba(0,0,0,0.3)',
                        boxShadow: '0 2px 8px rgba(255, 215, 0, 0.4)',
                        border: '2px solid #FFA500',
                        marginBottom: '1vw'
                      }}>
                        🏆 1st Place Overall Winner
                      </div>
                      <div className="resource-box" style={{ flex: '1' }}>
                        <div className="resource-description">
                          An AR-powered stroke rehabilitation game that makes physical therapy engaging and accessible through interactive gameplay.
                        </div>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5vw' }}>
                        <a href="https://github.com/cheersanimesh/StrokePlayAR" target="_blank" rel="noopener noreferrer" className="resource-link">
                          <div className="resource-box">
                            <div className="resource-description">
                              💻 GitHub Link
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project 2 */}
                <div style={{ display: 'flex', gap: '2vw', alignItems: 'flex-start' }}>
                  {/* Left Column - Video */}
                  <div style={{ flex: '1', minWidth: '0' }}>
                    <h4 style={{
                      fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)',
                      color: '#fff',
                      marginBottom: '1.5vw',
                      fontWeight: 600
                    }}>
                      Penny Pals
                    </h4>
                    <a href="https://www.youtube.com/watch?v=abxPoHVwPH0" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <div className="resource-box" style={{ padding: '0', overflow: 'hidden', borderRadius: '10px', aspectRatio: '16/9' }}>
                        <iframe
                          width="100%"
                          height="100%"
                          src="https://www.youtube.com/embed/abxPoHVwPH0"
                          title="Penny Pals Demo"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          style={{ border: 'none' }}
                        ></iframe>
                      </div>
                    </a>
                  </div>

                  {/* Right Column - Project Info */}
                  <div style={{ flex: '1', minWidth: '0' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1vw', height: '100%', paddingTop: '3vw' }}>
                      <div style={{
                        display: 'inline-block',
                        background: 'linear-gradient(135deg, #CD7F32, #B8860B)',
                        color: '#000',
                        padding: '0.5vw 1.5vw',
                        borderRadius: '20px',
                        fontSize: 'clamp(0.8rem, 1vw, 1.1rem)',
                        fontWeight: 'bold',
                        textShadow: '0 1px 2px rgba(0,0,0,0.3)',
                        boxShadow: '0 2px 8px rgba(205, 127, 50, 0.4)',
                        border: '2px solid #B8860B',
                        marginBottom: '1vw'
                      }}>
                        🥉 3rd Place Overall + 🏆 Capital One Track Winner
                      </div>
                      <div className="resource-box" style={{ flex: '1' }}>
                        <div className="resource-description">
                          A financial literacy platform that gamifies saving and investing to help users build healthy money habits.
                        </div>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5vw' }}>
                        <a href="https://github.com/ld0rn76/PennyPals" target="_blank" rel="noopener noreferrer" className="resource-link">
                          <div className="resource-box">
                            <div className="resource-description">
                              💻 GitHub Link
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project 3 */}
                <div style={{ display: 'flex', gap: '2vw', alignItems: 'flex-start' }}>
                  {/* Left Column - Video */}
                  <div style={{ flex: '1', minWidth: '0' }}>
                    <h4 style={{
                      fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)',
                      color: '#fff',
                      marginBottom: '1.5vw',
                      fontWeight: 600
                    }}>
                      Pothos
                    </h4>
                    <a href="https://vimeo.com/1016769976?share=copy" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <div className="resource-box" style={{ padding: '0', overflow: 'hidden', borderRadius: '10px', aspectRatio: '16/9' }}>
                        <iframe
                          width="100%"
                          height="100%"
                          src="https://player.vimeo.com/video/1016769976?h=your_hash_here&title=0&byline=0&portrait=0"
                          title="Pothos Demo"
                          frameBorder="0"
                          allow="autoplay; fullscreen; picture-in-picture"
                          allowFullScreen
                          style={{ border: 'none' }}
                        ></iframe>
                      </div>
                    </a>
                  </div>

                  {/* Right Column - Project Info */}
                  <div style={{ flex: '1', minWidth: '0' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1vw', height: '100%', paddingTop: '3vw' }}>
                      <div style={{
                        display: 'inline-block',
                        background: 'linear-gradient(135deg, #32CD32, #228B22)',
                        color: '#000',
                        padding: '0.5vw 1.5vw',
                        borderRadius: '20px',
                        fontSize: 'clamp(0.8rem, 1vw, 1.1rem)',
                        fontWeight: 'bold',
                        textShadow: '0 1px 2px rgba(0,0,0,0.3)',
                        boxShadow: '0 2px 8px rgba(50, 205, 50, 0.4)',
                        border: '2px solid #228B22',
                        marginBottom: '1vw'
                      }}>
                        🌱 Environment Track Winner
                      </div>
                      <div className="resource-box" style={{ flex: '1' }}>
                        <div className="resource-description">
                          A sustainable plant care app that helps users reduce their carbon footprint through smart gardening and environmental awareness.
                        </div>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5vw' }}>
                        <a href="https://github.com/enano1/divhacks-2024?tab=readme-ov-file" target="_blank" rel="noopener noreferrer" className="resource-link">
                          <div className="resource-box">
                            <div className="resource-description">
                              💻 GitHub Link
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        );



      default:
        return <div>Select a section from the menu</div>;
    }
  };

  return (
    <section className="resources-page">
      {/* Work in Progress Marker */}
      <div style={{
        position: 'absolute',
        background: '#ffce2d',
        color: '#000000',
        fontWeight: 900,
        fontSize: '3vw',
        textAlign: 'center',
        padding: '0.7vw 0',
        letterSpacing: '0.2vw',
        marginTop: '8vw',
        transform: 'rotate(-15deg)',
        border: '0.3vw solid #000',
        width: '25vw',
        zIndex: 10
      }}>
        🚧 WORK IN PROGRESS 🚧
      </div>

      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '-3vw' }}>
        <img 
          src={resourcesHeader} 
          alt="Resources Header" 
          style={{
            maxWidth: '50vw',
            minWidth: '40vw',
            height: 'auto',
            marginTop: '0.5vw'
          }}
        />
      </div>

      {/* Two Column Layout */}
      <div className="resources-layout">
        {/* Left Column - Navigation */}
        <div style={{
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '15px',
          padding: '2vw',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          height: 'fit-content',
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1vw' }}>
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                style={{
                  backgroundColor: activeSection === section.id ? 'rgba(255, 215, 0, 0.2)' : 'transparent',
                  color: '#fff',
                  border: 'none',
                  padding: 'clamp(0.5vw, 1vw, 1.5vw) clamp(0.8vw, 1.5vw, 2vw)',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: 'clamp(0.8rem, 1vw, 1.3rem)',
                  fontWeight: 600,
                  textAlign: 'left',
                  transition: 'all 0.3s ease',
                  borderLeft: activeSection === section.id ? '4px solid #fff' : '4px solid transparent'
                }}
              >
                {section.title}
              </button>
            ))}
          </div>
        </div>

        {/* Right Column - Content */}
        <div style={{
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '15px',
          padding: '3vw',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          minHeight: '500px'
        }}>
          {renderContent()}
        </div>
      </div>

      {/* Workshops Section */}
      <div style={{ marginTop: '4vw', textAlign: 'center' }}>
        <img 
          src={workshopHeader} 
          alt="Workshop Header" 
          style={{
            maxWidth: '40vw',
            minWidth: '20vw',
            height: 'auto',
          }}
        />
        <div style={{
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '15px',
          padding: '2vw',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          maxWidth: '600px',
          margin: '0 auto',
          fontSize: 'clamp(1.2rem, 1.5vw, 1.8rem)',
          color: '#fff',
          fontWeight: 900,
          textAlign: 'center',
        }}>
          MORE INFO COMING SOON...
        </div>
      </div>
    </section>
  );
}