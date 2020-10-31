import type { NextPage } from 'next'

const Error404: NextPage = () => {
  return (
    <main className="h-screen flex items-center bg-default transition duration-150 ease-in-out">
      <div className="w-full text-center text-default">
        <p className="text-6xl">404</p>
      </div>
    </main>
  )
}

export default Error404
