import React from 'react';
import mypic from '../../assets/mypic.png.png';
 import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import TypeIt from "typeit-react";


const About = () => {
  return (
    <section
      id="about"
      className="py-9 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-10 lg:mt-16"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Jatin Yadav
          </h2>
          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
  
       <TypeIt
  getBeforeInit={(instance) => {
    return instance
      .type("MERN Stack Developer")
      .pause(1500)
      .delete(null)               // delete full string
      .type("")
      .pause(1500)
      .delete(null)               // delete second string
      .type("")
      .pause(1500)
      .delete(null)
      .type("Coder")
      .pause(1500)
      .delete(null)
      .go();
  }}
  options={{
    speed: 100,
    eraseSpeed:50,
   typingDelay:500,
    eraseDelay:2000,
    loop: true
  }}
/>
          </h3>
          {/* About Me Paragraph */}
          
           <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
           
      Hello! I'm Jatin Yadav, a passionate 3rd year student at Guru Jambheshwar University of Science and Technology.
       I am an enthusiastic and dedicated learner with a strong interest in web development and programming.
        I have built a solid foundation in HTML, CSS, JavaScript, and React.js, and I am currently expanding my backend skills by working with Node.js. 
        Along with web technologies, I also have knowledge of programming languages such as C, C++, Java, Python, and C#.
         I enjoy solving problems, building projects, and continuously improving my technical skills. 
         My goal is to grow as a full-stack developer and contribute to meaningful real-world projects.
</p>
        
          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1-tLW9LG3PcNBfimDlfZV2KKLFpir8tGV/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }}
          >
            DOWNLOAD CV
          </a>
          
        </div>
        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
                 src={mypic}
              alt="Jatin Yadav"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;