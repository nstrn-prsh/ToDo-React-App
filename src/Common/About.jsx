import React from "react";

const About = ({ myName }) => {
  return (
    <div className='d-flex justify-content-center container'>
      <div className='col-md-8'>
        <div className='card text-center'>
          <div className='card-header'>درباره سازنده</div>
          <div className='card-body'>
            <h5 className='card-title'> پروژه ری اکت </h5>
            <p className='card-text'> {myName} </p>
            <a href='google.com' className='btn btn-primary'>
              صفحه گیت هاب
            </a>
          </div>
          <div className='card-footer text-muted'>روز خوبی داشته باشی!</div>
        </div>
      </div>
    </div>
  );
};

export default About;
