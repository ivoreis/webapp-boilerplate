import { NextPage } from 'next'

const Error: NextPage<{ statusCode?: number; error?: Error | null }> = ({
  statusCode,
  error,
}) => {
  return (
    <main className="h-screen flex items-center bg-default transition duration-150 ease-in-out">
      <div className="w-full text-center text-default">
        <p className="text-default text-6xl">
          Error - {statusCode} / Error: {JSON.stringify(error)}
        </p>
      </div>
    </main>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode, error: err }
}

export default Error
