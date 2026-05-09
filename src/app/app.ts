import {
  Component,
  signal,
  HostListener,
  inject,
  PLATFORM_ID,
} from '@angular/core';
import { CommonModule, isPlatformBrowser, DOCUMENT } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Service {
  icon: string;
  title: string;
  description: string;
}

interface Project {
  image: string;
  title: string;
  category: string;
  description: string;
}

interface Stat {
  value: string;
  label: string;
}

interface NavItem {
  label: string;
  href: string;
}

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly document = inject(DOCUMENT);

  isScrolled = signal(false);
  mobileMenuOpen = signal(false);
  activeSection = signal('home');

  navItems: NavItem[] = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Contact', href: '#contact' },
  ];

  stats: Stat[] = [
    { value: '15+', label: 'Years Experience' },
    { value: '500+', label: 'Projects Completed' },
    { value: '50+', label: 'Expert Engineers' },
    { value: '98%', label: 'Client Satisfaction' },
  ];

  services: Service[] = [
    {
      icon: '⚓',
      title: 'Ship Repair & Maintenance',
      description:
        'Comprehensive repair and maintenance services for all types of vessels, ensuring peak operational performance and safety compliance.',
    },
    {
      icon: '🔧',
      title: 'Marine Engine Overhaul',
      description:
        'Expert engine overhaul and reconditioning services for diesel and gas turbine marine engines with genuine parts and certified technicians.',
    },
    {
      icon: '🏗️',
      title: 'Steel & Pipe Fabrication',
      description:
        'Custom steel fabrication, pipe fitting, and welding services for marine structures, hulls, and industrial applications.',
    },
    {
      icon: '🔌',
      title: 'Marine Electrical Systems',
      description:
        'Installation, repair, and upgrading of marine electrical systems including navigation, communication, and power distribution.',
    },
    {
      icon: '🛡️',
      title: 'Hull & Surface Treatment',
      description:
        'Professional hull cleaning, blasting, painting, and anti-fouling coating services to protect vessels and improve fuel efficiency.',
    },
    {
      icon: '📋',
      title: 'Marine Consulting',
      description:
        'Technical consulting, marine surveys, classification society liaison, and project management for maritime operations.',
    },
  ];

  projects: Project[] = [
    {
      image:
        'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=400&fit=crop',
      title: 'MV Ocean Voyager Overhaul',
      category: 'Engine Overhaul',
      description:
        'Complete main engine overhaul and auxiliary machinery reconditioning for a 45,000 DWT bulk carrier.',
    },
    {
      image:
        'https://images.unsplash.com/photo-1559825481-12a05cc00344?w=600&h=400&fit=crop',
      title: 'Harbor Tug Fleet Maintenance',
      category: 'Fleet Maintenance',
      description:
        'Annual maintenance contract for a fleet of 12 harbor tugs, including propulsion and hydraulic systems.',
    },
    {
      image:
        'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=600&h=400&fit=crop',
      title: 'Offshore Platform Fabrication',
      category: 'Fabrication',
      description:
        'Design and fabrication of structural steel components for an offshore drilling platform installation.',
    },
    {
      image:
        'https://images.unsplash.com/photo-1494412574643-ff11b0a5eb19?w=600&h=400&fit=crop',
      title: 'Container Ship Electrical Refit',
      category: 'Electrical Systems',
      description:
        'Complete navigation and communication system upgrade for a 9,000 TEU container vessel.',
    },
    {
      image:
        'https://images.unsplash.com/photo-1566438480900-0609be27a4be?w=600&h=400&fit=crop',
      title: 'Dry Dock Hull Treatment',
      category: 'Hull Treatment',
      description:
        'Full hull blasting, coating, and propeller polishing for a passenger ferry during scheduled dry docking.',
    },
    {
      image:
        'https://images.unsplash.com/photo-1527576539890-dfa815648363?w=600&h=400&fit=crop',
      title: 'LNG Carrier Inspection',
      category: 'Consulting',
      description:
        'Pre-purchase condition survey and technical assessment for a 170,000 CBM LNG carrier acquisition.',
    },
  ];

  contactForm = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  };

  formSubmitted = signal(false);

  @HostListener('window:scroll')
  onScroll(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const scrollY = window.scrollY;
    this.isScrolled.set(scrollY > 50);
    this.updateActiveSection();
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen.update((v) => !v);
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen.set(false);
  }

  scrollTo(event: Event, sectionId: string): void {
    event.preventDefault();
    this.closeMobileMenu();
    const id = sectionId.replace('#', '');
    const el = this.document.getElementById(id);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }

  onSubmit(): void {
    this.formSubmitted.set(true);
    this.contactForm = {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    };
    setTimeout(() => this.formSubmitted.set(false), 4000);
  }

  private updateActiveSection(): void {
    const sections = ['home', 'about', 'services', 'portfolio', 'contact'];
    for (const id of sections.reverse()) {
      const el = this.document.getElementById(id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 150) {
          this.activeSection.set(id);
          return;
        }
      }
    }
    this.activeSection.set('home');
  }
}
