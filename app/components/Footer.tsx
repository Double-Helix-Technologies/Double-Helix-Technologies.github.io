"use client"

export default function Footer() {
  return (
    <footer className="bg-background-alt pt-16 pb-8" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center">
              <span className="text-2xl font-semibold text-primary">Double Helix Technologies</span>
            </div>
            <p className="mt-4 text-text-secondary text-sm max-w-xs">
              Strategic Technology Partner helping businesses scale through innovative solutions and expert consulting.
            </p>
          </div>
          <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-medium text-text-primary mb-4">Company</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#about" className="text-sm text-text-secondary hover:text-primary transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-sm text-text-secondary hover:text-primary transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-sm text-text-secondary hover:text-primary transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium text-text-primary mb-4">Legal</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-sm text-text-secondary hover:text-primary transition-colors">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-text-secondary hover:text-primary transition-colors">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-xs text-text-secondary">
            &copy; {new Date().getFullYear()} Double Helix Technologies SIA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 