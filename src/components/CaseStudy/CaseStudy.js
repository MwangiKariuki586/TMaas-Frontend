import React, { useRef } from 'react';
import './CaseStudy.css';

const CourseSection = () => {
  const scrollRef = useRef(null);
  let isDown = false;
  let startX;
  let scrollLeft;

  const mouseDownHandler = (e) => {
    isDown = true;
    scrollRef.current.classList.add('active');
    startX = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft = scrollRef.current.scrollLeft;
  };

  const mouseLeaveHandler = () => {
    isDown = false;
    scrollRef.current.classList.remove('active');
  };

  const mouseUpHandler = () => {
    isDown = false;
    scrollRef.current.classList.remove('active');
  };

  const mouseMoveHandler = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 3; // Increase this number to scroll faster
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const courses = [
    {
      id: 1,
      title: 'Deploying Digital Enterprise Service Management',
      rating: 4.4,
      duration: '300 min',
      videos: '7 Videos',
      resources: '7 Resources',
      image: 'images/academy-image.png',
      tag: 'Popular',
    },
    {
      id: 2,
      title: 'Agile Methodologies in Digital Transformation',
      rating: 4.4,
      duration: '54 min',
      videos: '5 Videos',
      resources: '2 Resources',
      image: 'images/academy-image2.jpg',
      tag: 'New',
    },
    {
      id: 3,
      title: 'MarCom 4.0: Integrating Marketing and Communication',
      rating: 4.4,
      duration: '20 min',
      videos: '3 Videos',
      resources: '2 Resources',
      image: 'images/academy-image3.jpg',
      tag: 'Popular',
    },
    {
      id: 4,
      title: 'Mastering E-Commerce Dynamics',
      rating: 4.5,
      duration: '254 min',
      videos: '10 Videos',
      resources: '5 Resources',
      image: 'images/academy-image.png',
      tag: 'Popular',
    },
    {
      id: 5,
      title: 'Data-Driven Marketing',
      rating: 4.6,
      duration: '180 min',
      videos: '6 Videos',
      resources: '3 Resources',
      image: 'images/academy-image2.jpg',
      tag: 'Trending',
    },
    {
      id: 6,
      title: 'Design Thinking for Innovation',
      rating: 4.7,
      duration: '240 min',
      videos: '8 Videos',
      resources: '4 Resources',
      image: 'images/academy-image3.jpg',
      tag: 'New',
    },
    // Add more courses as needed
  ];

  return (
    <div className="course-section">
     <div className = "CaseText">  
     <h1>Practical and Transforming</h1>
     <p>Learn through real life case studies, hands on projects and simulations that prepare you <br></br> for actual challenges of digital transfrmation in your workplace</p>
       </div><p className="CaseText1">Top case studies and projects</p>
      <div
        className="course-container"
        ref={scrollRef}
        onMouseDown={mouseDownHandler}
        onMouseLeave={mouseLeaveHandler}
        onMouseUp={mouseUpHandler}
        onMouseMove={mouseMoveHandler}
      >
        {courses.map((course) => (
          <div key={course.id} className="course-item">
            <div className="course-image">
              <img src={course.image} alt={course.title} />
              <span className="course-tag">{course.tag}</span>
            </div>
            <div className="course-info">
              <h3>{course.title}</h3>
              <div className="course-rating">
                <span>⭐ {course.rating}</span>
              </div>
              <p>{course.duration} &bull; {course.videos} &bull; {course.resources}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseSection;
