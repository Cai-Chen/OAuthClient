export interface IAppSetting {
    api: {
        apiUrl: string;
    };
    oauth2: {
        authority: string;
        redirect_uri: string;
        post_logout_redirect_uri: string;
    }
}