import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle,
  Building,
  MessageSquare,
  Calendar,
  Users
} from 'lucide-react';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    servicio: '',
    mensaje: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (value) => {
    setFormData(prev => ({
      ...prev,
      servicio: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log('Formulario enviado:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        servicio: '',
        mensaje: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Teléfono',
      info: '+56 9 1234 5678',
      description: 'Lunes a Viernes 9:00 - 18:00'
    },
    {
      icon: Mail,
      title: 'Email',
      info: 'info@propiedadespro.cl',
      description: 'Respuesta en menos de 24 horas'
    },
    {
      icon: MapPin,
      title: 'Oficina',
      info: 'Av. Providencia 1234, Oficina 567',
      description: 'Providencia, Santiago'
    },
    {
      icon: Clock,
      title: 'Horarios',
      info: 'Lun - Vie: 9:00 - 18:00',
      description: 'Sáb: 10:00 - 14:00'
    }
  ];

  const services = [
    'Compra de Propiedad',
    'Venta de Propiedad',
    'Arriendo de Propiedad',
    'Administración de Propiedades',
    'Tasación de Propiedad',
    'Asesoría en Inversiones',
    'Otro'
  ];

  const faqs = [
    {
      question: '¿Cuánto tiempo toma vender una propiedad?',
      answer: 'El tiempo promedio de venta es de 60-90 días, dependiendo del tipo de propiedad, ubicación y condiciones del mercado.'
    },
    {
      question: '¿Qué documentos necesito para vender mi propiedad?',
      answer: 'Necesitas escritura de propiedad, certificado de dominio vigente, planos aprobados, y certificados de deudas al día.'
    },
    {
      question: '¿Cobran comisión por administrar propiedades?',
      answer: 'Sí, cobramos entre 3% y 7% del arriendo mensual, dependiendo del plan de administración que elijas.'
    },
    {
      question: '¿Ofrecen garantía en sus servicios?',
      answer: 'Sí, ofrecemos garantía de satisfacción y en caso de administración, garantizamos el pago del arriendo.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Contáctanos
            </h1>
            <p className="text-xl max-w-2xl mx-auto">
              Estamos aquí para ayudarte con todas tus necesidades inmobiliarias. 
              Contáctanos y recibe asesoría personalizada de nuestros expertos.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <MessageSquare className="w-6 h-6 text-blue-600" />
                    Solicitar Información
                  </CardTitle>
                  <p className="text-gray-600">
                    Completa el formulario y nos pondremos en contacto contigo a la brevedad
                  </p>
                </CardHeader>
                <CardContent>
                  {!isSubmitted ? (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="nombre">Nombre Completo *</Label>
                          <Input
                            id="nombre"
                            name="nombre"
                            type="text"
                            required
                            value={formData.nombre}
                            onChange={handleInputChange}
                            placeholder="Tu nombre completo"
                          />
                        </div>
                        <div>
                          <Label htmlFor="telefono">Teléfono *</Label>
                          <Input
                            id="telefono"
                            name="telefono"
                            type="tel"
                            required
                            value={formData.telefono}
                            onChange={handleInputChange}
                            placeholder="+56 9 1234 5678"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="tu@email.com"
                        />
                      </div>

                      <div>
                        <Label htmlFor="servicio">Servicio de Interés *</Label>
                        <Select value={formData.servicio} onValueChange={handleSelectChange} required>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecciona un servicio" />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map((service, index) => (
                              <SelectItem key={index} value={service}>
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="mensaje">Mensaje</Label>
                        <Textarea
                          id="mensaje"
                          name="mensaje"
                          rows={4}
                          value={formData.mensaje}
                          onChange={handleInputChange}
                          placeholder="Cuéntanos más detalles sobre lo que necesitas..."
                        />
                      </div>

                      <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                        <Send className="w-4 h-4 mr-2" />
                        Enviar Mensaje
                      </Button>
                    </form>
                  ) : (
                    <div className="text-center py-8">
                      <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        ¡Mensaje Enviado!
                      </h3>
                      <p className="text-gray-600">
                        Gracias por contactarnos. Nos pondremos en contacto contigo dentro de las próximas 24 horas.
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Información de Contacto
                </h2>
                <div className="grid grid-cols-1 gap-6">
                  {contactInfo.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <Card key={index}>
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                              <Icon className="w-6 h-6 text-blue-600" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                              <p className="text-gray-900 font-medium">{item.info}</p>
                              <p className="text-sm text-gray-600">{item.description}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-blue-600" />
                    Acciones Rápidas
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <Phone className="w-4 h-4 mr-2" />
                    Llamar Ahora: +56 9 1234 5678
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Mail className="w-4 h-4 mr-2" />
                    Enviar Email
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Calendar className="w-4 h-4 mr-2" />
                    Agendar Reunión
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Building className="w-4 h-4 mr-2" />
                    Visitar Oficina
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Preguntas Frecuentes
            </h2>
            <p className="text-xl text-gray-600">
              Respuestas a las consultas más comunes de nuestros clientes
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nuestra Ubicación
            </h2>
            <p className="text-xl text-gray-600">
              Visítanos en nuestra oficina en el corazón de Providencia
            </p>
          </div>

          <Card>
            <CardContent className="p-0">
              <div className="bg-gray-200 h-96 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">
                    Mapa Interactivo
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Av. Providencia 1234, Oficina 567<br />
                    Providencia, Santiago
                  </p>
                  <Button variant="outline">
                    Ver en Google Maps
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nuestro Equipo
            </h2>
            <p className="text-xl text-gray-600">
              Profesionales experimentados listos para ayudarte
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">María González</h3>
                <p className="text-gray-600 mb-2">Gerente de Ventas</p>
                <p className="text-sm text-gray-500">
                  Especialista en propiedades residenciales con más de 8 años de experiencia
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Carlos Rodríguez</h3>
                <p className="text-gray-600 mb-2">Especialista en Arriendos</p>
                <p className="text-sm text-gray-500">
                  Experto en gestión de arriendos y administración de propiedades
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Ana Martínez</h3>
                <p className="text-gray-600 mb-2">Directora de Administración</p>
                <p className="text-sm text-gray-500">
                  Líder en administración de propiedades y servicios integrales
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacto;

