import  user from '../../images/user.svg';

function BotaoLogin(){
    return(
        <button>
            <img src={user} alt="Figura de uma pessoa em vetorail"/>
            Login
        </button>
    );

}
export default BotaoLogin;