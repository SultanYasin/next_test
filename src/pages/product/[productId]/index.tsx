import {useRouter} from 'next/router'

function ProductDetail() {

    const router = useRouter();
    const productId = router.query.productId; // router.query. {the name of the file that renders the product by its id }

  return (
    <h3>Product Detail:  {productId} </h3>
  )
}

export default ProductDetail