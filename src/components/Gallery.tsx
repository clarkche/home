import React from 'react';
import { GallerySeries } from '../types';
import { MapPin, Calendar, Image as ImageIcon } from 'lucide-react';
import SpotlightCard from './SpotlightCard';
import TiltedCard from './TiltedCard';

interface GalleryProps {
  series: GallerySeries[];
  onSelectSeries: (series: GallerySeries) => void;
}

const Gallery: React.FC<GalleryProps> = ({ series, onSelectSeries }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20 animate-in fade-in duration-500 pt-24">
      {/* Header */}
      <div className="mb-20 text-center">
        <span className="px-3 py-1 rounded-full glass border-nature-200 text-xs font-mono text-nature-400 uppercase tracking-widest mb-4 inline-block">
          Chronicles
        </span>
        <h2 className="text-5xl font-fantasy font-bold text-slate-800 mb-4 drop-shadow-sm">
          Visual Stories
        </h2>
        <p className="text-slate-500 font-mono">Moments captured across time and space.</p>
      </div>

      {/* Series Timeline */}
      <div className="space-y-16">
        {series.map((item, index) => (
          <div
            key={item.id}
            className="relative"
          >
            {/* Timeline connector */}
            {index < series.length - 1 && (
              <div className="absolute left-8 top-full h-16 w-0.5 bg-gradient-to-b from-nature-300/50 to-transparent -z-10" />
            )}

            {/* Timeline dot */}
            <div className="absolute left-6 top-8 w-5 h-5 rounded-full bg-nature-400 border-4 border-white shadow-lg z-20" />

            {/* Content */}
            <div className="ml-20">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Cover Image */}
                <div className="w-full md:w-2/5">
                  <TiltedCard scale={1.03} rotationFactor={6} className="rounded-2xl shadow-2xl">
                    <div className="relative rounded-2xl overflow-hidden border border-white/50 bg-white aspect-[4/3] glass-card p-1 group cursor-pointer"
                         onClick={() => onSelectSeries(item)}>
                      <div className="overflow-hidden rounded-xl w-full h-full relative">
                        <img
                          src={item.coverPhoto}
                          alt={item.title}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                        />
                        {/* Overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-nature-400/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                          <div className="flex items-center gap-2 text-white font-mono text-sm font-bold">
                            <ImageIcon size={16} />
                            <span>{item.photos.length} Photos</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TiltedCard>
                </div>

                {/* Details */}
                <div className="flex-1">
                  <SpotlightCard className="glass-card p-8 h-full">
                    <div className="space-y-4">
                      {/* Date badge */}
                      <div className="flex items-center gap-2 text-nature-400 font-mono text-xs font-bold tracking-widest bg-nature-100/50 w-fit px-2 py-1 rounded border border-nature-200/50">
                        <Calendar size={12} />
                        <span>{item.date}</span>
                      </div>

                      {/* Title */}
                      <h3 className="text-3xl font-fantasy font-bold text-slate-800 leading-tight">
                        {item.title}
                      </h3>

                      {/* Location */}
                      <div className="flex items-center gap-2 text-nature-300 font-mono text-sm">
                        <MapPin size={16} />
                        <span>{item.location}</span>
                      </div>

                      {/* Description */}
                      <p className="text-slate-600 leading-relaxed border-l-2 border-warm-accent/30 pl-4">
                        {item.description}
                      </p>

                      {/* View button */}
                      <button
                        onClick={() => onSelectSeries(item)}
                        className="mt-4 flex items-center gap-2 px-5 py-2.5 bg-nature-400 text-white rounded-xl transition-all hover:bg-nature-400/90 shadow-lg shadow-nature-400/20 hover:shadow-nature-400/40 hover:-translate-y-0.5 group"
                      >
                        <ImageIcon size={18} />
                        <span className="font-mono text-sm font-semibold">View Gallery</span>
                      </button>
                    </div>
                  </SpotlightCard>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
