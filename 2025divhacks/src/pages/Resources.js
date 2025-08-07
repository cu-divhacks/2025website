import '../App.css';
import { useState } from 'react';
import CollapsibleText from '../components/CollapsibleText';
import resourcesHeader from '../assets/resources_header.png';
import workshopHeader from '../assets/workshop_header.png';

export default function Resources() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [activeSection, setActiveSection] = useState('glossary');
  const [activeToolTab, setActiveToolTab] = useState('development');
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
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5vw' }}>
              <CollapsibleText
                title="🚀 Hackathon Terms"
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
                  <p><b>Hackathon:</b> A short event where you team up to build a tech project with purpose, usually from scratch.</p>
                  <p><b>Track:</b> A theme you can choose for your project (e.g., Sustainability, AI, Healthcare).</p>
                  <p><b>Mentor:</b> Someone who helps you during the hackathon with coding, design, or ideas.</p>
                  <p><b>Workshop:</b> A short class or tutorial during or before the hackathon.</p>
                  <p><b>Devpost:</b> The website where you submit your hackathon project.</p>
                </div>
              </CollapsibleText>

              <CollapsibleText
                title="💻 Technical Terms"
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
                  <p><b>Deployment:</b> Making your project live on the internet so others can use it.</p>
                </div>
              </CollapsibleText>

              <CollapsibleText
                title="🎨 Design & UX Terms"
                isExpanded={openDropdown === "Design Terms"}
                onToggle={() => setOpenDropdown(openDropdown === "Design Terms" ? null : "Design Terms")}
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
                  <p><b>UI (User Interface):</b> The visual elements users interact with - buttons, menus, forms.</p>
                  <p><b>UX (User Experience):</b> How users feel when using your product - should be smooth and intuitive.</p>
                  <p><b>Wireframe:</b> A simple sketch showing the layout of your app/website.</p>
                  <p><b>Prototype:</b> An interactive mockup that shows how your app will work.</p>
                  <p><b>Responsive Design:</b> Making your app work well on phones, tablets, and computers.</p>
                </div>
              </CollapsibleText>

              <CollapsibleText
                title="🤖 AI & Data Terms"
                isExpanded={openDropdown === "AI Terms"}
                onToggle={() => setOpenDropdown(openDropdown === "AI Terms" ? null : "AI Terms")}
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
                  <p><b>API Key:</b> A password that lets your app access external AI services.</p>
                  <p><b>Natural Language Processing:</b> Teaching computers to understand and generate human language.</p>
                  <p><b>Computer Vision:</b> Teaching computers to understand and analyze images.</p>
                </div>
              </CollapsibleText>

              <CollapsibleText
                title="📱 Mobile & App Terms"
                isExpanded={openDropdown === "Mobile Terms"}
                onToggle={() => setOpenDropdown(openDropdown === "Mobile Terms" ? null : "Mobile Terms")}
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
                  <p><b>Native App:</b> An app built specifically for one platform (iOS or Android).</p>
                  <p><b>Cross-platform:</b> An app that works on multiple platforms (iOS, Android, web).</p>
                  <p><b>Progressive Web App (PWA):</b> A website that works like a mobile app.</p>
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
              TOOLS & TECH STACKS
            </h3>
            
            {/* Tab Navigation */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '1vw',
              marginBottom: '2vw',
              flexWrap: 'wrap'
            }}>
              <p style={{
                color: '#fff',
                fontSize: 'clamp(0.9rem, 1vw, 1.1rem)',
                marginBottom: '1.5vw',
                opacity: 0.9,
                textAlign: 'center',
                width: '100%'
              }}>
                Click on a category below to explore different tools:
              </p>
                              {[
                  { id: 'development', label: 'Development', icon: '💻' },
                  { id: 'web', label: 'Web Frameworks', icon: '🌐' },
                  { id: 'design', label: 'Design & Teamwork', icon: '🎨' },
                  { id: 'ai', label: 'Data Science & ML', icon: '🤖' }
                ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveToolTab(tab.id)}
                  style={{
                    backgroundColor: activeToolTab === tab.id ? 'rgba(255, 255, 255, 0.25)' : 'rgba(255, 255, 255, 0.1)',
                    border: activeToolTab === tab.id ? '2px solid rgba(255, 255, 255, 0.5)' : '1px solid rgba(255, 255, 255, 0.3)',
                    borderRadius: '20px',
                    padding: '0.6vw 1.2vw',
                    color: '#fff',
                    fontSize: 'clamp(0.8rem, 0.9vw, 1rem)',
                    fontWeight: activeToolTab === tab.id ? 700 : 600,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3vw',
                    boxShadow: activeToolTab === tab.id ? '0 4px 12px rgba(255, 255, 255, 0.2)' : 'none'
                  }}
                  onMouseEnter={(e) => {
                    if (activeToolTab !== tab.id) {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 2px 8px rgba(255, 255, 255, 0.1)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeToolTab !== tab.id) {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }
                  }}
                >
                  <span style={{ fontSize: '1.2em' }}>{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div style={{ fontSize: 'clamp(1vw, 1.2vw, 1.5vw)', color: '#fff', lineHeight: '1.6' }}>
              {activeToolTab === 'development' && (
                <div style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  borderRadius: '15px',
                  padding: '3vw',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2vw' }}>
                    {[
                      { name: 'VS Code', icon: '🖱️', desc: 'Popular code editor', link: 'https://code.visualstudio.com/', details: 'Free, powerful editor with extensive extensions and debugging tools' },
                      { name: 'Replit', icon: '🌍', desc: 'Online coding platform', link: 'https://replit.com/', details: 'Code, run, and deploy projects directly in your browser - no setup required' },
                      { name: 'GitHub', icon: '📚', desc: 'Code hosting platform', link: 'https://github.com/', details: 'Store, version control, and collaborate on code with teams worldwide' },
                      { name: 'Git', icon: '🔄', desc: 'Version control system', link: 'https://git-scm.com/', details: 'Track changes, manage branches, and coordinate work across teams' },
                      { name: 'Terminal/CLI', icon: '⌨️', desc: 'Command line interface', link: 'https://en.wikipedia.org/wiki/Command-line_interface', details: 'Essential for running commands, installing packages, and managing your development environment' },
                      { name: 'Firebase', icon: '🔥', desc: 'Backend-as-a-Service', link: 'https://firebase.google.com/', details: 'Quick setup for authentication, database, hosting, and real-time features - perfect for hackathons' }
                    ].map((tool, index) => (
                      <div key={index} style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        borderRadius: '12px',
                        padding: '2vw',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        position: 'relative',
                        overflow: 'hidden'
                      }} onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-5px)';
                        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
                        e.currentTarget.style.boxShadow = '0 8px 25px rgba(255, 255, 255, 0.1)';
                      }} onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}>
                        <a href={tool.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                          <div style={{ textAlign: 'center', marginBottom: '1vw' }}>
                            <div style={{ fontSize: '3vw', marginBottom: '0.5vw' }}>{tool.icon}</div>
                            <h5 style={{ 
                              color: '#fff', 
                              fontWeight: 600, 
                              margin: '0 0 0.5vw 0',
                              fontSize: 'clamp(1rem, 1.2vw, 1.3rem)'
                            }}>{tool.name}</h5>
                            <p style={{ 
                              color: 'rgba(255, 255, 255, 0.8)', 
                              margin: 0,
                              fontSize: 'clamp(0.8rem, 1vw, 1.1rem)'
                            }}>{tool.desc}</p>
                          </div>
                          <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: 'rgba(0, 0, 0, 0.9)',
                            color: '#fff',
                            padding: '2vw',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center',
                            opacity: 0,
                            transition: 'opacity 0.3s ease',
                            fontSize: 'clamp(0.8rem, 1vw, 1.1rem)',
                            lineHeight: '1.4'
                          }} onMouseEnter={(e) => {
                            e.currentTarget.style.opacity = '1';
                          }} onMouseLeave={(e) => {
                            e.currentTarget.style.opacity = '0';
                          }}>
                            {tool.details}
                          </div>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeToolTab === 'web' && (
                <div style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  borderRadius: '15px',
                  padding: '3vw',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2vw' }}>
                    {[
                      { name: 'React', icon: '⚛️', desc: 'JavaScript library', link: 'https://react.dev/', details: 'Build interactive user interfaces with reusable components and efficient rendering' },
                      { name: 'Next.js', icon: '🚀', desc: 'React framework', link: 'https://nextjs.org/', details: 'Full-stack React framework with server-side rendering and optimized performance' },
                      { name: 'Tailwind CSS', icon: '🎪', desc: 'Utility-first CSS', link: 'https://tailwindcss.com/', details: 'Rapidly build custom designs with utility classes and responsive design' },
                      { name: 'Node.js', icon: '🟢', desc: 'JavaScript runtime', link: 'https://nodejs.org/', details: 'Run JavaScript on the server-side for building scalable network applications' },
                      { name: 'Glitch', icon: '🔧', desc: 'Web app templates', link: 'https://glitch.com/', details: 'Remix existing projects or start from scratch with instant deployment' },
                      { name: 'Bubble', icon: '🫧', desc: 'Visual programming', link: 'https://bubble.io/', details: 'Create web applications without code using visual programming interface' }
                    ].map((tool, index) => (
                      <div key={index} style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        borderRadius: '12px',
                        padding: '2vw',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        position: 'relative',
                        overflow: 'hidden'
                      }} onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-5px)';
                        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
                        e.currentTarget.style.boxShadow = '0 8px 25px rgba(255, 255, 255, 0.1)';
                      }} onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}>
                        <a href={tool.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                          <div style={{ textAlign: 'center', marginBottom: '1vw' }}>
                            <div style={{ fontSize: '3vw', marginBottom: '0.5vw' }}>{tool.icon}</div>
                            <h5 style={{ 
                              color: '#fff', 
                              fontWeight: 600, 
                              margin: '0 0 0.5vw 0',
                              fontSize: 'clamp(1rem, 1.2vw, 1.3rem)'
                            }}>{tool.name}</h5>
                            <p style={{ 
                              color: 'rgba(255, 255, 255, 0.8)', 
                              margin: 0,
                              fontSize: 'clamp(0.8rem, 1vw, 1.1rem)'
                            }}>{tool.desc}</p>
                          </div>
                          <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: 'rgba(0, 0, 0, 0.9)',
                            color: '#fff',
                            padding: '2vw',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center',
                            opacity: 0,
                            transition: 'opacity 0.3s ease',
                            fontSize: 'clamp(0.8rem, 1vw, 1.1rem)',
                            lineHeight: '1.4'
                          }} onMouseEnter={(e) => {
                            e.currentTarget.style.opacity = '1';
                          }} onMouseLeave={(e) => {
                            e.currentTarget.style.opacity = '0';
                          }}>
                            {tool.details}
                          </div>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeToolTab === 'design' && (
                <div style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  borderRadius: '15px',
                  padding: '3vw',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2vw' }}>
                    {[
                      { name: 'Figma', icon: '🎭', desc: 'UI/UX design', link: 'https://www.figma.com/', details: 'Collaborative design tool for creating interfaces, prototypes, and design systems' },
                      { name: 'Canva', icon: '📝', desc: 'Graphic design', link: 'https://www.canva.com/', details: 'Easy-to-use design platform for creating presentations, graphics, and social media content' },
                      { name: 'Slack', icon: '💬', desc: 'Team communication', link: 'https://slack.com/', details: 'Real-time messaging platform for team collaboration, file sharing, and project coordination' },
                      { name: 'Notion', icon: '📋', desc: 'All-in-one workspace', link: 'https://www.notion.so/', details: 'Organize projects, take notes, create databases, and collaborate with your team' },
                      { name: 'Google Drive', icon: '☁️', desc: 'File storage & sharing', link: 'https://drive.google.com/', details: 'Cloud storage for documents, presentations, and team file collaboration' },
                      { name: 'Trello', icon: '📌', desc: 'Project management', link: 'https://trello.com/', details: 'Visual project management with boards, lists, and cards for organizing tasks' }
                    ].map((tool, index) => (
                      <div key={index} style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        borderRadius: '12px',
                        padding: '2vw',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        position: 'relative',
                        overflow: 'hidden'
                      }} onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-5px)';
                        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
                        e.currentTarget.style.boxShadow = '0 8px 25px rgba(255, 255, 255, 0.1)';
                      }} onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}>
                        <a href={tool.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                          <div style={{ textAlign: 'center', marginBottom: '1vw' }}>
                            <div style={{ fontSize: '3vw', marginBottom: '0.5vw' }}>{tool.icon}</div>
                            <h5 style={{ 
                              color: '#fff', 
                              fontWeight: 600, 
                              margin: '0 0 0.5vw 0',
                              fontSize: 'clamp(1rem, 1.2vw, 1.3rem)'
                            }}>{tool.name}</h5>
                            <p style={{ 
                              color: 'rgba(255, 255, 255, 0.8)', 
                              margin: 0,
                              fontSize: 'clamp(0.8rem, 1vw, 1.1rem)'
                            }}>{tool.desc}</p>
                          </div>
                          <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: 'rgba(0, 0, 0, 0.9)',
                            color: '#fff',
                            padding: '2vw',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center',
                            opacity: 0,
                            transition: 'opacity 0.3s ease',
                            fontSize: 'clamp(0.8rem, 1vw, 1.1rem)',
                            lineHeight: '1.4'
                          }} onMouseEnter={(e) => {
                            e.currentTarget.style.opacity = '1';
                          }} onMouseLeave={(e) => {
                            e.currentTarget.style.opacity = '0';
                          }}>
                            {tool.details}
                          </div>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeToolTab === 'ai' && (
                <div style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  borderRadius: '15px',
                  padding: '3vw',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2vw' }}>
                    {[
                      { name: 'Python', icon: '🐍', desc: 'Programming language', link: 'https://www.python.org/', details: 'Beginner-friendly language perfect for data science, AI, and web development' },
                      { name: 'Pandas', icon: '📊', desc: 'Data manipulation', link: 'https://pandas.pydata.org/', details: 'Powerful data analysis library for working with structured data and time series' },
                      { name: 'TensorFlow', icon: '🧠', desc: 'ML framework', link: 'https://www.tensorflow.org/', details: 'Google\'s open-source platform for machine learning and neural networks' },
                      { name: 'Jupyter', icon: '📓', desc: 'Interactive computing', link: 'https://jupyter.org/', details: 'Create and share documents with live code, equations, visualizations, and text' },
                      { name: 'Google Colab', icon: '☁️', desc: 'Cloud notebooks', link: 'https://colab.research.google.com/', details: 'Free cloud-based Jupyter notebooks with GPU support for machine learning' },
                      { name: 'Scikit-learn', icon: '🔬', desc: 'Machine learning', link: 'https://scikit-learn.org/', details: 'Simple and efficient tools for data mining and data analysis' }
                    ].map((tool, index) => (
                      <div key={index} style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        borderRadius: '12px',
                        padding: '2vw',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        position: 'relative',
                        overflow: 'hidden'
                      }} onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-5px)';
                        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
                        e.currentTarget.style.boxShadow = '0 8px 25px rgba(255, 255, 255, 0.1)';
                      }} onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}>
                        <a href={tool.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                          <div style={{ textAlign: 'center', marginBottom: '1vw' }}>
                            <div style={{ fontSize: '3vw', marginBottom: '0.5vw' }}>{tool.icon}</div>
                            <h5 style={{ 
                              color: '#fff', 
                              fontWeight: 600, 
                              margin: '0 0 0.5vw 0',
                              fontSize: 'clamp(1rem, 1.2vw, 1.3rem)'
                            }}>{tool.name}</h5>
                            <p style={{ 
                              color: 'rgba(255, 255, 255, 0.8)', 
                              margin: 0,
                              fontSize: 'clamp(0.8rem, 1vw, 1.1rem)'
                            }}>{tool.desc}</p>
                          </div>
                          <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: 'rgba(0, 0, 0, 0.9)',
                            color: '#fff',
                            padding: '2vw',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center',
                            opacity: 0,
                            transition: 'opacity 0.3s ease',
                            fontSize: 'clamp(0.8rem, 1vw, 1.1rem)',
                            lineHeight: '1.4'
                          }} onMouseEnter={(e) => {
                            e.currentTarget.style.opacity = '1';
                          }} onMouseLeave={(e) => {
                            e.currentTarget.style.opacity = '0';
                          }}>
                            {tool.details}
                          </div>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              )}
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

      {/* Page Description */}
      <div style={{
        maxWidth: '800px',
        margin: '0 auto 2vw auto',
        textAlign: 'center'
      }}>
        <p style={{
          color: '#fff',
          fontSize: 'clamp(1rem, 1.2vw, 1.4rem)',
          lineHeight: '1.6',
          margin: '0',
          fontWeight: 500,
          opacity: 0.9
        }}>
          Welcome to your hackathon toolkit! 🛠️ Use the navigation on the left to explore different resources. 
          Whether you're a first-time hacker or a seasoned developer, there's something here for everyone!
        </p>
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