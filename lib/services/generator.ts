import { FormData, Template } from '../types/builder';

export function generateWebsiteHTML(formData: Partial<FormData>, template: Template | null): string {
  const colors = template?.colors || {
    primary: '#2563EB',
    secondary: '#1E40AF',
    accent: '#F59E0B',
  };

  const businessName = formData.businessName || 'Your Business';
  const serviceType = formData.serviceType || 'Professional Services';
  const location = formData.location || '';
  const heroDescription = formData.heroDescription || 'Welcome to our business';
  const phoneNumber = formData.phoneNumber || '';
  const email = formData.email || '';
  const aboutDescription = formData.aboutDescription || '';

  // Parse services
  const services = (formData.servicesOffered || '')
    .split(',')
    .map(s => s.trim())
    .filter(s => s);

  // Parse features
  const featureHeadlines = (formData.featureHeadlines || '')
    .split(',')
    .map(s => s.trim())
    .filter(s => s);

  const featureDescriptions = (formData.featureDescriptions || '')
    .split(',')
    .map(s => s.trim())
    .filter(s => s);

  // Parse testimonials
  const testimonials = formData.testimonials?.filter(t => t.name && t.text) || [];

  // Parse FAQs
  const faqs = formData.faqs?.filter(f => f.question && f.answer) || [];

  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="${formData.metaDescription || `${serviceType} in ${location}. Contact us today!`}">
    <title>${formData.metaTitle || `${businessName} - ${serviceType}`}</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #333;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }

        /* Header */
        header {
            background: white;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            padding: 1rem 0;
            position: sticky;
            top: 0;
            z-index: 1000;
        }

        nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo {
            font-size: 1.5rem;
            font-weight: bold;
            color: ${colors.primary};
        }

        .nav-links {
            display: flex;
            gap: 2rem;
            list-style: none;
        }

        .nav-links a {
            color: #333;
            text-decoration: none;
            font-weight: 500;
            transition: color 0.3s;
        }

        .nav-links a:hover {
            color: ${colors.primary};
        }

        /* Hero Section */
        .hero {
            background: linear-gradient(135deg, ${colors.primary}, ${colors.secondary});
            color: white;
            padding: 5rem 0;
            text-align: center;
        }

        .hero h1 {
            font-size: 3rem;
            margin-bottom: 1rem;
            font-weight: 700;
        }

        .hero p {
            font-size: 1.25rem;
            margin-bottom: 2rem;
            opacity: 0.95;
        }

        .cta-button {
            display: inline-block;
            background: ${colors.accent};
            color: white;
            padding: 1rem 2rem;
            border-radius: 8px;
            text-decoration: none;
            font-weight: 600;
            transition: transform 0.3s, box-shadow 0.3s;
        }

        .cta-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        }

        /* Services Section */
        .services {
            padding: 4rem 0;
            background: #f9fafb;
        }

        .section-title {
            text-align: center;
            font-size: 2.5rem;
            margin-bottom: 3rem;
            color: ${colors.primary};
        }

        .services-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
        }

        .service-card {
            background: white;
            padding: 2rem;
            border-radius: 12px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            transition: transform 0.3s;
        }

        .service-card:hover {
            transform: translateY(-5px);
        }

        .service-card h3 {
            color: ${colors.primary};
            margin-bottom: 1rem;
            font-size: 1.25rem;
        }

        /* Features Section */
        .features {
            padding: 4rem 0;
        }

        .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
        }

        .feature-item {
            text-align: center;
            padding: 2rem;
        }

        .feature-icon {
            width: 60px;
            height: 60px;
            background: ${colors.primary};
            color: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 1rem;
            font-size: 1.5rem;
        }

        /* About Section */
        .about {
            padding: 4rem 0;
            background: #f9fafb;
        }

        .about-content {
            max-width: 800px;
            margin: 0 auto;
            text-align: center;
        }

        .about-content p {
            font-size: 1.125rem;
            line-height: 1.8;
            margin-bottom: 1rem;
        }

        /* Testimonials */
        .testimonials {
            padding: 4rem 0;
        }

        .testimonials-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
        }

        .testimonial-card {
            background: white;
            padding: 2rem;
            border-radius: 12px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }

        .stars {
            color: ${colors.accent};
            margin-bottom: 1rem;
        }

        .testimonial-text {
            font-style: italic;
            margin-bottom: 1rem;
        }

        .testimonial-author {
            font-weight: 600;
            color: ${colors.primary};
        }

        /* FAQ Section */
        .faq {
            padding: 4rem 0;
            background: #f9fafb;
        }

        .faq-item {
            background: white;
            margin-bottom: 1rem;
            border-radius: 8px;
            overflow: hidden;
        }

        .faq-question {
            padding: 1.5rem;
            font-weight: 600;
            color: ${colors.primary};
            cursor: pointer;
        }

        .faq-answer {
            padding: 0 1.5rem 1.5rem;
            color: #666;
        }

        /* Contact Section */
        .contact {
            padding: 4rem 0;
            background: ${colors.primary};
            color: white;
            text-align: center;
        }

        .contact h2 {
            margin-bottom: 2rem;
        }

        .contact-info {
            font-size: 1.25rem;
            margin: 1rem 0;
        }

        .contact-info a {
            color: white;
            text-decoration: none;
            font-weight: 600;
        }

        /* Footer */
        footer {
            background: #1f2937;
            color: white;
            padding: 3rem 0 1rem;
        }

        .footer-content {
            text-align: center;
        }

        .footer-links {
            display: flex;
            justify-content: center;
            gap: 2rem;
            margin: 1rem 0;
            list-style: none;
        }

        .footer-links a {
            color: white;
            text-decoration: none;
        }

        /* Responsive */
        @media (max-width: 768px) {
            .hero h1 {
                font-size: 2rem;
            }

            .nav-links {
                gap: 1rem;
            }

            .services-grid,
            .features-grid,
            .testimonials-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <!-- Header -->
    <header>
        <nav class="container">
            <div class="logo">${businessName}</div>
            <ul class="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    <!-- Hero Section -->
    <section class="hero" id="home">
        <div class="container">
            <h1>${serviceType}${location ? ` in ${location}` : ''}</h1>
            <p>${heroDescription}</p>
            ${phoneNumber ? `<a href="tel:${phoneNumber}" class="cta-button">Call Now: ${phoneNumber}</a>` : ''}
        </div>
    </section>

    <!-- Services Section -->
    ${services.length > 0 ? `
    <section class="services" id="services">
        <div class="container">
            <h2 class="section-title">Our Services</h2>
            <div class="services-grid">
                ${services.map(service => `
                <div class="service-card">
                    <h3>${service}</h3>
                    <p>Professional ${service.toLowerCase()} services tailored to your needs.</p>
                </div>
                `).join('')}
            </div>
        </div>
    </section>
    ` : ''}

    <!-- Features Section -->
    ${featureHeadlines.length > 0 ? `
    <section class="features">
        <div class="container">
            <h2 class="section-title">Why Choose Us</h2>
            <div class="features-grid">
                ${featureHeadlines.map((headline, i) => `
                <div class="feature-item">
                    <div class="feature-icon">✓</div>
                    <h3>${headline}</h3>
                    <p>${featureDescriptions[i] || ''}</p>
                </div>
                `).join('')}
            </div>
        </div>
    </section>
    ` : ''}

    <!-- About Section -->
    ${aboutDescription ? `
    <section class="about" id="about">
        <div class="container">
            <h2 class="section-title">About ${businessName}</h2>
            <div class="about-content">
                <p>${aboutDescription}</p>
            </div>
        </div>
    </section>
    ` : ''}

    <!-- Testimonials -->
    ${testimonials.length > 0 ? `
    <section class="testimonials">
        <div class="container">
            <h2 class="section-title">What Our Customers Say</h2>
            <div class="testimonials-grid">
                ${testimonials.map(testimonial => `
                <div class="testimonial-card">
                    <div class="stars">${'★'.repeat(testimonial.rating)}${'☆'.repeat(5 - testimonial.rating)}</div>
                    <p class="testimonial-text">"${testimonial.text}"</p>
                    <p class="testimonial-author">- ${testimonial.name}</p>
                </div>
                `).join('')}
            </div>
        </div>
    </section>
    ` : ''}

    <!-- FAQ Section -->
    ${faqs.length > 0 ? `
    <section class="faq">
        <div class="container">
            <h2 class="section-title">Frequently Asked Questions</h2>
            ${faqs.map(faq => `
            <div class="faq-item">
                <div class="faq-question">${faq.question}</div>
                <div class="faq-answer">${faq.answer}</div>
            </div>
            `).join('')}
        </div>
    </section>
    ` : ''}

    <!-- Contact Section -->
    <section class="contact" id="contact">
        <div class="container">
            <h2>Get In Touch</h2>
            ${phoneNumber ? `<p class="contact-info">Call us: <a href="tel:${phoneNumber}">${phoneNumber}</a></p>` : ''}
            ${email ? `<p class="contact-info">Email: <a href="mailto:${email}">${email}</a></p>` : ''}
            ${formData.businessAddress ? `<p class="contact-info">${formData.businessAddress}</p>` : ''}
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <div class="container">
            <div class="footer-content">
                <p>&copy; ${new Date().getFullYear()} ${businessName}. All rights reserved.</p>
                ${formData.disclaimer ? `<p style="margin-top: 1rem; font-size: 0.875rem; opacity: 0.8;">${formData.disclaimer}</p>` : ''}
            </div>
        </div>
    </footer>
</body>
</html>
  `.trim();
}
