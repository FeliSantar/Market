import React, { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Label } from '@/components/ui/label.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { ArrowRight, Megaphone, Search, TrendingUp, Mail, Phone, MapPin, Star, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import './App.css'

// Import assets
import backgroundAbstract from './assets/background_abstract_1.png'
import marketingNeoLogo from './assets/marketing_neo_logo.png'
import iconPublicidad from './assets/icon_publicidad.png'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Aquí se puede agregar la lógica para enviar el formulario
    alert('¡Gracias por contactarnos! Te responderemos pronto.')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${backgroundAbstract})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Navigation */}
        <nav className="absolute top-0 left-0 right-0 z-50 p-6">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center space-x-3"
            >
              <img src={marketingNeoLogo} alt="Marketing Neo" className="h-12 w-auto" />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden md:flex space-x-8"
            >
              <a href="#servicios" className="text-white hover:text-green-400 transition-colors">Servicios</a>
              <a href="#nosotros" className="text-white hover:text-green-400 transition-colors">Nosotros</a>
              <a href="#contacto" className="text-white hover:text-green-400 transition-colors">Contacto</a>
            </motion.div>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-6 bg-green-500/20 text-green-400 border-green-400/30 px-4 py-2">
              Agencia de Marketing Digital
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Marketing Neo: 
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                {" "}Impulsando tu Visión Digital
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Estrategias de Marketing Digital Innovadoras y Resultados Medibles para tu Negocio
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-8 py-4 text-lg"
                onClick={() => document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' })}
              >
                Transforma tu Presencia Online Hoy
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg"
                onClick={() => document.getElementById('servicios').scrollIntoView({ behavior: 'smooth' })}
              >
                Conoce Nuestros Servicios
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Nuestros <span className="text-green-400">Servicios</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Soluciones integrales de marketing digital diseñadas para impulsar tu crecimiento
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Publicidad y Copywriting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-slate-800/50 border-slate-700 hover:border-green-400/50 transition-all duration-300 h-full">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                    <Megaphone className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-white text-xl">Publicidad y Copywriting</CardTitle>
                  <CardDescription className="text-green-400 font-semibold">
                    Comerciales que Conectan, Copywriting que Convence
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 leading-relaxed">
                    En Marketing Neo, no solo creamos anuncios; forjamos narrativas que resuenan. 
                    Nuestros comerciales, potenciados por un copywriting estratégico, transforman 
                    espectadores en clientes. Cada palabra y cada imagen están diseñadas para 
                    maximizar tu impacto y retorno de inversión.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* SEO y Desarrollo Web */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-slate-800/50 border-slate-700 hover:border-blue-400/50 transition-all duration-300 h-full">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg flex items-center justify-center mb-4">
                    <Search className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-white text-xl">Optimización SEO y Desarrollo Web</CardTitle>
                  <CardDescription className="text-blue-400 font-semibold">
                    Tu Marca en la Cima: Visibilidad y Experiencia Digital de Vanguardia
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 leading-relaxed">
                    Construimos más que sitios web; creamos plataformas digitales optimizadas para 
                    dominar los motores de búsqueda. A través de estrategias SEO de última generación 
                    y un desarrollo web impecable, aseguramos que tu marca ofrezca una experiencia 
                    de usuario inigualable.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Campañas Digitales */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="bg-slate-800/50 border-slate-700 hover:border-green-400/50 transition-all duration-300 h-full">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                    <TrendingUp className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-white text-xl">Campañas de Publicidad Digital</CardTitle>
                  <CardDescription className="text-green-400 font-semibold">
                    Google Ads • Meta Ads • TikTok Ads
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 leading-relaxed">
                    Dominamos las plataformas más influyentes para llevar tu mensaje directamente 
                    a tu público objetivo. Desde la precisión de Google Ads hasta el alcance masivo 
                    de Meta Ads y la viralidad de TikTok Ads, diseñamos campañas que generan 
                    conversiones reales.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Quiénes <span className="text-blue-400">Somos</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              La Fusión de Estrategia y Visión para tu Éxito
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Somos Marketing Neo, una agencia fundada por dos profesionales apasionados y 
                altamente capacitados, dedicados a transformar el panorama digital de tu empresa. 
                Nuestra experiencia combinada en estrategia empresarial y análisis económico nos 
                permite ofrecer soluciones de marketing digital que no solo son creativas, sino 
                también profundamente arraigadas en la lógica de negocio y la eficiencia.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold text-lg">Transparencia Total</h4>
                    <p className="text-gray-300">Reportes detallados y comunicación constante</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold text-lg">Innovación Constante</h4>
                    <p className="text-gray-300">Siempre a la vanguardia de las tendencias digitales</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold text-lg">Resultados Medibles</h4>
                    <p className="text-gray-300">Cada estrategia orientada a objetivos específicos</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Pedro Mangini */}
              <Card className="bg-slate-700/50 border-slate-600">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-xl">PM</span>
                    </div>
                    <div>
                      <CardTitle className="text-white">Pedro Mangini</CardTitle>
                      <CardDescription className="text-green-400">
                        Licenciado en Dirección de Empresas
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Con una visión estratégica aguda y una profunda comprensión del mercado, 
                    Pedro lidera la conceptualización y ejecución de campañas que superan los 
                    objetivos comerciales.
                  </p>
                </CardContent>
              </Card>

              {/* Felipe Santarsieri */}
              <Card className="bg-slate-700/50 border-slate-600">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-xl">FS</span>
                    </div>
                    <div>
                      <CardTitle className="text-white">Felipe Santarsieri</CardTitle>
                      <CardDescription className="text-blue-400">
                        Licenciado en Economía
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Felipe aporta una perspectiva analítica inigualable, desglosando datos 
                    complejos para identificar oportunidades y optimizar el rendimiento de 
                    cada inversión.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              ¿Listo para <span className="text-green-400">Transformar</span> tu Marketing?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Estamos listos para escuchar tus desafíos y convertir tus ambiciones en realidades digitales
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white text-2xl">Contáctanos</CardTitle>
                  <CardDescription className="text-gray-300">
                    Completa el formulario y te responderemos en menos de 24 horas
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name" className="text-white">Nombre Completo</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="bg-slate-700 border-slate-600 text-white"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email" className="text-white">Correo Electrónico</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="bg-slate-700 border-slate-600 text-white"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="phone" className="text-white">Teléfono</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="bg-slate-700 border-slate-600 text-white"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="message" className="text-white">Mensaje</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="bg-slate-700 border-slate-600 text-white min-h-[120px]"
                        placeholder="Cuéntanos sobre tu proyecto..."
                        required
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white"
                      size="lg"
                    >
                      Enviar Mensaje
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Información de Contacto</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">Email</p>
                      <p className="text-gray-300">info@marketingneo.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">Teléfono</p>
                      <p className="text-gray-300">+54 9 11 XXXX-XXXX</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">Ubicación</p>
                      <p className="text-gray-300">Buenos Aires, Argentina</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-6">
                  <h4 className="text-white font-bold text-lg mb-4">¿Por qué elegirnos?</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-400">100+</div>
                      <div className="text-gray-300 text-sm">Proyectos Exitosos</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-400">95%</div>
                      <div className="text-gray-300 text-sm">Satisfacción Cliente</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-400">24h</div>
                      <div className="text-gray-300 text-sm">Tiempo Respuesta</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-400">2+</div>
                      <div className="text-gray-300 text-sm">Años Experiencia</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <img src={marketingNeoLogo} alt="Marketing Neo" className="h-10 w-auto" />
              <span className="text-white font-bold text-xl">Marketing Neo</span>
            </div>
            
            <div className="text-gray-400 text-center md:text-right">
              <p>&copy; 2024 Marketing Neo. Todos los derechos reservados.</p>
              <p className="text-sm mt-1">Impulsando tu visión digital hacia el éxito</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

