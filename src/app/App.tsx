import { useState } from 'react';
import { ChevronRight, TrendingUp, ArrowUpRight, Home, FileText, Calendar, CreditCard, Zap, ChevronDown, Menu, X, Phone, Mail, MapPin, Clock, Quote, ShieldCheck, Wallet, Building2, PiggyBank, Target, Eye, Users, Landmark, Newspaper, HelpCircle, Download, ExternalLink, Scale } from 'lucide-react';
import { Reveal } from './hooks/Reveal';
import { AnimatedNumber } from './hooks/AnimatedNumber';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Top Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-[#00A651]/10 z-50">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 h-20 lg:h-24 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <img src="https://www.ma2e.ci/_assets/_img/logo.png" alt="MA2E" className="h-10 lg:h-12 w-auto" />
            <div className="hidden md:flex flex-col">
              <span className="text-[#003d1f] font-medium text-sm leading-tight">MA2E</span>
              <span className="text-[#666666] text-[9px] uppercase tracking-[1.5px] leading-tight">Direction institutionnelle bancaire</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-7 xl:gap-9">
            <a href="#presentation" className="text-[#003d1f] text-[14px] hover:text-[#00A651] transition-colors">Présentation</a>
            <a href="#produits" className="text-[#003d1f] text-[14px] hover:text-[#00A651] transition-colors">Produits</a>
            <a href="#actualites" className="text-[#003d1f] text-[14px] hover:text-[#00A651] transition-colors">Actualités</a>
            <a href="#faq" className="text-[#003d1f] text-[14px] hover:text-[#00A651] transition-colors">FAQ</a>
            <a href="#telechargements" className="text-[#003d1f] text-[14px] hover:text-[#00A651] transition-colors">Téléchargements</a>
            <a href="#contact" className="text-[#003d1f] text-[14px] hover:text-[#00A651] transition-colors">Contact</a>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="px-3 py-1.5 border border-[#00A651]/20 rounded text-[#003d1f] text-sm hover:border-[#00A651] transition-colors cursor-pointer">FR</div>
            <button className="bg-[#00A651] text-white px-7 py-2.5 rounded text-[15px] hover:bg-[#00703a] transition-colors">
              Espace adhérent
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden p-2 text-[#003d1f] hover:text-[#00A651] transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-[#003d1f]/10 px-4 py-6 flex flex-col gap-1 max-h-[calc(100vh-5rem)] overflow-y-auto">
            <a href="#presentation" onClick={() => setMobileMenuOpen(false)} className="text-[#003d1f] text-[15px] py-3 border-b border-[#003d1f]/5 hover:text-[#00A651] transition-colors">Présentation</a>
            <a href="#produits" onClick={() => setMobileMenuOpen(false)} className="text-[#003d1f] text-[15px] py-3 border-b border-[#003d1f]/5 hover:text-[#00A651] transition-colors">Produits</a>
            <a href="#actualites" onClick={() => setMobileMenuOpen(false)} className="text-[#003d1f] text-[15px] py-3 border-b border-[#003d1f]/5 hover:text-[#00A651] transition-colors">Actualités & événements</a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="text-[#003d1f] text-[15px] py-3 border-b border-[#003d1f]/5 hover:text-[#00A651] transition-colors">FAQ</a>
            <a href="#telechargements" onClick={() => setMobileMenuOpen(false)} className="text-[#003d1f] text-[15px] py-3 border-b border-[#003d1f]/5 hover:text-[#00A651] transition-colors">Téléchargements</a>
            <a href="#liens-utiles" onClick={() => setMobileMenuOpen(false)} className="text-[#003d1f] text-[15px] py-3 border-b border-[#003d1f]/5 hover:text-[#00A651] transition-colors">Liens utiles</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-[#003d1f] text-[15px] py-3 hover:text-[#00A651] transition-colors">Contact</a>
            <div className="flex items-center gap-3 pt-4">
              <div className="px-3 py-1.5 border border-[#00A651]/20 rounded text-[#003d1f] text-sm cursor-pointer">FR</div>
              <button className="flex-1 bg-[#00A651] text-white px-6 py-2.5 rounded text-[15px] hover:bg-[#00703a] transition-colors">
                Espace adhérent
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-20 lg:pt-24 min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background image */}
        <img
          src="/bg11.jpeg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Overlays pour lisibilité */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/92 via-white/85 to-white/95"></div>
        <div className="absolute inset-0 opacity-[0.04]">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#00A651] rounded-full blur-[150px]"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#F7941D] rounded-full blur-[150px]"></div>
        </div>

        <div className="relative max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-24 lg:py-32 text-center w-full">
          {/* <div className="inline-flex items-center gap-2 bg-[#f5f5f0] px-4 sm:px-5 py-2 rounded-full mb-6 sm:mb-8">
            <div className="w-2 h-2 bg-[#00A651] rounded-full animate-pulse"></div>
            <span className="text-[#003d1f] text-xs sm:text-sm">15 ans d'excellence au service de 8 000+ adhérents</span>
          </div> */}

          <Reveal immediate variant="up" delay={1}>
            <h1 className="text-[#003d1f] text-[38px] sm:text-[52px] lg:text-[72px] font-normal leading-[1.1] tracking-[-1.5px] max-w-[1100px] mx-auto mb-6 sm:mb-8">
              L'épargne qui fait grandir vos{' '}
              <span className="relative inline-block">
                <span className="text-[#00A651]">projets de vie</span>
                <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 6C50 2 150 2 198 6" stroke="#F7941D" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </span>
            </h1>
          </Reveal>

          <Reveal immediate variant="up" delay={2}>
            <p className="text-[#666666] text-base sm:text-lg lg:text-xl max-w-[720px] mx-auto mb-8 sm:mb-12 leading-relaxed">
              Institution mutualiste d'Épargne et de Crédit sans but lucratif, exclusivement réservée au personnel de <strong className="text-[#003d1f]">SODECI, CIE, GS2E et CIPREL</strong> en activité.
            </p>
          </Reveal>

          <Reveal immediate variant="up" delay={3}>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-20 max-w-sm sm:max-w-none mx-auto">
              <button className="bg-[#00A651] text-white px-8 py-4 rounded text-[15px] hover:bg-[#00703a] transition-all hover:scale-105">
                Devenir adhérent
              </button>
              <button className="bg-transparent text-[#003d1f] px-8 py-4 rounded text-[15px] border border-[#003d1f]/20 hover:border-[#003d1f] transition-colors">
                Découvrir nos services
              </button>
            </div>
          </Reveal>

          {/* Stats */}
          <Reveal immediate variant="up" delay={4}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-6 lg:gap-12 pt-10 sm:pt-12 border-t border-[#003d1f]/10 max-w-[1000px] mx-auto">
              <div className="text-center">
                <div className="text-[#00A651] text-3xl sm:text-4xl lg:text-5xl font-medium mb-2 tabular-nums">
                  <AnimatedNumber end={7335} />
                </div>
                <div className="text-[#666666] text-[11px] sm:text-xs uppercase tracking-[2px]">Adhérents</div>
              </div>
              <div className="text-center">
                <div className="text-[#00A651] text-3xl sm:text-4xl lg:text-5xl font-medium mb-2 tabular-nums">
                  <AnimatedNumber end={2.4} decimals={1} suffix=" Mds" />
                </div>
                <div className="text-[#666666] text-[11px] sm:text-xs uppercase tracking-[2px]">Crédits FCFA</div>
              </div>
              <div className="text-center">
                <div className="text-[#00A651] text-3xl sm:text-4xl lg:text-5xl font-medium mb-2 tabular-nums">
                  <AnimatedNumber end={9} />
                </div>
                <div className="text-[#666666] text-[11px] sm:text-xs uppercase tracking-[2px]">Produits</div>
              </div>
              <div className="text-center">
                <div className="text-[#00A651] text-3xl sm:text-4xl lg:text-5xl font-medium mb-2 tabular-nums">
                  <AnimatedNumber end={14} suffix=" ans" />
                </div>
                <div className="text-[#666666] text-[11px] sm:text-xs uppercase tracking-[2px]">D'activité</div>
              </div>
            </div>
          </Reveal>

          {/* Scroll indicator */}
          <div className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2">
            <span className="text-[#666666] text-xs uppercase tracking-[2px]">Explorer</span>
            <ChevronDown className="w-5 h-5 text-[#00A651] animate-bounce" />
          </div>
        </div>
      </section>

      {/* Flash Info Banner */}
      <div className="bg-[#F7941D] py-3 sm:py-4">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-center gap-2 sm:gap-4">
          <span className="bg-white text-[#F7941D] px-3 sm:px-4 py-1 sm:py-1.5 rounded text-[10px] sm:text-xs font-medium uppercase tracking-wide whitespace-nowrap">Flash Info</span>
          <span className="text-white text-sm sm:text-[15px] text-center leading-snug">Plateforme E-MA2E ouverte depuis le 01/12/2022 — Service à 500 F/mois</span>
          <ChevronRight className="w-4 h-4 text-white hidden sm:block flex-shrink-0" />
        </div>
      </div>

      {/* Présentation : Historique + Missions + Vision */}
      <section id="presentation" className="py-16 sm:py-24 lg:py-32 bg-white scroll-mt-24">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16 lg:mb-24">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] order-2 lg:order-1">
              <img
                src="https://www.ma2e.ci/_assets/_img/img/investment.jpg"
                alt="Présentation MA2E"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#003d1f]/60 via-[#003d1f]/10 to-transparent"></div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="text-[#F7941D] text-xs uppercase tracking-[2px] font-medium mb-4">Découvrez votre Mutuelle</div>
              <h2 className="text-[#003d1f] text-[28px] sm:text-[40px] lg:text-[52px] font-normal leading-[1.2] tracking-[-0.5px] mb-6">
                Une institution au service de ses adhérents depuis 2006
              </h2>
              <p className="text-[#666] text-base sm:text-lg leading-relaxed mb-6">
                La Mutuelle des Agents de l'Eau et de l'Électricité (MA2E) est une institution de micro-finance initiée par le Président Marcel Zadi Kessy afin d'offrir à ses adhérents un accès équitable à des services financiers de qualité, de façon durable et avec professionnalisme.
              </p>
              <p className="text-[#666] text-base sm:text-lg leading-relaxed">
                L'adhésion, libre et volontaire, est exclusivement réservée au personnel de <strong className="text-[#003d1f]">SODECI, CIE, GS2E et CIPREL</strong> en activité.
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div className="mb-16 lg:mb-24">
            <h3 className="text-[#003d1f] text-2xl sm:text-3xl font-normal mb-10 text-center">Notre histoire</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="relative bg-[#f5f5f0] rounded-lg p-6 sm:p-8 border-t-4 border-[#00A651]">
                <div className="text-[#F7941D] text-sm font-medium uppercase tracking-[2px] mb-2">Septembre 2006</div>
                <h4 className="text-[#003d1f] text-lg font-medium mb-2">Création de la MA2E</h4>
                <p className="text-[#666] text-sm">Initiée par le Président Marcel Zadi Kessy.</p>
              </div>
              <div className="relative bg-[#f5f5f0] rounded-lg p-6 sm:p-8 border-t-4 border-[#00A651]">
                <div className="text-[#F7941D] text-sm font-medium uppercase tracking-[2px] mb-2">Août 2009</div>
                <h4 className="text-[#003d1f] text-lg font-medium mb-2">Agrément d'exercice</h4>
                <p className="text-[#666] text-sm">Obtention de l'agrément officiel le 26 août 2009.</p>
              </div>
              <div className="relative bg-[#f5f5f0] rounded-lg p-6 sm:p-8 border-t-4 border-[#00A651]">
                <div className="text-[#F7941D] text-sm font-medium uppercase tracking-[2px] mb-2">Janvier 2010</div>
                <h4 className="text-[#003d1f] text-lg font-medium mb-2">Démarrage officiel</h4>
                <p className="text-[#666] text-sm">Lancement officiel des activités de la mutuelle.</p>
              </div>
            </div>
          </div>

          {/* Missions + Vision */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="border border-[#003d1f]/10 rounded-lg p-8 hover:border-[#00A651] hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-[#00A651]/10 rounded-full flex items-center justify-center mb-5">
                <Target className="w-6 h-6 text-[#00A651]" strokeWidth={1.5} />
              </div>
              <h3 className="text-[#003d1f] text-xl font-medium mb-3">Notre mission</h3>
              <p className="text-[#666] text-sm leading-relaxed">
                Offrir un accès équitable à des services financiers de qualité pour améliorer les conditions sociales des agents de l'eau et de l'électricité.
              </p>
            </div>
            <div className="border border-[#003d1f]/10 rounded-lg p-8 hover:border-[#00A651] hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-[#00A651]/10 rounded-full flex items-center justify-center mb-5">
                <Eye className="w-6 h-6 text-[#00A651]" strokeWidth={1.5} />
              </div>
              <h3 className="text-[#003d1f] text-xl font-medium mb-3">Notre vision</h3>
              <p className="text-[#666] text-sm leading-relaxed">
                Être un modèle inspirant de développement de projets personnels et collectifs, solidaire, durable et professionnel.
              </p>
            </div>
            <div className="border border-[#003d1f]/10 rounded-lg p-8 hover:border-[#00A651] hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-[#00A651]/10 rounded-full flex items-center justify-center mb-5">
                <ShieldCheck className="w-6 h-6 text-[#00A651]" strokeWidth={1.5} />
              </div>
              <h3 className="text-[#003d1f] text-xl font-medium mb-3">Nos valeurs</h3>
              <p className="text-[#666] text-sm leading-relaxed">
                Solidarité, transparence, professionnalisme et écoute. Une mutuelle sans but lucratif au service de ses adhérents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Organes dirigeants / Équipe */}
      <section className="py-16 sm:py-24 lg:py-32 bg-[#f5f5f0]">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-[800px] mb-12 sm:mb-16">
            <div className="text-[#F7941D] text-xs uppercase tracking-[2px] font-medium mb-4">Gouvernance</div>
            <h2 className="text-[#003d1f] text-[28px] sm:text-[40px] lg:text-[52px] font-normal leading-[1.2] tracking-[-0.5px] mb-4 sm:mb-6">
              Nos organes dirigeants
            </h2>
            <p className="text-[#666] text-base sm:text-lg leading-relaxed">
              Une gouvernance mutualiste structurée autour de quatre organes garantissant transparence, contrôle et proximité avec les adhérents.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            <div className="bg-white rounded-lg p-6 sm:p-8">
              <div className="w-11 h-11 bg-[#00A651]/10 rounded-full flex items-center justify-center mb-5">
                <Users className="w-5 h-5 text-[#00A651]" strokeWidth={1.5} />
              </div>
              <h4 className="text-[#003d1f] font-medium mb-2">Assemblée Générale</h4>
              <p className="text-[#666] text-sm leading-relaxed">Organe suprême réunissant l'ensemble des adhérents.</p>
            </div>
            <div className="bg-white rounded-lg p-6 sm:p-8">
              <div className="w-11 h-11 bg-[#00A651]/10 rounded-full flex items-center justify-center mb-5">
                <Landmark className="w-5 h-5 text-[#00A651]" strokeWidth={1.5} />
              </div>
              <h4 className="text-[#003d1f] font-medium mb-2">Conseil d'Administration</h4>
              <p className="text-[#666] text-sm leading-relaxed">Présidé par <strong>Ahmadou BAKAYOKO</strong>, définit les orientations stratégiques.</p>
            </div>
            <div className="bg-white rounded-lg p-6 sm:p-8">
              <div className="w-11 h-11 bg-[#00A651]/10 rounded-full flex items-center justify-center mb-5">
                <ShieldCheck className="w-5 h-5 text-[#00A651]" strokeWidth={1.5} />
              </div>
              <h4 className="text-[#003d1f] font-medium mb-2">Comité de Surveillance</h4>
              <p className="text-[#666] text-sm leading-relaxed">Veille au respect des règles et au contrôle interne.</p>
            </div>
            <div className="bg-white rounded-lg p-6 sm:p-8">
              <div className="w-11 h-11 bg-[#00A651]/10 rounded-full flex items-center justify-center mb-5">
                <Wallet className="w-5 h-5 text-[#00A651]" strokeWidth={1.5} />
              </div>
              <h4 className="text-[#003d1f] font-medium mb-2">Comité de Crédit</h4>
              <p className="text-[#666] text-sm leading-relaxed">Étudie et décide de l'octroi des crédits aux adhérents.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="produits" className="py-16 sm:py-24 lg:py-32 scroll-mt-24">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-[800px] mb-12 sm:mb-20">
            <div className="text-[#F7941D] text-xs uppercase tracking-[2px] font-medium mb-4">Nos solutions financières</div>
            <h2 className="text-[#003d1f] text-[28px] sm:text-[40px] lg:text-[52px] font-normal leading-[1.2] tracking-[-0.5px] mb-4 sm:mb-6">
              Des produits adaptés à chaque étape de votre parcours
            </h2>
            <p className="text-[#666666] text-base sm:text-lg leading-relaxed">
              Institution mutualiste régie par l'ordonnance N°2011-367 du 3 novembre 2011 portant réglementation des Systèmes Financiers Décentralisés. Activités officielles depuis janvier 2010.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Card 1 - Épargne */}
            <Reveal variant="up" delay={1}>
            <div id="epargne" className="group h-full bg-white border border-[#003d1f]/10 rounded-lg p-6 sm:p-10 hover:border-[#00A651] transition-all hover:shadow-[0_20px_60px_rgba(0,166,81,0.1)] cursor-pointer scroll-mt-24">
              <div className="w-12 sm:w-14 h-12 sm:h-14 bg-[#00A651]/5 rounded-full flex items-center justify-center mb-6 sm:mb-8 group-hover:bg-[#00A651]/10 transition-colors">
                <TrendingUp className="w-6 sm:w-7 h-6 sm:h-7 text-[#00A651]" strokeWidth={1.5} />
              </div>
              <h3 className="text-[#003d1f] text-xl sm:text-2xl font-medium mb-3 sm:mb-4">Épargne rémunérée</h3>
              <p className="text-[#666666] text-sm sm:text-[15px] leading-relaxed mb-6 sm:mb-8">
                Différents types d'épargnes pour le bien-être financier de nos adhérents.
              </p>
              <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
                <span className="px-3 py-1.5 bg-[#f5f5f0] text-[#003d1f] rounded text-xs">Express</span>
                <span className="px-3 py-1.5 bg-[#f5f5f0] text-[#003d1f] rounded text-xs">Ordinaire</span>
                <span className="px-3 py-1.5 bg-[#f5f5f0] text-[#003d1f] rounded text-xs">Logement</span>
                <span className="px-3 py-1.5 bg-[#f5f5f0] text-[#003d1f] rounded text-xs">Dépôt à terme</span>
              </div>
              <div className="flex items-center text-[#00A651] text-sm font-medium group-hover:gap-2 transition-all">
                En savoir plus <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </div>
            </Reveal>

            {/* Card 2 - Crédit */}
            <Reveal variant="up" delay={2}>
            <div id="credit" className="group h-full bg-[#003d1f] rounded-lg p-6 sm:p-10 hover:shadow-[0_20px_60px_rgba(0,61,31,0.3)] transition-all cursor-pointer relative overflow-hidden scroll-mt-24">
              <div className="absolute top-4 sm:top-6 right-4 sm:right-6 bg-[#F7941D] text-white px-3 py-1.5 rounded text-[10px] font-medium uppercase tracking-wide">
                Populaire
              </div>
              <div className="w-12 sm:w-14 h-12 sm:h-14 bg-[#F7941D]/10 rounded-full flex items-center justify-center mb-6 sm:mb-8 group-hover:bg-[#F7941D]/20 transition-colors">
                <ArrowUpRight className="w-6 sm:w-7 h-6 sm:h-7 text-[#F7941D]" strokeWidth={1.5} />
              </div>
              <h3 className="text-white text-xl sm:text-2xl font-medium mb-3 sm:mb-4">Crédit à taux réduit</h3>
              <p className="text-white/70 text-sm sm:text-[15px] leading-relaxed mb-6 sm:mb-8">
                Financement de vos besoins : construction, acquisition de biens, investissements — à court, moyen ou long terme.
              </p>
              <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
                <span className="px-3 py-1.5 bg-white/10 text-white/90 rounded text-xs">Ordinaire</span>
                <span className="px-3 py-1.5 bg-white/10 text-white/90 rounded text-xs">Express</span>
                <span className="px-3 py-1.5 bg-white/10 text-white/90 rounded text-xs">Immobilier</span>
                <span className="px-3 py-1.5 bg-white/10 text-white/90 rounded text-xs">Immo différé</span>
              </div>
              <div className="flex items-center text-[#F7941D] text-sm font-medium group-hover:gap-2 transition-all">
                En savoir plus <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </div>
            </Reveal>

            {/* Card 3 - Immobilier */}
            <Reveal variant="up" delay={3} className="md:col-span-2 lg:col-span-1">
            <div id="immobilier" className="group h-full bg-white border border-[#003d1f]/10 rounded-lg p-6 sm:p-10 hover:border-[#F7941D] transition-all hover:shadow-[0_20px_60px_rgba(247,148,29,0.1)] cursor-pointer scroll-mt-24">
              <div className="w-12 sm:w-14 h-12 sm:h-14 bg-[#F7941D]/5 rounded-full flex items-center justify-center mb-6 sm:mb-8 group-hover:bg-[#F7941D]/10 transition-colors">
                <Home className="w-6 sm:w-7 h-6 sm:h-7 text-[#F7941D]" strokeWidth={1.5} />
              </div>
              <h3 className="text-[#003d1f] text-xl sm:text-2xl font-medium mb-3 sm:mb-4">Projet immobilier</h3>
              <p className="text-[#666666] text-sm sm:text-[15px] leading-relaxed mb-6 sm:mb-8">
                Des opportunités pour l'achat d'une maison. Duplex 4-5 pièces et villas 3-5 pièces sur le site d'AKANDJÉ (Bingerville).
              </p>
              <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
                <span className="px-3 py-1.5 bg-[#f5f5f0] text-[#003d1f] rounded text-xs">Villas 3-5p</span>
                <span className="px-3 py-1.5 bg-[#f5f5f0] text-[#003d1f] rounded text-xs">Duplex 4-5p</span>
                <span className="px-3 py-1.5 bg-[#f5f5f0] text-[#003d1f] rounded text-xs">2ᵉ tranche</span>
              </div>
              <div className="flex items-center text-[#F7941D] text-sm font-medium group-hover:gap-2 transition-all">
                En savoir plus <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* E-MA2E Platform Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-[#f5f5f0]">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            {/* Left Column */}
            <div>
              <div className="text-[#F7941D] text-xs uppercase tracking-[2px] font-medium mb-4">Plateforme E-MA2E</div>
              <h2 className="text-[#003d1f] text-[28px] sm:text-[40px] lg:text-[52px] font-normal leading-[1.2] tracking-[-0.5px] mb-4 sm:mb-6">
                Gérez votre compte 24h/24, où que vous soyez
              </h2>
              <p className="text-[#666666] text-base sm:text-lg leading-relaxed mb-8 sm:mb-10">
                Consultez vos soldes, effectuez vos demandes de crédit, téléchargez vos relevés et suivez vos opérations en temps réel depuis notre plateforme digitale sécurisée.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button className="bg-[#00A651] text-white px-8 py-4 rounded text-[15px] hover:bg-[#00703a] transition-all">
                  Se connecter
                </button>
                <button className="bg-transparent text-[#003d1f] px-8 py-4 rounded text-[15px] border border-[#003d1f]/20 hover:border-[#003d1f] transition-colors">
                  Créer un compte
                </button>
              </div>
            </div>

            {/* Right Column - Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-white rounded-lg p-6 sm:p-8 hover:shadow-lg transition-shadow">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-[#00A651]/5 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                  <FileText className="w-5 sm:w-6 h-5 sm:h-6 text-[#00A651]" strokeWidth={1.5} />
                </div>
                <h4 className="text-[#003d1f] text-base sm:text-lg font-medium mb-2">Relevés en ligne</h4>
                <p className="text-[#666666] text-sm leading-relaxed">Téléchargez tous vos documents à tout moment</p>
              </div>

              <div className="bg-white rounded-lg p-6 sm:p-8 hover:shadow-lg transition-shadow">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-[#F7941D]/5 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                  <Calendar className="w-5 sm:w-6 h-5 sm:h-6 text-[#F7941D]" strokeWidth={1.5} />
                </div>
                <h4 className="text-[#003d1f] text-base sm:text-lg font-medium mb-2">Mon espace</h4>
                <p className="text-[#666666] text-sm leading-relaxed">Tableau de bord personnalisé et intuitif</p>
              </div>

              <div className="bg-white rounded-lg p-6 sm:p-8 hover:shadow-lg transition-shadow">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-[#00A651]/5 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                  <CreditCard className="w-5 sm:w-6 h-5 sm:h-6 text-[#00A651]" strokeWidth={1.5} />
                </div>
                <h4 className="text-[#003d1f] text-base sm:text-lg font-medium mb-2">Dépôt express</h4>
                <p className="text-[#666666] text-sm leading-relaxed">Opérations instantanées et sécurisées</p>
              </div>

              <div className="bg-white rounded-lg p-6 sm:p-8 hover:shadow-lg transition-shadow">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-[#F7941D]/5 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                  <Zap className="w-5 sm:w-6 h-5 sm:h-6 text-[#F7941D]" strokeWidth={1.5} />
                </div>
                <h4 className="text-[#003d1f] text-base sm:text-lg font-medium mb-2">Demandes rapides</h4>
                <p className="text-[#666666] text-sm leading-relaxed">Crédits et épargne 100% en ligne</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Détail des produits — Épargne */}
      <section className="py-16 sm:py-24 lg:py-32 bg-white scroll-mt-24">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-[800px] mb-12 sm:mb-16">
            <div className="text-[#F7941D] text-xs uppercase tracking-[2px] font-medium mb-4">Gamme complète d'épargne</div>
            <h2 className="text-[#003d1f] text-[28px] sm:text-[40px] lg:text-[52px] font-normal leading-[1.2] tracking-[-0.5px] mb-4 sm:mb-6">
              Cinq formules d'épargne pour chaque projet
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="border border-[#003d1f]/10 rounded-lg p-6 sm:p-8 hover:border-[#00A651] hover:shadow-lg transition-all">
              <PiggyBank className="w-8 h-8 text-[#00A651] mb-4" strokeWidth={1.5} />
              <h3 className="text-[#003d1f] text-lg font-medium mb-2">Épargne express</h3>
              <p className="text-[#666666] text-sm leading-relaxed">Compte ouvert à tout moment ou à la demande d'un crédit, en garantie des crédits express.</p>
            </div>
            <div className="border border-[#003d1f]/10 rounded-lg p-6 sm:p-8 hover:border-[#00A651] hover:shadow-lg transition-all">
              <PiggyBank className="w-8 h-8 text-[#00A651] mb-4" strokeWidth={1.5} />
              <h3 className="text-[#003d1f] text-lg font-medium mb-2">Épargne ordinaire</h3>
              <p className="text-[#666666] text-sm leading-relaxed">Compte d'épargne libre à tout moment pour la constitution d'une épargne pour l'adhérent.</p>
            </div>
            <div className="border border-[#003d1f]/10 rounded-lg p-6 sm:p-8 hover:border-[#00A651] hover:shadow-lg transition-all">
              <Home className="w-8 h-8 text-[#00A651] mb-4" strokeWidth={1.5} />
              <h3 className="text-[#003d1f] text-lg font-medium mb-2">Épargne logement</h3>
              <p className="text-[#666666] text-sm leading-relaxed">Constitution de l'apport personnel pour l'acquisition d'un logement du projet immobilier MA2E.</p>
            </div>
            <div className="border border-[#003d1f]/10 rounded-lg p-6 sm:p-8 hover:border-[#00A651] hover:shadow-lg transition-all">
              <Wallet className="w-8 h-8 text-[#00A651] mb-4" strokeWidth={1.5} />
              <h3 className="text-[#003d1f] text-lg font-medium mb-2">Dépôt à terme simple</h3>
              <p className="text-[#666666] text-sm leading-relaxed">Capital et intérêts disponibles à l'échéance, selon des durées fixées à la souscription.</p>
            </div>
            <div className="border border-[#003d1f]/10 rounded-lg p-6 sm:p-8 hover:border-[#00A651] hover:shadow-lg transition-all">
              <TrendingUp className="w-8 h-8 text-[#00A651] mb-4" strokeWidth={1.5} />
              <h3 className="text-[#003d1f] text-lg font-medium mb-2">DAT à versements progressifs</h3>
              <p className="text-[#666666] text-sm leading-relaxed">Dépôt à terme à versements progressifs selon des conditions fixées à la souscription.</p>
            </div>
            <div className="border border-[#003d1f]/10 rounded-lg p-6 sm:p-8 hover:border-[#00A651] hover:shadow-lg transition-all">
              <ShieldCheck className="w-8 h-8 text-[#00A651] mb-4" strokeWidth={1.5} />
              <h3 className="text-[#003d1f] text-lg font-medium mb-2">Dépôt de garantie</h3>
              <p className="text-[#666666] text-sm leading-relaxed">Dépôt constitué par l'adhérent en garantie d'un prêt, rendu disponible à l'échéance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Détail des produits — Crédit */}
      <section className="py-16 sm:py-24 lg:py-32 bg-[#003d1f] text-white">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-[800px] mb-12 sm:mb-16">
            <div className="text-[#F7941D] text-xs uppercase tracking-[2px] font-medium mb-4">Formules de crédit</div>
            <h2 className="text-white text-[28px] sm:text-[40px] lg:text-[52px] font-normal leading-[1.2] tracking-[-0.5px] mb-4 sm:mb-6">
              Quatre crédits adaptés à chaque besoin
            </h2>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed">
              Exemple — Crédit ordinaire : de 100 000 à 10 000 000 FCFA · Taux 6,00% à 7,00% · Durée jusqu'à 60 mois · Frais de dossier 0,5%.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 sm:p-8 hover:bg-white/10 transition-all">
              <ArrowUpRight className="w-8 h-8 text-[#F7941D] mb-4" strokeWidth={1.5} />
              <h3 className="text-white text-lg font-medium mb-2">Crédit ordinaire</h3>
              <p className="text-white/70 text-sm leading-relaxed">Financement des besoins de construction, acquisition de biens immobiliers et investissements à court, moyen ou long terme.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 sm:p-8 hover:bg-white/10 transition-all">
              <Zap className="w-8 h-8 text-[#F7941D] mb-4" strokeWidth={1.5} />
              <h3 className="text-white text-lg font-medium mb-2">Crédit express</h3>
              <p className="text-white/70 text-sm leading-relaxed">Crédit rapide à court terme pour répondre à un besoin ponctuel, garanti par l'épargne express.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 sm:p-8 hover:bg-white/10 transition-all">
              <Building2 className="w-8 h-8 text-[#F7941D] mb-4" strokeWidth={1.5} />
              <h3 className="text-white text-lg font-medium mb-2">Crédit immobilier</h3>
              <p className="text-white/70 text-sm leading-relaxed">Financement de l'achat d'un logement du programme immobilier MA2E ou d'une acquisition immobilière.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 sm:p-8 hover:bg-white/10 transition-all">
              <Calendar className="w-8 h-8 text-[#F7941D] mb-4" strokeWidth={1.5} />
              <h3 className="text-white text-lg font-medium mb-2">Crédit immobilier différé</h3>
              <p className="text-white/70 text-sm leading-relaxed">Crédit immobilier avec différé de remboursement, pour accompagner les projets longs en construction.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mot du PCA */}
      <section className="py-16 sm:py-24 lg:py-32 bg-[#f5f5f0]">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-10">
            <div className="text-[#F7941D] text-xs uppercase tracking-[2px] font-medium mb-4">Mot du Président</div>
            <h2 className="text-[#003d1f] text-[28px] sm:text-[40px] lg:text-[48px] font-normal leading-[1.2] tracking-[-0.5px]">
              Un modèle inspirant de développement
            </h2>
          </div>
          <div className="relative bg-white rounded-2xl p-8 sm:p-12 lg:p-16 shadow-sm">
            <Quote className="absolute top-6 left-6 w-10 h-10 text-[#00A651]/15" strokeWidth={1.5} />
            <div className="space-y-5 text-[#333] text-base sm:text-lg leading-relaxed pl-4 sm:pl-8">
              <p>
                La Mutuelle des Agents de l'Eau et de l'Électricité (MA2E), créée le 26 août 2009, a connu, le 08 octobre 2019, un renouvellement de ses instances dirigeantes.
              </p>
              <p>
                Ce souffle nouveau s'avérait nécessaire, compte tenu notamment des difficultés rencontrées dans l'exécution de certaines de ses missions. La redynamisation de cet important outil de notre politique sociale a été retenue comme une priorité.
              </p>
              <p>
                Après plus de dix années d'existence, notre mutuelle doit continuer d'être un modèle inspirant de développement de projets personnels et collectifs au sein de nos entreprises.
              </p>
              <p className="text-[#003d1f] font-medium">
                L'œuvre de consolidation des acquis de notre mutuelle est en marche. Je vous invite donc à nous faire confiance.
              </p>
            </div>
            <div className="flex items-center gap-4 mt-10 pl-4 sm:pl-8">
              <img
                src="/pca.jpeg"
                alt="Ahmadou BAKAYOKO, Président du Conseil d'Administration"
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover ring-2 ring-[#00A651]/30"
                loading="lazy"
              />
              <div>
                <div className="text-[#003d1f] font-medium">Ahmadou BAKAYOKO</div>
                <div className="text-[#666] text-sm">Président du Conseil d'Administration de MA2E</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 lg:py-32">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="bg-gradient-to-br from-[#003d1f] to-[#00703a] rounded-2xl p-8 sm:p-14 lg:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00A651] rounded-full blur-[100px] opacity-20"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#F7941D] rounded-full blur-[100px] opacity-20"></div>

            <div className="relative">
              <h2 className="text-white text-[26px] sm:text-[36px] lg:text-[48px] font-normal leading-[1.2] tracking-[-0.5px] mb-4 sm:mb-6 max-w-[800px] mx-auto">
                Rejoignez les 7 335 adhérents qui nous font confiance
              </h2>
              <p className="text-white/80 text-base sm:text-lg mb-8 sm:mb-10 max-w-[600px] mx-auto">
                Bénéficiez dès aujourd'hui de nos solutions d'épargne et de crédit adaptées aux agents de SODECI, CIE, GS2E et CIPREL.
              </p>
              <button className="bg-[#F7941D] text-white px-8 sm:px-10 py-3.5 sm:py-4 rounded text-[15px] hover:bg-[#e08419] transition-all hover:scale-105">
                Devenir adhérent maintenant
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Actualités & événements */}
      <section id="actualites" className="py-16 sm:py-24 lg:py-32 bg-white scroll-mt-24">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 sm:mb-16">
            <div className="max-w-[700px]">
              <div className="text-[#F7941D] text-xs uppercase tracking-[2px] font-medium mb-4">Actualités & événements</div>
              <h2 className="text-[#003d1f] text-[28px] sm:text-[40px] lg:text-[52px] font-normal leading-[1.2] tracking-[-0.5px]">
                Les dernières informations de MA2E
              </h2>
            </div>
            <a href="https://www.ma2e.ci/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#00A651] text-sm font-medium hover:gap-3 transition-all self-start md:self-end">
              Voir toutes les actualités <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <article className="group border border-[#003d1f]/10 rounded-lg overflow-hidden hover:shadow-lg transition-all">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src="https://www.ma2e.ci/_assets/_img/imageimm2.jpg" alt="Projet immobilier 2ème tranche" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                <span className="absolute top-4 left-4 bg-[#F7941D] text-white px-3 py-1 rounded text-[10px] font-medium uppercase tracking-wide">Immobilier</span>
              </div>
              <div className="p-6">
                <div className="text-[#666] text-xs uppercase tracking-[2px] mb-2">Projet immobilier</div>
                <h3 className="text-[#003d1f] text-lg font-medium mb-2 group-hover:text-[#00A651] transition-colors">Lancement de la 2ème tranche — Akandjé (Bingerville)</h3>
                <p className="text-[#666] text-sm leading-relaxed mb-4">Nouvelle opportunité d'accession à la propriété avec des duplex et villas dans une résidence sécurisée.</p>
                <a href="https://www.ma2e.ci/_assets/files/documents/2EME_TRANCHE_PROMOTION_IMMOBILIERE.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[#00A651] text-sm font-medium hover:gap-2 transition-all">
                  Lire la note <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </article>

            <article className="group border border-[#003d1f]/10 rounded-lg overflow-hidden hover:shadow-lg transition-all">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src="https://www.ma2e.ci/_assets/_img/img/investment.jpg" alt="Plateforme E-MA2E" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                <span className="absolute top-4 left-4 bg-[#00A651] text-white px-3 py-1 rounded text-[10px] font-medium uppercase tracking-wide">Digital</span>
              </div>
              <div className="p-6">
                <div className="text-[#666] text-xs uppercase tracking-[2px] mb-2">01/12/2022</div>
                <h3 className="text-[#003d1f] text-lg font-medium mb-2 group-hover:text-[#00A651] transition-colors">Ouverture officielle de la plateforme E-MA2E</h3>
                <p className="text-[#666] text-sm leading-relaxed mb-4">Gérez votre compte en ligne 24h/24. Coût du service : 500 F CFA/mois.</p>
                <a href="#" className="inline-flex items-center gap-1 text-[#00A651] text-sm font-medium hover:gap-2 transition-all">
                  En savoir plus <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </article>

            <article className="group border border-[#003d1f]/10 rounded-lg overflow-hidden hover:shadow-lg transition-all">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src="https://www.ma2e.ci/_assets/_img/img/epargnecomplementaire2.jpg" alt="Épargne complémentaire" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                <span className="absolute top-4 left-4 bg-[#003d1f] text-white px-3 py-1 rounded text-[10px] font-medium uppercase tracking-wide">Épargne</span>
              </div>
              <div className="p-6">
                <div className="text-[#666] text-xs uppercase tracking-[2px] mb-2">Communiqué</div>
                <h3 className="text-[#003d1f] text-lg font-medium mb-2 group-hover:text-[#00A651] transition-colors">Nouvelles formules d'épargne complémentaire</h3>
                <p className="text-[#666] text-sm leading-relaxed mb-4">Dépôts à terme et épargne progressive pour mieux préparer vos projets à venir.</p>
                <a href="#produits" className="inline-flex items-center gap-1 text-[#00A651] text-sm font-medium hover:gap-2 transition-all">
                  Découvrir <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 sm:py-24 lg:py-32 bg-[#f5f5f0] scroll-mt-24">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-12 sm:mb-16">
            <div className="text-[#F7941D] text-xs uppercase tracking-[2px] font-medium mb-4">Questions fréquentes</div>
            <h2 className="text-[#003d1f] text-[28px] sm:text-[40px] lg:text-[52px] font-normal leading-[1.2] tracking-[-0.5px]">
              Vos questions, nos réponses
            </h2>
          </div>

          <div className="space-y-3">
            {[
              { q: "Qui peut adhérer à la MA2E ?", a: "L'adhésion est libre et volontaire, exclusivement réservée au personnel en activité de SODECI, CIE, GS2E et CIPREL." },
              { q: "Quels sont les produits d'épargne proposés ?", a: "Épargne express, épargne ordinaire, épargne logement, dépôt à terme simple, dépôt à terme à versements progressifs et dépôt de garantie." },
              { q: "Quels sont les critères pour un crédit ordinaire ?", a: "Être adhérent avec un compte d'épargne ordinaire, disposer d'une garantie numéraire (25% à 50%), et d'une quotité cessible disponible." },
              { q: "Quel est le taux d'intérêt du crédit ordinaire ?", a: "Taux annuel variable entre 6,00% et 7,00% selon le ratio épargne/crédit demandé. Durée maximale de 60 mois." },
              { q: "Comment accéder à la plateforme E-MA2E ?", a: "Depuis le 01/12/2022, les adhérents peuvent gérer leur compte 24h/24. Le coût du service est de 500 F CFA/mois." },
              { q: "Comment contacter la MA2E ?", a: "Par téléphone au (+225) 27 21 23 64 87, par mail à info@ma2e.ci ou au siège : Immeuble SIDAM, Plateau, Abidjan. Lun–Ven, 7:30–16:30." },
            ].map((item, i) => (
              <details key={i} className="group bg-white rounded-lg border border-[#003d1f]/10 hover:border-[#00A651] transition-colors overflow-hidden">
                <summary className="flex items-center justify-between gap-4 cursor-pointer px-5 sm:px-6 py-4 sm:py-5 list-none">
                  <span className="text-[#003d1f] text-sm sm:text-base font-medium">{item.q}</span>
                  <ChevronDown className="w-5 h-5 text-[#00A651] flex-shrink-0 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-5 sm:px-6 pb-5 text-[#666] text-sm leading-relaxed border-t border-[#003d1f]/5 pt-4">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Téléchargements */}
      <section id="telechargements" className="py-16 sm:py-24 lg:py-32 bg-white scroll-mt-24">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-[800px] mb-12 sm:mb-16">
            <div className="text-[#F7941D] text-xs uppercase tracking-[2px] font-medium mb-4">Espace documentaire</div>
            <h2 className="text-[#003d1f] text-[28px] sm:text-[40px] lg:text-[52px] font-normal leading-[1.2] tracking-[-0.5px] mb-4 sm:mb-6">
              Téléchargez nos documents
            </h2>
            <p className="text-[#666] text-base sm:text-lg leading-relaxed">
              Formulaires, notes officielles et supports institutionnels.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {[
              { title: "Note 2ème tranche — Promotion immobilière", size: "PDF", url: "https://www.ma2e.ci/_assets/files/documents/2EME_TRANCHE_PROMOTION_IMMOBILIERE.pdf" },
              { title: "Politique de protection des données personnelles", size: "PDF · 2021", url: "https://www.ma2e.ci/_assets/files/DCP_POLITIQUE%20DE%20PROTECTION%20DES%20DONNEES%20PERSONNELLES_MA2E_06102021.pdf" },
              { title: "Bulletin d'adhésion MA2E", size: "Formulaire", url: "https://www.ma2e.ci/" },
              { title: "Demande de crédit ordinaire", size: "Formulaire", url: "https://www.ma2e.ci/" },
              { title: "Demande de crédit express", size: "Formulaire", url: "https://www.ma2e.ci/" },
              { title: "Conditions générales d'utilisation", size: "Document", url: "https://www.ma2e.ci/informations-legales/conditions-generales" },
            ].map((doc, i) => (
              <a key={i} href={doc.url} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 p-5 border border-[#003d1f]/10 rounded-lg hover:border-[#00A651] hover:shadow-md transition-all">
                <div className="w-11 h-11 bg-[#00A651]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#00A651]/20 transition-colors">
                  <FileText className="w-5 h-5 text-[#00A651]" strokeWidth={1.5} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[#003d1f] text-sm font-medium leading-snug group-hover:text-[#00A651] transition-colors truncate">{doc.title}</div>
                  <div className="text-[#999] text-xs mt-1">{doc.size}</div>
                </div>
                <Download className="w-4 h-4 text-[#666] group-hover:text-[#00A651] flex-shrink-0 transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Liens utiles / Partenaires */}
      <section id="liens-utiles" className="py-16 sm:py-24 lg:py-32 bg-[#f5f5f0] scroll-mt-24">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-[800px] mx-auto mb-12 sm:mb-16">
            <div className="text-[#F7941D] text-xs uppercase tracking-[2px] font-medium mb-4">Partenaires & liens utiles</div>
            <h2 className="text-[#003d1f] text-[28px] sm:text-[40px] lg:text-[52px] font-normal leading-[1.2] tracking-[-0.5px] mb-4 sm:mb-6">
              Un écosystème au service des adhérents
            </h2>
          </div>

          <div>
            <h3 className="text-[#003d1f] text-lg font-medium mb-6 text-center">Entreprises partenaires (adhérents)</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-12">
              {[
                { name: "SODECI", desc: "Société de Distribution d'Eau de la Côte d'Ivoire" },
                { name: "CIE", desc: "Compagnie Ivoirienne d'Électricité" },
                { name: "GS2E", desc: "Services Énergie Eau" },
                { name: "CIPREL", desc: "Compagnie Ivoirienne de Production d'Électricité" },
              ].map((p) => (
                <div key={p.name} className="bg-white rounded-lg p-5 sm:p-6 text-center hover:shadow-md transition-shadow">
                  <div className="text-[#00A651] text-xl sm:text-2xl font-medium mb-2">{p.name}</div>
                  <div className="text-[#666] text-xs leading-relaxed">{p.desc}</div>
                </div>
              ))}
            </div>

            <h3 className="text-[#003d1f] text-lg font-medium mb-6 text-center">Institutions de tutelle & liens officiels</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: "Ministère de l'Économie et des Finances", url: "https://finances.gouv.ci/" },
                { name: "BCEAO — Banque Centrale des États de l'Afrique de l'Ouest", url: "https://www.bceao.int/" },
                { name: "Direction générale du Trésor public", url: "https://www.tresor.gouv.ci/" },
                { name: "APSFD-CI — Association Professionnelle des SFD", url: "https://www.apsfdci.org/" },
                { name: "Gouvernement de Côte d'Ivoire", url: "https://www.gouv.ci/" },
                { name: "MA2E — Site officiel", url: "https://www.ma2e.ci/" },
              ].map((l) => (
                <a key={l.name} href={l.url} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between gap-3 bg-white rounded-lg p-4 sm:p-5 hover:shadow-md transition-all">
                  <span className="text-[#003d1f] text-sm font-medium group-hover:text-[#00A651] transition-colors">{l.name}</span>
                  <ExternalLink className="w-4 h-4 text-[#666] group-hover:text-[#00A651] flex-shrink-0 transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 sm:py-24 lg:py-32 bg-[#f5f5f0] scroll-mt-24">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <div className="text-[#F7941D] text-xs uppercase tracking-[2px] font-medium mb-4">Contactez-nous</div>
              <h2 className="text-[#003d1f] text-[28px] sm:text-[40px] lg:text-[52px] font-normal leading-[1.2] tracking-[-0.5px] mb-6">
                Nous sommes à votre écoute
              </h2>
              <p className="text-[#666] text-base sm:text-lg leading-relaxed mb-10">
                Pour toutes suggestions ou réclamations, nos équipes vous répondent du lundi au vendredi.
              </p>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-[#00A651]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#00A651]" />
                  </div>
                  <div>
                    <div className="text-[#003d1f] font-medium">Téléphone</div>
                    <a href="tel:+2252721236487" className="text-[#666] text-sm hover:text-[#00A651]">(+225) 27 21 23 64 87</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-[#00A651]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#00A651]" />
                  </div>
                  <div>
                    <div className="text-[#003d1f] font-medium">Email</div>
                    <a href="mailto:info@ma2e.ci" className="text-[#666] text-sm hover:text-[#00A651]">info@ma2e.ci</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-[#00A651]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#00A651]" />
                  </div>
                  <div>
                    <div className="text-[#003d1f] font-medium">Adresse</div>
                    <div className="text-[#666] text-sm">Abidjan-Plateau, Avenue Houdaille<br/>Immeuble SIDAM, 6ème étage<br/>18 BP 1210 Abidjan 18</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-[#00A651]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-[#00A651]" />
                  </div>
                  <div>
                    <div className="text-[#003d1f] font-medium">Horaires</div>
                    <div className="text-[#666] text-sm">Lun – Ven · 7:30 – 16:30</div>
                  </div>
                </div>
              </div>
            </div>

            <form className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="contact-name" className="block text-[#003d1f] text-sm font-medium mb-2">Vos contacts *</label>
                <input id="contact-name" type="text" required className="w-full px-4 py-3 border border-[#003d1f]/15 rounded-md focus:outline-none focus:border-[#00A651] transition-colors" placeholder="Nom, téléphone ou email" />
              </div>
              <div>
                <label htmlFor="contact-subject" className="block text-[#003d1f] text-sm font-medium mb-2">Objet</label>
                <input id="contact-subject" type="text" className="w-full px-4 py-3 border border-[#003d1f]/15 rounded-md focus:outline-none focus:border-[#00A651] transition-colors" placeholder="Objet de votre message" />
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-[#003d1f] text-sm font-medium mb-2">Message *</label>
                <textarea id="contact-message" required rows={5} className="w-full px-4 py-3 border border-[#003d1f]/15 rounded-md focus:outline-none focus:border-[#00A651] transition-colors resize-none" placeholder="Votre message"></textarea>
              </div>
              <button type="submit" className="w-full bg-[#00A651] text-white px-8 py-3.5 rounded text-[15px] hover:bg-[#00703a] transition-colors">
                Envoyer le message
              </button>
              <p className="text-[#666] text-xs leading-relaxed">
                Les données collectées sont destinées à MA2E pour la gestion de ses contacts et conservées 3 ans. Vous disposez d'un droit d'accès, rectification et suppression en écrivant à privacyMA2E@ma2e.ci.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Informations légales */}
      <section id="legal" className="py-14 sm:py-20 bg-white border-t border-[#003d1f]/10 scroll-mt-24">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a href="https://www.ma2e.ci/informations-legales/conditions-generales" target="_blank" rel="noopener noreferrer" className="group border border-[#003d1f]/10 rounded-lg p-6 hover:border-[#00A651] hover:shadow-md transition-all">
              <Scale className="w-8 h-8 text-[#00A651] mb-4" strokeWidth={1.5} />
              <h3 className="text-[#003d1f] font-medium mb-2 group-hover:text-[#00A651] transition-colors">Conditions générales d'utilisation</h3>
              <p className="text-[#666] text-sm leading-relaxed">Termes et conditions applicables à l'utilisation du site et des services MA2E.</p>
            </a>
            <a href="https://www.ma2e.ci/informations-legales/mentions-legales" target="_blank" rel="noopener noreferrer" className="group border border-[#003d1f]/10 rounded-lg p-6 hover:border-[#00A651] hover:shadow-md transition-all">
              <FileText className="w-8 h-8 text-[#00A651] mb-4" strokeWidth={1.5} />
              <h3 className="text-[#003d1f] font-medium mb-2 group-hover:text-[#00A651] transition-colors">Mentions légales</h3>
              <p className="text-[#666] text-sm leading-relaxed">Informations légales sur l'éditeur du site, l'hébergeur et les droits applicables.</p>
            </a>
            <a href="https://www.ma2e.ci/_assets/files/DCP_POLITIQUE%20DE%20PROTECTION%20DES%20DONNEES%20PERSONNELLES_MA2E_06102021.pdf" target="_blank" rel="noopener noreferrer" className="group border border-[#003d1f]/10 rounded-lg p-6 hover:border-[#00A651] hover:shadow-md transition-all">
              <ShieldCheck className="w-8 h-8 text-[#00A651] mb-4" strokeWidth={1.5} />
              <h3 className="text-[#003d1f] font-medium mb-2 group-hover:text-[#00A651] transition-colors">Protection des données personnelles</h3>
              <p className="text-[#666] text-sm leading-relaxed">Politique de confidentialité et exercice de vos droits : privacyMA2E@ma2e.ci</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#003d1f] py-12 sm:py-16">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-10 sm:mb-12">
            <div>
              <div className="mb-4">
                <img src="/images.png" alt="MA2E" className="h-12 w-auto" />
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                Institution mutualiste d'Épargne et de Crédit sans but lucratif. Régie par l'ordonnance N°2011-367 du 3 novembre 2011.
              </p>
            </div>

            <div>
              <h4 className="text-white font-medium mb-4">Épargne</h4>
              <ul className="space-y-3">
                <li><a href="https://www.ma2e.ci/site-institutionnel/produits/produit-epargne/epargne-express" className="text-white/60 hover:text-white transition-colors text-sm">Épargne express</a></li>
                <li><a href="https://www.ma2e.ci/site-institutionnel/produits/produit-epargne/epargne-ordinaire" className="text-white/60 hover:text-white transition-colors text-sm">Épargne ordinaire</a></li>
                <li><a href="https://www.ma2e.ci/site-institutionnel/produits/produit-epargne/depots-simple" className="text-white/60 hover:text-white transition-colors text-sm">Dépôt à terme simple</a></li>
                <li><a href="https://www.ma2e.ci/site-institutionnel/produits/depot-garantie" className="text-white/60 hover:text-white transition-colors text-sm">Dépôt de garantie</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-medium mb-4">Crédit</h4>
              <ul className="space-y-3">
                <li><a href="https://www.ma2e.ci/site-institutionnel/produits/formule-credit/credit-ordinaire" className="text-white/60 hover:text-white transition-colors text-sm">Crédit ordinaire</a></li>
                <li><a href="https://www.ma2e.ci/site-institutionnel/produits/formule-credit/credit-express" className="text-white/60 hover:text-white transition-colors text-sm">Crédit express</a></li>
                <li><a href="https://www.ma2e.ci/site-institutionnel/formule-credit/credit-immobilier" className="text-white/60 hover:text-white transition-colors text-sm">Crédit immobilier</a></li>
                <li><a href="https://www.ma2e.ci/site-institutionnel/formule-credit/credit-immobilier-differe" className="text-white/60 hover:text-white transition-colors text-sm">Crédit immobilier différé</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-medium mb-4">Contact</h4>
              <ul className="space-y-3 text-white/60 text-sm">
                <li>Abidjan-Plateau · Immeuble SIDAM</li>
                <li>18 BP 1210 Abidjan 18</li>
                <li><a href="mailto:info@ma2e.ci" className="hover:text-white transition-colors">info@ma2e.ci</a></li>
                <li><a href="tel:+2252721236487" className="hover:text-white transition-colors">(+225) 27 21 23 64 87</a></li>
                <li className="text-white/40">Lun – Ven · 7:30 – 16:30</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm text-center sm:text-left">© 2026 MA2E — Direction institutionnelle bancaire. Tous droits réservés.</p>
            <div className="flex items-center gap-4 sm:gap-6">
              <a href="https://www.ma2e.ci/informations-legales/mentions-legales" className="text-white/40 hover:text-white transition-colors text-sm">Mentions légales</a>
              <a href="https://www.ma2e.ci/informations-legales/conditions-generales" className="text-white/40 hover:text-white transition-colors text-sm">Conditions générales</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
