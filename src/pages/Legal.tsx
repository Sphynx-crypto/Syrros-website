import React, { useState } from 'react';
import { Shield, Lock, Eye, FileText, Globe, Mail } from 'lucide-react';

const Legal = () => {
  const [activeTab, setActiveTab] = useState('mentions');

  const tabs = [
    { id: 'mentions', label: 'Mentions légales', icon: FileText },
    { id: 'confidentialite', label: 'Confidentialité', icon: Shield },
    { id: 'cookies', label: 'Cookies', icon: Eye },
    { id: 'rgpd', label: 'RGPD', icon: Lock },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-[#4382B1]/20 to-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-sora font-bold text-white mb-6">
              Mentions Légales & Confidentialité
            </h1>
            <p className="text-xl font-manrope text-gray-300 max-w-3xl mx-auto">
              Toutes les informations légales concernant SYRROS et l'utilisation de notre site web, 
              ainsi que notre politique de protection des données personnelles.
            </p>
          </div>
        </div>
      </section>

      {/* Contenu avec onglets */}
      <section className="py-16 bg-gradient-to-b from-gray-900 via-gray-800 to-[#4382B1]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Navigation par onglets */}
          <div className="flex flex-wrap justify-center mb-8 bg-gray-900 rounded-lg p-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeTab === tab.id 
                      ? 'bg-blue-600 text-white font-sora' 
                      : 'text-gray-300 hover:text-white hover:bg-gray-700'
                  }`}
                >
                  <Icon className="h-4 w-4 mr-2" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Contenu des onglets */}
          <div className="bg-gray-900 rounded-lg p-8">
            
            {/* Mentions légales */}
            {activeTab === 'mentions' && (
              <div className="prose prose-invert max-w-none">
                <h2 className="text-2xl font-sora font-semibold text-white mb-6">Mentions légales</h2>
                
                <div className="space-y-6 font-manrope text-gray-300">
                  <div>
                    <h3 className="text-xl font-sora font-semibold text-white mb-3">Informations générales</h3>
                    <p><strong>Dénomination sociale :</strong> SYRROS</p>
                    <p><strong>Forme juridique :</strong> SAS (Société par Actions Simplifiée)</p>
                    <p><strong>Capital social :</strong> 10 000 €</p>
                    <p><strong>Siège social :</strong> 123 Rue de l'Innovation, 75001 Paris, France</p>
                    <p><strong>RCS :</strong> Paris B 123 456 789</p>
                    <p><strong>SIRET :</strong> 123 456 789 00012</p>
                    <p><strong>TVA Intracommunautaire :</strong> FR12 123456789</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-sora font-semibold text-white mb-3">Directeur de la publication</h3>
                    <p><strong>Nom :</strong> Alexandre Dupont</p>
                    <p><strong>Qualité :</strong> Président</p>
                    <p><strong>Email :</strong> contact@syrros.fr</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-sora font-semibold text-white mb-3">Hébergement</h3>
                    <p><strong>Hébergeur :</strong> OVH SAS</p>
                    <p><strong>Adresse :</strong> 2 rue Kellermann, 59100 Roubaix, France</p>
                    <p><strong>Téléphone :</strong> 09 72 10 10 07</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-sora font-semibold text-white mb-3">Propriété intellectuelle</h3>
                    <p>
                      L'ensemble des contenus présents sur ce site (textes, images, logos, etc.) 
                      sont la propriété exclusive de SYRROS, sauf mention contraire. 
                      Toute reproduction, même partielle, est interdite sans autorisation préalable.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-sora font-semibold text-white mb-3">Responsabilité</h3>
                    <p>
                      SYRROS s'efforce de fournir des informations exactes et à jour. 
                      Cependant, nous ne pouvons garantir l'exactitude, la complétude ou 
                      la pertinence des informations diffusées sur le site.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Politique de confidentialité */}
            {activeTab === 'confidentialite' && (
              <div className="prose prose-invert max-w-none">
                <h2 className="text-2xl font-sora font-semibold text-white mb-6">Politique de confidentialité</h2>
                
                <div className="space-y-6 font-manrope text-gray-300">
                  <div>
                    <h3 className="text-xl font-sora font-semibold text-white mb-3">Collecte des données</h3>
                    <p>
                      Nous collectons les données personnelles suivantes :
                    </p>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Nom et prénom</li>
                      <li>Adresse email</li>
                      <li>Numéro de téléphone (facultatif)</li>
                      <li>Nom de l'entreprise</li>
                      <li>Données de navigation (cookies)</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-sora font-semibold text-white mb-3">Finalité du traitement</h3>
                    <p>Vos données sont utilisées pour :</p>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Traiter vos demandes de contact</li>
                      <li>Organiser des rendez-vous</li>
                      <li>Améliorer nos services</li>
                      <li>Vous envoyer des informations pertinentes (avec votre consentement)</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-sora font-semibold text-white mb-3">Base légale</h3>
                    <p>
                      Le traitement de vos données repose sur votre consentement explicite 
                      et sur l'exécution de mesures précontractuelles prises à votre demande.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-sora font-semibold text-white mb-3">Conservation des données</h3>
                    <p>
                      Vos données sont conservées pendant une durée de 3 ans à compter du 
                      dernier contact, sauf obligation légale contraire.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-sora font-semibold text-white mb-3">Vos droits</h3>
                    <p>Vous disposez des droits suivants :</p>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Droit d'accès à vos données</li>
                      <li>Droit de rectification</li>
                      <li>Droit à l'effacement</li>
                      <li>Droit à la limitation du traitement</li>
                      <li>Droit à la portabilité des données</li>
                      <li>Droit d'opposition</li>
                    </ul>
                    <p className="mt-4">
                      Pour exercer ces droits, contactez-nous à : 
                      <a href="mailto:dpo@syrros.fr" className="text-blue-400 hover:underline ml-1">
                        dpo@syrros.fr
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Politique cookies */}
            {activeTab === 'cookies' && (
              <div className="prose prose-invert max-w-none">
                <h2 className="text-2xl font-sora font-semibold text-white mb-6">Politique des cookies</h2>
                
                <div className="space-y-6 font-manrope text-gray-300">
                  <div>
                    <h3 className="text-xl font-sora font-semibold text-white mb-3">Qu'est-ce qu'un cookie ?</h3>
                    <p>
                      Un cookie est un petit fichier texte stocké sur votre appareil lors de 
                      votre visite sur notre site. Il nous permet de reconnaître votre navigateur 
                      et d'améliorer votre expérience utilisateur.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-sora font-semibold text-white mb-3">Types de cookies utilisés</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-sora font-semibold text-white">Cookies essentiels</h4>
                        <p>
                          Nécessaires au fonctionnement du site. Ils ne peuvent pas être désactivés.
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-sora font-semibold text-white">Cookies de performance</h4>
                        <p>
                          Nous aident à comprendre comment vous utilisez notre site pour l'améliorer.
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-sora font-semibold text-white">Cookies de fonctionnalité</h4>
                        <p>
                          Permettent de mémoriser vos préférences et choix sur le site.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-sora font-semibold text-white mb-3">Gestion des cookies</h3>
                    <p>
                      Vous pouvez à tout moment modifier vos préférences cookies via le bandeau 
                      qui apparaît lors de votre première visite, ou en configurant votre navigateur.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-sora font-semibold text-white mb-3">Durée de conservation</h3>
                    <p>
                      Les cookies de session expirent à la fermeture du navigateur. 
                      Les cookies persistants sont conservés 13 mois maximum.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* RGPD */}
            {activeTab === 'rgpd' && (
              <div className="prose prose-invert max-w-none">
                <h2 className="text-2xl font-sora font-semibold text-white mb-6">Conformité RGPD</h2>
                
                <div className="space-y-6 font-manrope text-gray-300">
                  <div>
                    <h3 className="text-xl font-sora font-semibold text-white mb-3">Notre engagement</h3>
                    <p>
                      SYRROS s'engage à respecter le Règlement Général sur la Protection des Données (RGPD) 
                      et à protéger vos données personnelles conformément à la réglementation européenne.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-sora font-semibold text-white mb-3">Responsable du traitement</h3>
                    <p><strong>SYRROS</strong></p>
                    <p>123 Rue de l'Innovation, 75001 Paris, France</p>
                    <p>Email : contact@syrros.fr</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-sora font-semibold text-white mb-3">Délégué à la Protection des Données</h3>
                    <p>
                      Pour toute question relative à la protection de vos données, 
                      vous pouvez contacter notre DPO :
                    </p>
                    <p>Email : dpo@syrros.fr</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-sora font-semibold text-white mb-3">Transferts de données</h3>
                    <p>
                      Vos données personnelles ne sont pas transférées en dehors de l'Union Européenne. 
                      Si un transfert était nécessaire, nous nous assurerions qu'il respecte 
                      les exigences du RGPD.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-sora font-semibold text-white mb-3">Sécurité des données</h3>
                    <p>
                      Nous mettons en œuvre des mesures techniques et organisationnelles 
                      appropriées pour protéger vos données contre :
                    </p>
                    <ul className="list-disc pl-6 mt-2">
                      <li>L'accès non autorisé</li>
                      <li>La perte ou la destruction accidentelle</li>
                      <li>L'utilisation illicite</li>
                      <li>La divulgation non autorisée</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-sora font-semibold text-white mb-3">Réclamation</h3>
                    <p>
                      Vous avez le droit d'introduire une réclamation auprès de la CNIL 
                      si vous estimez que vos droits ne sont pas respectés :
                    </p>
                    <p>
                      <strong>CNIL</strong><br />
                      3 Place de Fontenoy - TSA 80715<br />
                      75334 Paris Cedex 07<br />
                      Tél : 01 53 73 22 22
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Bandeau RGPD simulé */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-700 p-4 z-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <Shield className="h-5 w-5 text-blue-400 mr-2" />
            <p className="font-manrope text-gray-300 text-sm">
              Ce site utilise des cookies pour améliorer votre expérience. 
              En continuant, vous acceptez notre utilisation des cookies.
            </p>
          </div>
          <div className="flex space-x-4">
            <button className="font-manrope text-gray-400 hover:text-white text-sm">
              Paramétrer
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm font-sora hover:bg-blue-700">
              Accepter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legal;