import './App.css'

function App() {
  return (
    <div>
     
      <header>
        <h1>WanderWoman</h1>
        <h3>A Solo Travel Entusiastic</h3>
        <nav>
          <a href="#home">Home</a> | 
          <a href="#about"> About</a> | 
          <a href="#blog"> Blog</a> | 
          <a href="#contact"> Contact</a>
        </nav>
      </header>

      
      <section id="about" className="card">
        <h2>About Me</h2>
        <p>
          Hi, I’m Divyaa — a hodophile person who loves experiening and exploring new things about something that fasinates me.Not myself exploring me but taking you along with me on my travel journeys through my blog.
        </p>
      </section>

      
      <section id="blog" className="card">
        <h2>Latest Blog Posts</h2>
        <article>
          <div >
          <h3 > Streets of Pondicherry</h3>
          <p  >
            A place every inch of mine is filled with colors, culture, and
            history...
          </p>
          </div>
        </article>
        <article>
          <h3> Palaces of Rajasthan</h3>
          <p >
            The royal heritage, vibrant culture, and timeless traditions of Rajasthan made me to live there for few more days.
          </p>
        </article>
        <article>
          <h3> Trekking in Manali</h3>
          <p className='third-para'>
            Nature at its best, the serene landscapes and majestic mountains of Manali took my breath away...
          </p>
        </article>
      </section>

     
      <footer id="contact" className="card">
        <p> Contact me: Divyaatravelblogger@gmail.com</p>
        <p>
           Follow me on 
          <a href="https://instagram.com" target="_blank" rel="noreferrer"> Instagram:@maddudivyaa</a> 
            </p>
      </footer>
    </div>
  )
}

export default App
