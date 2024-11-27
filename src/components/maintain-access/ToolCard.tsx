import { ExternalLink } from 'lucide-react';
import type { Tool } from './types';

interface ToolCardProps {
    tool: Tool;
}

export function ToolCard({ tool }: ToolCardProps) {
    return (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100 dark:border-purple-900">
            <h4 className="text-xl font-semibold text-purple-600 dark:text-purple-400 mb-3">
                {tool.nombre}
            </h4>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
                {tool.descripcion}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                <strong>Requerimientos:</strong> {tool.requerimientos}
            </p>
            <a
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-purple-500 hover:text-purple-600 dark:text-purple-400 dark:hover:text-purple-300 transition-colors"
            >
                <span>Descargar</span>
                <ExternalLink className="w-4 h-4" />
            </a>
        </div>
    );
}