import axios from 'axios'

export const deleteProduct = async (productId: string) => {
  const { data } = await axios.delete(`api/products/${productId}`)
  return data
}
