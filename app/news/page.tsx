import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function NewsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center">
        <Image
          src="/no-news.jpg"
          alt="Новостей нет"
          width={800}
          height={600}
          className="object-contain"
        />
      </main>
      <Footer />
    </div>
  )
}
