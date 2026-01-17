import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function NewsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* The news content will go here */}
      </main>
      <Footer />
    </div>
  )
}
