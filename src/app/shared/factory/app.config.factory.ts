import { AppConfig } from "../config/app.config";

export function AppConfigFactory(appConfigService: AppConfig) {
    return () => appConfigService.load();
}