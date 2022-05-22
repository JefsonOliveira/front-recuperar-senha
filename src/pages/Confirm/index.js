import React from "react";
import '../../styles.css';
import Icon from "../../images/iconeApp.ico";

function Confirm() {
    return (
        <div className="body">
            <div className="form">
                <div className="senhaSucesso">
                    <h2>Senha recuperada com sucesso!</h2>
                </div>
                <div>
                    <img alt="" className="iconeApp" src={Icon}/>
                </div>
            </div>
        </div>
    )
};

export default Confirm;

/* <!-- <!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>confirmacão de senha</title>
    <link rel="stylesheet" href="styles.css" />
</head>

<body>
    <form>
        <div id="senhaSucesso">
            <h2>Senha recuperada com sucesso!</h2>
        </div>
        <div class="sus">
            <img id="iconeApp" src="images/iconeApp.png">
        </div>
    </form>
</body>

</html> --> */