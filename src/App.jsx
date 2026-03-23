import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  
  const carouselImages = [
    {
      image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=1920&h=1080&fit=crop',
      title: 'Premium Car Detailing',
      subtitle: 'Transform your vehicle with our professional detailing services'
    },
    {
      image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1920&h=1080&fit=crop',
      title: 'Car Wash',
      subtitle: 'Professional wash and rinse for a sparkling clean vehicle'
    },
    {
      image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=1920&h=1080&fit=crop',
      title: 'Full Interior Detailing',
      subtitle: 'Deep cleaning for a fresh and luxurious interior'
    },
    {
      image: 'https://images.unsplash.com/photo-1507136566006-cfc505b114fc?w=1920&h=1080&fit=crop',
      title: 'Exterior Excellence',
      subtitle: 'Showroom shine with our premium wash and wax'
    },
    {
      image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&h=1080&fit=crop',
      title: 'Ceramic Coating',
      subtitle: 'Advanced protection for lasting brilliance'
    },
    {
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1920&h=1080&fit=crop',
      title: 'Paint Correction',
      subtitle: 'Restore your paint to perfection'
    },
    {
      image: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=1920&h=1080&fit=crop',
      title: 'Luxury Car Care',
      subtitle: 'Premium treatment for high-end vehicles'
    }
  ]

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % carouselImages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToSlide = (index) => {
    setActiveSlide(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: ''
  })

  const [agreedToTerms, setAgreedToTerms] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!agreedToTerms) {
      alert('Please agree to the Terms and Conditions to proceed.')
      return
    }
    alert('Thank you for your inquiry! We will contact you shortly.')
    setFormData({ name: '', phone: '', service: '', message: '' })
    setAgreedToTerms(false)
  }

  const services = [
    {
      icon: '🚗',
      title: 'Exterior Detailing',
      description: 'Complete wash, clay bar treatment, paint correction, and premium waxing to restore your car\'s showroom shine.'
    },
    {
      icon: '✨',
      title: 'Interior Detailing',
      description: 'Deep cleaning of seats, carpets, dashboards, and leather conditioning for a fresh interior.'
    },
    {
      icon: '💎',
      title: 'Ceramic Coating',
      description: 'Advanced nano-ceramic protection that provides years of hydrophobic properties and scratch resistance.'
    },
    {
      icon: '🛡️',
      title: 'Paint Protection Film',
      description: 'Self-healing PPF that protects your paint from rock chips, scratches, and environmental damage.'
    },
    {
      icon: '🔧',
      title: 'Engine Bay Cleaning',
      description: 'Professional degreasing and detailing of your engine compartment for a like-new appearance.'
    },
    {
      icon: '🧽',
      title: 'Wheel & Tire Care',
      description: 'Deep cleaning, rim polishing, and tire dressing for perfectly detailed wheels and tires.'
    },
    {
      icon: '🔦',
      title: 'Headlight Restoration',
      description: 'Remove oxidation and restore clarity to foggy headlights for improved visibility and appearance.'
    },
    {
      icon: '🪟',
      title: 'Window Tinting',
      description: 'Professional window tinting for UV protection, privacy, and enhanced vehicle aesthetics.'
    },
    {
      icon: '🎨',
      title: 'Dent Removal',
      description: 'Paintless dent removal services to restore your vehicle\'s body without affecting the original paint.'
    }
  ]

  const testimonials = [
    {
      name: 'Michael Thompson',
      car: 'BMW M4',
      text: 'Absolutely incredible work! My car looks brand new. The ceramic coating application was flawless.',
      rating: 5
    },
    {
      name: 'Sarah Johnson',
      car: 'Mercedes C-Class',
      text: 'Best detailing service in town! The attention to detail is remarkable. My interior has never looked better.',
      rating: 5
    },
    {
      name: 'David Rodriguez',
      car: 'Porsche 911',
      text: 'Professional, punctual, and perfectionist. They treated my car like their own. Highly recommend!',
      rating: 5
    }
  ]

  const beforeAfterComparisons = [
    {
      title: 'Paint Correction',
      description: 'Swirl marks and oxidation removed, paint restored to factory finish',
      before: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=600&h=400&fit=crop',
      after: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=600&h=400&fit=crop'
    },
    {
      title: 'Interior Deep Cleaning',
      description: 'Stains removed, leather conditioned, dashboard restored to like-new',
      before: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&h=400&fit=crop',
      after: 'https://images.unsplash.com/photo-1507136566006-cfc505b114fc?w=600&h=400&fit=crop'
    },
    {
      title: 'Ceramic Coating',
      description: 'Hydrophobic protection applied, deep gloss and shine achieved',
      before: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&h=400&fit=crop',
      after: 'https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=600&h=400&fit=crop'
    },
    {
      title: 'Wheel & Tire Restoration',
      description: 'Brake dust removed, rims polished, tires dressed for perfect finish',
      before: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=600&h=400&fit=crop',
      after: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=600&h=400&fit=crop'
    }
  ]

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <span className="logo-icon">⚡</span>
            <span className="logo-text">CarX<span>Studio</span></span>
          </div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact" className="nav-cta">Book Now</a></li>
          </ul>
          <div className="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* Hero Section with Full Width/Height Carousel */}
      <section id="home" className="hero-carousel">
        <div className="hero-carousel-track">
          {carouselImages.map((item, index) => (
            <div 
              className={`hero-carousel-slide ${index === activeSlide ? 'active' : ''}`} 
              key={index}
            >
              <div className="hero-carousel-image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="hero-carousel-overlay">
                <div className="hero-carousel-content">
                  <h1>{item.title} <span className="highlight">Redefined</span></h1>
                  <p className="hero-subtitle">{item.subtitle}</p>
                  <div className="hero-buttons">
                    <a href="#contact" className="btn btn-primary">Get a Quote</a>
                    <a href="#services" className="btn btn-secondary">Our Services</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Hero Carousel Navigation */}
        <div className="hero-carousel-nav">
          <button 
            className="hero-carousel-arrow prev" 
            onClick={() => goToSlide((activeSlide - 1 + carouselImages.length) % carouselImages.length)}
          >
            ‹
          </button>
          <div className="hero-carousel-dots">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                className={`hero-carousel-dot ${index === activeSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
          <button 
            className="hero-carousel-arrow next" 
            onClick={() => goToSlide((activeSlide + 1) % carouselImages.length)}
          >
            ›
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Services</span>
            <h2>Professional Detailing Packages</h2>
            <p>We offer comprehensive car care services tailored to your vehicle's needs</p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div className="service-card" key={index}>
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href="#contact" className="service-link">Book Now →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-image">
              <div className="about-img-wrapper">
                <img src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=500&h=600&fit=crop" alt="Car Detailing Workshop" />
                <div className="about-experience">
                  <span className="experience-years">5</span>
                  <span className="experience-text">Years of Excellence</span>
                </div>
              </div>
            </div>
            <div className="about-text">
              <span className="section-tag">About Us</span>
              <h2>Your Car is Our Passion</h2>
              <p>At CarXStudio, we believe every car deserves to look its absolute best. With over 15 years of experience in the automotive detailing industry, we've perfected the art of transforming vehicles.</p>
              <p>Our team of certified detailers uses only the finest products and cutting-edge techniques to deliver unmatched results. We treat each vehicle as if it were our own, ensuring meticulous attention to every detail.</p>
              <div className="about-features">
                <div className="feature">
                  <span className="feature-icon">✓</span>
                  <span>Certified Professionals</span>
                </div>
                <div className="feature">
                  <span className="feature-icon">✓</span>
                  <span>Premium Products</span>
                </div>
                <div className="feature">
                  <span className="feature-icon">✓</span>
                  <span>100% Satisfaction Guarantee</span>
                </div>
                <div className="feature">
                  <span className="feature-icon">✓</span>
                  <span>Convenient Mobile Service</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After Comparison Section */}
      <section className="before-after">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Transformation</span>
            <h2>Before & After</h2>
            <p>See the incredible transformations we've achieved for our clients</p>
          </div>
          <div className="before-after-grid">
            {beforeAfterComparisons.map((comparison, index) => (
              <div className="comparison-card" key={index}>
                <div className="comparison-images">
                  <div className="comparison-image-wrapper">
                    <img src={comparison.before} alt={`${comparison.title} - Before`} />
                    <span className="comparison-label before-label">BEFORE</span>
                  </div>
                  <div className="comparison-image-wrapper">
                    <img src={comparison.after} alt={`${comparison.title} - After`} />
                    <span className="comparison-label after-label">AFTER</span>
                  </div>
                </div>
                <div className="comparison-info">
                  <h3>{comparison.title}</h3>
                  <p>{comparison.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Testimonials</span>
            <h2>What Our Clients Say</h2>
            <p>Don't just take our word for it - hear from our satisfied customers</p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div className="testimonial-card" key={index}>
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i}>⭐</span>
                  ))}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <div className="author-avatar">{testimonial.name.charAt(0)}</div>
                  <div className="author-info">
                    <span className="author-name">{testimonial.name}</span>
                    <span className="author-car">{testimonial.car}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-us">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Why Choose Us</span>
            <h2>The CarXStudio Difference</h2>
          </div>
          <div className="why-us-grid">
            <div className="why-us-card">
              <div className="why-us-icon">🏆</div>
              <h3>Award Winning Service</h3>
              <p>Recognized as the best detailing service in the region with multiple industry awards.</p>
            </div>
            <div className="why-us-card">
              <div className="why-us-icon">🔬</div>
              <h3>Advanced Technology</h3>
              <p>We use state-of-the-art equipment and premium ceramic coatings for superior results.</p>
            </div>
            <div className="why-us-card">
              <div className="why-us-icon">⏱️</div>
              <h3>Quick Turnaround</h3>
              <p>Efficient service without compromising quality. Most packages completed in 1-2 days.</p>
            </div>
            <div className="why-us-card">
              <div className="why-us-icon">💰</div>
              <h3>Transparent Pricing</h3>
              <p>No hidden fees. Get upfront pricing with detailed breakdowns of all services.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <span className="section-tag">Contact Us</span>
              <h2>Ready to Transform Your Car?</h2>
              <p>Get in touch with us for a free consultation and quote. We'd love to hear from you!</p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <div>
                    <h4>Location</h4>
                    {/* <p>123 Detailing Lane, Auto City, AC 12345</p> */}
                    <p>HEMU NAGAR CHOWK, BESIDE APNA MART SUPERMARKET, BILASPUR CHHATTISGARH</p>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📞</span>
                  <div>
                    <h4>Phone</h4>
                    <p>+91 9755566525</p>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">✉️</span>
                  <div>
                    <h4>Email</h4>
                    <p>info@carxstudio.com</p>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">🕐</span>
                  <div>
                    <h4>Hours</h4>
                    <p>Mon-Sat: 8AM - 6PM</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="contact-form-wrapper">
              <form className="contact-form" onSubmit={handleSubmit}>
                <h3>Request a Quote</h3>
                <div className="form-group">
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required 
                  />
                </div>
                <div className="form-group">
                  <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                  />
                </div>
                <div className="form-group">
                  <select 
                    className="form-select"
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    required
                  >
                    <option value="">Select Service</option>
                    <option value="exterior">Exterior Detailing</option>
                    <option value="interior">Interior Detailing</option>
                    <option value="full">Full Detail Package</option>
                    <option value="ceramic">Ceramic Coating</option>
                    <option value="ppf">Paint Protection Film</option>
                    <option value="engine">Engine Bay Cleaning</option>
                    <option value="wheel">Wheel & Tire Care</option>
                    <option value="headlight">Headlight Restoration</option>
                    <option value="window">Window Tinting</option>
                    <option value="dent">Dent Removal</option>
                    <option value="upholstery">Upholstery Cleaning</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <textarea 
                    placeholder="Tell us about your vehicle and what you're looking for..." 
                    rows="4"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>
                <div className="terms-conditions">
                  <label className="terms-checkbox">
                    <input 
                      type="checkbox" 
                      checked={agreedToTerms}
                      onChange={(e) => setAgreedToTerms(e.target.checked)}
                    />
                    <span className="checkmark"></span>
                    <span className="terms-text">
                      I agree to the <a href="#terms" onClick={(e) => {e.preventDefault(); alert('Terms & Conditions: Once the service is completed and the vehicle leaves our premises, all claims will be void. No refunds or re-work will be provided after vehicle collection.');}}>Terms & Conditions</a>. I understand that once the vehicle leaves the service station, no claims can be made.
                    </span>
                  </label>
                </div>
                <button type="submit" className="btn btn-primary btn-full">Send Request</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="logo">
                <span className="logo-icon">⚡</span>
                <span className="logo-text">CarX<span>Studio</span></span>
              </div>
              <p>Your premier destination for professional car detailing and paint protection services.</p>
              <div className="social-links">
                <a href="#" aria-label="Facebook">📘</a>
                <a href="#" aria-label="Instagram">📸</a>
                <a href="#" aria-label="Twitter">🐦</a>
                <a href="#" aria-label="YouTube">📺</a>
              </div>
            </div>
            <div className="footer-links">
              <div className="footer-column">
                <h4>Quick Links</h4>
                <ul>
                  <li><a href="#home">Home</a></li>
                  <li><a href="#services">Services</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </div>
              <div className="footer-column">
                <h4>Services</h4>
                <ul>
                  <li><a href="#services">Exterior Detailing</a></li>
                  <li><a href="#services">Interior Detailing</a></li>
                  <li><a href="#services">Ceramic Coating</a></li>
                  <li><a href="#services">Paint Protection</a></li>
                  <li><a href="#services">Window Tinting</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; Copyright Helping Hands Technologies. All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
