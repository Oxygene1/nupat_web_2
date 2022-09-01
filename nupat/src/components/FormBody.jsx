import React from 'react'
import groupImage from '../Images/group-picture1.jpg';
import Header from './Header.jsx'
import Footer from './Footer.jsx';
import Form from './Form.jsx';
import Banner from '../Images/display-courses.png';


function FormBody() {

 
  return (
  <div>
    {/* <div className='fixedHeader'> */}
      <Header/>
      {/* </div> */}
    <div>
    
    <div className="FormContainer">
      
      <div className="Welcome">
        <div>
        <h1 className='welcomIntro'>Welcome to NUPAT Code Camp</h1>
        </div>
       
      
        <input className='groupImg' type="image" img src = {groupImage} alt="photo" />
        {/* <div className="play-panel">
        <img className='playcenter' src={playcenter} alt='play icon'/>
        <img className='play2' src={play2} alt='play icon'/>
        <img className='playborder' src={playborder} alt='play icon'/>
        </div>
       */}

       </div>
       <div className='textIntro'>
       <h1>Courses</h1>
       </div>
        
        <div className='textsection' id='tex'>
        
        <div className='textsection1'>
          <div>
            <div>
        <h2>Data Science and Machine Learning</h2>
        <p>Enroll to our Data Science and Machine Learning program to become a complete Data Scientist and Machine Learning engineer. Learn Data Science and Machine Learning from scratch and get hired. 
        In the course of this program ,we will build many real world projects to add to your portfolio. The technologies and concepts that will covered in this program along with several real world projects include: Data Exploration and Visualizations, Neural Networks and Deep Learning, Model Evaluation and Analysis, Python programming language, Tensorflow, Numpy, Scikit-Learn, Data Science and Machine Learning Projects and Workflows, Data Visualization in Python with MatPlotLib and Seaborn, Transfer Learning, Image recognition and classification, Train/Test and cross validation, Supervised Learning: Classification, Regression and Time Series, Decision Trees and Random Forests, Ensemble Learning, Hyperparameter Tuning, Using Pandas Data Frames to solve complex tasks, Use Pandas to handle CSV Files, Deep Learning / Neural Networks with TensorFlow and Keras, K Nearest Neighbours, Support Vector Machines, Regression analysis (Linear Regression/Polynomial Regression), How Hadoop, Apache Spark, Kafka, and Apache Flink are used, Setting up your environment with Conda, MiniConda, and Jupyter Notebooks, Using GPUs with Google Colab.By the end of this course, you will be a complete Data Scientist that can get hired at large companies with a stack of projects you have built that you can show off to others.</p>
        </div>
        <div className='enroll'>
        <a href="https://extendedforms.io/form/969c78e1-5696-4574-b724-c81c8376b2d4/login">Enroll Now</a>
        </div>
        </div>

        <div>
        <h2>Back End / Api Development</h2>
        <p>Enroll to our Backend/API software development program and get practical guide, courses and mentorship from beginner to intermediate level. The technologies covered in this program includes HTML/CSS Frontend technologies, Vanilla JavaScript, Source Control with Git,  NodeJS NPM, and NoSQL Database (MongoDB), Column Databases, Database ORM, Express Framework, Asynchronous programming, Karken layer, Drywall user management, Bcrypt encryption, Socket IO and REST APIs.
        You will be building several projects at every point or stage of the program as you learn from scratch all the tools, technologies and concepts that will be introduced.We will ensure your portfolio is rich with several repositories on different online platforms.Enroll today, get guided and properly mentored to fulfil that dream of becoming an expert Backend/API developer soon and be qualified for opportunities that awaits you.</p>
        <div className='enroll'>
        <a href="https://extendedforms.io/form/969c7463-330e-4147-9ba8-8725f542a77b/login">Enroll Now</a>
        </div>
        </div>
        
        <div>
     
      <h2>Blockchain Development</h2>
      <p>Enroll to our Blockchain software development program and get practical guide, courses and mentorship from beginner to intermediate level. The technologies covered in this program includes HTML/CSS Frontend technologies, Vanilla JavaScript, Source Control with Git, Ethereum Blockchain Development with Solidity, Web3.JS, Truffle, Metamask, Remix & More..
      You will be building several projects at every point or stage of the program as you learn from scratch all the tools, technologies and concepts that will be introduced.
      We will ensure your portfolio is rich with several repositories on different online platforms.

      Enroll today, get guided and properly mentored to fulfil that dream of becoming an expert Blockchain developer soon and be qualified for opportunities that awaits you.</p>

      <div className='enroll'>
        <a href="https://extendedforms.io/form/969c7463-330e-4147-9ba8-8725f542a77b/login">Enroll Now</a>
        </div>
          
        </div>

        
          <div>
          <h2>.Net Development</h2>
        <p>
        Enroll to our .net software development program and get practical guide, courses and mentorship from beginner to intermediate level. The technologies covered in this program includes HTML/CSS Frontend technologies, Vanilla JavaScript, jQuery, C#, ASP.Net MVC 5 Framework, WPF, WinForms, Xamarin, Source Control with Git, SQL and other Database management tools.

        You will learn how to create well-structured MVC web applications from scratch, add libraries and dependencies to the web application without creating unnecessary coupling, and create dynamic web pages and screens that accept, validate, and process user input. We will also ensure you learn how to expose complex data to the application’s users through screens, extend the MVC framework to create cross-cutting behavior with minimal code, and develop using HTML5, CSS3, and jQuery to create MVC web applications that function equally well on desktops, tablets, and smartphones. You will learn how to properly structure a software system that uses separation of concerns and layering so that applications can be maintainable for years to come.

        You will be building several projects at every point or stage of the program as you learn from scratch all the tools, technologies and concepts that will be introduced.

        We will ensure your portfolio is rich with several repositories on different online platforms.

        Enroll today, get guided and properly mentored to fulfil that dream of becoming an expert full stack developer soon and be qualified for opportunities that awaits you.</p>

        <div className='enroll'>
        <a href="https://extendedforms.io/form/969c7463-330e-4147-9ba8-8725f542a77b/login">Enroll Now</a>
        </div>
          </div>

        </div>

        <div className='textsection2'>
        <div>
          <h2>Front End Development</h2>
          <p>Enroll to our Blockchain software development program and get practical guide, courses and mentorship from beginner to intermediate level. The technologies covered in this program includes HTML/CSS Frontend technologies, Vanilla JavaScript, Source Control with Git, Ethereum Blockchain Development with Solidity, Web3.JS, Truffle, Metamask, Remix & More..
          You will be building several projects at every point or stage of the program as you learn from scratch all the tools, technologies and concepts that will be introduced.We will ensure your portfolio is rich with several repositories on different online platforms. Enroll today, get guided and properly mentored to fulfil that dream of becoming an expert Blockchain developer soon and be qualified for opportunities that awaits you.</p>
          <div className='enroll'>
        <a href="https://extendedforms.io/form/969c7463-330e-4147-9ba8-8725f542a77b/login" >Enroll Now</a>
        </div>
          </div>
          <div>
          <h2>Full Stack Development</h2>
          <p>Enroll to our Full-stack software development program and get practical guide, courses and mentorship from beginner to intermediate level. The technologies covered in this program includes HTML/CSS Frontend technologies, Vanilla JavaScript, Source Control with Git, ReactJS, Redux, Hooks & Context, NodeJS NPM, and NoSQL Database (MongoDB), Column Databases, Database ORM, Express Framework, Asynchronous programming, Karken layer, Drywall user management, Bcrypt encryption, Socket IO and REST APIs. You will be building several projects at every point or stage of the program as you learn from scratch all the tools, technologies and concepts that will be introduced. We will ensure your portfolio is rich with several repositories on different online platforms. Enroll today, get guided and properly mentored to fulfil that dream of becoming an expert full stack developer soon and be qualified for opportunities that awaits you.</p>
          <div className='enroll'>
          <a href="https://extendedforms.io/form/969c7463-330e-4147-9ba8-8725f542a77b/login">Enroll Now</a>
        </div>
          </div>
          <div>
          <h2>UIUX DESIGN</h2>
          <p>
          Enroll to our User Interface/User Experience program and get the best skillsets in Web Design and Mobile Design as well as User Interface and User Experience Design (UI/UX). This Bootcamp focuses on efficiently getting you from zero to a point where you can get hired or win freelance contracts.

          We will use in demand tools like Figma to show you a full workflow from start to finish. From sketching, inspiration, prototyping, wireframes to microinteractions etc, we will guide and equip you to become confident and ready to deliver as a professional Designer.

          The curriculum is going to be very hands on as we walk you from start to finish of working as a Designer, all the way into learning how to create final professional designs and then converting them into actual websites or apps using HTML and CSS.

          We will ensure your portfolio is rich with several repositories on different online platforms.
          Enroll today, get guided and properly mentored to fulfil that dream of becoming an expert UI/UX Designer soon and be qualified for opportunities that awaits you.
          <div className='enroll'>
           <a href="https://extendedforms.io/form/96a4b9ef-a476-42e6-924c-cb8487a35fa1/login">Enroll Now</a>
        </div>
          </p>

          </div>
          <div>
          <h2>Data Science and Analytics;(Weekend/ online)</h2>
          <p>Enroll to our Data Science and Analytics training program and get practical guide, courses and mentorship from beginner to intermediate level. The technologies covered in this program includes Microsoft Power Bi, Microsoft Excel, SQL Database, Python & More..

          You will learn and and have practical sessions on Data Exploration and Visualizations, Model Evaluation and Analysis, Python programming language, Tensorflow, Numpy, Scikit-Learn, Data Science and Machine Learning Projects and Workflows, Data Visualization in Python with MatPlotLib and Seaborn, Transfer Learning, Image recognition and classification, Train/Test and cross validation, Supervised Learning: Classification, Regression and Time Series, Decision Trees and Random Forests, Ensemble Learning, Hyperparameter Tuning, Using Pandas Data Frames to solve complex tasks, Use Pandas to handle CSV Files, Deep Learning / Neural Networks with TensorFlow and Keras, K Nearest Neighbours, Support Vector Machines, Regression analysis (Linear Regression/Polynomial Regression), How Hadoop, Apache Spark, Kafka, and Apache Flink are used, Setting up your environment with Conda, MiniConda, and Jupyter Notebooks, Using GPUs with Google Cola

          You will be building several projects at every point or stage of the program as you learn from scratch all the tools, technologies and concepts that will be introduced.
          We will ensure your portfolio is rich with several repositories on different online platforms.
          Enroll today, get guided and properly mentored to fulfil that dream of becoming an expert Data Scientist soon and be qualified for opportunities that awaits you.</p>
          <div className='enroll'>
        <a href="https://extendedforms.io/form/969c77fa-63c0-4f5b-a959-840d74932826/login">Enroll Now</a>
        </div>
          
          

        </div>

        
       </div>
     
       </div>
       <div className='coursesimgDIV'>
       <input className='coursesimg' type="image" img src = {Banner} alt='banner-picture'/>
       </div>


        

       <Form/>


        
    


    </div>
    <Footer/>
    </div>
    </div>
    );
  }
  
  export default FormBody;