import Image from 'next/image'

interface ProductItemProps {
  title: string
  price: number
  oldPrice: number
  discount: number
  imageUrl: string
}

export function ProductItem({
  title,
  price,
  oldPrice,
  discount,
  imageUrl,
}: ProductItemProps) {
  return (
    <div className="flex w-full flex-col justify-center pl-4">
      <Image src={imageUrl} alt="Product" width={173} height={260} />
      <div className="flex w-full flex-col gap-2">
        <h4 className="truncate text-2xl font-bold">{title}</h4>
        <div className="flex gap-1">
          <p className="text-primary text-xl font-bold">${price}</p>
          <p className="text-sm font-semibold text-gray-500 line-through">
            ${oldPrice}
          </p>
          <p className="rounded-full bg-red-100 px-2 py-1 text-sm text-red-500">
            {discount}%
          </p>
        </div>
      </div>
    </div>
  )
}
