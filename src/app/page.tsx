// src/app/page.tsx  — redirects bare "/" to "/en"
import { redirect } from 'next/navigation'

export default function RootPage() {
  redirect('/en')
}
