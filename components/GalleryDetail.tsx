import React from 'react';
import { GallerySeries } from '../types';
import { MapPin, Calendar, ArrowLeft } from 'lucide-react';

interface GalleryDetailProps {
  series: GallerySeries;
  onBack: () => void;
}

const GalleryDetail: React.FC<GalleryDetailProps> = ({ series, onBack }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20 animate-in fade-in duration-500 pt-16">
      {/* Back button */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 mb-8 text-nature-400 hover:text-nature-300 transition-colors font-mono text-sm group"
      >
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
        <span>Return to Gallery</span>
      </button>

      {/* Gallery header */}
      <div className="mb-12">
        <div className="glass-card p-8 md:py-6 rounded-3xl">
          <div className="flex items-center gap-2 text-nature-400 font-mono text-xs font-bold tracking-widest bg-nature-100/50 w-fit px-2 py-1 rounded border border-nature-200/50 mb-4">
            <Calendar size={12} />
            <span>{series.date}</span>
          </div>

          <h1 className="text-5xl font-fantasy font-bold text-slate-800">
            {series.title}
          </h1>

          <div className="flex items-center gap-2 text-nature-300 font-mono text-sm">
            <MapPin size={16} />
            <span>{series.location}</span>
          </div>
        </div>
      </div>

      {/* Photo grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {series.photos.map((photo) => (
          <div key={photo.id} className="group">
            <div className="glass-card rounded-2xl overflow-hidden p-2 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <div className="aspect-square overflow-hidden rounded-xl relative">
                <img
                  src={photo.url}
                  alt={photo.caption || series.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Gradient overlay on hover */}
                {photo.caption && (
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="p-4 text-sm text-white font-mono">
                      {photo.caption}
                    </p>
                  </div>
                )}
              </div>
              {photo.caption && (
                <p className="mt-3 px-2 pb-2 text-sm text-slate-600 font-mono line-clamp-2">
                  {photo.caption}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryDetail;
