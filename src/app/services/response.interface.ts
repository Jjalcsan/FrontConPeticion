export interface  Response{
    timestamp: Date;
    status:    number;
    error:     string;
    trace:     string;
    message:   string;
    path:      string;
    jwt_token: string;
}