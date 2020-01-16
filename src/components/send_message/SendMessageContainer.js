import React from "react";
import axios from "axios";
import SendMessage from "./SendMessage";
import s from  "./SendMessage.module.css"
import {useTranslation} from "react-i18next";
import {Redirect} from "react-router-dom";

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
            errMessage: false,
        };
    }

    componentDidMount() {
        this.props.setPage(2);
    }

    handleInputChange =(event) =>  {

        const target = event.target;

        const name = target.name;
        const value = target.value;

        if (name === "username" && this.state.errUsername){
            this.setState({
                errUsername: false,
            });
        }

        if (name === "subject" && this.state.errSubject){
            this.setState({
                errSubject: false,
            });
        }

        this.setState({
            [name]: value,
        });

        if (name === "message" && value.length>3000){
            this.setState({
                errMessage: true,
            });
        }else{
            this.setState({
                errMessage: false,
            });
        }
    };


    onChangeFileHandler = event => {
        const file = event.target.files[0];
        const reader = new FileReader();
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
            file : undefined,
        });
    };

    feedback = () => {
        if (this.state.subject.length < 1 || this.state.username.length < 1){

            if (this.state.subject.length < 1){
                this.setState({
                    errSubject: true,
                });
            }
            if (this.state.username.length < 1){
                this.setState({
                    errUsername: true,
                });
            }
            return
        }

        if(this.state.message.length> 3000){
            return;
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
            isSent : true,
        });


    };

    render() {
        if (this.props.token){
            if (this.state.isSent){
                return <SentMessage />
            }

            return <SendMessage feedback={this.feedback}
                                handleInputChange={this.handleInputChange}
                                onChangeFileHandler={this.onChangeFileHandler}
                                errSubject={this.state.errSubject}
                                errUsername={this.state.errUsername}
                                errMessage={this.state.errMessage}
                                email={this.state.email}
                                clearFile={this.clearFile}
                                file={this.state.file}
                                subject={this.state.subject}
                                username={this.state.username}
                                phone={this.state.phone}
                                message={this.state.message}/>
        }else{
            return <></>
        }
    }
}

export default SendMessageContainer


const SentMessage =() => {
    const {t} = useTranslation();
    return (
        <div className={s.sent_message}>
            <label>{t("Message sent successfully")}</label>
        </div>
    )
};