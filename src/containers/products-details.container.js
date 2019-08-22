import { connect } from 'react-redux'
import { ACTIONS } from '../redux/actions/prodcuts'
import { getSelectedProduct} from '../redux/reducers/products'
import { ProductDetails } from '../components/product-details'

const mapStateToProps = ({products}) => ({
  product: getSelectedProduct(products)
})

const mapDispatchToProps = {
  addHobby: ACTIONS.addHobby,
  removeHobby: ACTIONS.removeHobby,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductDetails)
