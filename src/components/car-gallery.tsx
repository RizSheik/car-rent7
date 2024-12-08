import Image from "next/image"

interface CarGalleryProps {
  images: string[]
}

export function CarGallery({ images }: CarGalleryProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {images.map((image, index) => (
        <div key={index} className="relative aspect-video overflow-hidden rounded-lg">
          <Image
            src={image}
            alt={`Car image ${index + 1}`}
            fill
            className="object-cover"
          />
        </div>
      ))}
    </div>
  )
}

