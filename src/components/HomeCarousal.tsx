'use client';

import Image from 'next/image';

export default function HomeCarousel() {
  return (
    <div
      id="homeCarousel"
      className="carousel slide mb-4"
      data-bs-ride="carousel"
    >
      {/* Indicators */}
      <div className="carousel-indicators">
        <button data-bs-target="#homeCarousel" data-bs-slide-to="0" className="active" />
        <button data-bs-target="#homeCarousel" data-bs-slide-to="1" />
        <button data-bs-target="#homeCarousel" data-bs-slide-to="2" />
      </div>

      {/* Slides */}
      <div className="carousel-inner">
        {['offer111.jpg', 'offer333.jpg', 'offer666.jpg'].map((img, i) => (
          <div key={img} className={`carousel-item ${i === 0 ? 'active' : ''}`}>
            <div className="carousel-img-wrapper">
              <Image
                src={`/images/${img}`}
                alt={`Sale ${i + 1}`}
                fill
                priority={i === 0}
                sizes="100vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <button className="carousel-control-prev" data-bs-target="#homeCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" />
      </button>

      <button className="carousel-control-next" data-bs-target="#homeCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" />
      </button>

      {/* Inline CSS (or move to global.css) */}
      <style jsx>{`
        .carousel-img-wrapper {
          position: relative;
          width: 100%;
          height: 420px;
        }

        @media (max-width: 768px) {
          .carousel-img-wrapper {
            height: 260px;
          }
        }
      `}</style>
    </div>
  );
}
