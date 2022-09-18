export class User {
    email: string;
    firstName: string;
    image: string;
    lastName: string;
    userName: string;
    website: string;

    constructor(data?: any) {
        this.email = data && data.email ? data.email : '';
        this.firstName = data && data.firstname ? data.firstname : '';
        this.image = data && data.image ? data.image : '';
        this.lastName = data && data.lastname ? data.lastname : '';
        this.userName = data && data.username ? data.username : '';
        this.website = data && data.website ? data.website : '';
    }
}
