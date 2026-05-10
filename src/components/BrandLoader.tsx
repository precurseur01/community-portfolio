import { useEffect, useState } from 'react';
import logo from '../assets/img/favicon.png';

export default function BrandLoader({ onComplete }: { onComplete?: () => void }) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 2200);
    const doneTimer = setTimeout(() => onComplete?.(), 2800);
    return () => { clearTimeout(fadeTimer); clearTimeout(doneTimer); };
  }, [onComplete]);

  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        backgroundColor: '#f9f9fc',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        overflow: 'hidden',
        transition: 'opacity 0.6s ease',
        opacity: fadeOut ? 0 : 1,
        pointerEvents: fadeOut ? 'none' : 'all',
        fontFamily: "'Manrope', sans-serif",
      }}
    >
      {/* Grid overlay */}
      <div style={{
        position: 'fixed', inset: 0,
        backgroundImage: 'radial-gradient(circle, #09A9E3 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        WebkitMaskImage: 'radial-gradient(circle at center, black, transparent 80%)',
        maskImage: 'radial-gradient(circle at center, black, transparent 80%)',
        opacity: 0.03, pointerEvents: 'none',
      }} />

      {/* Ambient blobs */}
      <div style={{
        position: 'fixed', bottom: '-8rem', left: '-8rem',
        width: '24rem', height: '24rem',
        backgroundColor: 'rgba(141,249,170,0.1)',
        filter: 'blur(100px)', borderRadius: '9999px', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'fixed', top: '-8rem', right: '-8rem',
        width: '24rem', height: '24rem',
        backgroundColor: 'rgba(9,169,227,0.1)',
        filter: 'blur(100px)', borderRadius: '9999px', pointerEvents: 'none',
      }} />

      {/* Main content */}
      <main style={{
        position: 'relative', zIndex: 10,
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        width: '100%', maxWidth: '28rem', padding: '0 1.5rem',
      }}>
        {/* Animated rings + logo */}
        <div style={{
          position: 'relative', width: '16rem', height: '16rem',
          marginBottom: '2rem',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          {/* Outer dashed ring — rotates CW + pulses */}
          <div className="brand-loader-ring-outer" style={{
            position: 'absolute', inset: 0,
            border: '2px dashed rgba(0,102,138,0.2)',
            borderRadius: '9999px',
          }} />
          {/* Middle segmented ring — rotates CCW */}
          <div className="brand-loader-ring-middle" style={{
            position: 'absolute', inset: '1rem',
            borderTop: '2px solid rgba(0,109,55,0.4)',
            borderLeft: '2px solid rgba(0,109,55,0.4)',
            borderRight: '2px solid transparent',
            borderBottom: '2px solid transparent',
            borderRadius: '9999px',
          }} />
          {/* Inner glow ring */}
          <div style={{
            position: 'absolute', inset: '2rem',
            border: '1px solid rgba(0,102,138,0.1)',
            borderRadius: '9999px',
            filter: 'drop-shadow(0 0 8px rgba(9,169,227,0.4))',
          }} />

          {/* Logo centered */}
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ position: 'relative', width: '8rem', height: '8rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{
                position: 'absolute', inset: 0,
                backgroundColor: 'rgba(9,169,227,0.2)',
                filter: 'blur(32px)', borderRadius: '9999px', transform: 'scale(1.25)',
              }} />
              <img
                src={logo}
                alt="Free Digital Solutions"
                style={{ position: 'relative', zIndex: 10, width: '5.5rem', height: '5.5rem', objectFit: 'contain' }}
              />
            </div>
          </div>
        </div>

        {/* Brand name + status */}
        <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <h1 style={{
            fontSize: '20px', lineHeight: '28px', fontWeight: 700,
            color: '#1a1c1e', letterSpacing: '0.18em', textTransform: 'uppercase',
            filter: 'drop-shadow(0 0 8px rgba(9,169,227,0.35))',
            margin: 0,
          }}>
            Free Digital Solutions
          </h1>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
            <p className="brand-loader-pulse" style={{
              fontSize: '13px', fontWeight: 600,
              color: '#00668a', letterSpacing: '0.06em', margin: 0,
            }}>
              Initialisation du système...
            </p>
            <div style={{
              display: 'flex', alignItems: 'center', gap: '0.3rem',
              fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.3em',
              color: 'rgba(62,72,79,0.4)',
            }}>
              <span style={{
                width: '6px', height: '6px', borderRadius: '9999px',
                backgroundColor: '#50BC74', boxShadow: '0 0 8px #50BC74',
                flexShrink: 0,
              }} />
              Protocoles actifs
            </div>
          </div>
        </div>

        {/* Mini footer inside main */}
        <div style={{
          width: '200px', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          marginTop: '3rem',
          borderTop: '1px solid rgba(110,120,128,0.1)', paddingTop: '1rem',
          opacity: 0.4,
        }}>
          <span style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#00668a' }}>
            CORE_v1.0.0
          </span>
          <span style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#3e484f' }}>
            SYST_OK
          </span>
        </div>
      </main>

      {/* Global footer */}
      <footer style={{
        position: 'fixed', bottom: 0, left: 0,
        width: '100%', padding: '1.5rem', textAlign: 'center', zIndex: 20,
      }}>
        <p style={{
          fontSize: '10px', color: 'rgba(62,72,79,0.3)',
          textTransform: 'uppercase', letterSpacing: '0.2em', margin: 0,
        }}>
          © 2025 Free Digital Solutions. Precision &amp; Vitality in Motion.
        </p>
      </footer>
    </div>
  );
}
