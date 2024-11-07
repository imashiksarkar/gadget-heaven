interface Product {
  id: string
  name: string
  description: string
  image: string
  price: number
  stock: number
  inStock?: boolean
  specifications: string[]
  rating: number
}

export const fetchAllProducts = async () => {
  const res = await fetch('/db/products.json')
  return (await res.json()) as Product[]
}

export const fetchCategoriesNames = async () => {
  const res = await fetch('/db/categories.json')

  const categoryKeys = Object.keys(await res.json())

  const category = categoryKeys.reduce((prev, categoryKey) => {
    const splittedKey = categoryKey.split('_')

    const categoryName = splittedKey
      .map((word) => {
        return word.at(0)?.toUpperCase() + word.slice(1)
      })
      .join(' ')

    return [
      ...prev,
      {
        name: categoryName,
        value: categoryKey,
      },
    ]
  }, [] as { name: string; value: string }[])

  return category
}

export const fetchProductsByCategory = async (categoryName: string) => {
  const categories = (await (
    await fetch('/db/categories.json')
  ).json()) as Record<string, string[]>

  const productIdsForTheCategory: string[] | null =
    categories[categoryName] || null

  if (productIdsForTheCategory) {
    const allProducts = await fetchAllProducts()

    const filteredProducts = allProducts.filter((product) =>
      productIdsForTheCategory.includes(product.id)
    )

    return filteredProducts
  }

  return await fetchAllProducts()
}

export const fetchProductById = async (id: string) => {
  const products = await fetchAllProducts()
  return products.find((product) => product.id === id) || null
}
