import User from "./user.js";

class Member extends User {
    constructor(id, name, email, registrationDate) {
        super(id, name, email);
        this.registrationDate = registrationDate;
    }

    viewContent() {
        return `${this.name} registered on ${this.registrationDate} is viewing content.`;
    }
}

export default Member;