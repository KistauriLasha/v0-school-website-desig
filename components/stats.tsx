import { Users, UserCheck, Trophy, Building2 } from "lucide-react"

export function Stats() {
  const stats = [
    {
      icon: UserCheck,
      value: "50+",
      label: "Квалифицированных учителей",
    },
    {
      icon: Users,
      value: "800+",
      label: "Учеников",
    },
  ]

  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="text-center">
                <div className="mb-4 inline-flex items-center justify-center rounded-full bg-primary/10 p-4">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <div className="mb-2 text-3xl md:text-4xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground text-balance">{stat.label}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
