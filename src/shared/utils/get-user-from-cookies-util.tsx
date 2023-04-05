import jwtDecode from "jwt-decode";
import Cookies from "js-cookie"
import userModel from "../../profile/model/user-model";
import UserModel from "../../profile/model/user-model";

export default function getUserFromCookies(): userModel | undefined {
    const token = Cookies.get('acess_token');

    if (token !== undefined) {
        const decodedToken = jwtDecode(token);
        var user = new UserModel();

        user.id = decodedToken['id'];
        user.email = decodedToken['email'];
        user.firstName = decodedToken['firstName'];
        user.lastName = decodedToken['familyName'];
        user.profileImageUrl = decodedToken['profileImageUrl'];
        user.birthday = decodedToken['birthday'];

        return user;


    } else {
        return undefined;
    }

}