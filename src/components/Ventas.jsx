import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Bed, Bath, Square, Search, Filter, Heart, Phone } from 'lucide-react';
import venta1 from '../assets/venta_1.jpg';
import venta2 from '../assets/venta_2.webp';
import venta3 from '../assets/venta_3.jpg';

const Ventas = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [propertyType, setPropertyType] = useState('');

  const properties = [
    {
      id: 1,
      title: 'Casa Moderna en Las Condes',
      price: 450000000,
      location: 'Las Condes, Santiago',
      bedrooms: 4,
      bathrooms: 3,
      area: 280,
      type: 'Casa',
      image: venta1,
      featured: true,
      description: 'Hermosa casa moderna con amplios espacios, jardín privado y excelente ubicación.'
    },
    {
      id: 2,
      title: 'Departamento Vista al Mar',
      price: 320000000,
      location: 'Viña del Mar, Valparaíso',
      bedrooms: 3,
      bathrooms: 2,
      area: 120,
      type: 'Departamento',
      image: venta2,
      featured: false,
      description: 'Departamento con vista panorámica al mar, completamente amoblado y listo para habitar.'
    },
    {
      id: 3,
      title: 'Casa Familiar en Providencia',
      price: 380000000,
      location: 'Providencia, Santiago',
      bedrooms: 5,
      bathrooms: 4,
      area: 350,
      type: 'Casa',
      image: venta3,
      featured: true,
      description: 'Amplia casa familiar con patio, estacionamientos y cerca de colegios y centros comerciales.'
    },
    {
      id: 4,
      title: 'Penthouse de Lujo',
      price: 650000000,
      location: 'Vitacura, Santiago',
      bedrooms: 4,
      bathrooms: 4,
      area: 200,
      type: 'Departamento',
      image: venta1,
      featured: true,
      description: 'Exclusivo penthouse con terraza privada, jacuzzi y vista panorámica de la ciudad.'
    },
    {
      id: 5,
      title: 'Casa en Condominio',
      price: 280000000,
      location: 'Maipú, Santiago',
      bedrooms: 3,
      bathrooms: 2,
      area: 180,
      type: 'Casa',
      image: venta2,
      featured: false,
      description: 'Casa en condominio cerrado con áreas verdes, piscina y seguridad 24/7.'
    },
    {
      id: 6,
      title: 'Loft Moderno Centro',
      price: 180000000,
      location: 'Santiago Centro',
      bedrooms: 1,
      bathrooms: 1,
      area: 65,
      type: 'Loft',
      image: venta3,
      featured: false,
      description: 'Moderno loft en el centro de Santiago, ideal para jóvenes profesionales.'
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
      (priceRange === 'low' && property.price < 250000000) ||
      (priceRange === 'medium' && property.price >= 250000000 && property.price < 400000000) ||
      (priceRange === 'high' && property.price >= 400000000);
    
    return matchesSearch && matchesType && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Propiedades en Venta
            </h1>
            <p className="text-xl max-w-2xl mx-auto">
              Descubre nuestra selección de propiedades en venta con las mejores ubicaciones y precios del mercado
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
              </SelectContent>
            </Select>
            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Rango de precio" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">Todos los precios</SelectItem>
                <SelectItem value="low">Hasta $250M</SelectItem>
                <SelectItem value="medium">$250M - $400M</SelectItem>
                <SelectItem value="high">Más de $400M</SelectItem>
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
              {filteredProperties.length} Propiedades Encontradas
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
                    <Badge className="absolute top-4 left-4 bg-red-600">
                      Destacada
                    </Badge>
                  )}
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute top-4 right-4 bg-white/80 hover:bg-white"
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
                    <div className="text-2xl font-bold text-blue-600">
                      {formatPrice(property.price)}
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

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            ¿No Encontraste lo que Buscabas?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contáctanos y te ayudaremos a encontrar la propiedad perfecta según tus necesidades específicas
          </p>
          <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
            <Link to="/contacto">Solicitar Búsqueda Personalizada</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Ventas;

