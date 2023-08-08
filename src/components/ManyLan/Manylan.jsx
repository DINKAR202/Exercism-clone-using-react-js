import React from 'react'
import './Manylan.scss'
import Sdata from '../Langdata'

const Manylan = (props) => {
  return (
    <>
        <section className='container-fluid'>
            <div className="container d-flex flex-wrap">
                <div className="col-lg-2 card-lan text-center">
                    <img src={Sdata[0].imgsrc} className='mb-3' alt="" />
                    <h6><b>{Sdata[0].title}</b></h6>
                    <p>{Sdata[0].para}</p>
                </div>
                <div className="col-lg-2 text-center">
                    <img src={Sdata[1].imgsrc} className='mb-3' alt="" />
                    <h6><b>{Sdata[1].title}</b></h6>
                    <p>{Sdata[1].para}</p>
                </div>
                <div className="col-lg-2 text-center">
                    <img src={Sdata[2].imgsrc} className='mb-3' alt="" />
                    <h6><b>{Sdata[2].title}</b></h6>
                    <p>{Sdata[2].para}</p>
                </div>
                <div className="col-lg-2 text-center">
                    <img src={Sdata[3].imgsrc} className='mb-3' alt="" />
                    <h6><b>{Sdata[3].title}</b></h6>
                    <p>{Sdata[3].para}</p>
                </div>
                <div className="col-lg-2 text-center">
                    <img src={Sdata[4].imgsrc} className='mb-3' alt="" />
                    <h6><b>{Sdata[4].title}</b></h6>
                    <p>{Sdata[4].para}</p>
                </div>
                <div className="col-lg-2 text-center">
                    <img src={Sdata[5].imgsrc} className='mb-3' alt="" />
                    <h6><b>{Sdata[5].title}</b></h6>
                    <p>{Sdata[5].para}</p>
                </div>
                <div className="col-lg-2 text-center">
                    <img src={Sdata[6].imgsrc} className='mb-3' alt="" />
                    <h6><b>{Sdata[6].title}</b></h6>
                    <p>{Sdata[6].para}</p>
                </div>
                <div className="col-lg-2 text-center">
                    <img src={Sdata[7].imgsrc} className='mb-3' alt="" />
                    <h6><b>{Sdata[7].title}</b></h6>
                    <p>{Sdata[7].para}</p>
                </div>
                <div className="col-lg-2 text-center">
                    <img src={Sdata[8].imgsrc} className='mb-3' alt="" />
                    <h6><b>{Sdata[8].title}</b></h6>
                    <p>{Sdata[8].para}</p>
                </div>
                <div className="col-lg-2 text-center">
                    <img src={Sdata[9].imgsrc} className='mb-3' alt="" />
                    <h6><b>{Sdata[9].title}</b></h6>
                    <p>{Sdata[9].para}</p>
                </div>
                <div className="col-lg-2 text-center">
                    <img src={Sdata[10].imgsrc} className='mb-3' alt="" />
                    <h6><b>{Sdata[10].title}</b></h6>
                    <p>{Sdata[10].para}</p>
                </div>
                <div className="col-lg-2 text-center">
                    <img src={Sdata[11].imgsrc} className='mb-3' alt="" />
                    <h6><b>{Sdata[11].title}</b></h6>
                    <p>{Sdata[11].para}</p>
                </div>
            </div>
        {/* bottom function */}
        <div className="container btm_box d-flex mt-3">
            <div className='col-lg-4 left_line'></div>
            <div className='col-lg-3 middle_box'> <button className='border-rounded-3 btn btn-primary'><b><a href="#">See all 67 Language Tracks -</a></b></button> </div>
            <div className='col-lg-5 right_line'></div>
        </div>

        </section>

    </>
  )
}

export default Manylan
