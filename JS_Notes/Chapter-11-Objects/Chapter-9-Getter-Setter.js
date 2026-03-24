const user = {
    firstName: "Sri",
    lastName: "Nidhi",
    get fullName() {
        return this.firstName + this.lastName;
    },
    set fullName(value) {
        [this.firstName, this.lastName] = value.split(" ");
    }
};

console.log(user.fullName);
user.fullName = "Srinidhi Shankar";
console.log(user.fullName);