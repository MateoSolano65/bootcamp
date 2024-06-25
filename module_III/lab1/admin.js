import User from "./user.js";

class Admin extends User {
    constructor(id, name, email, permissions) {
        super(id, name, email);
        this.permissions = permissions;
    }

    manageUsers() {
        return `${this.name} si tiene permisos: ${this.permissions}`;
    }
}

export default Admin;