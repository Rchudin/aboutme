import React from "react";
import axios from "axios";
import {useTranslation} from "react-i18next";
import {Redirect} from "react-router-dom";
import SendMessage from "./SendMessage";
import s from "./SendMessage.module.css"

const pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;

class SendMessageContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSent: false,
            subject: "",
            username: "",
            email: "",
            phone: "",
            message: "",

            errSubject: false,
            errUsername: false,
            errEmail: false,
            errMessage: false,
        };
    }

    componentDidMount() {
        this.props.setPage(2);
    }

    handleInputChange = (event) => {
        const target = event.target;
        const name = target.name;
        let value = target.value;
        let data = {};

        switch (name) {
            case "username":
                value = value.length > 35 ? value.substring(0, 35) : value;
                data.errUsername = this.state.errUsername && false;
                break;
            case "subject":
                value = value.length > 100 ? value.substring(0, 97) + "..." : value;
                data.errSubject = this.state.errSubject && false;
                break;
            case "message":
                data.errMessage = value.length > 3000;
                break;
            case "phone":
                value = value.length > 35 ? value.substring(0, 35) : value;
                break;
            case "email":
                data.errEmail = value.length > 0 && !pattern.test(value);
                break;

        }

        this.setState({
            ...data,
            [name]: value,
        });

    };


    onChangeFileHandler = event => {
        const file = event.target.files[0];
        const reader = new FileReader();
        if (file.size > Math.pow(1024, 2) * 10) {
            alert("File size is too large.");
            return
        }

        if (file) {
            reader.readAsDataURL(file);
        }

        this.setState({
            file,
        });
        // reader.onloadend = function () {
        //     this.setState({
        //         selectPicture: [reader.result],
        //     })
        // }.bind(this);
    };

    clearFile = () => {
        this.setState({
            file: undefined,
        });
    };

    feedback = () => {
        let data = {};
        data.errEmail = this.state.email.length > 0 && !pattern.test(this.state.email);

        if (this.state.subject.length < 1 ||
            this.state.username.length < 1 ||
            this.state.message.length > 3000 ||
            data.errEmail
        ) {
            data.errSubject = this.state.subject.length < 1;
            data.errUsername = this.state.username.length < 1;
            this.setState({
                ...data,
            });

            return
        }


        const body = new FormData();
        body.append('subject', this.state.subject);
        body.append('username', this.state.username);
        body.append('email', this.state.email);
        body.append('phone', this.state.phone);
        body.append('message', this.state.message);


        body.append('file', this.state.file);

        axios({
            url: '/api/ts/feedback/',
            method: 'POST',
            data: body,
            headers: {
                'X-CSRF-Token': this.props.token,
                'Content-Type': 'multipart/form-data',
            },
        })
            .then(res => {
                // const data = res.data;
                // console.log(data);
            })
            .catch(error => {
                //console.log(error);
            });

        this.setState({
            isSent: true,
        });


    };

    render() {
        if (this.props.token) {
            if (this.state.isSent) {
                return <SentMessage/>
            }

            return <SendMessage feedback={this.feedback}
                                handleInputChange={this.handleInputChange}
                                onChangeFileHandler={this.onChangeFileHandler}
                                errSubject={this.state.errSubject}
                                errUsername={this.state.errUsername}
                                errMessage={this.state.errMessage}
                                email={this.state.email}
                                errEmail={this.state.errEmail}
                                clearFile={this.clearFile}
                                file={this.state.file}
                                subject={this.state.subject}
                                username={this.state.username}
                                phone={this.state.phone}
                                message={this.state.message}/>
        } else {
            if (this.props.isInit) {
                return <Redirect to={"/contacts"}/>
            }
            return <></>
        }
    }
}

export default SendMessageContainer


const SentMessage = () => {
    const {t} = useTranslation();
    return (
        <div className={s.sent_message}>
            <label>{t("Message sent successfully")}</label>
        </div>
    )
};

