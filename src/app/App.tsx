import { ChevronRight, TrendingUp, ArrowUpRight, Home, FileText, Calendar, CreditCard, Zap, ChevronDown } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-[#00A651]/10 z-50">
        <div className="max-w-[1600px] mx-auto px-12 h-24 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 bg-[#00A651] rounded flex items-center justify-center">
              <span className="text-white font-medium text-xl">M</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[#003d1f] font-medium text-xl tracking-tight">MA2E</span>
              <span className="text-[#666666] text-[8px] uppercase tracking-[2px]">MUTUELLE EAU & ÉLECTRICITÉ</span>
            </div>
          </div>

          <div className="flex items-center gap-10">
            <a href="#" className="text-[#003d1f] text-[15px] hover:text-[#00A651] transition-colors">La mutuelle</a>
            <a href="#" className="text-[#003d1f] text-[15px] hover:text-[#00A651] transition-colors">Épargne</a>
            <a href="#" className="text-[#003d1f] text-[15px] hover:text-[#00A651] transition-colors">Crédit</a>
            <a href="#" className="text-[#003d1f] text-[15px] hover:text-[#00A651] transition-colors">Immobilier</a>
            <a href="#" className="text-[#003d1f] text-[15px] hover:text-[#00A651] transition-colors">Actualités</a>
          </div>

          <div className="flex items-center gap-4">
            <div className="px-3 py-1.5 border border-[#00A651]/20 rounded text-[#003d1f] text-sm hover:border-[#00A651] transition-colors cursor-pointer">FR</div>
            <button className="bg-[#00A651] text-white px-7 py-2.5 rounded text-[15px] hover:bg-[#00703a] transition-colors">
              Espace adhérent
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#00A651] rounded-full blur-[150px]"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#F7941D] rounded-full blur-[150px]"></div>
        </div>

        <div className="relative max-w-[1600px] mx-auto px-12 py-32 text-center">
          <div className="inline-flex items-center gap-2 bg-[#f5f5f0] px-5 py-2 rounded-full mb-8">
            <div className="w-2 h-2 bg-[#00A651] rounded-full animate-pulse"></div>
            <span className="text-[#003d1f] text-sm">15 ans d'excellence au service de 8 000+ adhérents</span>
          </div>

          <h1 className="text-[#003d1f] text-[72px] leading-[1.1] tracking-[-1.5px] max-w-[1100px] mx-auto mb-8" style={{ fontWeight: 400 }}>
            L'épargne qui fait grandir vos{' '}
            <span className="relative inline-block">
              <span className="text-[#00A651]">projets de vie</span>
              <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 6C50 2 150 2 198 6" stroke="#F7941D" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </span>
          </h1>

          <p className="text-[#666666] text-xl max-w-[680px] mx-auto mb-12 leading-relaxed">
            Une mutuelle agréée BCEAO dédiée aux agents de SODECI, CIE, GS2E et CIPREL. Épargne sécurisée, crédits adaptés et accompagnement personnalisé.
          </p>

          <div className="flex items-center justify-center gap-4 mb-20">
            <button className="bg-[#00A651] text-white px-8 py-4 rounded text-[15px] hover:bg-[#00703a] transition-all hover:scale-105">
              Devenir adhérent
            </button>
            <button className="bg-transparent text-[#003d1f] px-8 py-4 rounded text-[15px] border border-[#003d1f]/20 hover:border-[#003d1f] transition-colors">
              Découvrir nos services
            </button>
          </div>

          {/* Stats */}
          <div className="flex items-center justify-center gap-20 pt-12 border-t border-[#003d1f]/10 max-w-[900px] mx-auto">
            <div>
              <div className="text-[#00A651] text-5xl font-medium mb-2">8 000+</div>
              <div className="text-[#666666] text-sm uppercase tracking-[2px]">Adhérents</div>
            </div>
            <div className="w-px h-16 bg-[#003d1f]/10"></div>
            <div>
              <div className="text-[#00A651] text-5xl font-medium mb-2">5,9 Mds</div>
              <div className="text-[#666666] text-sm uppercase tracking-[2px]">Crédits FCFA</div>
            </div>
            <div className="w-px h-16 bg-[#003d1f]/10"></div>
            <div>
              <div className="text-[#00A651] text-5xl font-medium mb-2">15 ans</div>
              <div className="text-[#666666] text-sm uppercase tracking-[2px]">Expérience</div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            <span className="text-[#666666] text-xs uppercase tracking-[2px]">Explorer</span>
            <ChevronDown className="w-5 h-5 text-[#00A651] animate-bounce" />
          </div>
        </div>
      </section>

      {/* Flash Info Banner */}
      <div className="bg-[#F7941D] py-4">
        <div className="max-w-[1600px] mx-auto px-12 flex items-center justify-center gap-4">
          <span className="bg-white text-[#F7941D] px-4 py-1.5 rounded text-xs font-medium uppercase tracking-wide">Nouveau</span>
          <span className="text-white text-[15px]">Plateforme E-MA2E disponible — Gérez votre compte 24h/24 en ligne</span>
          <ChevronRight className="w-4 h-4 text-white" />
        </div>
      </div>

      {/* Solutions Section */}
      <section className="py-32">
        <div className="max-w-[1600px] mx-auto px-12">
          <div className="max-w-[800px] mb-20">
            <div className="text-[#F7941D] text-xs uppercase tracking-[2px] font-medium mb-4">Nos solutions financières</div>
            <h2 className="text-[#003d1f] text-[52px] leading-[1.2] tracking-[-0.5px] mb-6" style={{ fontWeight: 400 }}>
              Des produits adaptés à chaque étape de votre parcours
            </h2>
            <p className="text-[#666666] text-lg leading-relaxed">
              Depuis 2011, nous accompagnons les agents de l'eau et de l'électricité dans la réalisation de leurs projets avec des solutions sur mesure.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {/* Card 1 - Épargne */}
            <div className="group bg-white border border-[#003d1f]/10 rounded-lg p-10 hover:border-[#00A651] transition-all hover:shadow-[0_20px_60px_rgba(0,166,81,0.1)] cursor-pointer">
              <div className="w-14 h-14 bg-[#00A651]/5 rounded-full flex items-center justify-center mb-8 group-hover:bg-[#00A651]/10 transition-colors">
                <TrendingUp className="w-7 h-7 text-[#00A651]" strokeWidth={1.5} />
              </div>
              <h3 className="text-[#003d1f] text-2xl font-medium mb-4">Épargne rémunérée</h3>
              <p className="text-[#666666] text-[15px] leading-relaxed mb-8">
                Constituez votre épargne en toute sécurité avec des taux attractifs. Retraits flexibles et garantie BCEAO.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-3 py-1.5 bg-[#f5f5f0] text-[#003d1f] rounded text-xs">Express</span>
                <span className="px-3 py-1.5 bg-[#f5f5f0] text-[#003d1f] rounded text-xs">Ordinaire</span>
                <span className="px-3 py-1.5 bg-[#f5f5f0] text-[#003d1f] rounded text-xs">Logement</span>
              </div>
              <div className="flex items-center text-[#00A651] text-sm font-medium group-hover:gap-2 transition-all">
                En savoir plus <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </div>

            {/* Card 2 - Crédit */}
            <div className="group bg-[#003d1f] rounded-lg p-10 hover:shadow-[0_20px_60px_rgba(0,61,31,0.3)] transition-all cursor-pointer relative overflow-hidden">
              <div className="absolute top-6 right-6 bg-[#F7941D] text-white px-3 py-1.5 rounded text-[10px] font-medium uppercase tracking-wide">
                Populaire
              </div>
              <div className="w-14 h-14 bg-[#F7941D]/10 rounded-full flex items-center justify-center mb-8 group-hover:bg-[#F7941D]/20 transition-colors">
                <ArrowUpRight className="w-7 h-7 text-[#F7941D]" strokeWidth={1.5} />
              </div>
              <h3 className="text-white text-2xl font-medium mb-4">Crédit à taux réduit</h3>
              <p className="text-white/70 text-[15px] leading-relaxed mb-8">
                Financez vos projets avec nos solutions de crédit adaptées. Taux préférentiels réservés aux adhérents.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-3 py-1.5 bg-white/10 text-white/90 rounded text-xs">Ordinaire</span>
                <span className="px-3 py-1.5 bg-white/10 text-white/90 rounded text-xs">Express</span>
                <span className="px-3 py-1.5 bg-white/10 text-white/90 rounded text-xs">Immobilier</span>
              </div>
              <div className="flex items-center text-[#F7941D] text-sm font-medium group-hover:gap-2 transition-all">
                En savoir plus <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </div>

            {/* Card 3 - Immobilier */}
            <div className="group bg-white border border-[#003d1f]/10 rounded-lg p-10 hover:border-[#F7941D] transition-all hover:shadow-[0_20px_60px_rgba(247,148,29,0.1)] cursor-pointer">
              <div className="w-14 h-14 bg-[#F7941D]/5 rounded-full flex items-center justify-center mb-8 group-hover:bg-[#F7941D]/10 transition-colors">
                <Home className="w-7 h-7 text-[#F7941D]" strokeWidth={1.5} />
              </div>
              <h3 className="text-[#003d1f] text-2xl font-medium mb-4">Projet immobilier</h3>
              <p className="text-[#666666] text-[15px] leading-relaxed mb-8">
                Accédez à la propriété avec nos programmes immobiliers dédiés. Villas et duplex dans des résidences sécurisées.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-3 py-1.5 bg-[#f5f5f0] text-[#003d1f] rounded text-xs">Villas 3-5p</span>
                <span className="px-3 py-1.5 bg-[#f5f5f0] text-[#003d1f] rounded text-xs">Duplex 4-5p</span>
                <span className="px-3 py-1.5 bg-[#f5f5f0] text-[#003d1f] rounded text-xs">2ᵉ tranche</span>
              </div>
              <div className="flex items-center text-[#F7941D] text-sm font-medium group-hover:gap-2 transition-all">
                En savoir plus <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* E-MA2E Platform Section */}
      <section className="py-32 bg-[#f5f5f0]">
        <div className="max-w-[1600px] mx-auto px-12">
          <div className="grid grid-cols-2 gap-24 items-center">
            {/* Left Column */}
            <div>
              <div className="text-[#F7941D] text-xs uppercase tracking-[2px] font-medium mb-4">Plateforme E-MA2E</div>
              <h2 className="text-[#003d1f] text-[52px] leading-[1.2] tracking-[-0.5px] mb-6" style={{ fontWeight: 400 }}>
                Gérez votre compte 24h/24, où que vous soyez
              </h2>
              <p className="text-[#666666] text-lg leading-relaxed mb-10">
                Consultez vos soldes, effectuez vos demandes de crédit, téléchargez vos relevés et suivez vos opérations en temps réel depuis notre plateforme digitale sécurisée.
              </p>
              <div className="flex items-center gap-4">
                <button className="bg-[#00A651] text-white px-8 py-4 rounded text-[15px] hover:bg-[#00703a] transition-all">
                  Se connecter
                </button>
                <button className="bg-transparent text-[#003d1f] px-8 py-4 rounded text-[15px] border border-[#003d1f]/20 hover:border-[#003d1f] transition-colors">
                  Créer un compte
                </button>
              </div>
            </div>

            {/* Right Column - Feature Grid */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-8 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-[#00A651]/5 rounded-full flex items-center justify-center mb-6">
                  <FileText className="w-6 h-6 text-[#00A651]" strokeWidth={1.5} />
                </div>
                <h4 className="text-[#003d1f] text-lg font-medium mb-2">Relevés en ligne</h4>
                <p className="text-[#666666] text-sm leading-relaxed">Téléchargez tous vos documents à tout moment</p>
              </div>

              <div className="bg-white rounded-lg p-8 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-[#F7941D]/5 rounded-full flex items-center justify-center mb-6">
                  <Calendar className="w-6 h-6 text-[#F7941D]" strokeWidth={1.5} />
                </div>
                <h4 className="text-[#003d1f] text-lg font-medium mb-2">Mon espace</h4>
                <p className="text-[#666666] text-sm leading-relaxed">Tableau de bord personnalisé et intuitif</p>
              </div>

              <div className="bg-white rounded-lg p-8 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-[#00A651]/5 rounded-full flex items-center justify-center mb-6">
                  <CreditCard className="w-6 h-6 text-[#00A651]" strokeWidth={1.5} />
                </div>
                <h4 className="text-[#003d1f] text-lg font-medium mb-2">Dépôt express</h4>
                <p className="text-[#666666] text-sm leading-relaxed">Opérations instantanées et sécurisées</p>
              </div>

              <div className="bg-white rounded-lg p-8 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-[#F7941D]/5 rounded-full flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-[#F7941D]" strokeWidth={1.5} />
                </div>
                <h4 className="text-[#003d1f] text-lg font-medium mb-2">Demandes rapides</h4>
                <p className="text-[#666666] text-sm leading-relaxed">Crédits et épargne 100% en ligne</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32">
        <div className="max-w-[1600px] mx-auto px-12">
          <div className="bg-gradient-to-br from-[#003d1f] to-[#00703a] rounded-2xl p-20 text-center relative overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00A651] rounded-full blur-[100px] opacity-20"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#F7941D] rounded-full blur-[100px] opacity-20"></div>

            <div className="relative">
              <h2 className="text-white text-[48px] leading-[1.2] tracking-[-0.5px] mb-6 max-w-[800px] mx-auto" style={{ fontWeight: 400 }}>
                Prêt à rejoindre 8 000 adhérents qui nous font confiance ?
              </h2>
              <p className="text-white/80 text-lg mb-10 max-w-[600px] mx-auto">
                Bénéficiez dès aujourd'hui de nos solutions d'épargne et de crédit adaptées à vos besoins.
              </p>
              <button className="bg-[#F7941D] text-white px-10 py-4 rounded text-[15px] hover:bg-[#e08419] transition-all hover:scale-105">
                Devenir adhérent maintenant
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#003d1f] py-16">
        <div className="max-w-[1600px] mx-auto px-12">
          <div className="grid grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#00A651] rounded flex items-center justify-center">
                  <span className="text-white font-medium text-lg">M</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-medium text-lg">MA2E</span>
                </div>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                Mutuelle des Agents de l'Eau et de l'Électricité. Agréée BCEAO depuis 2011.
              </p>
            </div>

            <div>
              <h4 className="text-white font-medium mb-4">Solutions</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Épargne</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Crédit</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Immobilier</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-medium mb-4">À propos</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Notre histoire</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Gouvernance</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Actualités</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-medium mb-4">Contact</h4>
              <ul className="space-y-3">
                <li className="text-white/60 text-sm">Abidjan, Côte d'Ivoire</li>
                <li className="text-white/60 text-sm">contact@ma2e.ci</li>
                <li className="text-white/60 text-sm">+225 XX XX XX XX XX</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex items-center justify-between">
            <p className="text-white/40 text-sm">© 2026 MA2E. Tous droits réservés.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-white/40 hover:text-white transition-colors text-sm">Mentions légales</a>
              <a href="#" className="text-white/40 hover:text-white transition-colors text-sm">Politique de confidentialité</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
