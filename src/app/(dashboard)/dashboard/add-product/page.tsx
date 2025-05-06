'use client'
import { useCallback } from 'react'

import { createProduct } from '@/application/api-clients/productService'
import {
  deleteImage,
  uploadImage,
} from '@/application/api-clients/uploadService'
import {
  type CreateProductFormData,
  createProductFormSchema,
} from '@/application/schemas/create-product-form-schema'
import { formatPrice } from '@/application/utils/formatPrice'
import { loading } from '@/components/loading/loading-controller'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Slider } from '@/components/ui/slider'
import { Textarea } from '@/components/ui/textarea'
import { useCroppedImage } from '@/hooks/useCroppedImage'
import { getCroppedImg } from '@/lib/img/image-cropper'
import { ITEMS } from '@/shared/constants/categories'
import { COLORS } from '@/shared/constants/colors'
import { SIZES } from '@/shared/constants/sizes'
import { zodResolver } from '@hookform/resolvers/zod'
import { RotateCw, Upload, X } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Cropper from 'react-easy-crop'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

export default function AddProduct() {
  const router = useRouter()

  const form = useForm<CreateProductFormData>({
    resolver: zodResolver(createProductFormSchema),
    defaultValues: {
      name: '',
      price: 0,
      description: '',
      imageUrl: '',
      category: 'T_SHIRT',
      size: 'S',
      color: 'GREEN',
    },
  })

  const {
    croppedAreaPixels,
    crop,
    setCrop,
    zoom,
    setZoom,
    isCropping,
    setIsCropping,
    rotation,
    setRotation,
    croppedImage,
    setCroppedImage,
    imageSrc,
    setImageSrc,
    fileInputRef,
    onFileChange,
    onCropComplete,
  } = useCroppedImage()

  const showCroppedImage = useCallback(async () => {
    try {
      if (imageSrc && croppedAreaPixels) {
        const croppedImage = await getCroppedImg(
          imageSrc,
          croppedAreaPixels,
          rotation,
        )
        setCroppedImage(croppedImage)
        form.setValue('imageUrl', croppedImage)
        setIsCropping(false)
      }
    } catch (e) {
      console.error(e)
    }
  }, [imageSrc, croppedAreaPixels, rotation, form])

  const clearImage = () => {
    setImageSrc(null)
    setCroppedImage(null)
    setIsCropping(false)
    form.setValue('imageUrl', '')
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const handleResetForm = useCallback(() => {
    form.reset()
    clearImage()
  }, [form, clearImage])

  const onSubmit = async (values: CreateProductFormData) => {
    loading.show()
    const file = fileInputRef.current?.files?.[0]

    if (!file) {
      toast.error('Please select an image')
      return
    }

    const filename = `${Date.now()}-${file.name}`

    try {
      const imageUrl = await uploadImage(file, filename)

      await createProduct({ ...values, imageUrl })

      handleResetForm()

      loading.hide()
      toast.success('Product added successfully!')
    } catch (error) {
      console.error(error)
      toast.error((error as Error).message || 'Something went wrong')
      loading.hide()
      // Rollback (imagem)
      try {
        await deleteImage(filename)
      } catch (rollbackError) {
        console.error('Rollback failed:', rollbackError)
      }
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="mx-auto max-w-2xl">
        <CardHeader>
          <CardTitle>Add New Product</CardTitle>
          <CardDescription>
            Fill in the details below to add a new product to your inventory.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {/* Image Upload Section */}
              <div className="space-y-4">
                <FormLabel>Product Image</FormLabel>
                <div className="grid gap-4 md:grid-cols-1">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2">
                      <Input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        onChange={onFileChange}
                        className="flex-1"
                      />
                      {(imageSrc || croppedImage) && (
                        <Button
                          type="button"
                          variant="outline"
                          size="icon"
                          onClick={clearImage}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      )}
                    </div>

                    {isCropping && (
                      <div className="space-y-4">
                        <div className="flex flex-col gap-2">
                          <div className="flex justify-between">
                            <span>Zoom</span>
                            <span>{zoom.toFixed(1)}x</span>
                          </div>
                          <Slider
                            value={[zoom]}
                            min={1}
                            max={3}
                            step={0.1}
                            onValueChange={(value: number[]) =>
                              setZoom(value[0])
                            }
                          />
                        </div>

                        <div className="flex flex-col gap-2">
                          <div className="flex justify-between">
                            <span>Rotation</span>
                            <span>{rotation}°</span>
                          </div>
                          <Slider
                            value={[rotation]}
                            min={0}
                            max={360}
                            step={1}
                            onValueChange={(value: number[]) =>
                              setRotation(value[0])
                            }
                          />
                        </div>

                        <div className="flex gap-2">
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => setRotation((r) => (r + 90) % 360)}
                            className="flex-1"
                          >
                            <RotateCw className="mr-2 h-4 w-4" />
                            Rotate
                          </Button>
                          <Button
                            type="button"
                            onClick={showCroppedImage}
                            className="flex-1"
                          >
                            Crop Image
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="bg-muted relative aspect-square overflow-hidden rounded-md">
                    {isCropping && imageSrc ? (
                      <div className="relative h-full">
                        <Cropper
                          image={imageSrc}
                          crop={crop}
                          zoom={zoom}
                          aspect={1}
                          rotation={rotation}
                          onCropChange={setCrop}
                          onZoomChange={setZoom}
                          onCropComplete={onCropComplete}
                          objectFit="contain"
                        />
                      </div>
                    ) : croppedImage ? (
                      <Image
                        src={croppedImage || '/placeholder.svg'}
                        alt="Cropped product image"
                        fill
                        className="object-contain"
                      />
                    ) : (
                      <div className="text-muted-foreground flex h-full items-center justify-center">
                        <Upload className="h-12 w-12 opacity-50" />
                      </div>
                    )}
                  </div>
                </div>

                <input type="hidden" {...form.register('imageUrl')} />
                {form.formState.errors.imageUrl && (
                  <p className="text-destructive text-sm font-medium">
                    {form.formState.errors.imageUrl.message}
                  </p>
                )}
              </div>

              {/* Product Details */}
              <div className="grid gap-6 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Product Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter product name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Price</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="R$ 0,00"
                          {...field}
                          onChange={(e) => {
                            const rawValue = e.target.value.replace(/\D/g, '')
                            const numericValue = Number(rawValue) / 100
                            field.onChange(numericValue) // guarda o valor como número
                          }}
                          value={formatPrice(Number(field.value))} // mostra formatado
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Category</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a category" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {Object.entries(ITEMS).map(([Item, value]) => (
                            <SelectItem value={Item} key={Item}>
                              {value}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="size"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Size</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a size" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {Object.entries(SIZES).map(([size]) => (
                            <SelectItem value={size} key={size}>
                              {size}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="color"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Color</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a color" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {Object.entries(COLORS).map(([color, value]) => (
                            <SelectItem value={color} key={color}>
                              <div
                                className="mr-2 h-4 w-4"
                                style={{ backgroundColor: value }}
                              ></div>
                              {color}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem className="md:col-span-2">
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Enter product description"
                          className="min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex justify-end gap-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => router.back()}
                >
                  Cancel
                </Button>
                <Button type="submit" disabled={!croppedImage}>
                  Add Product
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}
