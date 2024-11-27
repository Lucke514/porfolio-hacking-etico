import { Shield } from 'lucide-react';
import type { PreventionMethod } from './types';

interface PreventionMethodCardProps {
    method: PreventionMethod;
}

export function PreventionMethodCard({ method }: PreventionMethodCardProps) {
    return (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 dark:border-blue-900">
            <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <h4 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                    {method.title}
                </h4>
            </div>
            
            <p className="text-gray-600 dark:text-gray-400 mb-4">
                {method.description}
            </p>

            <ul className="space-y-3">
                {method.techniques.map((technique, index) => (
                    <li key={index} className="bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg">
                        <span className="font-semibold text-gray-700 dark:text-gray-300">
                            {technique.name}:
                        </span>
                        <span className="ml-2 text-gray-600 dark:text-gray-400">
                            {technique.description}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}