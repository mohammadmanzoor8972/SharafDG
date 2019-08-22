import { connect } from 'react-redux'
import { getProducts, getIsLoading, getSelectedProductId } from '../redux/reducers/products'
import { ACTIONS } from '../redux/actions/prodcuts'
import { ProductListComponent } from '../components/product-list'

const mapStateToProps = ({products}) => ({
  isLoading: getIsLoading(products),
  products: getProducts(products),
  selectedUserId: getSelectedProductId(products),
})

const mapDispatchToProps = {
  loadProducts: ACTIONS.fetchProducts,
  selectUser: ACTIONS.selectProduct,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductListComponent)
