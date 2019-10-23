import { Model } from './Model.model';

export class UserModel extends Model {
    public nome!: string;
    public email!: string;
    public idade!: string;
    public curso!: string;
    public telefone!: string;

    public numero!: string;
    public cep!: string;
    public logradouro?: string;
    public complemento?: string;
    public bairro?: string;
    public localidade?: string;
    public uf?: string;
}
