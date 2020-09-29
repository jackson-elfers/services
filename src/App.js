import React from 'react';
import logo from './logo.svg';
import './styles';
import Snowflakes from "magic-heartflakes";

function App() {
  //Snowflakes();
  return (
    <div>
      <h1>UI/UX</h1>
      <div>
      <h1 style = {{ "text-align": "center", "font-size": "50px" }}>React</h1>
      <h1 style = {{ "text-align": "center", "font-size": "50px" }}>Angular</h1>
      <h1 style = {{ "text-align": "center", "font-size": "50px" }}>Vue</h1>
      </div>
      
      <div className="box">
        <h2>Modern Interfaces built with the Latest Frameworks.</h2>
        <p>
        Providing you with 'state of the art' user interfaces for web, mobile and desktop 
        in record time or helping maintain an existing platform with speedy updates and revisions.
        </p>
      </div>
      
      <h1>Servers</h1>
      <h1 style = {{ "text-align": "center", "font-size": "50px" }}>Node</h1>
      <h1 style = {{ "text-align": "center", "font-size": "50px" }}>Java</h1>
      <h1 style = {{ "text-align": "center", "font-size": "50px" }}>Python</h1>
      
      <div className="box">
        <h2>Fast and Scalable servers built for Modern Traffic and Flexible Business Plans.</h2>
        <p>
        A website is only as good as its server and modern traffic demands performance from every 
        corner. Turning your ideas into reality with only the best technologies and optimizations.
        </p>
      </div>
      
      <h1>Databases</h1>
      <h1 style = {{ "text-align": "center", "font-size": "50px" }}>MySQL</h1>
      <h1 style = {{ "text-align": "center", "font-size": "50px" }}>MongoDB</h1>
      <h1 style = {{ "text-align": "center", "font-size": "50px" }}>DynamoDB</h1>
      
      <div className="box">
        <h2>Quick Access met with Robust Security to meet all Customer Demands.</h2>
        <p>
        Modern day customers require lightning fast access to their data with only the 
        highest level of security. Providing only the best database technologies for your 
        needs, the backbone of your business.
        </p>
      </div>
      
      <h1>Mobile</h1>
      <h1 style = {{ "text-align": "center", "font-size": "50px" }}>Android</h1>
      <h1 style = {{ "text-align": "center", "font-size": "50px" }}>IOS</h1>
      <h1 style = {{ "text-align": "center", "font-size": "50px" }}>Ionic</h1>
      
      <div className="box">
        <h2>Reaching all your Customers accross a Range of Devices.</h2>
        <p>
        The last 20 years have changed the way businesses communicate with customers as 
        technology has evolved to put computers in every pocket. Developing only the best 
        mobile services to fit your business needs.
        </p>
      </div>
      
      <img src = "./bonfire.gif" alt = "A large pink heart."/>
      
      <div className="box">
        <h2>Let's bring your Platform to Life.</h2>
        <p>
        An idea is only as good as its execution. Let's give yours the best set 
        of technologies and skill sets available to make it thrive in modern times.
        </p>
      </div>
      <a target = "_blank" href = "https://www.upwork.com/o/profiles/users/~01640060bc922a5bbb/">
       <button>Upwork</button>
      </a>
       <a target = "_blank" href = "https://www.linkedin.com/in/jackson-elfers/">
       <button>LinkedIn</button>
      </a>
      </div>
  );
}

export default App;
