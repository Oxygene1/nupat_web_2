
import React from 'react'
import Form from '../components/Form.jsx'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx';
// import Footer from '.Enrollment/Footer.jsx'
import Ellipse1 from '../Images/Ellipse1.jpg';
// import About1 from '../Images/AboutPic1.jpg';
// import About2 from '../Images/AboutPic2.png';
// import About3 from '../Images/AboutPic3.jpg';
// import About4 from '../Images/AboutPic4.jpg';
import Ellipse2 from '../Images/Ellipse2.jpg';
import Ellipse3 from '../Images/Ellipse3.jpg';
import Ellipse4 from '../Images/Ellipse4.jpg';
import MobileHeader from '../components/MobileHeader.jsx';
import styled from 'styled-components';
import useDocumentTitle from '../commons/useTitle';
function AboutBody() {
  useDocumentTitle("About Us")
const Ellipsecontain = styled.div`

display: flex;
flex-direction:row;
@media (max-width: 768px) {
  flex-direction: column;
}
@media (max-width:786px){
  width: 100%;
  margin-right:auto;
  margin-left:auto;
}
 
  width:100%;
  margin-top:3rem;
  
`
const Ellipsecontain2 = styled.div`
width: 100%;
display: flex;
flex-direction:row;
@media (max-width: 768px) {
flex-direction: column-reverse;
}
width:100%;
// margin-left:5%;
  // justify-content: center;
  margin-top:3rem;
  @media (max-width:786px){
    width: 100%;
    marging-right:auto;
    margin-left:auto;
  }
`
const Visionp = styled.p`
font-family: 'DM Sans';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 42px;
// justify-content:center;
// text-align: center;
color: #000000;
width: 70%;
// margin-left:10%;
// margin-right:10%;
width:34.875rem;
@media (max-width:786px){
  text-align: center;
  width:100%
}
`
const Ellipsemain= styled.div`
width: 90%;
display: flex:
justify-content: center;
marging-right:5%;
margin-left:5%;


`
const EllipsecontainLast= styled.div`
width: 95%;
margin-left: auto;
margin-right: auto;
// padding:1rem;
@media (max-width:786px){
  width: 100%;
  // margin-right:auto;
  // margin-left: auto;
}
`
const About1 = styled.div`
width: 90%;
margin-right:auto;
margin-left: auto;
margin-top: 3rem;
`
const Abouth1 = styled.h1`
color:#131E47;

`
const Aboutp = styled.p`

font-family: 'DM Sans';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 36px;
color: #000000;
@media (max-width:786px){
  width: 100%;
  // margin-right:auto;
  // margin-left: auto;
}
`
const Ecdiv = styled.div`
margin-right: 25%;
@media (max-width:786px){
  width: 100%;
  margin-right:auto;
  margin-left: auto;
}
`
// const EcdivLast =styled.div`
// width:100%;
// margin-left: auto;
// margin-right: auto;
// `
const Ecdiv2 = styled.div`
margin-left:25%;
@media (max-width:786px){
  width: 100%;
  margin-right:auto;
  margin-left: auto;
}

`
const Otherh1 = styled.h3`
color: #131E47;
font-family: 'DM Sans';
font-style: normal;
font-weight: 700;
font-size: 40px;
line-height: 52px;
`
const Otherh2 =styled.h3`
text-align: center;
color: #131E47;
font-family: 'DM Sans';
font-style: normal;
font-weight: 700;
font-size: 40px;
line-height: 52px;
@media (max-width:786px){
  ont-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 22px;
  margin-bottom: 0;
  margin-top:2rem;
  padding: .8rem;
}
`
const Imagediv = styled.div`
width:100%
`
const OrderedList =styled.ul`
width: 100%;
display: block;
@media (max-width:786px){
  display: none;
}
`
const AboutUsli = styled.li`
@media(max-width:786px){
padding: .5rem;
margin: 0 0 0 0;
line-height: 30px;
font-size:20px;
width: 100%;

}

`
const MobileListdiv =styled.div`
display: none;
@media (max-width:786px){
  display:block;
  width: 100%;
  padding: 1rem;
}
`
// useEffect(() => {
//   document.title = "About Us";  
// }, []);

  return (
    <div>
      <div>
          <Header/>
          <MobileHeader/>
      </div>
    
     
      
      <div>
      
      
      <div>
      <div className='AboutMainIMGDIV'>

      </div>
        <About1>
          <Abouth1>About Us</Abouth1>
          <Aboutp style={{textAlign:'justify'}}>
          NUPAT Technologies is a software development company from African descent birthed by the vision of becoming a leading brand in world class innovation and delivery of masterpiece and cutting edge technology.
          The Company is founded by a group of distinct, highly skilled, innovative and experienced tech experts.
          </Aboutp>
          <Aboutp style={{textAlign:'justify'}}>
          The Company is registered with the Corporate Affairs Commission of the Federal Republic of Nigeria, established under the Companies and Allied Matters Act 1990.
          Nupat is the partner of choice for many of the world’s leading enterprises, SMEs and technology challengers. We help businesses elevate their value through custom software development, product design, QA and consultancy services.We can help to maintain and modernize your IT infrastructure and solve various infrastructure-specific issues a business may face.
          </Aboutp>
          <Aboutp style={{textAlign:'justify'}}>
          NUPAT TECHNOLOGIES also provides intensive practical software development boot-camp that is ushering in a new generation of indigenous software developers driving innovation and software development in the information and technological industry. The training utilizes the experience and skill sets of veterans in the industry. Quality practical training and online resources are used in a conducive, team building and challenging environment to inspire and mold the interns to become great tech experts.
          
          </Aboutp>
        </About1>

        <Ellipsemain>
        <Ellipsecontain>
          <Ecdiv>
            <Otherh1>Our Vision</Otherh1>
            <Visionp style={{textAlign:'justify'}}>Our vision is to become a leading brand in the worldclass innovation and delivery of masterpiece and cutting-edge technology</Visionp>
          </Ecdiv>
          <Imagediv>
          <input type="image" className='Ellipseimg' src={Ellipse1} alt=''/>
          </Imagediv>
        </Ellipsecontain>
        <Ellipsecontain2>
          <Imagediv>
          <input type="image" className='Ellipseimg2' src={Ellipse2} alt=''/>
            
          </Imagediv>
          <Ecdiv2>
          <Otherh1>Our Mission</Otherh1>
            <Visionp style={{textAlign:'justify'}}>Our  Mission is to touch lives around the globe through technology and cause a global shift and focus to Nigeria and Africa at large as the world’s center for future motivations and worldclass inventions</Visionp>
          </Ecdiv2>
        </Ellipsecontain2>
        <Ellipsecontain>
          <Ecdiv>
            <Otherh1>Our Vision</Otherh1>
            <Visionp style={{textAlign:'justify'}}>Our vision is to become a leading brand in the worldclass innovation and delivery of masterpiece and cutting-edge technology</Visionp>
          </Ecdiv>
          <Imagediv>
          <input type="image" className='Ellipseimg' src={Ellipse3} alt=''/>
          </Imagediv>
        </Ellipsecontain>
        <Ellipsecontain2>
          <Imagediv>
          <input type="image" className='Ellipseimg2'  src={Ellipse4} alt=''/>
            
          </Imagediv>
          <Ecdiv2>
          <Otherh1>Our Strategy</Otherh1>
            <Visionp style={{textAlign:'justify'}}>We are building a great team  of talents and experts innovation driven with plans centered on maximum clients satisfaction</Visionp>
          </Ecdiv2>
        </Ellipsecontain2>



        
      </Ellipsemain>
     
     
      
      </div>
      <EllipsecontainLast>
      {/* <div> */}

            <Otherh2>Our Goals</Otherh2>
            <OrderedList style={{fontSize:'18px'}}>
              <AboutUsli>Establishment of a leading tech hub and innovationtion center in Africa </AboutUsli>
              <AboutUsli>Raising the largest community of developers in Africa</AboutUsli>
              <AboutUsli>Become Africa’s leading provider of Software Services and Applications through innovative drives</AboutUsli>
              <AboutUsli>Setting up the largest AI center in Africa, with expertise in Robotics and Data Science</AboutUsli>
              <AboutUsli>Become  a major player in Fin-Tech Solutions in Africa</AboutUsli>
            </OrderedList>  
            <MobileListdiv>
            <p>Establishment of leading tech hub / innovationtion center in Africa.</p>
            <p>Raising the largest community of developers in Africa.</p>
            <p>Become Africa’s leading provider of Software Services and Applications through innovative drives.</p>
            <p> Setting upnthe largest AI center in Africa , with expertise in Robotics and Data Science.</p> 

            </MobileListdiv>     
      {/* </div> */}
        </EllipsecontainLast>
     
      <div>
      <Form/>
      </div>

      <Footer/>
      </div>
    </div>
    );
  }
  
  export default AboutBody;