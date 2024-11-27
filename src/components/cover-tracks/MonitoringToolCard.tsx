import { FileText } from 'lucide-react';
import type { MonitoringTool } from './types';

interface MonitoringToolCardProps {
    tool: MonitoringTool;
}

export function MonitoringToolCard({ tool }: MonitoringToolCardProps) {
    return (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 dark:border-blue-900">
            <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <h4 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                    {tool.title}
                </h4>
            </div>
            
            <p className="text-gray-600 dark:text-gray-400 mb-4">
                {tool.description}
            </p>

            <div className="space-y-4">
                <div>
                    <h5 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Características:
                    </h5>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                        {tool.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h5 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Información Almacenada:
                    </h5>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                        {tool.storedInfo.map((info, index) => (
                            <li key={index}>{info}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}