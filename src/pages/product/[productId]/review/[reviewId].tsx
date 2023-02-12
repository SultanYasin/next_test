import { useRouter } from 'next/router'

function Review() {

  const router = useRouter()
  const { productId, reviewId } = router.query

  return (
    <div>review {reviewId} for product {productId} !</div>
  )
}

export default Review