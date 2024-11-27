export interface MonitoringTool {
    title: string;
    description: string;
    features: string[];
    storedInfo: string[];
}

export interface PreventionMethod {
    title: string;
    description: string;
    techniques: {
        name: string;
        description: string;
    }[];
}

export interface AnonymityMethod {
    name: string;
    description: string;
}