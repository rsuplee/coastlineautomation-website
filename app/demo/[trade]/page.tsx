import { redirect } from 'next/navigation'

interface Props {
  params: Promise<{ trade: string }>
}

export default async function DemoRedirect({ params }: Props) {
  const { trade } = await params
  redirect(`/agents/${trade}`)
}
