import React from 'react'
import './Practice.scss'
import Logo_img from '../img/asset 0.svg'

const Practice = () => {
  return (
    <>
        <section className='container-fluid bg-color'>
            <div className='container'>
              <div className="row py-5 d-flex">
              <div className='col-lg-6'>
                    <img className='text-light2 mb-4' src={Logo_img} alt="Logo_img" />
                    <h4><strong>Code practice and mentorship for everyone</strong></h4>
                    <p>Develop fluency in 67 programming languages with our unique blend of learning, practice and mentoring. Exercism is fun, effective and 100% free, forever.</p>
                </div>
                <div className='col-lg-6 mr-auto my-auto text-center'>
                    <button className="btn btn-primary px-4 py-2 me-3"><strong>Sign up for free</strong></button>
                    {/* <button className="btn btn-primary px-4 py-2 shadow2"><strong></strong></button> */}
                    <button class="button-17" role="button">Explore Languages</button>
                </div>
              </div>
            </div>
        </section> 
    </>
  )
}

export default Practice