import React from 'react'

function Home(props) {
   // console.warn("props",props)
   console.warn("home", props.data)
   return (
      <div>
         {/* header files  separate */}
         {/* <div className="add-to-cart">
            <span className="cart-count">{props.data.length}</span>
            <img src="https://cdn3.iconfinder.com/data/icons/e-commerce-2-1/256/2-512.png" alt="" />
         </div> */}
         <h1>Home</h1>
         <div className="cart-wrapper">
            <div className="img-wrapper item">
               <img src="https://images.unsplash.com/photo-1597415581463-4b7a5a87be62?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt=""/>
            </div>
            <div className="text-wrapper item">
               <span>i - phone</span><br/>
               <span>price:$1000.00</span>
            </div>
            <div className="btn-wrapper item">
<button onClick={()=>props.addToCartHandler({price:1000,name:'i - phone'})}>Add to cart</button>
              
               <button className="remove-cart-btn" onClick={() => props.removeToCartHandler()}>Remove to cart</button>
            </div>
           
         </div>
      </div>
   )
}

export default Home
