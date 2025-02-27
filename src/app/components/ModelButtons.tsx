import Image from "next/image"
import Link from "next/link"

export default function ModelButtons() {
  return (
    //   <div className="container mx-auto px-4 py-12">

        <main className="mx-auto max-w-4xl">
          <section className="mb-16 rounded-lg bg-zinc-100 bg-opacity-80 p-8 text-center shadow-lg">

            <div className="flex justify-center gap-16">
              <Link href="#hyundai" className="group">
                <div className="flex h-24 w-24 items-center justify-center rounded-md border-4 border-zinc-800 bg-white p-2 shadow-md transition-all hover:shadow-lg md:h-28 md:w-28">
                  <Image
                    src="/placeholder.svg?height=80&width=80"
                    alt="Hyundai Logo"
                    width={80}
                    height={80}
                    className="transition-transform group-hover:scale-110"
                  />
                </div>
                <p className="mt-2 font-medium text-zinc-800">HYUNDAI</p>
              </Link>

              <Link href="#seat" className="group">
                <div className="flex h-24 w-24 items-center justify-center rounded-md border-4 border-zinc-800 bg-white p-2 shadow-md transition-all hover:shadow-lg md:h-28 md:w-28">
                  <Image
                    src="/placeholder.svg?height=80&width=80"
                    alt="Seat Logo"
                    width={80}
                    height={80}
                    className="transition-transform group-hover:scale-110"
                  />
                </div>
                <p className="mt-2 font-medium text-zinc-800">SEAT</p>
              </Link>
            </div>
          </section>
        </main>
    //   </div>
  )
}
