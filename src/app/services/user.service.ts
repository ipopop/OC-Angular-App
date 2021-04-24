import { User } from "../models/User.model";
import { Subject } from "rxjs-compat/Subject";

export class UserService {

    userSubject = new Subject<User[]>();

    private users: User[] = [
        {
            firstName: 'Angèle',
            lastName: 'Adevis',
            email: 'a.a@alakaza.me',
            phone: '0123456789',
            hobbies: ['human rights', 'arts', 'voyages']
        }
    ];

    emitUsers() {
        this.userSubject.next(this.users.slice());
    }

    addUser(user: User) {
        this.users.push(user);
        this.emitUsers();
    }
}