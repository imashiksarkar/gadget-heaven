const purchaseKey = 'purchasedProducts'

interface CartItem {
  id: string
  name: string
  price: number
  qty: number
  image: string
  description: string
}

export const fetchPurchasedProducts = () => {
  try {
    return JSON.parse(localStorage.getItem(purchaseKey) || '') as CartItem[]
  } catch (error) {
    localStorage.setItem(purchaseKey, JSON.stringify([]))
  }

  return JSON.parse(localStorage.getItem(purchaseKey)!) as CartItem[]
}

export const savePurchasedProducts = (
  cartProducts: Record<CartItem['id'], CartItem>
) => {
  const oldProducts = fetchPurchasedProducts()

  console.log(oldProducts)
  const products = [...oldProducts]

  for (const productId in cartProducts) {
    products.push(cartProducts[productId])
  }

  localStorage.setItem(purchaseKey, JSON.stringify(products))
}
