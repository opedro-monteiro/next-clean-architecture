import { ProductDto } from '@/application/dtos/product.dto'

export function ProductItem({
  name,
  price,
  oldPrice,
  discount,
  imageUrl,
}: ProductDto) {
  return (
    <div className="flex w-full flex-col justify-center pl-4">
      <div className="h-44 w-44 lg:h-72 lg:w-72">
        <img src={imageUrl} alt={name} className="h-full w-full object-cover" />
      </div>

      <div className="flex w-full flex-col gap-2">
        <h4 className="truncate text-base font-bold">{name}</h4>
        <div className="flex gap-1">
          <p className="text-primary text-xl font-bold">${price}</p>
          {oldPrice && (
            <p className="text-sm font-semibold text-gray-500 line-through">
              ${oldPrice}
            </p>
          )}
          {discount && (
            <p className="rounded-full bg-red-100 px-2 py-1 text-sm text-red-500">
              {discount}%
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
