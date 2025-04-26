import style from './style.module.css';

const formReg = () => {
    return(
        <div>
            <form className={style.form}>
                <h2 className={style.title}>Регистрация</h2>
                <label>
                    Имя:
                    <input type="text" name="name" />
                </label>
                <label>
                    Фамилия:
                    <input type="text" name="surname" />
                </label>
                <label>
                    Электронная почта:
                    <input type="email" name="email" />
                </label>
                <label>
                    Номер карты:
                    <input type="text" name="card" maxlength="19" pattern="[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}" placeholder='1234 5678 9012 3456'/>
                </label>
                <label>
                    CVC:
                    <input type="text" name="cvc"  maxlength="3" pattern="[0-9]{3}" placeholder='123'/>
                </label>
                <label>
                    Пароль:
                    <input type="password" name="pass" />
                </label>
                <input type="submit" value="Отправить" />
            </form>
        </div>
    );
}
export default formReg;