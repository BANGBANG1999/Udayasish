import React, {useState} from 'react'
import "./Works.css"
import FrontendDevelopment from './FrontendDevelopment';
import BackendDevelopment from './BackendDevelopment';
import WebApps from './WebApps';
import WebDesign from './WebDesign';

function Works() {
  const items = ['Web Design', 'Frontend Development', 'Backend Development', 'Web Apps'];

  const [work, setWork] = useState("Web Design");

  return (
    <div className="works_section">
      <div className="works_container">
        <div className="left_works">
          <ul className="list_works">
          
          {items.map((item, index) => (
              <li key={index} data-text={item}className={`listItem`}  onClick={() => {setWork(item)}}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="right">
        {work === "Web Design" ? (
            <WebDesign />
          ) : work === "Frontend Development" ? (
            <FrontendDevelopment />
          ) : work === "Backend Development" ? (
            <BackendDevelopment />
          ) : (
          <WebApps />
          )}
          
        </div>
      </div>
    </div>
  )
}

export default Works
