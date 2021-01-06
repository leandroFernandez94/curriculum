import React from "react";
import DocumentTitle from "react-document-title";
import "./styles.css";

export default function App() {
  return (
    <DocumentTitle title="Leandro Fernandez">
      <div className="App">
        <div id="header-container">
          <div id="main-data">
            <h1>Leandro Fernandez</h1>
            <h2>Developer</h2>
          </div>
          <ul className="personal-data">
            <li>
              <span>
                <img src="/location-pointer.svg" alt="location logo"></img>{" "}
                Argentina
              </span>
            </li>
            <li>
              <span>
                <img src="/email.svg" alt="email logo"></img>{" "}
                leandroofernandezz@gmail.com
              </span>
            </li>
            <li>
              <span>
                <img src="/phone.svg" alt="phone logo"></img> +54 1168521053
              </span>
            </li>
            <li>
              <span>
                <img src="github.svg" alt="github logo"></img>{" "}
                <a
                  href="https://github.com/leandroFernandez94"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  leandroFernandez94
                </a>
              </span>
            </li>
          </ul>
        </div>
        <hr className="main-line" />

        <h3 className="section-title">Profile</h3>
        <p>
          Looking for new projects where I can write production ready code,
          apply my experience in the development of web apps and find good
          working environments where I can help others and get good feedback.
        </p>
        <h3 className="section-title">Education</h3>
        <ul>
          <li>
            Currently focused on becoming a better self taught developer by
            applying to web courses and always looking for the newest
            technologies
          </li>
          <li>Systems Engineering at UTN, 2013 - stopped in 2018</li>
          <li>
            Computer Technician at E.T. 35 D.E. 18 Ing. Eduardo Latzina, 2008 -
            2013
          </li>
          <li>English level: Firsts Certificate with a B qualification</li>
        </ul>
        <h3 className="section-title">Experience</h3>
        <h4>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.bons.io/"
          >
            Bons
          </a>{" "}
          October 2018 - January 2021:
        </h4>
        <ul>
          <li>
            Frontend development of{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.produck.io/"
            >
              Produck
            </a>{" "}
            progressive web app made with react.
          </li>
          <li>
            Developed react and vuejs web apps integrated to{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://webflow.com/"
            >
              webflow
            </a>{" "}
            for many of Bons clients. Using a custom stack with node + airtable
            + mongoDB in the backend served by vercel.
          </li>
        </ul>
        <h4>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://despegar.com"
          >
            Despegar.com
          </a>{" "}
          August 2015 - October 2018:
        </h4>
        <ul>
          <li>
            Received training during "Alto Vuelo" course given by leaders of
            backend, frontend and mobile teams
          </li>
          <li>Development of REST APIs written in JAVA, SCALA and node.js</li>
          <li>Development of user interfaces based on angularjs and React</li>
        </ul>
        <h3 className="section-title">Key technologies I have worked with</h3>
        <ul>
          <li>
            <b>OS and tools:</b> GIT, Linux, MacOS, Docker, npm,{" "}
          </li>
          <li>
            <b>Frontend stack: </b>React, Vue, Angular, Redux, NextJS,
            Apollo(GraphQL), Webpack, PWAs
          </li>
          <li>
            <b>Backend stack: </b> Nodejs(with typescript) powered by
            express/vercel, MongoDB, sql based DBs, redis
          </li>
        </ul>
      </div>
    </DocumentTitle>
  );
}
