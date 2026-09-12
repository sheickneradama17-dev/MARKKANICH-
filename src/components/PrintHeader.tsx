import React from 'react';
import { BUSINESS_INFO } from '../data/businessPlanData';

interface PrintHeaderProps {
  documentTitle: string;
  documentSubtitle?: string;
  referenceNumber?: string;
}

export const PrintHeader: React.FC<PrintHeaderProps> = ({
  documentTitle,
  documentSubtitle,
  referenceNumber = 'DOC-CIE-2026-09'
}) => {
  return (
    <div className="hidden print:block mb-8 pb-4 border-b-2 border-slate-900 text-slate-900 avoid-break">
      <div className="flex justify-between items-start gap-4">
        {/* Left: Logo & Company */}
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-lg bg-emerald-800 text-white flex items-center justify-center font-bold text-lg">
            VS
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-base tracking-tight text-slate-900">
                {BUSINESS_INFO.company}
              </span>
              <span className="text-slate-400 font-normal">|</span>
              <span className="font-bold text-emerald-800 text-sm">
                {BUSINESS_INFO.name}
              </span>
            </div>
            <p className="text-[10px] text-slate-600">
              Solution SaaS de Relevé Mobile &amp; Détection Anti-Fraude Compteurs CIE
            </p>
            <p className="text-[10px] text-slate-500 font-mono mt-0.5">
              {BUSINESS_INFO.company} • {BUSINESS_INFO.contactPerson}, {BUSINESS_INFO.title} • {BUSINESS_INFO.phoneWhatsApp} • {BUSINESS_INFO.email} • {BUSINESS_INFO.website}
            </p>
            <p className="text-[9px] text-slate-500 italic mt-0.5">
              Établi &amp; Certifié par : {BUSINESS_INFO.certifiedBy} • {BUSINESS_INFO.location}
            </p>
          </div>
        </div>

        {/* Right: Document Reference & Confidentiality */}
        <div className="text-right text-[10px] space-y-0.5">
          <span className="inline-block px-2 py-0.5 bg-red-100 text-red-900 border border-red-300 rounded font-bold uppercase tracking-wider text-[9px]">
            {BUSINESS_INFO.confidentialityNotice}
          </span>
          <p className="font-mono text-slate-600 font-semibold mt-1">Réf : {referenceNumber}</p>
          <p className="text-slate-500 font-mono">{BUSINESS_INFO.date} • {BUSINESS_INFO.location}</p>
        </div>
      </div>

      {/* Document Specific Title */}
      <div className="mt-4 pt-3 border-t border-slate-200">
        <h1 className="text-xl font-extrabold text-slate-900 font-display">
          {documentTitle}
        </h1>
        {documentSubtitle && (
          <p className="text-xs text-slate-600 mt-0.5 italic">
            {documentSubtitle}
          </p>
        )}
      </div>
    </div>
  );
};
