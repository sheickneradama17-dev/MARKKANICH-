import { useState } from 'react';
import { ACTION_PLAN_STEPS, KEY_ADVICE } from '../data/businessPlanData';
import { CheckSquare, Square, Calendar, Award, Sparkles, CheckCircle2 } from 'lucide-react';
import { DocumentPrintBar } from './DocumentPrintBar';
import { PrintHeader } from './PrintHeader';

export function ActionPlanTracker() {
  const [steps, setSteps] = useState(ACTION_PLAN_STEPS);

  const toggleTask = (stepId: string, taskId: string) => {
    setSteps((prevSteps) =>
      prevSteps.map((step) => {
        if (step.id !== stepId) return step;
        return {
          ...step,
          tasks: step.tasks.map((task) => {
            if (task.id !== taskId) return task;
            return { ...task, completed: !task.completed };
          }),
        };
      })
    );
  };

  const totalTasks = steps.flatMap((s) => s.tasks).length;
  const completedTasks = steps.flatMap((s) => s.tasks).filter((t) => t.completed).length;
  const progressPct = Math.round((completedTasks / totalTasks) * 100);

  return (
    <div id="action-container" className="printable-document space-y-6 max-w-5xl mx-auto">
      {/* Document Print & Action Bar */}
      <DocumentPrintBar
        title="Plan d'Action Opérationnel & Feuille de Route Pilote CIE"
        subtitle={`État d'avancement des jalons critiques (${completedTasks}/${totalTasks} tâches validées) et doctrine stratégique d'implantation.`}
        badgeText="Plan d'Action A4"
        downloadFileName="VoltaSync_CIE_Plan_Action_Strategique.pdf"
        targetElementId="action-container"
      />

      {/* Official Print Header */}
      <PrintHeader
        documentTitle="Feuille de Route Tactique & Plan d'Action Opérationnel (3 Mois)"
        documentSubtitle="Calendrier d'exécution pas-à-pas pour la préparation, la contractualisation et le déploiement du pilote"
        referenceNumber="DOC-ROADMAP-OPS-2026"
      />

      {/* Top progress banner */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-emerald-700 text-xs font-bold uppercase tracking-wider">
              <Calendar className="w-4 h-4" />
              Plan d&apos;Action Opérationnel (3 Mois)
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1 font-display">
              Suivi d&apos;Exécution &amp; Jalons Tactiques
            </h2>
            <p className="text-xs text-slate-600">
              Cochez les étapes franchies pour préparer votre rendez-vous et lancer le pilote à la CIE.
            </p>
          </div>

          <div className="flex items-center gap-4 bg-slate-50 px-4 py-3 rounded-xl border border-slate-200 self-stretch sm:self-auto">
            <div>
              <span className="text-[11px] text-slate-500 font-semibold block uppercase">Progression</span>
              <span className="text-xl font-extrabold text-emerald-800 font-display">
                {completedTasks} / {totalTasks} tâches
              </span>
            </div>
            <div className="w-12 h-12 rounded-full border-4 border-emerald-600 flex items-center justify-center font-bold text-xs text-emerald-800 bg-emerald-50">
              {progressPct}%
            </div>
          </div>
        </div>

        {/* Action Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
          {steps.map((step) => (
            <div key={step.id} className="bg-slate-50/70 border border-slate-200 rounded-xl p-5">
              <div className="flex items-center justify-between mb-3 border-b border-slate-200 pb-2">
                <span className="font-bold text-slate-900 text-sm font-display flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
                  {step.timeline}
                </span>
                <span className="text-[11px] font-mono text-slate-500">
                  {step.tasks.filter((t) => t.completed).length}/{step.tasks.length} faits
                </span>
              </div>

              <div className="space-y-2.5">
                {step.tasks.map((task) => (
                  <button
                    key={task.id}
                    onClick={() => toggleTask(step.id, task.id)}
                    className="w-full text-left flex items-start gap-3 p-2 rounded-lg hover:bg-white transition-colors group cursor-pointer"
                  >
                    <span className="mt-0.5 text-emerald-700">
                      {task.completed ? (
                        <CheckSquare className="w-4 h-4 text-emerald-600" />
                      ) : (
                        <Square className="w-4 h-4 text-slate-400 group-hover:text-slate-600" />
                      )}
                    </span>
                    <div className="flex-1">
                      <span className={`text-xs block leading-relaxed ${task.completed ? 'line-through text-slate-400' : 'text-slate-800 font-medium'}`}>
                        {task.text}
                      </span>
                    </div>
                    <span className={`text-[9px] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider shrink-0 ${
                      task.priority === 'Haute' ? 'bg-red-100 text-red-700' : 'bg-slate-200 text-slate-600'
                    }`}>
                      {task.priority}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Conseils Clés Cards */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm pdf-page-break">
        <div className="flex items-center gap-2 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-1">
          <Award className="w-4 h-4" />
          Doctrine &amp; Facteurs Clés de Succès
        </div>
        <h3 className="text-xl font-bold text-slate-900 font-display mb-4">
          Les 6 Conseils Incontournables pour Convaincre la CIE
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {KEY_ADVICE.map((adv, idx) => (
            <div key={idx} className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-emerald-50/30 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] uppercase font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                    {adv.badge}
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-400">#0{idx + 1}</span>
                </div>
                <h4 className="font-bold text-slate-900 text-sm font-display mb-1">{adv.title}</h4>
                <p className="text-xs font-semibold text-emerald-800 mb-2">{adv.subtitle}</p>
                <p className="text-xs text-slate-600 leading-relaxed">{adv.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
