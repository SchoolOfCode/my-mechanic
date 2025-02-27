import Image from "next/image"
import Link from "next/link"

export default function ModelButtons() {
  return (
    //   <div className="container mx-auto px-4 py-12">

        <main className="mx-auto max-w">
          <section className="mb-8 rounded-lg bg-white dark:bg-gray-800 p-4 bg-opacity-80 p-8 text-center shadow-lg h-[calc(100vw-50%)] overflow-y-auto">

            <div className="flex justify-center gap-16">
            <button
                type="button"
                className="group flex flex-col items-center"
                onClick={() => console.log("Hyundai selected")}
              >
                <div className="flex h-24 w-24 items-center justify-center rounded-md border-4 border-zinc-800 bg-white p-2 shadow-md transition-all hover:shadow-lg md:h-28 md:w-28">
                  <Image
                    src="/hyundai-logo-natural.png"
                    alt="Hyundai Logo"
                    width={155}
                    height={80}
                    className="transition-transform group-hover:scale-110"
                  />
                </div>
                <p className="mt-2 font-medium text-zinc-800"></p>
                </button>

                <button
                type="button"
                className="group flex flex-col items-center"
                onClick={() => console.log("Seat selected")}
              >
                <div className="flex h-24 w-24 items-center justify-center rounded-md border-4 border-zinc-800 bg-white p-2 shadow-md transition-all hover:shadow-lg md:h-28 md:w-28">
                  <Image
                    src="/seat-logo-natural.png"
                    alt="Seat Logo"
                    width={80}
                    height={80}
                    className="transition-transform group-hover:scale-110"
                  />
                </div>
                <p className="mt-2 font-medium text-zinc-800"></p>
              </button>
            </div>
          </section>
        </main>
    //   </div>
  )
}
