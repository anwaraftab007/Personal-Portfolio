import {Hero, About, Resume} from './sections'

const App = () => {
  return (
    <main className='relative'>
      <section className="p-0 m-0">
        <Hero />
      </section>
      <section className="">
        <About />
      </section>
      <section className="">
        <Resume />
      </section>
    </main>
  )
}

export default App