import LoginView from "./login-view";
import { useGoogleLogin } from '@react-oauth/google';
import SocialButton from "./components/button-component";



interface Props {
    sendAuthCode: any;
}
interface State {


}





export default Function SocialButton (props : Props){
    const { sendAuthCode} = props;
    const login = useGoogleLogin({
        onSuccess: credentialResponse => {
            console.log (credentialResponse);
            sendAuthCode(credentialResponse);
        },
    });

    
        return(
                
                    
                    <LoginView onClick={() => login()} type={colorType}>
                    {type == "facebook" ? <Facebook color="white" /> : <Google color="white" />}
                    <span>{text}</span>


                    </LoginView>
                    










               
        )


}
