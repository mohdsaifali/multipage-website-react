import React from 'react'
import './Bycategory.css'
const Bycategory = () => {
  return (
       
    <section className='latest-news'>
    
    <div className="container by_category">
        <div className="row">
        <h1>By Category</h1>
        <div className='container by_category '>
                    <div className="row " >
                       
                        <div className="col-4 news-1"> 
                        <div className="card bg-whitesmoke text-white img-1">
                                <img src=" https://images.unsplash.com/photo-1523132797263-747d5d0dbbb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" className="card-img" alt="..." />
                            </div>
                        </div>

                        <div className="col-4 news-1 ">
                            <div className="card bg-whitesmoke text-black ">
                            <img src=" https://images.unsplash.com/photo-1523132797263-747d5d0dbbb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" className="card-img" alt="..." />
                            </div>
                        </div>




                        <div className="col-4 news-1">
                        <div className="card bg-whitesmoke text-white img-2">
                                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" className="card-img" alt="..." />

                            </div>
                             </div>


                             <div className="col-4 news-1 text ">
                            <div className="card bg-white text-black ">

                           
                             <button type="button" className="btn btn-outline card-btn by_cat">Food</button>
                        

                               <h4> Customize Your <br />
                               WooCommerce Store <br />
                               With Countless Design</h4>
                            </div>
                        </div>

                        <div className="col-4 news-1 text">
                            <div className="card bg-white text-black ">
                          
                             <button type="button" className="btn btn-outline  card-btn-1 by_cat">Vedio</button>
                        
                               <h4> Customize Your <br />
                               WooCommerce Store <br />
                               With Countless Design</h4>
                            </div>
                        </div>

                        <div className="col-4 news-1 text">
                            <div className="card bg-white text-black ">
                            
                             <button type="button" className="btn btn-outline card-btn-2 by_cat">Marketing</button>
                        
                               <h4> Customize Your <br />
                               WooCommerce Store <br />
                               With Countless Design</h4>
                            </div>
                        </div>

                    </div>
</div>



        </div>
    </div>
</section>
  )
}

export default Bycategory