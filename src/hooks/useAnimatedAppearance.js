import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function useAnimatedAppearance() {
  const location = useLocation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.7 } // Trigger when 70% of the element is visible
    );

    const elements = document.querySelectorAll('.animated_appearance');
    elements.forEach((el) => {
      el.classList.remove('visible'); // Reset visibility on route change
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [location]); // Re-run when the route changes
}
