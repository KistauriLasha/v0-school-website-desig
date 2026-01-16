"use client"

import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"
import { ReactNode } from "react"

export function ProtectedPage({ children }: { children: ReactNode }) {
  const { data: session, status } = useSession()

  if (status === "loading") {
    return <div>Loading...</div>
  }

  if (!session) {
    redirect("/login")
  }

  return <>{children}</>
}