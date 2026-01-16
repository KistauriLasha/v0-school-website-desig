import { LoginForm } from "@/components/login-form"
import Link from "next/link"

export default function LoginPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold">Login</h1>
      <LoginForm />
      <p className="mt-4">
        Don't have an account?{" "}
        <Link href="/register" className="text-primary hover:underline">
          Create an account
        </Link>
      </p>
    </div>
  )
}
