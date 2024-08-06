interface user{
    id: number;
    name: string;
}
interface admin{
    isAdmin: boolean;
    role: string;
}

type  useradmin = user & admin;

let useradmin:useradmin = {
    id: 1,
    name: "guna",
    isAdmin: true,
    role: "System admin"

}
console.log(useradmin);
console.log(useradmin.isAdmin);
console.log(useradmin.id);