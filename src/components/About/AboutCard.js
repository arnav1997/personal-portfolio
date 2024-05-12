import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Thank you for visiting my website, I am{" "}
            <span className="purple">Arnav Mahapatra! </span>
            <br />
            I've just graduated with an MS in Engineering Science degree from
            University at Buffalo, New York, USA.
            <br />
            Before that, I worked for 3 years as a Full-Stack Engineer,
            specializing in Java and Python with REST API for backend
            development, complemented by expertise in React and Angular
            frontends. <br />I took up programming at quite an early age,
            starting with C and C++ and then moving on to Java and Python. I
            enjoy solving problems by writing clean and efficient code.
            Furthermore, I have a good knowledge and experience with regards to
            System Design principles. I'm an AWS Certified Cloud Practitioner,
            capable of deploying and managing robust and scalable applications
            on the cloud. On a personal level, I firmly believe in the power of
            technology to empower people and make their lives better!
            <br />
            <br />
            Apart from coding, here are some hobbies I enjoy :)
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Football - Yes, it's football and I wince
              everytime someone calls it soccer :p. I support Real Madrid CF and
              I consider Lionel Messi as the GOAT.
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies and TV Shows - The Dark Knight is
              one movie that I can watch any number of times and I absolutely
              loved Breaking Bad and Better Call Saul.
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Novels - My favourite novel is The Count
              of Monte Cristo by Alexandre Dumas. It's also the longest novel
              I've ever read and I'm so glad I did it because it was amazing!
            </li>
          </ul>

          <p style={{ color: "#cd5ff8" }}>
            "Be the best version of yourself and make your mark on the world!"{" "}
          </p>
          <footer className="blockquote-footer">Arnav</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
