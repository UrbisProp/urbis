import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Building, Key, Settings, Users, Award, Clock, ArrowRight, Star } from 'lucide-react';
import venta1 from '../assets/venta_1.jpg';
import arriendo1 from '../assets/arriendo_1.jpg';
import administracion2 from '../assets/administracion_2.jpg';

const Home = () => {
  const services = [
    {
      icon: Building,
      title: 'Venta de Propiedades',
      description: 'Encuentra la propiedad perfecta para ti con nuestra amplia cartera de inmuebles en venta.',
      link: '/ventas',
      image: venta1
    },
    {
      icon: Key,
      title: 'Arriendo de Propiedades',
      description: 'Descubre opciones de arriendo que se adapten a tu presupuesto y necesidades.',
      link: '/arriendos',
      image: arriendo1
    },
    {
      icon: Settings,
      title: 'Administración',
      description: 'Servicios completos de administración para propietarios que buscan tranquilidad.',
      link: '/administracion',
      image: administracion2
    }
  ];

  const stats = [
    { icon: Users, number: '500+', label: 'Clientes Satisfechos' },
    { icon: Building, number: '1000+', label: 'Propiedades Gestionadas' },
    { icon: Award, number: '10+', label: 'Años de Experiencia' },
    { icon: Clock, number: '24/7', label: 'Atención al Cliente' }
  ];

  const testimonials = [
    {
      name: 'María González',
      role: 'Propietaria',
      content: 'Excelente servicio. Me ayudaron a vender mi casa en tiempo récord y al mejor precio del mercado.',
      rating: 5
    },
    {
      name: 'Carlos Rodríguez',
      role: 'Inversionista',
      content: 'La administración de mis propiedades nunca había sido tan fácil. Altamente recomendados.',
      rating: 5
    },
    {
      name: 'Ana Martínez',
      role: 'Arrendataria',
      content: 'Encontré el apartamento perfecto gracias a su profesionalismo y dedicación.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Tu Hogar Ideal Te Está Esperando
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Somos expertos en corretaje inmobiliario con más de 10 años de experiencia. 
              Te ayudamos a encontrar, vender o administrar tu propiedad con el mejor servicio del mercado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-lg px-8 py-3">
                <Link to="/ventas">Ver Propiedades en Venta</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-blue-600">
                <Link to="/contacto">Solicitar Información</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ofrecemos soluciones integrales para todas tus necesidades inmobiliarias
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                        <Icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <Button asChild variant="ghost" className="group-hover:bg-blue-50 p-0">
                      <Link to={service.link} className="flex items-center text-blue-600 hover:text-blue-700">
                        Conocer más <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Lo Que Dicen Nuestros Clientes
            </h2>
            <p className="text-xl text-gray-600">
              La satisfacción de nuestros clientes es nuestra mayor recompensa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent className="p-0">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Listo para Encontrar Tu Próxima Propiedad?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contáctanos hoy mismo y déjanos ayudarte a hacer realidad tus sueños inmobiliarios
          </p>
          <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-lg px-8 py-3">
            <Link to="/contacto">Contactar Ahora</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;

