import { Phone, Mail, Facebook, Zap, HardHat, FileText, CheckCircle, ArrowRight, Shield, Users, Clock, Award } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                src="/logo montesag 2.jpg"
                alt="MONTESAG Logo"
                className="h-16 w-auto"
              />
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#servicios" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Servicios</a>
              <a href="#nosotros" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Nosotros</a>
              <a href="#contacto" className="bg-orange-600 text-white px-6 py-2.5 rounded-lg hover:bg-orange-700 transition-colors font-medium">Contacto</a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src="/fondo copy.jpg" alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              CONSTRUCTORA Y SERVICIOS <span className="text-white">MONTESAG S.A.C</span>
            </h1>
            <p className="text-xl md:text-2xl text-orange-50 mb-8 leading-relaxed">
              Especialistas en mantenimiento y distribución eléctrica, proyectos de construcción civil y servicios comerciales con los más altos estándares de calidad y seguridad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contacto" className="bg-white text-orange-600 px-8 py-4 rounded-lg hover:bg-orange-50 transition-all font-semibold text-lg inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
                Solicitar Cotización
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#servicios" className="bg-orange-700 text-white px-8 py-4 rounded-lg hover:bg-orange-800 transition-all font-semibold text-lg inline-flex items-center justify-center border-2 border-white">
                Ver Servicios
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Quiénes Somos</h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                <span className="font-bold text-orange-600">MONTESAG Ingenieros SAC</span> es una empresa dedicada al rubro de servicios, trabajos de actividades comerciales, servicios de mantenimiento de distribución en baja y media tensión, ejecución de obras eléctricas y de construcción civil.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Contamos con un equipo de profesionales, técnicos y colaboradores calificados y comprometidos con nuestros clientes, el bienestar de nuestro personal, la comunidad y el medio ambiente, garantizando siempre la ejecución de nuestros servicios con la calidad que nos caracteriza y cumpliendo con los estándares de seguridad.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
                <Shield className="w-10 h-10 text-orange-600 mb-3" />
                <h4 className="font-bold text-gray-900 mb-2">Seguridad</h4>
                <p className="text-gray-600 text-sm">Cumplimiento de estándares de seguridad</p>
              </div>

              <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
                <Users className="w-10 h-10 text-orange-600 mb-3" />
                <h4 className="font-bold text-gray-900 mb-2">Equipo Calificado</h4>
                <p className="text-gray-600 text-sm">Profesionales y técnicos expertos</p>
              </div>

              <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
                <Clock className="w-10 h-10 text-orange-600 mb-3" />
                <h4 className="font-bold text-gray-900 mb-2">Compromiso</h4>
                <p className="text-gray-600 text-sm">Dedicación con nuestros clientes</p>
              </div>

              <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
                <Award className="w-10 h-10 text-orange-600 mb-3" />
                <h4 className="font-bold text-gray-900 mb-2">Calidad</h4>
                <p className="text-gray-600 text-sm">Excelencia en cada servicio</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nuestros Servicios</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Soluciones integrales en sistemas eléctricos y construcción civil</p>
            <div className="w-24 h-1 bg-orange-600 mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Mantenimiento y Distribución */}
            <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all border-t-4 border-orange-600">
              <div className="absolute inset-0">
                <img src="/fondo2.jpg" alt="Mantenimiento" className="w-full h-full object-cover" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/90 to-white/95"></div>
              <div className="relative p-8">
                <div className="bg-orange-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Mantenimiento y Distribución</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>Mantenimientos predictivos, preventivos y correctivos en redes de distribución</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>Atención de emergencias</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>Mediciones y análisis de calidad de producto</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>Pequeñas remodelaciones y ampliaciones en sistemas eléctricos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>Mantenimiento preventivo de partes aislantes</span>
                  </li>
                </ul>
                <div className="mt-6 rounded-lg overflow-hidden">
                  <img src="/fondo2.jpg" alt="Mantenimiento eléctrico" className="w-full h-48 object-cover" />
                </div>
              </div>
            </div>

            {/* Proyectos y Obras Eléctricas */}
            <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all border-t-4 border-orange-600">
              <div className="absolute inset-0">
                <img src="/fondo3.jpg" alt="Proyectos" className="w-full h-full object-cover" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/90 to-white/95"></div>
              <div className="relative p-8">
                <div className="bg-orange-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <HardHat className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Proyectos y Obras Eléctricas</h3>
                <p className="text-sm text-orange-600 font-semibold mb-4">Ampliaciones de Potencia por Demanda</p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>Ejecución de proyectos en redes primarias y secundarias</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>Elaboración de expedientes de proyectos de ejecución y remodelación</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>Estudios de mejora para calidad de producto</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>Instalación de sistemas de puesta a tierra</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>Proyectos de electrificación y ampliación de potencia</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Actividades Comerciales */}
            <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all border-t-4 border-orange-600">
              <div className="absolute inset-0">
                <img src="/fondo4.jpg" alt="Actividades Comerciales" className="w-full h-full object-cover" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/90 to-white/95"></div>
              <div className="relative p-8">
                <div className="bg-orange-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <FileText className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Actividades Comerciales</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>Instalación de conexiones nuevas monofásicas y trifásicas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>Reinstalación de servicios en baja tensión</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>Factibilidades eléctricas en media y baja tensión</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-orange-600 to-orange-700 rounded-2xl shadow-2xl p-12 text-white">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Por qué elegirnos?</h2>
              <p className="text-xl text-orange-50">Comprometidos con la excelencia en cada proyecto</p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-white bg-opacity-20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-10 h-10" />
                </div>
                <h4 className="font-bold text-lg mb-2">Seguridad Garantizada</h4>
                <p className="text-orange-50">Cumplimiento estricto de normas de seguridad</p>
              </div>

              <div className="text-center">
                <div className="bg-white bg-opacity-20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10" />
                </div>
                <h4 className="font-bold text-lg mb-2">Personal Calificado</h4>
                <p className="text-orange-50">Equipo de profesionales expertos</p>
              </div>

              <div className="text-center">
                <div className="bg-white bg-opacity-20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-10 h-10" />
                </div>
                <h4 className="font-bold text-lg mb-2">Calidad Certificada</h4>
                <p className="text-orange-50">Servicios con los más altos estándares</p>
              </div>

              <div className="text-center">
                <div className="bg-white bg-opacity-20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-10 h-10" />
                </div>
                <h4 className="font-bold text-lg mb-2">Atención Inmediata</h4>
                <p className="text-orange-50">Respuesta rápida a emergencias</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contáctanos</h2>
            <p className="text-xl text-gray-600">Estamos listos para atender tus necesidades</p>
            <div className="w-24 h-1 bg-orange-600 mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all">
              <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h5 className="font-bold text-gray-900 mb-2 text-lg">Teléfonos</h5>
              <p className="text-gray-600">990 279 753</p>
              <p className="text-gray-600">975 072 441</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all">
              <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h5 className="font-bold text-gray-900 mb-2 text-lg">Email</h5>
              <a href="mailto:ventasmontesag@gmail.com" className="text-gray-600 hover:text-orange-600 transition-colors">
                ventasmontesag@gmail.com
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all">
              <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Facebook className="w-8 h-8 text-white" />
              </div>
              <h5 className="font-bold text-gray-900 mb-2 text-lg">Facebook</h5>
              <a href="https://www.facebook.com/share/1P7LzbBGvN" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 transition-colors font-medium">
                Visitar página
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center">
              <img
                src="/logo montesag 2.jpg"
                alt="MONTESAG Logo"
                className="h-12 w-auto opacity-90"
              />
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm">&copy; 2025 CONSTRUCTORA Y SERVICIOS MONTESAG S.A.C.</p>
              <p className="text-sm text-gray-400">Todos los derechos reservados.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
