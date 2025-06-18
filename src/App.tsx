import React from 'react';
import { 
  Calendar, 
  Clock, 
  Users, 
  MessageCircle, 
  Twitter, 
  Send, 
  Tv, 
  Eye, 
  Music, 
  Instagram,
  Youtube,
  ExternalLink
} from 'lucide-react';

function App() {
  const socialLinks = [
    { 
      name: 'Discord', 
      url: 'https://dsc.gg/crossbr', 
      icon: MessageCircle, 
      color: 'bg-indigo-600 hover:bg-indigo-700' 
    },
    { 
      name: 'Twitter', 
      url: 'https://x.com/swisleyttv', 
      icon: Twitter, 
      color: 'bg-sky-500 hover:bg-sky-600' 
    },
    { 
      name: 'Telegram', 
      url: 'https://t.me/swisleyttv', 
      icon: Send, 
      color: 'bg-blue-500 hover:bg-blue-600' 
    },
    { 
      name: 'Twitch', 
      url: 'https://twitch.tv/swisleyttv', 
      icon: Tv, 
      color: 'bg-purple-600 hover:bg-purple-700' 
    },
    { 
      name: 'BlueSky', 
      url: 'https://swisleyttv.bsky.social', 
      icon: Eye, 
      color: 'bg-cyan-500 hover:bg-cyan-600' 
    },
    { 
      name: 'TikTok', 
      url: 'https://tiktok.com/@swisleyttv', 
      icon: Music, 
      color: 'bg-pink-600 hover:bg-pink-700' 
    },
    { 
      name: 'YouTube', 
      url: 'https://youtube.com/@swisleyttv', 
      icon: Youtube, 
      color: 'bg-red-600 hover:bg-red-700' 
    },
    { 
      name: 'Instagram', 
      url: 'https://instagram.com/swisleyttv', 
      icon: Instagram, 
      color: 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600' 
    }
  ];

  const scheduleItems = [
    {
      day: 'Segunda, Terça e Quarta',
      time: '🕛',
      activity: 'Jogos Singleplayer 🔴',
      color: 'border-l-red-500'
    },
    {
      day: 'Quinta',
      time: '🕖 19h',
      activity: 'Jogos de Música',
      color: 'border-l-blue-500'
    },
    {
      day: '',
      time: '🕙 22h',
      activity: 'Fortnite Festival',
      color: 'border-l-blue-500'
    },
    {
      day: 'Sexta 🟣',
      time: '🕙 22h',
      activity: 'Fortnite',
      color: 'border-l-purple-500'
    },
    {
      day: 'Sábado',
      time: '🕒 15h',
      activity: 'Overwatch 2',
      color: 'border-l-orange-500'
    },
    {
      day: '',
      time: '🕖 19h',
      activity: 'Mario Kart 8 Deluxe',
      color: 'border-l-green-500'
    },
    {
      day: 'Domingo',
      time: '🕒 15h',
      activity: 'Smash Bros. Ultimate',
      color: 'border-l-yellow-500'
    },
    {
      day: '',
      time: '🕔 17h',
      activity: 'Fall Guys',
      color: 'border-l-pink-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900">
      {/* Header with Nintendo Switch 2 Background */}
      <div className="relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/SWisleyTTV/Capa-Nintendo-Switch-2.png.png)',
          }}
        >
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/60"></div>
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 via-purple-800/70 to-indigo-900/80"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 py-16">
          <div className="text-center">
            {/* Profile Section */}
            <div className="flex flex-col items-center mb-8">
              <div className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-1 mb-6 shadow-2xl">
                <img 
                  src=/perfil.jpg
                  alt="SWisleyTTV Profile" 
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <h1 className="text-6xl font-bold text-white mb-2 drop-shadow-2xl">SWisleyTTV</h1>
              <div className="flex items-center gap-2 text-purple-200 mb-6">
                <Users className="w-5 h-5" />
                <span className="text-lg font-medium">#Nintendo #CrossPlay</span>
              </div>
              
              {/* Descriptive Text */}
              <div className="text-center mb-8 max-w-2xl">
                <h2 className="text-2xl font-bold text-white mb-4 drop-shadow-lg">
                  SwisleyTTV Official Channel - Nintendo, CrossPlay and more!
                </h2>
                <p className="text-purple-200 text-lg mb-2">
                  SwisleyTTV, Twitch, Nintendo, CrossPlay, Gaming, Streaming
                </p>
                <p className="text-purple-300 font-semibold">
                  SwisleyTTV - Official Channel
                </p>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <a 
                  href="https://www.twitch.tv/swisleyttv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <Tv className="w-5 h-5" />
                  Assistir na Twitch
                  <ExternalLink className="w-4 h-4" />
                </a>
                
                {/* Telegram Group Button */}
                <a 
                  href="https://t.me/SWisleyTTV"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl border-2 border-white/20"
                >
                  <Send className="w-5 h-5" />
                  Entrar no Grupo Telegram
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 pb-12">
        {/* Schedule Card */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8 border border-white/20 shadow-2xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-purple-500 rounded-lg">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white">📌 Cronograma SWisleyTTV</h2>
          </div>
          
          <div className="space-y-4">
            {scheduleItems.map((item, index) => (
              <div 
                key={index} 
                className={`bg-white/5 backdrop-blur-sm rounded-lg p-4 border-l-4 ${item.color} hover:bg-white/10 transition-all duration-200`}
              >
                {item.day && (
                  <div className="text-purple-200 font-semibold text-sm mb-1">
                    {item.day}
                  </div>
                )}
                <div className="flex items-center gap-3">
                  <span className="text-xl">{item.time}</span>
                  <span className="text-white font-medium">{item.activity}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Observations Card */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8 border border-white/20 shadow-2xl">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <div className="p-2 bg-yellow-500 rounded-lg">
              <Clock className="w-5 h-5 text-white" />
            </div>
            Observações:
          </h3>
          <div className="space-y-3 text-gray-200">
            <div className="flex items-start gap-3 p-3 bg-white/5 rounded-lg">
              <span className="text-red-500 font-bold">🔴</span>
              <span>Jogos da Nintendo ou Retrôs como Platformers e RPGs.</span>
            </div>
            <div className="flex items-start gap-3 p-3 bg-white/5 rounded-lg">
              <span className="text-purple-500 font-bold">🟣</span>
              <span>Sexta: Maratona de jogos ONLINE!</span>
            </div>
            <div className="flex items-start gap-3 p-3 bg-white/5 rounded-lg">
              <span className="text-gray-500 font-bold">⚫️</span>
              <span>Cronograma sujeito a alterações em caso de eventos, lançamentos ou jogos liberados temporariamente.</span>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl">
          <h3 className="text-xl font-bold text-white mb-6 text-center">Redes Sociais</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${social.color} p-4 rounded-xl text-white font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg flex flex-col items-center gap-2 text-center`}
                >
                  <IconComponent className="w-6 h-6" />
                  <span className="text-sm">{social.name}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center py-8 text-purple-200/60">
        <p>© 2024 SWisleyTTV - Todos os direitos reservados</p>
      </div>
    </div>
  );
}

export default App;
