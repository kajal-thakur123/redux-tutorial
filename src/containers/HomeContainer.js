import { connect } from "react-redux";
import Home from '../components/Home';
// import { dispatch } from 'react-redux';
import { addToCart,removeToCart } from "../service/actions/Actions";

const mapStateToProps = state => ({
   // data: state.cardItems.cardData
   data: state.cardItems //add multiple items when click on btn
})

const mapDispatchToProps = dispatch=>({
   
   addToCartHandler: data => dispatch(addToCart(data)),
    removeToCartHandler: data => dispatch(removeToCart(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);

// export default Home;