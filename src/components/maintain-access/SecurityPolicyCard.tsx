import { Shield } from 'lucide-react';
import type { SecurityPolicy } from './types';

interface SecurityPolicyCardProps {
    policy: SecurityPolicy;
}

export function SecurityPolicyCard({ policy }: SecurityPolicyCardProps) {
    return (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                    <Shield className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    {policy.titulo}
                </h4>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
                {policy.descripcion}
            </p>
        </div>
    );
}