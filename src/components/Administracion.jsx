import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Settings, 
  Users, 
  FileText, 
  Wrench, 
  Shield, 
  DollarSign, 
  Clock, 
  CheckCircle,
  Phone,
  Calculator,
  Home,
  Briefcase
} from 'lucide-react';
import administracion1 from '../assets/administracion_1.jpg';
import administracion2 from '../assets/administracion_2.jpg';
import administracion3 from '../assets/administracion_3.jpg';

const Administracion = () => {
  const services = [
    {
      icon: Users,
      title: 'Gestión de Inquilinos',
      description: 'Selección, evaluación y gestión completa de inquilinos para tu propiedad.',
      features: [
        'Evaluación crediticia y laboral',
        'Contratos de arriendo',
        'Cobranza mensual',
        'Atención a reclamos'
      ]
    },
    {
      icon: Wrench,
      title: 'Mantenimiento y Reparaciones',
      description: 'Servicio integral de mantenimiento preventivo y correctivo.',
      features: [
        'Mantenimiento preventivo',
        'Reparaciones de emergencia',
        'Red de proveedores certificados',
        'Supervisión de trabajos'
      ]
    },
    {
      icon: FileText,
      title: 'Gestión Administrativa',
      description: 'Administración completa de documentos y trámites legales.',
      features: [
        'Gestión de contratos',
        'Trámites municipales',
        'Seguros de propiedad',
        'Reportes mensuales'
      ]
    },
    {
      icon: DollarSign,
      title: 'Gestión Financiera',
      description: 'Control total de ingresos, gastos y rentabilidad de tu inversión.',
      features: [
        'Control de pagos',
        'Gestión de gastos comunes',
        'Reportes financieros',
        'Optimización de rentabilidad'
      ]
    },
    {
      icon: Shield,
      title: 'Seguridad y Seguros',
      description: 'Protección integral de tu propiedad y tranquilidad total.',
      features: [
        'Seguros contra daños',
        'Garantías de arriendo',
        'Inspecciones periódicas',
        'Asesoría legal'
      ]
    },
    {
      icon: Settings,
      title: 'Servicios Adicionales',
      description: 'Servicios complementarios para maximizar el valor de tu propiedad.',
      features: [
        'Mejoras y remodelaciones',
        'Tasaciones periódicas',
        'Marketing de propiedades',
        'Asesoría en inversiones'
      ]
    }
  ];

  const plans = [
    {
      name: 'Plan Básico',
      price: '3%',
      description: 'Ideal para propietarios que buscan servicios esenciales',
      features: [
        'Gestión de inquilinos',
        'Cobranza mensual',
        'Reporte mensual básico',
        'Atención telefónica',
        'Mantenimiento básico'
      ],
      popular: false
    },
    {
      name: 'Plan Completo',
      price: '5%',
      description: 'La solución integral más popular para propietarios',
      features: [
        'Todos los servicios del Plan Básico',
        'Mantenimiento preventivo',
        'Gestión de seguros',
        'Reportes financieros detallados',
        'Atención 24/7',
        'Inspecciones trimestrales'
      ],
      popular: true
    },
    {
      name: 'Plan Premium',
      price: '7%',
      description: 'Servicio VIP con atención personalizada',
      features: [
        'Todos los servicios del Plan Completo',
        'Gestor personal dedicado',
        'Mejoras y remodelaciones',
        'Asesoría en inversiones',
        'Tasaciones semestrales',
        'Servicios legales incluidos'
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: 'Ahorro de Tiempo',
      description: 'Nos encargamos de todo para que tú no tengas que preocuparte por nada.'
    },
    {
      icon: DollarSign,
      title: 'Maximización de Ingresos',
      description: 'Optimizamos la rentabilidad de tu propiedad con estrategias probadas.'
    },
    {
      icon: Shield,
      title: 'Tranquilidad Total',
      description: 'Protección completa de tu inversión con seguros y garantías.'
    },
    {
      icon: Briefcase,
      title: 'Experiencia Profesional',
      description: 'Más de 10 años de experiencia en administración de propiedades.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Administración de Propiedades
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Deja que nosotros nos encarguemos de todo. Administramos tu propiedad 
              para que genere los mejores ingresos sin que tengas que preocuparte por nada.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ¿Por Qué Elegir Nuestros Servicios?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ofrecemos una administración integral que te permite disfrutar de tu inversión sin complicaciones
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-xl text-gray-600">
              Servicios integrales para la administración completa de tu propiedad
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                        <Icon className="w-6 h-6 text-purple-600" />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </div>
                    <p className="text-gray-600">{service.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Planes de Administración
            </h2>
            <p className="text-xl text-gray-600">
              Elige el plan que mejor se adapte a tus necesidades
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'ring-2 ring-purple-600 shadow-xl' : ''}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-600">
                    Más Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="text-4xl font-bold text-purple-600 my-4">
                    {plan.price}
                    <span className="text-lg font-normal text-gray-600">/mes</span>
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    asChild 
                    className={`w-full ${plan.popular ? 'bg-purple-600 hover:bg-purple-700' : ''}`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    <Link to="/contacto">Solicitar Información</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ¿Cómo Funciona?
            </h2>
            <p className="text-xl text-gray-600">
              Un proceso simple y transparente para comenzar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2">Evaluación Inicial</h3>
              <p className="text-gray-600">Evaluamos tu propiedad y definimos la estrategia óptima</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2">Firma de Contrato</h3>
              <p className="text-gray-600">Firmamos el acuerdo de administración con condiciones claras</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2">Búsqueda de Inquilinos</h3>
              <p className="text-gray-600">Encontramos y evaluamos inquilinos calificados</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold mb-2">Administración Continua</h3>
              <p className="text-gray-600">Nos encargamos de todo mientras tú recibes tus ingresos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Propiedades Bajo Nuestra Administración
            </h2>
            <p className="text-xl text-gray-600">
              Algunos ejemplos de las propiedades que administramos exitosamente
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative group overflow-hidden rounded-lg">
              <img 
                src={administracion1} 
                alt="Propiedad administrada 1"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-lg font-semibold">Edificio Corporativo</h3>
                  <p className="text-sm">Las Condes, Santiago</p>
                </div>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg">
              <img 
                src={administracion2} 
                alt="Propiedad administrada 2"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-lg font-semibold">Complejo Residencial</h3>
                  <p className="text-sm">Providencia, Santiago</p>
                </div>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg">
              <img 
                src={administracion3} 
                alt="Propiedad administrada 3"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-lg font-semibold">Centro Comercial</h3>
                  <p className="text-sm">Vitacura, Santiago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            ¿Tienes una Propiedad que Administrar?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contáctanos para una evaluación gratuita y descubre cómo podemos maximizar 
            la rentabilidad de tu inversión inmobiliaria
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
              <Link to="/contacto">Solicitar Evaluación Gratuita</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
              <Link to="/contacto" className="flex items-center gap-2">
                <Calculator className="w-5 h-5" />
                Calcular Rentabilidad
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Administracion;

