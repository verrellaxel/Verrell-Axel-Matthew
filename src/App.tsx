import React, { useState, useEffect } from 'react';
import { projectCategories, FALLBACK_THUMB, HERO_IMG, Project, experiences, achievements, certificateImages } from './data';

const getEmbedUrl = (url?: string) => {
  if (!url) return '';
  try {
    if (url.includes('youtube.com/watch')) {
      const u = new URL(url);
      const id = u.searchParams.get('v');
      if (id) return `https://www.youtube.com/embed/${id}`;
    } else if (url.includes('youtu.be/')) {
      const id = url.split('youtu.be/')[1].split('?')[0];
      if (id) return `https://www.youtube.com/embed/${id}`;
    } else if (url.includes('youtube.com/shorts/')) {
      const id = url.split('youtube.com/shorts/')[1].split('?')[0];
      if (id) return `https://www.youtube.com/embed/${id}`;
    }
  } catch (e) {
    return url;
  }
  return url;
};

const getYouTubeThumbnail = (url?: string) => {
  if (!url) return null;
  try {
    let id = '';
    if (url.includes('youtube.com/watch')) {
      const u = new URL(url);
      id = u.searchParams.get('v') || '';
    } else if (url.includes('youtu.be/')) {
      id = url.split('youtu.be/')[1].split('?')[0];
    } else if (url.includes('youtube.com/shorts/')) {
      id = url.split('youtube.com/shorts/')[1].split('?')[0];
    }
    if (id) {
      return `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;
    }
  } catch (e) {
    return null;
  }
  return null;
};

const Hero = () => (
  <section className="relative w-full pt-10 lg:pt-16 pb-24 z-10">
    <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
      <div className="flex items-center justify-center gap-2 mb-8 text-sm text-[#B6B8C5]">
        <span className="text-[#FF5F4A]">✦</span> Hello, I'm <span className="font-bold text-white">Verrell Axel</span>
      </div>

      <div className="relative flex flex-col items-center">
        <h1 className="font-display text-white text-center text-[72px] sm:text-[110px] md:text-[150px] lg:text-[200px] leading-[0.88]">Creative</h1>

        <div className="relative z-10 my-0 sm:-my-8 lg:-my-14 w-[240px] h-[300px] sm:w-[300px] sm:h-[380px] lg:w-[360px] lg:h-[450px] rounded-[28px] overflow-hidden bg-[#2C2F3D] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)]">
          <img 
            src={HERO_IMG} 
            alt="Verrell Axel" 
            className="w-full h-full object-cover object-top" 
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              if (!target.src.includes('KiUCsUr.jpeg')) {
                target.src = 'https://i.imgur.com/KiUCsUr.jpeg';
              }
            }}
          />
        </div>

        <h2 className="font-display text-white text-center text-[72px] sm:text-[110px] md:text-[150px] lg:text-[200px] leading-[0.88]">
          <span className="font-italic-serif text-[0.92em] text-[#E6E9F7]/95 mr-3">Video</span>Director
        </h2>
      </div>

      <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
        <div className="flex items-center gap-3 justify-center lg:justify-start">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#2C2F3D] border border-white/10 text-[10px] tracking-[0.2em] font-bold text-[#E6E9F7]">
            <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse-dot"></span> AVAILABLE FOR WORK
          </span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#B6B8C5]"><path d="M12 5v14M19 12l-7 7-7-7" /></svg>
        </div>
        <p className="text-[#B6B8C5] text-base leading-relaxed text-center">Specializing in Creative Advertising and Performance Marketing. Passionate about driving business growth through strategic visuals, resulting in 1.2M+ organic views and strong client trust. Explore the work below</p>
        <div className="flex items-center justify-center lg:justify-end gap-3">
          <a href="https://drive.google.com/file/d/1pP-aRsVB-JQZNs6QMW3OEw3H5pRU50RX/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="px-6 py-3.5 rounded-full border border-white/20 text-white text-sm font-bold tracking-wide hover:bg-white hover:text-[#22242E] transition-colors inline-flex items-center gap-2">
            Download CV
          </a>
          <a href="https://wa.me/6285723169270" className="px-6 py-3.5 rounded-full bg-[#6745FD] text-white text-sm font-bold tracking-wide hover:bg-[#5234e0] transition-colors inline-flex items-center gap-2">
            WhatsApp <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M7 7h10v10" /></svg>
          </a>
        </div>
      </div>
    </div>
  </section>
);

const Marquee = () => {
  const marqueeWords = ['Creative Director', 'Videographer', 'Video Editor', 'Graphic Designer', 'Campaign Strategist', 'Production Specialist'];
  const MarqueeBlock = () => (
    <div className="flex items-center gap-8 px-8 shrink-0 font-display text-[#E6E9F7] text-3xl">
      {marqueeWords.map((w, i) => (
        <React.Fragment key={i}>
          <span className={i % 2 !== 0 ? "font-italic-serif text-[#E6E9F7]/80" : ""}>{w}</span>
          <span className="text-[#FF5F4A]">✦</span>
        </React.Fragment>
      ))}
    </div>
  );

  return (
    <div className="w-full border-y border-white/10 py-7 overflow-hidden bg-[#22242E] relative z-10">
      <div className="whitespace-nowrap flex items-center animate-scroll-x" id="marquee">
        {[...Array(6)].map((_, i) => <MarqueeBlock key={i} />)}
      </div>
    </div>
  );
};

const ExperienceTimelineItem = ({ exp, index }: { exp: typeof experiences[0]; index: number; key?: React.Key }) => {
  const [isOpen, setIsOpen] = useState(index === 0);
  const isEven = index % 2 === 0;

  return (
    <div className={`relative flex flex-col md:flex-row items-start md:items-center ${isEven ? '' : 'md:flex-row-reverse'} group`}>
      {/* Timeline Dot */}
      <div className="absolute left-[28px] md:left-1/2 w-4 h-4 rounded-full bg-[#161821] border-2 border-[#FF5F4A] md:-translate-x-1/2 mt-1.5 md:mt-0 z-10 group-hover:bg-[#FF5F4A] group-hover:scale-125 transition-all duration-300 shadow-[0_0_0_4px_#161821]"></div>
      
      {/* Date / Location - Desktop */}
      <div className={`hidden md:block w-1/2 ${isEven ? 'pr-16 text-right' : 'pl-16 text-left'} transition-transform duration-500 group-hover:-translate-y-1`}>
         <div className="text-xl lg:text-2xl font-display font-medium text-[#6745FD]">{exp.period}</div>
         <div className="text-sm tracking-wide text-white/50 font-medium mt-1">{exp.location}</div>
      </div>

      {/* Content Card */}
      <div className={`w-full md:w-1/2 pl-[72px] md:pl-0 ${isEven ? 'md:pl-16' : 'md:pr-16'}`}>
         <div 
           className="relative flex flex-col items-start bg-white/5 border border-white/10 p-6 md:p-8 rounded-2xl hover:border-[#6745FD]/50 transition-all duration-500 cursor-pointer"
           onClick={() => setIsOpen(!isOpen)}
         >
           {/* Mobile Date */}
           <div className="md:hidden mb-4">
             <div className="text-sm font-display font-medium text-[#6745FD]">{exp.period}</div>
             <div className="text-xs tracking-wide text-white/50 font-medium mt-1">{exp.location}</div>
           </div>
           
           <div className="flex items-start justify-between w-full gap-4">
             <div>
               <h3 className="text-xl md:text-2xl font-display font-medium text-[#E6E9F7] mb-1 group-hover:text-[#FF5F4A] transition-colors text-left">{exp.company}</h3>
               <p className="text-[#B6B8C5] font-medium text-left">{exp.role}</p>
               {exp.companyDescription && (
                 <p className="text-xs md:text-sm text-[#B6B8C5]/80 mt-2 text-left leading-relaxed font-normal">
                   {exp.companyDescription}
                 </p>
               )}
             </div>
             <svg className={`shrink-0 mt-1 w-6 h-6 text-[#B6B8C5] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
             </svg>
           </div>
           
           <div className={`w-full transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-[1000px] opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
             <ul className="flex flex-col gap-3 text-left">
               {exp.points.map((point, j) => (
                 <li key={j} className="text-[#B6B8C5] text-sm md:text-base leading-relaxed flex items-start gap-4 border-t border-white/5 pt-3 first:border-0 first:pt-0">
                   <span className="text-[#FF5F4A] shrink-0 mt-1.5 leading-none text-[10px]">✦</span>
                   <span>{point}</span>
                 </li>
               ))}
             </ul>
           </div>
         </div>
      </div>
    </div>
  );
};

const ExperienceSection = () => (
  <section id="experience" className="w-full pt-20 pb-10 lg:py-36 relative z-10 bg-[#161821]">
    <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
      <div className="mb-20 text-center">
        <div className="text-[11px] tracking-[0.3em] font-bold text-[#FF5F4A] mb-4">— WORK EXPERIENCE</div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-[#E6E9F7] tracking-[-0.02em] leading-[1.1]">
          Professional <span className="font-italic-serif text-[#E6E9F7]/80 inline-block font-thin">Journey</span>
        </h2>
      </div>

      <div className="relative max-w-5xl mx-auto py-10">
        {/* Vertical Line */}
        <div className="absolute left-[35px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 md:-translate-x-1/2"></div>

        <div className="flex flex-col gap-12 md:gap-24">
          {experiences.map((exp, i) => (
            <ExperienceTimelineItem key={i} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

const AchievementsSection = ({ onOpenCert }: { onOpenCert: (img: string) => void }) => (
  <section id="achievements" className="w-full pt-10 pb-20 lg:py-36 relative z-10 bg-[#161821]">
    <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-16 lg:gap-24">
      {/* Left Column: Title and List */}
      <div className="lg:w-[35%] flex flex-col gap-12">
        <div>
          <div className="text-[11px] tracking-[0.3em] font-bold text-[#FF5F4A] mb-4">— AWARDS & RECOGNITION</div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-[#E6E9F7] tracking-[-0.02em] leading-[1.1]">
            Outstanding <span className="font-italic-serif text-[#E6E9F7]/80 inline-block font-thin">Achievements</span>
          </h2>
        </div>
        
        <div className="flex flex-col gap-8">
          {achievements.map((ach, i) => (
            <div key={i} className="flex flex-col gap-2 pb-8 border-b border-white/10 last:border-0 last:pb-0 relative group">
              <div className="text-2xl md:text-3xl font-display font-bold text-[#FF5F4A] transition-transform duration-300 group-hover:-translate-y-1">
                {ach.year}
              </div>
              <div className="transition-transform duration-300 group-hover:translate-x-2">
                <h3 className="text-lg md:text-xl font-display font-medium text-[#E6E9F7] mb-1">{ach.title}</h3>
                <div className="text-xs md:text-sm tracking-wide text-[#B6B8C5] uppercase font-bold">{ach.issuer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Right Column: 6 Certificate Placeholders */}
      <div className="lg:w-[65%]">
        <div className="grid grid-cols-2 gap-4 md:gap-6 bg-white/[0.02] p-6 lg:p-10 rounded-[2rem] border border-white/5 h-full content-start">
          {certificateImages.map((imgUrl, i) => (
            <div 
              key={i} 
              className="aspect-[4/3] bg-white/5 border border-white/10 rounded-xl flex items-center justify-center overflow-hidden hover:border-[#6745FD]/50 transition-colors duration-300 cursor-pointer group"
              onClick={() => onOpenCert(imgUrl)}
            >
              <img src={imgUrl} alt={`Certificate ${i + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Works = ({ openModal }: { openModal: (ci: number, pi: number) => void }) => (
  <section id="works" className="w-full py-24 lg:py-36 relative z-10">
    <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
      <div className="relative mb-20 flex items-end justify-between">
        <div>
          <div className="text-[11px] tracking-[0.3em] font-bold text-[#FF5F4A] mb-4">— SELECTED WORKS</div>
          <h2 className="font-display text-white text-[100px] sm:text-[160px] lg:text-[260px] leading-[0.85]">Work</h2>
          <div className="font-display text-[100px] sm:text-[160px] lg:text-[260px] leading-[0.85] -mt-[0.85em] text-stroke-cloud select-none pointer-events-none">Work</div>
        </div>
        <p className="hidden lg:block max-w-sm text-[#B6B8C5] text-base leading-relaxed pb-6 text-right">A curated collection of my best directorial and video editorial work across various focus disciplines.</p>
      </div>
      <div id="categories" className="space-y-28 lg:space-y-40">
        {projectCategories.map((cat, ci) => {
          const titleWords = cat.title.split(' ');
          const titleHtml = titleWords.map((w, i) => (
            <React.Fragment key={i}>
              {i === titleWords.length - 1 ? (
                <span className="font-italic-serif text-[#E6E9F7] mr-2">{w}</span>
              ) : (
                <span>{w} </span>
              )}
            </React.Fragment>
          ));

          return (
            <div key={ci} className="scroll-mt-32">
              <div className="mb-12 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 pb-8 border-b border-white/10">
                <div className="flex items-baseline gap-6">
                  <span className="font-display text-[56px] lg:text-[80px] text-[#6745FD] leading-none">{cat.id}</span>
                  <div>
                    <h3 className="font-display text-[36px] lg:text-[56px] text-white leading-[0.95]">{titleHtml}</h3>
                    <p className="text-[11px] tracking-[0.25em] font-bold text-[#FF5F4A] uppercase mt-2">{cat.focus}</p>
                  </div>
                </div>
                <div className="text-right text-[#B6B8C5] text-sm">
                  {cat.projects.length} {cat.projects.length > 1 ? 'projects' : 'project'}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-x-16 lg:gap-y-20">
                {cat.projects.map((p, pi) => {
                  const thumb = p.thumbnail 
                    ? p.thumbnail 
                    : (p.customAssets && p.customAssets[0]?.linkUrl 
                      ? getYouTubeThumbnail(p.customAssets[0].linkUrl) || FALLBACK_THUMB
                      : FALLBACK_THUMB);

                  return (
                  <button key={pi} onClick={() => openModal(ci, pi)} className="group text-left flex flex-col gap-5">
                    <div className="relative w-full aspect-video rounded-3xl overflow-hidden bg-[#2C2F3D]">
                      <img 
                        src={thumb} 
                        alt={p.title} 
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.04] transition-all duration-700 ease-out" 
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          if (target.src.includes('maxresdefault.jpg')) {
                            target.src = target.src.replace('maxresdefault.jpg', 'hqdefault.jpg');
                          } else if (target.src.includes('hqdefault.jpg')) {
                            target.src = target.src.replace('hqdefault.jpg', '0.jpg');
                          } else if (target.src.includes('0.jpg') || target.src.includes('mqdefault.jpg')) {
                            target.src = FALLBACK_THUMB;
                          }
                        }}
                      />
                      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
                      <div className="absolute bottom-5 right-5 w-14 h-14 rounded-full bg-[#E6E9F7] text-[#22242E] flex items-center justify-center shadow-xl translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M7 7h10v10" /></svg>
                      </div>
                    </div>
                    <div className="flex items-start justify-between gap-6 px-1">
                      <div className="flex-1 min-w-0">
                        <h3 className="font-display text-[28px] sm:text-[34px] text-white">{p.title}</h3>
                        <p className="mt-2 text-[#B6B8C5] text-sm leading-relaxed line-clamp-2">{p.description}</p>
                      </div>
                      <div className="shrink-0 mt-2 w-10 h-10 rounded-full border border-[#E6E9F7]/20 text-[#E6E9F7] flex items-center justify-center group-hover:bg-[#6745FD] group-hover:border-[#6745FD] group-hover:text-white transition-all duration-300">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M7 7h10v10" /></svg>
                      </div>
                    </div>
                  </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

const Modal = ({ project, onClose }: { project: Project, onClose: () => void }) => {
  const [playingAssets, setPlayingAssets] = useState<Record<number, boolean>>({});
  if (!project) return null;
  const assetsList = project.customAssets || Array.from({length: project.videos}, (_, i) => ({ type: 'video', orientation: 'horizontal', title: `Case Study Video ${i+1}` }));

  return (
    <div id="modal" className="fixed inset-0 z-[100] bg-[#22242E]/90 backdrop-blur-md flex items-center justify-center p-0 sm:p-6" onClick={(e) => { if ((e.target as any).id === 'modal') onClose(); }}>
      <div className="relative w-full h-full sm:h-auto sm:max-h-[92vh] max-w-7xl bg-[#22242E] sm:border border-white/10 sm:rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-y-auto md:overflow-hidden">
        <button onClick={onClose} className="fixed sm:absolute top-4 right-4 z-[110] w-11 h-11 bg-[#2C2F3D] hover:bg-[#FF5F4A] border border-white/10 hover:border-[#FF5F4A] rounded-full text-white transition-all flex items-center justify-center" aria-label="Close">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12" /></svg>
        </button>
        <div className="order-2 md:order-1 w-full md:w-[62%] md:h-[92vh] bg-[#1B1D26] p-5 sm:p-8 lg:p-10 md:overflow-y-auto hide-scrollbar">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6 pb-20 md:pb-0">
            {assetsList.map((a: any, i: number) => {
              const colSpan = a.orientation === 'horizontal' ? 'col-span-1 sm:col-span-2' : 'col-span-1';
              const aspect = a.aspect || (a.orientation === 'horizontal' ? 'aspect-video' : 'aspect-[9/16]');

              let inner;
              if (a.linkUrl) {
                inner = a.type === 'video' ? (
                  a.thumbUrl && !playingAssets[i] ? (
                    <div className="w-full h-full absolute inset-0 cursor-pointer group" onClick={() => setPlayingAssets(prev => ({...prev, [i]: true}))}>
                      <img src={a.thumbUrl} alt={a.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 flex items-center justify-center transition-all">
                        <div className="w-16 h-16 rounded-full bg-[#E6E9F7] text-[#22242E] flex items-center justify-center shadow-xl scale-90 group-hover:scale-100 transition-transform">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <iframe src={getEmbedUrl(a.linkUrl) + (a.thumbUrl ? '?autoplay=1' : '')} title={a.title} className="w-full h-full absolute inset-0 border-0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                  )
                ) : (
                  <img src={a.linkUrl} alt={a.title} className={aspect === 'aspect-auto' ? "w-full h-auto object-contain block relative" : "w-full h-full object-cover absolute inset-0"} />
                );
              } else if (a.type === 'video') {
                inner = (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-[#E6E9F7] text-[#22242E] flex items-center justify-center">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                    </div>
                  </div>
                );
              } else {
                inner = (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-[10px] tracking-[0.25em] font-bold text-[#B6B8C5] border border-white/20 px-3 py-1 rounded-full">IMAGE PANEL</div>
                  </div>
                );
              }

              return (
                <div key={i} className={`flex flex-col gap-3 ${colSpan}`}>
                  <div className={`w-full ${aspect} rounded-2xl bg-[#2C2F3D] border border-white/5 overflow-hidden relative group`}>
                    {inner}
                    <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#22242E]/80 backdrop-blur rounded-full text-[10px] font-bold text-[#E6E9F7] tracking-widest">{String(i+1).padStart(2, '0')}</div>
                  </div>
                  <span className="text-xs font-semibold text-[#B6B8C5] tracking-wide px-1">{a.title}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="order-1 md:order-2 w-full md:w-[38%] p-6 sm:p-10 lg:p-12 flex flex-col bg-[#22242E] md:h-[92vh] md:overflow-y-auto hide-scrollbar">
          <div className="text-[10px] tracking-[0.3em] font-bold text-[#FF5F4A] mb-5">— PROJECT</div>
          <h2 className="font-display text-white text-[40px] sm:text-[52px] leading-[0.95] mb-8">{project.title}</h2>
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((t, i) => (
              <span key={i} className="px-3 py-1.5 rounded-full bg-[#2C2F3D] border border-white/10 text-[10px] tracking-[0.18em] font-bold text-[#E6E9F7]">{t}</span>
            ))}
          </div>
          {project.role && (
            <div className="mb-8">
              <div className="text-[10px] tracking-[0.25em] font-bold text-[#B6B8C5] mb-2">ROLE</div>
              <div className="text-[#E6E9F7] font-semibold">{project.role}</div>
            </div>
          )}
          <div className="h-px divider-cloud mb-6"></div>
          <p className="text-[#B6B8C5] text-base leading-relaxed whitespace-pre-line mb-8">{project.description}</p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full">
            {project.externalLink && (
              <a 
                href={project.externalLink.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full sm:w-fit justify-center bg-[#FF5F4A] hover:bg-white hover:text-[#FF5F4A] text-white text-xs sm:text-sm font-bold tracking-widest px-8 py-4 rounded-full transition-colors flex items-center gap-3"
              >
                {project.externalLink.label}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            )}
            
            <button 
              onClick={onClose}
              className="md:hidden w-full sm:w-fit justify-center py-4 px-8 rounded-full border border-white/20 text-white text-xs sm:text-sm font-bold tracking-[0.2em] hover:bg-white hover:text-[#22242E] transition-colors"
            >
              RETURN TO HOMEPAGE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const CTA = () => (
  <section id="contact" className="relative w-full bg-[#E6E9F7] text-[#22242E] py-28 lg:py-40 overflow-hidden">
    <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative">
      <div className="text-[11px] tracking-[0.3em] font-bold text-[#FF5F4A] mb-6 text-center">— LET'S COLLABORATE</div>
      <h2 className="font-display text-center text-[#22242E] text-[72px] sm:text-[120px] md:text-[160px] lg:text-[200px] leading-[0.88]">Let's Build</h2>
      <h2 className="font-display text-center text-[72px] sm:text-[120px] md:text-[160px] lg:text-[200px] leading-[0.88] mt-2">
        <span className="font-italic-serif text-[#22242E]">Something</span> <span className="text-[#6745FD]">Impactful.</span>
      </h2>
      <p className="mt-10 text-center text-[#22242E]/70 text-lg max-w-2xl mx-auto leading-relaxed">Collaborate to craft visual experiences that engage your audience and elevate your brand.</p>
      <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
        <a href="https://wa.me/6285723169270" className="px-8 py-4 rounded-full bg-[#22242E] text-white font-bold text-base hover:bg-[#6745FD] transition-colors inline-flex items-center gap-2">
          Contact via WhatsApp
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M7 7h10v10" /></svg>
        </a>
        <a href="mailto:verrellam@gmail.com" className="px-8 py-4 rounded-full border-2 border-[#22242E] text-[#22242E] font-bold text-base hover:bg-[#22242E] hover:text-white transition-colors">Send an Email</a>
      </div>
      <div className="absolute -bottom-10 left-0 right-0 font-display text-center text-[180px] sm:text-[280px] lg:text-[380px] leading-none text-[#22242E]/[0.04] select-none pointer-events-none">VERRELL</div>
    </div>
  </section>
);

const Footer = () => (
  <footer id="socials" className="w-full bg-[#22242E] border-t border-white/10 py-12">
    <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-2 font-display text-lg text-white">
        <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#FF5F4A]"></span> VERRELL AXEL
      </div>
      <div className="text-xs text-[#B6B8C5] tracking-[0.18em] font-semibold">© {new Date().getFullYear()} ALL RIGHTS RESERVED</div>
      <div className="flex items-center gap-3">
        <a href="https://www.instagram.com/verrellaxel_/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white hover:bg-[#FF5F4A] hover:border-[#FF5F4A] transition-colors" aria-label="Instagram">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01"></path></svg>
        </a>
        <a href="https://www.linkedin.com/in/verrellaxel/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white hover:bg-[#6745FD] hover:border-[#6745FD] transition-colors" aria-label="LinkedIn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z"></path></svg>
        </a>
        <a href="mailto:verrellam@gmail.com" className="px-4 h-10 rounded-full border border-white/15 flex items-center text-xs font-bold tracking-[0.18em] text-white hover:bg-white hover:text-[#22242E] transition-colors">EMAIL</a>
      </div>
    </div>
  </footer>
);

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  const openModal = (categoryIndex: number, projectIndex: number) => {
    setSelectedProject(projectCategories[categoryIndex].projects[projectIndex]);
    setModalOpen(true);
    window.history.pushState({ modalOpen: true }, '');
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
    if (window.history.state?.modalOpen) {
      window.history.back();
    }
  };
  
  const openCertModal = (imgUrl: string) => {
    setSelectedCert(imgUrl);
    window.history.pushState({ modalOpen: true }, '');
  };
  
  const closeCertModal = () => {
    setSelectedCert(null);
    if (window.history.state?.modalOpen) {
      window.history.back();
    }
  };

  useEffect(() => {
    if (modalOpen || selectedCert) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
  }, [modalOpen, selectedCert]);

  useEffect(() => {
    const handlePopState = () => {
      setModalOpen(false);
      setSelectedProject(null);
      setSelectedCert(null);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
        closeCertModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <div id="top"></div>
      <Hero />
      <Marquee />
      <ExperienceSection />
      <AchievementsSection onOpenCert={openCertModal} />
      <Works openModal={openModal} />
      <CTA />
      <Footer />
      {modalOpen && selectedProject && <Modal project={selectedProject} onClose={closeModal} />}
      
      {selectedCert && (
        <div className="fixed inset-0 z-[120] bg-[#22242E]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6" onClick={closeCertModal}>
          <button onClick={closeCertModal} className="absolute top-4 right-4 z-[130] w-11 h-11 bg-[#2C2F3D] hover:bg-[#FF5F4A] border border-white/10 hover:border-[#FF5F4A] rounded-full text-white transition-all flex items-center justify-center" aria-label="Close">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12" /></svg>
          </button>
          <div className="relative max-w-5xl max-h-[90vh] w-full h-full flex flex-col items-center justify-center pointer-events-none">
            <img src={selectedCert} alt="Certificate" className="max-w-full max-h-[75vh] object-contain pointer-events-auto shadow-2xl rounded-lg" onClick={(e) => e.stopPropagation()} />
            
            <button 
              onClick={(e) => { e.stopPropagation(); closeCertModal(); }}
              className="md:hidden mt-8 w-full max-w-[300px] pointer-events-auto py-4 rounded-full border border-white/20 text-white text-xs font-bold tracking-[0.2em] hover:bg-white hover:text-[#22242E] transition-colors bg-[#22242E]/80 backdrop-blur"
            >
              RETURN TO HOMEPAGE
            </button>
          </div>
        </div>
      )}
    </>
  );
}
