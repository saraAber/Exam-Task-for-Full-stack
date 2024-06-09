import { HttpClient } from "@angular/common/http";
import { environment } from "../environments/environment";
import { User } from "../models/user.model";
import { EventEmitter, Injectable } from "@angular/core";
import { DialogErrComponent } from "../app/dialog/dialog-err/dialog-err.component";
import { MatDialog } from "@angular/material/dialog";

const currentUrl = environment.API_URL + "user"

@Injectable()
export class UserService {

    private users: User[] = [];
    userEvent: EventEmitter<User[]> = new EventEmitter<User[]>();

    constructor(private httpClient: HttpClient, private dialog: MatDialog) {
        this.userEvent.subscribe(x => this.users = x);
    }

    GetAllUsers() {
        this.httpClient.get<User[]>(currentUrl)
            .subscribe({
                next: (data) => this.userEvent.emit(data),
                error: () => this.dialog.open(DialogErrComponent, { minWidth: '60vh', minHeight: '50wh', disableClose: true })
            })
    }

    async AddUser(user: User) {
        this.httpClient.post<User>(currentUrl, user)
            .subscribe({
                next: (x) => {
                    const users = [...   this.users, x]
                    this.userEvent.emit(users)
                    return true
                },
                error: () => this.dialog.open(DialogErrComponent, { minWidth: '60vh', minHeight: '50wh', disableClose: true })
            });
    }

    async UpdateUser(id: number, user: User): Promise<User | any> {
        this.httpClient.put<User>(`${currentUrl}?id=${id}`, user)
            .subscribe({
                next: (x) => {
                    const users = [...this.users]
                    const findIndex = this.users.findIndex(y => y.id == id);
                    if (findIndex > -1) {
                        users[findIndex] = x;
                    }
                    this.userEvent.emit(users)
                    return user;
                },
                error: () => this.dialog.open(DialogErrComponent, { minWidth: '60vh', minHeight: '50wh', disableClose: true })
            })
    }

    async deleteUser(id: number) {
        this.httpClient.delete<User>(`${currentUrl}?id=${id}`)
            .subscribe({
                next: () => {
                    const users = this.users.filter(x => x.id != id);
                    this.userEvent.emit(users)
                    return true;
                },
                error: () => this.dialog.open(DialogErrComponent, { minWidth: '60vh', minHeight: '50wh', disableClose: true })
            })
    }
}