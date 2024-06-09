import './Hero.css'

export const Hero = () => {
  return (
    <div data-aos='fade-up' className="hero-container">
      <div className="hero-info">
        <h1 className='title-hero'>Frontend React Developer</h1>
        <h4 className='subtitle-hero'>Hola, ¿cómo te va?</h4>
        <p className='description-hero'>Me llamo <strong>Emiliano</strong> y soy un <strong>Desallorrador Frontend de React</strong></p>
      </div>
      <div className="hero-tech">
        <p>Tecnologías</p>
      </div>
    </div>
  )
}
