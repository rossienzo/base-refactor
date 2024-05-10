export default interface Service {
    execute(param?: any): Promise<any>;
}
