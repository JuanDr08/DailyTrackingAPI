import { User as UserType } from "../../shared/types";


export class User {

    id: UserType['id']
    email: UserType['email']

    constructor({id, email} : UserType) {
        this.id = id
        this.email = email
    }

}