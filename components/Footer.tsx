import React from 'react';
import { LazyImage } from './LazyImage';

const FOOTER_LINKS = [
  { title: 'bilibili', items: ['关于我们', '联系我们', '用户协议', '隐私政策', '加入我们', '友情链接', '隐私协议', 'bilibili认证'] },
  { title: '传送门', items: ['帮助中心', '高级弹幕', '活动专题页', '侵权申诉', '活动中心', '用户反馈论坛', '壁纸站', '名人堂'] },
];

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#F6F7F8] pt-10 pb-10 mt-12 text-[#61666D]">
      <div className="max-w-[1700px] mx-auto px-4 md:px-6">
        
        {/* Top Section: Links & Download */}
        <div className="flex flex-col lg:flex-row justify-between gap-10 border-b border-gray-200 pb-8 mb-8">
          
          {/* Left: Link Columns */}
          <div className="flex flex-1 gap-12 md:gap-24">
            {FOOTER_LINKS.map((col, idx) => (
              <div key={idx}>
                <h3 className="text-[14px] text-[#18191C] mb-4 font-medium">{col.title}</h3>
                <ul className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-2">
                  {col.items.map((item, i) => (
                    <li key={i} className="text-[12px] hover:text-[#00AEEC] cursor-pointer transition-colors whitespace-nowrap">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Right: Download Section */}
          <div className="flex gap-8 shrink-0">
             <div className="flex flex-col items-center gap-2 text-center group cursor-pointer">
                <div className="w-[80px] h-[80px] bg-white rounded flex items-center justify-center p-1">
                   <img src="https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=https://dl.hdslb.com/mobile/latest/iBiliPlayer-html5_app_download.apk" alt="Download" className="w-full h-full opacity-80 group-hover:opacity-100" />
                </div>
                <span className="text-[12px] group-hover:text-[#00AEEC]">下载客户端</span>
             </div>
             <div className="flex flex-col items-center gap-2 text-center group cursor-pointer">
                <div className="w-[80px] h-[80px] bg-white rounded flex items-center justify-center p-1">
                   <img src="https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=https://www.bilibili.com" alt="Weibo" className="w-full h-full opacity-80 group-hover:opacity-100" />
                </div>
                <span className="text-[12px] group-hover:text-[#00AEEC]">新浪微博</span>
             </div>
             <div className="flex flex-col items-center gap-2 text-center group cursor-pointer">
                <div className="w-[80px] h-[80px] bg-white rounded flex items-center justify-center p-1">
                   <img src="https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=weixin://dl/chat" alt="WeChat" className="w-full h-full opacity-80 group-hover:opacity-100" />
                </div>
                <span className="text-[12px] group-hover:text-[#00AEEC]">官方微信</span>
             </div>
          </div>
        </div>

        {/* Bottom Section: Legal Info */}
        <div className="flex flex-col md:flex-row gap-4 text-[12px] leading-relaxed">
            {/* Partners/Badges */}
            <div className="flex flex-wrap gap-2 shrink-0">
               {[1,2,3].map(i => (
                  <div key={i} className="w-[80px] h-[30px] bg-white border border-gray-200 flex items-center justify-center">
                     <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
                  </div>
               ))}
            </div>

            {/* Text Content */}
            <div className="flex-1 space-y-2">
               <p className="flex flex-wrap gap-4">
                  <span className="hover:text-[#18191C] cursor-pointer">营业执照</span>
                  <span className="hover:text-[#18191C] cursor-pointer">信息网络传播视听节目许可证：0910417</span>
                  <span className="hover:text-[#18191C] cursor-pointer">网络文化经营许可证 沪网文【2019】3804-274号</span>
                  <span className="hover:text-[#18191C] cursor-pointer">广播电视节目制作经营许可证：（沪）字第1248号</span>
                  <span className="hover:text-[#18191C] cursor-pointer">增值电信业务经营许可证 沪B2-20100043</span>
               </p>
               <p className="flex flex-wrap gap-4">
                  <span className="hover:text-[#18191C] cursor-pointer">互联网ICP备案：沪ICP备13002172号-3</span>
                  <span className="hover:text-[#18191C] cursor-pointer">出版物经营许可证 沪批字第U6699号</span>
                  <span className="hover:text-[#18191C] cursor-pointer">互联网药品信息服务资格证 沪-非经营性-2016-0143</span>
                  <span className="hover:text-[#18191C] cursor-pointer">营业性演出许可证 沪市文旅演（经）00-2253</span>
               </p>
               <p>
                  违法和不良信息举报：400-620-1123 &nbsp;&nbsp; 举报邮箱：jubao@bilibili.com &nbsp;&nbsp; 上海互联网举报中心
               </p>
               <p>
                  沪公网安备 31011002002436号 &nbsp;|&nbsp; 儿童色情信息举报专区 &nbsp;|&nbsp; 扫黄打非举报
               </p>
               <p className="pt-2 text-[#9499A0]">
                  网上有害信息举报专区：<span className="text-[#00AEEC]">中国互联网违法和不良信息举报中心</span>
               </p>
               <p className="pt-2 text-[#9499A0]">
                  亲爱的市民朋友，上海警方反诈劝阻电话“96110”系专门针对避免您财产被骗受损而设，请您一旦收到来电，立即接听。
               </p>
               <p className="pt-2">
                  公司名称：上海宽娱数码科技有限公司 | 公司地址：上海市杨浦区政立路485号 | 电话：021-25099888
               </p>
            </div>
        </div>

      </div>
    </footer>
  );
};