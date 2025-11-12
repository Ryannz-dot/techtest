'use client';

import { useBuilderStore } from '@/lib/stores/builder-store';
import { useEffect, useRef, useState } from 'react';
import { generateWebsiteHTML } from '@/lib/services/generator';

export default function PreviewPanel() {
  const { formData, selectedTemplate } = useBuilderStore();
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [iframeKey, setIframeKey] = useState(0);

  useEffect(() => {
    const updatePreview = () => {
      if (!iframeRef.current) return;

      try {
        const html = generateWebsiteHTML(formData, selectedTemplate);
        const iframe = iframeRef.current;
        const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;

        if (iframeDoc) {
          iframeDoc.open();
          iframeDoc.write(html);
          iframeDoc.close();
        }
      } catch (error) {
        console.error('Error updating preview:', error);
      }
    };

    // Debounce preview updates
    const timeoutId = setTimeout(updatePreview, 300);
    return () => clearTimeout(timeoutId);
  }, [formData, selectedTemplate]);

  // Show placeholder when no data
  if (!formData.businessName && !selectedTemplate) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-100">
        <div className="text-center p-8">
          <div className="text-6xl mb-4">🌐</div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            Your Website Preview
          </h3>
          <p className="text-gray-500">
            Start filling out the form to see your website come to life!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-white">
      <iframe
        key={iframeKey}
        ref={iframeRef}
        title="Website Preview"
        className="w-full h-full border-0"
        sandbox="allow-same-origin"
      />
    </div>
  );
}
