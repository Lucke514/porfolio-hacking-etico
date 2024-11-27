import { Eye } from 'lucide-react';
import type { AnonymityMethod } from './types';

interface AnonymityMethodsCardProps {
    methods: AnonymityMethod[];
}

export function AnonymityMethodsCard({ methods }: AnonymityMethodsCardProps) {
    return (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 dark:border-blue-900">
            <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <Eye className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <h4 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                    Navegación Anónima
                </h4>
            </div>
            
            <p className="text-gray-600 dark:text-gray-400 mb-4">
                Técnicas para ocultar la identidad en línea, relevantes para privacidad y actividades maliciosas.
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
                {methods.map((method, index) => (
                    <div key={index} className="bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg">
                        <h5 className="font-semibold text-gray-700 dark:text-gray-300 mb-1">
                            {method.name}
                        </h5>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            {method.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}