class AppEroror {
    public readonly message: string; //só para leitura
    public readonly statusCode: number;
    constructor(message: string, statusCode = 400) {
        this.message = message;
        this.statusCode = statusCode;
    }
}
export default AppEroror;
