import { motion } from 'framer-motion';
import { Package, Home, Truck, Globe2, Ship, Search, FileText, CheckCircle2, User, Plane, MapPin, QrCode, Cpu } from 'lucide-react';

const Container = ({ children, color }: { children: React.ReactNode, color: string }) => (
  <div className="relative w-full h-full flex items-center justify-center">
    {/* Background Glow */}
    <div className={`absolute w-[300px] h-[300px] rounded-full blur-[100px] opacity-20 ${color}`} />
    <div className="relative z-10 w-full h-full flex items-center justify-center">
      {children}
    </div>
  </div>
);

export const PickupVisual = () => (
  <Container color="bg-cyan-500">
      <div className="relative flex items-center gap-20">
      <div className="relative">
        <Home size={100} className="text-white/20" />
        <motion.div
          whileInView={{ scale: [1, 1.2, 1], opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute -top-4 -right-4"
        >
          <QrCode size={30} className="text-cyan-300" />
        </motion.div>
      </div>
      <motion.div 
        whileInView={{ x: [0, 150, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-10"
      >
        <Package size={40} className="text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
      </motion.div>
      <div className="relative">
        <Truck size={120} className="text-cyan-400" />
        <motion.div
          whileInView={{ x: [-5, 5, -5], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 0.5, repeat: Infinity }}
          className="absolute top-[60%] -left-8 w-6 h-1 bg-white/50 rounded-full"
        />
      </div>
    </div>
  </Container>
);

export const WarehouseVisual = () => (
  <Container color="bg-purple-500">
    <div className="flex flex-col items-center gap-12 relative">
      <motion.div 
        whileInView={{ rotate: 360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute opacity-5"
      >
        <Cpu size={250} />
      </motion.div>
      <div className="relative flex gap-8 z-10">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            whileInView={{ 
              y: [0, -20, 0],
              opacity: [0.5, 1, 0.5],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              delay: i * 0.5 
            }}
          >
            <Package size={60} className="text-purple-400 drop-shadow-[0_0_15px_rgba(168,85,247,0.4)]" />
          </motion.div>
        ))}
      </div>
      <div className="w-64 h-2 bg-white/10 rounded-full overflow-hidden z-10">
        <motion.div 
          whileInView={{ x: [-100, 200] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          className="w-20 h-full bg-purple-400/80 shadow-[0_0_10px_#a855f7]"
        />
      </div>
    </div>
  </Container>
);

export const CustomsVisual = () => (
  <Container color="bg-emerald-500">
    <div className="relative">

      <div className="bg-white/5 backdrop-blur-2xl border border-emerald-400/20 p-10 rounded-3xl shadow-[0_0_30px_rgba(16,185,129,0.1)]">
        <FileText size={100} className="text-emerald-400" />
        <motion.div
          whileInView={{ 
            scale: [2, 1],
            opacity: [0, 1]
          }}
          transition={{ duration: 1, repeat: Infinity, repeatDelay: 1 }}
          className="absolute -top-4 -right-4"
        >
          <div className="bg-emerald-500/20 rounded-full p-1 backdrop-blur-md">
            <CheckCircle2 size={48} className="text-emerald-400 drop-shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
          </div>
        </motion.div>
      </div>
      <motion.div
        whileInView={{ 
          x: [-40, 40, -40],
          y: [-30, 30, -30]
        }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute -top-12 -left-12 drop-shadow-xl"
      >
        <Search size={70} className="text-cyan-400" />
      </motion.div>
    </div>
  </Container>
);

export const TransitVisual = () => (
  <Container color="bg-blue-500">
    <div className="relative flex flex-col items-center">

      <motion.div 
        whileInView={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <Globe2 size={220} className="text-blue-400/20" />
      </motion.div>
      
      <motion.div
        whileInView={{ 
          x: [-200, 200],
          y: [-50, -80, -50],
          rotate: [15, -15, 15]
        }}
        transition={{ 
          x: { duration: 6, repeat: Infinity, ease: "linear" },
          y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 6, repeat: Infinity, ease: "linear" }
        }}
        className="absolute top-10"
      >
        <Plane size={50} className="text-white drop-shadow-[0_5px_15px_rgba(255,255,255,0.5)]" />
      </motion.div>

      <motion.div
        whileInView={{ 
          x: [-150, 150],
          y: [0, -10, 0]
        }}
        transition={{ 
          x: { duration: 8, repeat: Infinity, ease: "linear" },
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute bottom-10"
      >
        <Ship size={100} className="text-blue-400 drop-shadow-[0_10px_30px_rgba(59,130,246,0.8)]" />
      </motion.div>
    </div>
  </Container>
);

export const LastMileVisual = () => (
  <Container color="bg-orange-500">
    <div className="flex flex-col items-center w-full max-w-md relative">
      <motion.div
        whileInView={{ y: [-10, 0, -10], opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute -top-16 z-20"
      >
        <MapPin size={50} className="text-orange-400 drop-shadow-[0_5px_15px_rgba(249,115,22,0.6)]" />
      </motion.div>
      
      <motion.div
        whileInView={{ x: [200, -200] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="flex gap-4 opacity-10 mb-8 absolute bottom-4"
      >
        <div className="w-16 h-32 bg-white rounded-t-lg" />
        <div className="w-16 h-48 bg-white rounded-t-lg" />
        <div className="w-16 h-24 bg-white rounded-t-lg" />
        <div className="w-20 h-40 bg-white rounded-t-lg" />
      </motion.div>
      
      <motion.div
        whileInView={{ y: [0, -3, 0] }}
        transition={{ duration: 0.15, repeat: Infinity }}
        className="self-center z-10"
      >
        <Truck size={140} className="text-orange-400 drop-shadow-[0_0_20px_rgba(249,115,22,0.3)]" />
      </motion.div>
      <div className="w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent mt-4 z-10" />
    </div>
  </Container>
);

export const DeliveryVisual = () => (
  <Container color="bg-green-500">
    <div className="flex items-center gap-12">

      <div className="relative">
        <Home size={120} className="text-white/10" />
        <User size={50} className="text-white/30 absolute bottom-0 left-1/2 -translate-x-1/2" />
      </div>
      <motion.div
        initial={{ scale: 0, rotate: -20 }}
        whileInView={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", damping: 12 }}
      >
        <div className="bg-white/5 p-6 rounded-2xl border border-green-400/20 shadow-[0_0_40px_rgba(34,197,94,0.15)]">
          <Package size={80} className="text-green-400" />
          <motion.div
             initial={{ scale: 0 }}
             whileInView={{ scale: 1 }}
             transition={{ delay: 0.5, type: "spring" }}
             className="absolute -top-3 -right-3"
          >
            <div className="bg-green-500 rounded-full border-4 border-slate-900">
               <CheckCircle2 className="text-white" size={28} />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </Container>
);
