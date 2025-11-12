'use client';

import { useBuilderStore } from '@/lib/stores/builder-store';

export default function ProgressBar() {
  const progress = useBuilderStore((state) => state.progress);

  const getMessage = () => {
    if (progress === 0) return 'Just getting started! Fill out the basics.';
    if (progress <= 25) return 'Just getting started! Fill out the basics.';
    if (progress <= 50) return 'Great progress! Keep filling out the form.';
    if (progress <= 75) return 'Almost there! Your website is taking shape.';
    if (progress < 100) return 'Excellent! Just a few more details.';
    return 'Perfect! Your website is ready to preview.';
  };

  return (
    <div className="w-80">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-gray-700">Form Completion</span>
        <span className="text-sm font-bold text-blue-600">{progress}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-blue-600 h-2.5 rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="text-xs text-gray-500 mt-1">{getMessage()}</p>
    </div>
  );
}
