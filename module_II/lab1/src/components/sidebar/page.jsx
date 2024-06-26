import { useState } from 'react';
import './styles.css';

const navItems = [
  { name: 'home', icon: 'home' },
  { name: 'settings', icon: 'settings' },
  { name: 'build', icon: 'build' },
  { name: 'cloud', icon: 'cloud' },
  { name: 'mail', icon: 'mail' },
  { name: 'bookmark', icon: 'bookmark' },
];

export const SidebarAdmin = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="page sidebar-2-page">
      <aside className={`sidebar-2 ${isOpen ? 'open' : ''}`}>
        <div className="inner">
          <header>
            <button
              type="button"
              className="sidebar-2-burger"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="material-symbols-outlined">
                {isOpen ? 'close' : 'menu'}
              </span>
            </button>
          </header>
          <nav>
            {navItems.map((item) => (
              <button key={item.name} type="button">
                <span className="material-symbols-outlined">{item.icon}</span>
                <p>{item.name}</p>
              </button>
            ))}
          </nav>
        </div>
      </aside>
    </section>
  );
};
