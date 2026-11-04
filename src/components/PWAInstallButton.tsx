import React from 'react';
import { Download, Share2, PlusSquare, X, CheckCircle, Smartphone } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';

interface PWAInstallButtonProps {
  variant?: 'header' | 'mobile' | 'floating' | 'banner';
  className?: string;
  onInstalled?: () => void;
}

export function PWAInstallModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-sm w-full p-6 shadow-2xl border border-[#DCEAF5] relative animate-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-2xl bg-[#F5FAFE] border border-[#DCEAF5] flex items-center justify-center p-2 mb-3 shadow-sm">
            <img
              src="/assets/aistudio/image_d2a2e07d.png"
              alt="CompConn Icon"
              className="w-10 h-10 object-contain"
            />
          </div>

          <h3 className="text-lg font-bold text-[#062B55]">Install CompConn App</h3>
          <p className="text-xs text-[#6F8299] mt-1 mb-5">
            Add CompConn to your home screen for quick offline access and faster loading.
          </p>

          <div className="w-full space-y-3 text-left bg-[#F8FAFC] border border-[#E2E8F0] p-4 rounded-xl text-xs text-[#4B6380]">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-[#087FEA]/10 text-[#087FEA] font-bold flex items-center justify-center shrink-0 text-[11px]">
                1
              </div>
              <div className="flex-1 pt-0.5">
                Tap the <span className="font-semibold text-[#062B55]">Share</span> button in Safari's bottom toolbar (<Share2 className="w-3.5 h-3.5 inline text-[#087FEA]" />).
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-[#087FEA]/10 text-[#087FEA] font-bold flex items-center justify-center shrink-0 text-[11px]">
                2
              </div>
              <div className="flex-1 pt-0.5">
                Scroll down and select <span className="font-semibold text-[#062B55]">"Add to Home Screen"</span> (<PlusSquare className="w-3.5 h-3.5 inline text-[#087FEA]" />).
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-[#087FEA]/10 text-[#087FEA] font-bold flex items-center justify-center shrink-0 text-[11px]">
                3
              </div>
              <div className="flex-1 pt-0.5">
                Tap <span className="font-semibold text-[#062B55]">Add</span> in the top right to complete installation.
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="mt-5 w-full bg-[#087FEA] hover:bg-[#0770D0] text-white text-xs font-semibold py-2.5 rounded-full transition-colors cursor-pointer shadow-sm"
          >
            Got It
          </button>
        </div>
      </div>
    </div>
  );
}

export function PWAInstallButton({ variant = 'header', className = '', onInstalled }: PWAInstallButtonProps) {
  const { canInstall, isInstalled, showIOSPrompt, promptInstall, closeIOSPrompt } = usePWAInstall();

  // If already running standalone or installed, don't show the header button to keep UI clean
  if (isInstalled && variant !== 'mobile') {
    return null;
  }

  // Handle click
  const handleClick = () => {
    promptInstall();
    if (onInstalled) onInstalled();
  };

  return (
    <>
      {variant === 'header' && (
        <button
          onClick={handleClick}
          title="Install CompConn App on your device"
          className={`inline-flex items-center gap-1.5 text-[13px] font-semibold px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full border border-[#DCEAF5] text-[#062B55] hover:border-[#087FEA] hover:text-[#087FEA] bg-[#F5FAFE]/80 hover:bg-[#EAF6FF] transition-all duration-200 cursor-pointer shadow-xs ${className}`}
        >
          <Download className="w-3.5 h-3.5 text-[#087FEA]" />
          <span className="hidden md:inline">Install App</span>
          <span className="md:hidden">Install</span>
        </button>
      )}

      {variant === 'mobile' && (
        <button
          onClick={handleClick}
          className={`w-full flex items-center justify-center gap-2 border border-[#DCEAF5] text-[#062B55] hover:border-[#087FEA] hover:text-[#087FEA] bg-[#F8FAFC] hover:bg-[#EAF6FF] text-[14px] font-semibold py-2.5 rounded-full transition-colors cursor-pointer shadow-xs ${className}`}
        >
          {isInstalled ? (
            <>
              <CheckCircle className="w-4 h-4 text-emerald-500" />
              <span>CompConn App Installed</span>
            </>
          ) : (
            <>
              <Download className="w-4 h-4 text-[#087FEA]" />
              <span>Install CompConn App</span>
            </>
          )}
        </button>
      )}

      {variant === 'floating' && !isInstalled && canInstall && (
        <div className="fixed bottom-5 right-5 z-40 hidden sm:flex items-center gap-3 bg-white p-3 pr-4 rounded-2xl shadow-[0_10px_25px_rgba(6,43,85,0.15)] border border-[#DCEAF5] animate-in slide-in-from-bottom-5 duration-300">
          <div className="w-10 h-10 rounded-xl bg-[#F5FAFE] border border-[#DCEAF5] flex items-center justify-center p-1.5 shrink-0">
            <img src="/assets/aistudio/image_d2a2e07d.png" alt="CompConn Logo" className="w-7 h-7 object-contain" />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-bold text-[#062B55]">Install CompConn</span>
            <span className="text-[11px] text-[#6F8299]">Fast, offline-ready desktop & mobile app</span>
          </div>
          <button
            onClick={handleClick}
            className="ml-2 bg-[#087FEA] hover:bg-[#0770D0] text-white text-xs font-semibold px-3 py-1.5 rounded-full transition-colors cursor-pointer shadow-xs"
          >
            Install
          </button>
        </div>
      )}

      {/* iOS Modal instructions */}
      <PWAInstallModal isOpen={showIOSPrompt} onClose={closeIOSPrompt} />
    </>
  );
}
