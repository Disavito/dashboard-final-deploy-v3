import React from 'react';
import { Link as LinkIcon, FileText, Map, ScrollText, Receipt, LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface DocumentLinkPillProps {
  type: string;
  link: string;
}

// Mapeo de tipos de documentos a iconos y colores
const documentTypeMap: { [key: string]: { Icon: LucideIcon; colorClass: string; label: string } } = {
  'Planos de ubicación': {
    Icon: Map,
    colorClass: 'bg-secondary/10 text-secondary border-secondary/30',
    label: 'Planos',
  },
  'Memoria descriptiva': {
    Icon: ScrollText,
    colorClass: 'bg-accent/10 text-accent border-accent/30',
    label: 'Memoria',
  },
  // NUEVO: Mapeo específico para Comprobante de Pago
  'Comprobante de Pago': {
    Icon: Receipt,
    colorClass: 'bg-success/10 text-success border-success/30',
    label: 'Comprobante',
  },
  // Documentos genéricos (Ficha, Contrato, etc.)
  'default': {
    Icon: FileText,
    colorClass: 'bg-primary/10 text-primary border-primary/30',
    label: 'Documento',
  },
};

const DocumentLinkPill: React.FC<DocumentLinkPillProps> = ({ type, link }) => {
  // Lógica simplificada para encontrar el tipo de documento
  const docConfig = documentTypeMap[type] || documentTypeMap['default'];
  const displayType = docConfig.label === 'Documento' ? type : docConfig.label; // Si es default, muestra el tipo real

  const { Icon, colorClass } = docConfig;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border transition-all duration-300 group",
        "hover:shadow-md hover:scale-[1.02] cursor-pointer",
        colorClass
      )}
      title={`Ver ${type}`}
    >
      <Icon className="h-3.5 w-3.5 flex-shrink-0" />
      <span className="truncate max-w-[150px]">{displayType}</span>
      <LinkIcon className="h-3 w-3 opacity-70 group-hover:opacity-100" />
    </a>
  );
};

export default DocumentLinkPill;
