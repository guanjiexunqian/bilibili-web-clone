import React, { useState } from 'react';
import { X, Smartphone, Lock, Eye, EyeOff } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'password' | 'sms'>('password');
  const [showPassword, setShowPassword] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="w-[820px] h-[520px] bg-[#222] rounded-[8px] flex relative shadow-2xl overflow-hidden text-white font-sans">
        
        {/* Close Button */}
        <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-20"
        >
            <X size={24} />
        </button>

        {/* Left Side: QR Code */}
        <div className="w-[300px] flex flex-col items-center pt-12 relative border-r border-white/5">
            <h3 className="text-[18px] tracking-wide mb-8">扫描二维码登录</h3>
            
            <div className="w-[180px] h-[180px] bg-white p-2 rounded-md mb-4 relative group cursor-pointer">
                <img src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://www.bilibili.com" className="w-full h-full" alt="Login QR" />
                
                {/* Hover to Refresh Simulation */}
                <div className="absolute inset-0 bg-black/80 hidden group-hover:flex flex-col items-center justify-center text-white text-sm rounded-sm">
                    <span>点击刷新</span>
                </div>
            </div>

            <div className="text-[12px] text-gray-400 text-center leading-relaxed">
                请使用 <span className="text-[#00AEEC] cursor-pointer hover:underline">哔哩哔哩客户端</span><br/>
                扫码登录或扫码下载APP
            </div>

            {/* Mascot 22 (Left) */}
            <div className="absolute -bottom-8 -left-8 w-[180px] h-[180px] pointer-events-none">
                <img 
                    src="https://i0.hdslb.com/bfs/static/jinkela/long/images/login/22_open.png" 
                    onError={(e) => e.currentTarget.src = 'https://api.dicebear.com/7.x/avataaars/svg?seed=MascotBlue'}
                    alt="22" 
                    className="w-full h-full object-contain transform rotate-12"
                />
            </div>
        </div>

        {/* Right Side: Form */}
        <div className="flex-1 flex flex-col px-10 pt-8 relative">
            {/* Tabs */}
            <div className="flex items-center gap-8 mb-8 ml-2">
                <span 
                    className={`cursor-pointer text-[16px] transition-colors ${activeTab === 'password' ? 'text-[#00AEEC] font-bold' : 'text-gray-400 hover:text-white'}`}
                    onClick={() => setActiveTab('password')}
                >
                    密码登录
                </span>
                <span className="w-[1px] h-4 bg-gray-600"></span>
                <span 
                    className={`cursor-pointer text-[16px] transition-colors ${activeTab === 'sms' ? 'text-[#00AEEC] font-bold' : 'text-gray-400 hover:text-white'}`}
                    onClick={() => setActiveTab('sms')}
                >
                    短信登录
                </span>
            </div>

            {/* Inputs */}
            <div className="flex flex-col gap-5">
                <div className="group">
                    <div className="bg-[#333] border border-transparent group-focus-within:border-[#00AEEC] rounded-md h-[44px] flex items-center px-4 transition-colors">
                        <span className="text-gray-400 mr-4 text-sm w-8">账号</span>
                        <input 
                            type="text" 
                            placeholder="请输入账号" 
                            className="bg-transparent border-none outline-none text-white text-sm flex-1 placeholder-gray-500"
                            defaultValue="18152721765"
                        />
                    </div>
                </div>

                <div className="group">
                    <div className="bg-[#333] border border-transparent group-focus-within:border-[#00AEEC] rounded-md h-[44px] flex items-center px-4 transition-colors">
                        <span className="text-gray-400 mr-4 text-sm w-8">密码</span>
                        <input 
                            type={showPassword ? "text" : "password"} 
                            placeholder="请输入密码" 
                            className="bg-transparent border-none outline-none text-white text-sm flex-1 placeholder-gray-500"
                            defaultValue="password123"
                        />
                        <div className="cursor-pointer text-gray-500 hover:text-white ml-2" onClick={() => setShowPassword(!showPassword)}>
                             {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
                        </div>
                        <span className="text-[#00AEEC] text-xs ml-3 cursor-pointer hover:opacity-80 whitespace-nowrap">忘记密码?</span>
                    </div>
                </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-8">
                <button className="flex-1 h-[44px] rounded-md border border-gray-600 text-white hover:border-white hover:bg-white/5 transition-all text-sm">
                    注册
                </button>
                <button className="flex-1 h-[44px] rounded-md bg-[#00AEEC] text-white hover:bg-[#00AEEC]/90 transition-colors text-sm font-medium">
                    登录
                </button>
            </div>

            {/* Social Login */}
            <div className="mt-8 text-center">
                <div className="text-gray-500 text-xs mb-3">其他方式登录</div>
                <div className="flex justify-center gap-6">
                    <div className="flex items-center gap-1 cursor-pointer hover:opacity-80">
                         <div className="w-7 h-7 rounded-full bg-[#57BE6A] flex items-center justify-center text-white">
                            <span className="text-xs font-bold">微</span>
                         </div>
                         <span className="text-gray-400 text-xs">微信登录</span>
                    </div>
                     <div className="flex items-center gap-1 cursor-pointer hover:opacity-80">
                         <div className="w-7 h-7 rounded-full bg-[#FB7299] flex items-center justify-center text-white">
                            <span className="text-xs font-bold">博</span>
                         </div>
                         <span className="text-gray-400 text-xs">微博登录</span>
                    </div>
                     <div className="flex items-center gap-1 cursor-pointer hover:opacity-80">
                         <div className="w-7 h-7 rounded-full bg-[#00AEEC] flex items-center justify-center text-white">
                            <span className="text-xs font-bold">QQ</span>
                         </div>
                         <span className="text-gray-400 text-xs">QQ登录</span>
                    </div>
                </div>
            </div>

            {/* Footer Terms */}
            <div className="mt-auto mb-6 text-center text-[12px] text-gray-500 leading-tight">
                未注册过哔哩哔哩的手机号，我们将自动帮你注册账号<br/>
                登录或完成注册即代表你同意 <span className="text-[#00AEEC] cursor-pointer hover:underline">用户协议</span> 和 <span className="text-[#00AEEC] cursor-pointer hover:underline">隐私政策</span>
            </div>

            {/* Mascot 33 (Right) */}
            <div className="absolute -bottom-8 -right-8 w-[160px] h-[160px] pointer-events-none overflow-hidden">
                <img 
                    src="https://i0.hdslb.com/bfs/static/jinkela/long/images/login/33_open.png" 
                    onError={(e) => e.currentTarget.src = 'https://api.dicebear.com/7.x/avataaars/svg?seed=MascotWhite'}
                    alt="33" 
                    className="w-full h-full object-contain transform -rotate-12 translate-x-4 translate-y-4"
                />
            </div>

        </div>
      </div>
    </div>
  );
};
