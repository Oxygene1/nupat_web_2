import display from '../Images/display-courses.png';

function CoursesDisplay() {
  return (
    <div className='coursesDisplay'>
        <div>
        <img className='coursesimg' src={display} alt='courses display'/>
        </div>
    </div>
    );
  }
  
  export default CoursesDisplay;