'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import {
  ArrowUpRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Instagram,
  MapPin,
  Menu,
  Phone,
  Quote,
  Star,
  X,
} from 'lucide-react'

const bookingUrl = 'https://www.treatwell.co.uk/place/victors-cuts-unisex/'
const phoneHref = 'tel:+447480484558'

const gallery = [
  { label: 'Exterior', src: '/unnamed.jpg', className: 'md:col-span-2 md:row-span-2' },
  { label: 'Inside', src: '/unnamed (2).jpg', className: '' },
  { label: 'Hairstyle', src: '/unnamed (9).jpg', className: '' },
  { label: 'By Owner', src: '/unnamed (11).jpg', className: 'md:col-span-2' },
]

const reviews = [
  'Excellent service from start to finish. Friendly atmosphere, professional attention to detail, and a clean, sharp haircut exactly how I wanted it.',
  'Great experience every time. Victor is professional, friendly, and really take their time to get the cut right.',
  'I’ve been to quite a few barbers, but this guy Victor is easily one of the best. His attention to detail is unmatched...',
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    gsap.fromTo(
      '.gallery-item, .location-image',
      {
        opacity: 0,
        y: 30,
        scale: 0.98,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.15,
        delay: 0.2,
      }
    )
  }, [])

  return (
    <main className="site-shell">
      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Victors Cuts Unisex home">
          <span className="brand-mark">VC</span>
          <span>Victors Cuts <em>Unisex</em></span>
        </a>
        <nav className={`desktop-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
          {['About', 'Services', 'Gallery', 'Reviews', 'Location'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>
          ))}
          <a className="nav-book" href={bookingUrl} target="_blank" rel="noreferrer" onClick={closeMenu}>Book Your Appointment <ArrowUpRight aria-hidden="true" /></a>
        </nav>
        <button className="menu-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </header>

      <section id="home" className="hero-section">
        <div className="hero-image" aria-hidden="true" />
        <div className="hero-overlay" />
        <div className="hero-content page-width">
          <p className="eyebrow">Birmingham · City Arcade</p>
          <h1>Look sharp.<br /><span>Feel confident.</span></h1>
          <p className="hero-copy">Professional barbering in the heart of Birmingham, with a focus on precision, quality and a welcoming experience.</p>
          <div className="hero-actions">
            <a className="button button-gold" href={bookingUrl} target="_blank" rel="noreferrer">Book Your Appointment <ArrowUpRight aria-hidden="true" /></a>
            <a className="text-link" href="#gallery">Explore our work <ChevronDown aria-hidden="true" /></a>
          </div>
          <div className="hero-rating"><span>{'★★★★★'}</span> <strong>5.0</strong> <i>|</i> 700 Google Reviews</div>
        </div>
        <div className="scroll-cue" aria-hidden="true"><span /> Scroll to explore</div>
      </section>

      <section className="trust-strip" aria-label="Business highlights">
        <div><strong>5.0<span>★</span></strong><small>Google Rating</small></div>
        <div><strong>700</strong><small>Google Reviews</small></div>
        <div><strong>Birmingham</strong><small>City Centre Location</small></div>
      </section>

      <section id="about" className="about-section page-width section-pad">
        <div className="section-kicker">01 / The experience</div>
        <div className="about-grid">
          <div><p className="eyebrow gold">About Victors Cuts Unisex</p><h2>A fresh cut.<br /><span>A welcoming experience.</span></h2></div>
          <div className="about-copy"><p>Victors Cuts Unisex is a barber shop located at City Arcade on Union Street in Birmingham. The business has built a strong reputation through consistently positive customer feedback, with a 5.0-star rating from 700 Google reviews.</p><a className="text-link dark-link" href="#location">Find us in Birmingham <ArrowUpRight aria-hidden="true" /></a></div>
        </div>
        <div className="about-image"><div className="image-caption">Precision, every time <span>—</span> Birmingham B2</div></div>
      </section>

      <section id="services" className="booking-card-section section-pad">
        <div className="booking-card page-width"><div className="booking-number">02</div><div><p className="eyebrow gold">Services & booking</p><h2>Your next look<br /><span>starts here.</span></h2><p className="booking-copy">Choose your appointment and book securely through Treatwell.</p><a className="button button-gold" href={bookingUrl} target="_blank" rel="noreferrer">View Services & Book <ExternalLink aria-hidden="true" /></a></div><div className="card-detail">Official bookings<br /><strong>via Treatwell</strong></div></div>
      </section>

      <section id="gallery" className="gallery-section page-width section-pad">
        <div className="section-heading">
          <div>
            <div className="section-kicker">03 / In the chair</div>
            <h2>See the <span>difference.</span></h2>
          </div>
          <p>Explore the atmosphere, detail and craft behind Victors Cuts Unisex.</p>
        </div>

        <div className="gallery-grid">
          {gallery.map((image, index) => (
            <motion.button
              key={image.label}
              className={`gallery-item ${image.className}`}
              onClick={() => setSelectedImage(index)}
              aria-label={`View ${image.label} image`}
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ duration: 0.2 }}
            >
              <img
                src={image.src}
                alt={`${image.label} barber shop imagery`}
                loading="lazy"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  borderRadius: '1rem',
                }}
              />
              <span>{image.label} <ArrowUpRight aria-hidden="true" /></span>
            </motion.button>
          ))}
        </div>
      </section>

      <section id="reviews" className="reviews-section section-pad">
        <div className="page-width">
          <div className="section-heading reviews-heading">
            <div>
              <div className="section-kicker">04 / The word around town</div>
              <h2>Trusted by <span>700.</span></h2>
            </div>
            <div className="review-score"><strong>5.0</strong><div><span>{'★★★★★'}</span><small>Google Reviews</small></div></div>
          </div>
          <div className="review-grid">{reviews.map((review, index) => <article className="review" key={review}><Quote aria-hidden="true" /><p>“{review}”</p><div><span className="review-stars">{'★★★★★'}</span><small>Google customer review <b>0{index + 1}</b></small></div></article>)}</div>
        </div>
      </section>

      <section id="location" className="location-section page-width section-pad">
        <div className="location-grid">
          <div>
            <div className="section-kicker">05 / Come through</div>
            <h2>Find us in<br /><span>Birmingham.</span></h2>
            <p className="location-intro">Right in the heart of the city, inside City Arcade.</p>
            <div className="address">
              <MapPin aria-hidden="true" />
              <p>Victors Cuts Unisex<br />Unit 4, 25 Union St<br />Birmingham B2 4TX<br />United Kingdom<br /><span>Floor 0 · City Arcade</span></p>
            </div>
            <div className="location-actions">
              <a className="button button-dark" href="https://www.google.com/maps/search/?api=1&query=Unit+4%2C+25+Union+St%2C+Birmingham+B2+4TX" target="_blank" rel="noreferrer">Get Directions <ArrowUpRight aria-hidden="true" /></a>
              <a className="text-link dark-link" href={phoneHref}><Phone aria-hidden="true" /> +44 7480 484558</a>
            </div>
          </div>

          <motion.div
            className="location-image"
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <motion.img
              src="/unnamed (3).jpg"
              alt="Victors Cuts Unisex Birmingham shop"
              loading="lazy"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.25 }}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                borderRadius: '1.5rem',
              }}
            />
            <div className="location-pin">
              <MapPin aria-hidden="true" />
              <span>City Arcade<br /><small>Birmingham</small></span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="final-cta section-pad">
        <div className="page-width">
          <p className="eyebrow gold">Ready when you are</p>
          <h2>Make your next cut<br /><span>your best one yet.</span></h2>
          <a className="button button-gold" href={bookingUrl} target="_blank" rel="noreferrer">Book Online <ArrowUpRight aria-hidden="true" /></a>
        </div>
      </section>

      <footer className="site-footer">
        <div className="page-width footer-grid">
          <div>
            <a className="brand footer-brand" href="#home"><span className="brand-mark">VC</span><span>Victors Cuts <em>Unisex</em></span></a>
            <p>Professional barbering<br />in Birmingham.</p>
          </div>
          <div>
            <h3>Explore</h3>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#gallery">Gallery</a>
            <a href="#reviews">Reviews</a>
            <a href="#location">Location</a>
          </div>
          <div>
            <h3>Contact</h3>
            <p>Unit 4, 25 Union St<br />Birmingham B2 4TX<br />United Kingdom</p>
            <a href={phoneHref}>+44 7480 484558</a>
          </div>
          <div>
            <h3>Booking</h3>
            <p>Secure your appointment<br />through Treatwell.</p>
            <a className="footer-book" href={bookingUrl} target="_blank" rel="noreferrer">Book Online <ArrowUpRight aria-hidden="true" /></a>
          </div>
        </div>
        <div className="page-width footer-bottom">
          <span>© {new Date().getFullYear()} Victors Cuts Unisex</span>
          <span>Precision. Quality. Confidence.</span>
        </div>
      </footer>

      {selectedImage !== null && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image viewer"
          onClick={() => setSelectedImage(null)}
        >
          <button className="lightbox-close" onClick={() => setSelectedImage(null)} aria-label="Close gallery">
            <X />
          </button>
          <button
            className="lightbox-arrow left"
            onClick={(event) => {
              event.stopPropagation()
              setSelectedImage((selectedImage + gallery.length - 1) % gallery.length)
            }}
            aria-label="Previous image"
          >
            <ChevronLeft />
          </button>
          <img
            src={gallery[selectedImage].src}
            alt={`${gallery[selectedImage].label} barber shop imagery enlarged`}
            onClick={(event) => event.stopPropagation()}
            style={{
              maxWidth: '90vw',
              maxHeight: '80vh',
              objectFit: 'cover',
              borderRadius: '1rem',
              boxShadow: '0 25px 80px rgba(0,0,0,0.35)',
            }}
          />
          <button
            className="lightbox-arrow right"
            onClick={(event) => {
              event.stopPropagation()
              setSelectedImage((selectedImage + 1) % gallery.length)
            }}
            aria-label="Next image"
          >
            <ChevronRight />
          </button>
        </div>
      )}
    </main>
  )
}