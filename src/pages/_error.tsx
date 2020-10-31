import { NextPage } from 'next'

const Error: NextPage<{ statusCode?: number; error?: Error | null }> = ({
  statusCode,
  error,
}) => {
  return (
    <p className="text-default">
      Error - {statusCode} / Error: {JSON.stringify(error)}
    </p>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode, error: err }
}

export default Error
