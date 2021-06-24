import { connect } from "react-redux";
import Header from '../components/Header';


const mapStateToProps = state => ({
   // data: state.cardItems.cardData
   data: state.cardItems //add multiple items when click on btn
})

const mapDispatchToProps = dispatch => ({

  
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);

// export default Home;