const featuredItems = [
  {
    name: 'Smoky Fire Burger',
    price: '520 ETB',
    description: 'Double beef, melted cheddar, pickled onion, and a roasted garlic glaze.'
  },
  {
    name: 'Golden Pepper Pizza',
    price: '680 ETB',
    description: 'Wood-fired crust with pepper jam, mozzarella, and a crackle of herbs.'
  },
  {
    name: 'Crunch Street Wrap',
    price: '440 ETB',
    description: 'Crisp chicken, spicy slaw, and a bright sauce wrapped tight.'
  }
]

const values = [
  'Freshly made every day',
  'Bold flavor with a local soul',
  'Fast, warm, and unforgettable'
]

function App() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand-block">
          <span className="brand-mark">Y</span>
          <div>
            <p className="eyebrow">Yoki</p>
            <h1>Burger & Pizza</h1>
          </div>
        </div>
        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#menu">Menu</a>
          <a href="#story">Story</a>
          <a href="#visit">Visit</a>
          <a className="nav-call" href="#visit">Order now</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Crafted for cozy cravings</p>
            <h2>Warm, playful comfort in every bite.</h2>
            <p className="hero-text">
              Yoki brings together juicy burgers, fire-kissed pizza, and street-food comfort in a brand that feels warm, welcoming, and unmistakably local.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#menu">View signature menu</a>
              <a className="btn btn-secondary" href="#visit">Order or visit</a>
            </div>
            <ul className="hero-points">
              {values.map((value) => (
                <li key={value}>{value}</li>
              ))}
            </ul>
          </div>

          <div className="hero-card" aria-hidden="true">
            <div className="hero-card-inner">
              <div className="plate plate-burger" />
              <div className="plate plate-pizza" />
            </div>
          </div>
        </section>

        <section className="section" id="menu">
          <div className="section-heading">
            <p className="eyebrow">Signature picks</p>
            <h3>Built to stand out, made to be shared.</h3>
          </div>
          <div className="card-grid">
            {featuredItems.map((item) => (
              <article className="menu-card" key={item.name}>
                <div className="menu-card-top">
                  <h4>{item.name}</h4>
                  <span>{item.price}</span>
                </div>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section story-section" id="story">
          <div className="section-heading">
            <p className="eyebrow">Why Yoki</p>
            <h3>A burger and pizza house with attitude.</h3>
          </div>
          <div className="story-grid">
            <div className="story-panel">
              <h4>Flavor-first, not filler-first</h4>
              <p>
                Every item is designed to feel generous, balanced, and craveable — from the first bite to the last crunch.
              </p>
            </div>
            <div className="story-panel">
              <h4>Made for the city</h4>
              <p>
                Yoki pairs local energy with a clean, modern identity so the brand feels fresh without losing soul.
              </p>
            </div>
          </div>
        </section>

        <section className="section visit-section" id="visit">
          <div className="visit-card">
            <div>
              <p className="eyebrow">Visit Yoki</p>
              <h3>Come hungry. Leave impressed.</h3>
            </div>
            <div className="visit-details">
              <a href="tel:+251944425222">+251 94 442 5222</a>
              <span>Addis Ababa</span>
              <a href="https://maps.app.goo.gl/rFBqkBJ1bz3XtuQm8" target="_blank" rel="noreferrer">Open in maps</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App