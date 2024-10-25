import { User as UserType } from "../../shared/types";


export class User {

    id: UserType['id']
    email: UserType['email']
    password: string

    constructor({id, email, password} : UserType) {
        this.id = id
        this.email = email
        this.password = password
    }

}