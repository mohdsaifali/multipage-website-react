import React from 'react'
import Bycategory from './Bycategory'
import './Home.css'
import Latestnews from './Latestnews'
import Trendingnews from './Trendingnews'
const Home = () => {
    return (
        <>

            <section className="product_section">
                <div className='container p0'>
                    <div className='row p0'>
                        <div className='col-7 box-1 img-container'>
                            <img src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                        </div>
                        <div className='col-5 box-2'>
                        
                             <button type="button" className="btn btn-outline card-btn">Food</button>
                         
                            <h2>Make Your Store Stand Out <br />From The Other By</h2>
                            <p> Contary To Populer Belief , Lorem Ipsum Is Not <br /> Simply Random Text</p>
                            <button type='button' className='btn btn-default'>Continue</button>
                        </div>
                    </div>

                </div>

            </section>

            
            <section className=" product_card">
                <div className='container'>
                    <div className="row " >
                        <h2>Upcoming Event</h2>
                        <div className="col-3 news-1"> 
                        <div className="card bg-white text-white img-1">
                                <img src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80 " className="card-img" alt="..." />
                            </div>
                        </div>

                        <div className="col-3 news-1 ">
                            <div className="card bg-whitesmoke text-white img-3">
                                <img src="https://images.unsplash.com/photo-1475870434835-a633fd526088?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="card-img" alt="..." />
                            </div>
                        </div>




                        <div className="col-3 news-1">
                        <div className="card bg-whitesmoke text-white img-3">
                                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" className="card-img" alt="..." />
                            </div>
                             </div>
                        <div className="col-3 news-1">
                        <div className="card bg-whitesmoke text-white img-3">
                                <img src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="card-img" alt="..." />
                            </div>
                             </div>
                    </div>
                    </div>
            </section>

          <Latestnews/>
            <Trendingnews/>
            <Bycategory/>
        </>


    )
}

export default Home