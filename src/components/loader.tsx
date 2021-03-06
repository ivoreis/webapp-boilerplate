import Grid from '~/components/spinners/grid'

const Loader = () => (
  <main className="h-screen flex items-center bg-default transition duration-150 ease-in-out">
    <div className="w-full text-center text-default">
      <Grid size={300} />
      <p>Loading...</p>
    </div>
  </main>
)

export default Loader
