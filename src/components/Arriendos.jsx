import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Bed, Bath, Square, Search, Filter, Heart, Phone, Calendar } from 'lucide-react';
import arriendo1 from '../assets/arriendo_1.jpg';
import arriendo2 from '../assets/arriendo_2.jpg';
import arriendo3 from '../assets/arriendo_3.jpg';

const Arriendos = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [propertyType, setPropertyType] = useState('');

  const properties = [
    {
      id: 1,
      title: 'Departamento Moderno Providencia',
      price: 850000,
      location: 'Providencia, Santiago',
      bedrooms: 2,
      bathrooms: 2,
      area: 85,
      type: 'Departamento',
      image: arriendo1,
      featured: true,
      available: 'Inmediato',
      description: 'Moderno departamento completamente amoblado con excelente conectividad y servicios cercanos.'
    },
    {
      id: 2,
      title: 'Casa Familiar Ñuñoa',
      price: 1200000,
      location: 'Ñuñoa, Santiago',
      bedrooms: 3,
      bathrooms: 2,
      area: 150,
      type: 'Casa',
      image: arriendo2,
      featured: false,
      available: '15 Enero',
      description: 'Acogedora casa con patio, ideal para familias. Cerca de colegios y parques.'
    },
    {
      id: 3,
      title: 'Loft Ejecutivo Las Condes',
      price: 950000,
      location: 'Las Condes, Santiago',
      bedrooms: 1,
      bathrooms: 1,
      area: 65,
      type: 'Loft',
      image: arriendo3,
      featured: true,
      available: 'Inmediato',
      description: 'Elegante loft en zona premium, perfecto para ejecutivos. Incluye estacionamiento.'
    },
    {
      id: 4,
      title: 'Departamento Vista Parque',
      price: 750000,
      location: 'San Miguel, Santiago',
      bedrooms: 2,
      bathrooms: 1,
      area: 70,
      type: 'Departamento',
      image: arriendo1,
      featured: false,
      available: '1 Febrero',
      description: 'Departamento con vista al parque, luminoso y en excelente estado de conservación.'
    },
    {
      id: 5,
      title: 'Casa en Condominio Maipú',
      price: 1100000,
      location: 'Maipú, Santiago',
      bedrooms: 4,
      bathrooms: 3,
      area: 180,
      type: 'Casa',
      image: arriendo2,
      featured: true,
      available: 'Inmediato',
      description: 'Amplia casa en condominio cerrado con áreas verdes, piscina y seguridad 24/7.'
    },
    {
      id: 6,
      title: 'Studio Centro Histórico',
      price: 450000,
      location: 'Santiago Centro',
      bedrooms: 1,
      bathrooms: 1,
      area: 35,
      type: 'Studio',
      image: arriendo3,
      featured: false,
      available: '20 Enero',
      description: 'Acogedor studio en el corazón de Santiago, cerca del metro y centros comerciales.'
    }
  ];

  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP',
      minimumFractionDigits: 0
    }).format(price);
  };

  const filteredProperties = properties.filter(property => {
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         property.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = !propertyType || property.type === propertyType;
    const matchesPrice = !priceRange || 
      (priceRange === 'low' && property.price < 600000) ||
      (priceRange === 'medium' && property.price >= 600000 && property.price < 1000000) ||
      (priceRange === 'high' && property.price >= 1000000);
    
    return matchesSearch && matchesType && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Propiedades en Arriendo
            </h1>
            <p className="text-xl max-w-2xl mx-auto">
              Encuentra el hogar perfecto para arrendar con las mejores condiciones y ubicaciones
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Buscar por ubicación o título..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={propertyType} onValueChange={setPropertyType}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Tipo de propiedad" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">Todos los tipos</SelectItem>
                <SelectItem value="Casa">Casa</SelectItem>
                <SelectItem value="Departamento">Departamento</SelectItem>
                <SelectItem value="Loft">Loft</SelectItem>
                <SelectItem value="Studio">Studio</SelectItem>
              </SelectContent>
            </Select>
            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Rango de precio" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">Todos los precios</SelectItem>
                <SelectItem value="low">Hasta $600.000</SelectItem>
                <SelectItem value="medium">$600.000 - $1.000.000</SelectItem>
                <SelectItem value="high">Más de $1.000.000</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              {filteredProperties.length} Propiedades Disponibles
            </h2>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="w-4 h-4" />
              Filtros Avanzados
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property) => (
              <Card key={property.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={property.image} 
                    alt={property.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {property.featured && (
                    <Badge className="absolute top-4 left-4 bg-green-600">
                      Destacada
                    </Badge>
                  )}
                  <Badge 
                    className={`absolute top-4 right-4 ${
                      property.available === 'Inmediato' ? 'bg-green-500' : 'bg-orange-500'
                    }`}
                  >
                    {property.available}
                  </Badge>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute bottom-4 right-4 bg-white/80 hover:bg-white"
                  >
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>
                
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{property.title}</h3>
                    <div className="flex items-center text-gray-600 mb-2">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span className="text-sm">{property.location}</span>
                    </div>
                    <div className="text-2xl font-bold text-green-600">
                      {formatPrice(property.price)}<span className="text-sm font-normal">/mes</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center mb-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Bed className="w-4 h-4 mr-1" />
                      <span>{property.bedrooms}</span>
                    </div>
                    <div className="flex items-center">
                      <Bath className="w-4 h-4 mr-1" />
                      <span>{property.bathrooms}</span>
                    </div>
                    <div className="flex items-center">
                      <Square className="w-4 h-4 mr-1" />
                      <span>{property.area}m²</span>
                    </div>
                  </div>

                  <div className="flex items-center mb-4 text-sm">
                    <Calendar className="w-4 h-4 mr-2 text-green-600" />
                    <span className="text-gray-600">Disponible: </span>
                    <span className="font-medium ml-1">{property.available}</span>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {property.description}
                  </p>

                  <div className="flex gap-2">
                    <Button className="flex-1" size="sm">
                      Ver Detalles
                    </Button>
                    <Button asChild variant="outline" size="sm">
                      <Link to="/contacto" className="flex items-center gap-1">
                        <Phone className="w-4 h-4" />
                        Contactar
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProperties.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Search className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No se encontraron propiedades
              </h3>
              <p className="text-gray-600">
                Intenta ajustar tus filtros de búsqueda para encontrar más resultados
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Disponibilidad Inmediata</h3>
              <p className="text-gray-600">
                Muchas de nuestras propiedades están disponibles para mudanza inmediata
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Propiedades Verificadas</h3>
              <p className="text-gray-600">
                Todas nuestras propiedades son verificadas y cuentan con documentación al día
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Asesoría Personalizada</h3>
              <p className="text-gray-600">
                Te acompañamos en todo el proceso de arriendo con asesoría especializada
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            ¿Necesitas Ayuda para Encontrar tu Nuevo Hogar?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Nuestros expertos te ayudarán a encontrar la propiedad perfecta según tu presupuesto y necesidades
          </p>
          <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
            <Link to="/contacto">Solicitar Asesoría Gratuita</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Arriendos;

