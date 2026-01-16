import { ProtectedPage } from "@/components/protected-page"
import { ScheduleTable } from "@/components/schedule-table"
import { Calendar } from "lucide-react"

export default function SchedulePage() {
  return (
    <ProtectedPage>
      <section className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Calendar className="h-8 w-8" />
            <h1 className="text-3xl md:text-4xl font-bold">Расписание уроков</h1>
          </div>
          <p className="text-center text-primary-foreground/90 max-w-2xl mx-auto">
            Актуальное расписание занятий для 5-11 классов на 2025-2026 учебный год
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <ScheduleTable />
        </div>
      </section>
    </ProtectedPage>
  )
}
