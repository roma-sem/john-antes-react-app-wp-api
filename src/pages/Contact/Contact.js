import React,
{
    useEffect,
    useState,
    useRef,
    lazy,
    Suspense
} from 'react';
import "./Contact.scss";
import HeaderOne from '../../shared/components/HeaderOne/HeaderOne';
// import usePostForm from "../../utils/usePostForm";
import axios from 'axios';

export default function Contact() {
    const url = "http://neffdeveloper.info/john/wp-json/contact-form-7/v1/contact-forms/59/feedback";
    const [formData, setFormData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [responseMsg, setResponseMsg] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        setLoading(true);

        axios({
                method: 'post',
                url: url,
                data: formData,
                headers: {'Content-Type': 'multipart/form-data' }
            })
            .then(response => {
                console.log("[ Contact ]: response = ", response);
                setResponseMsg(response.data.message);
                setLoading(false);
            })
            .catch(error => {
                console.warn(error);
                setErrorMsg("Oops, smth went wrong... Please try again.")
                setLoading(false);
            });
    }

    return(
        <section className="Contact container">
            <HeaderOne content="Get in touch!" />

            <form name="Contact Form" onSubmit={handleSubmit}>
                <input type="text" name="your_name" size="40" placeholder="Name*" />
                <input type="email" name="your_email" size="40" placeholder="Email*" />
                <input type="text" name="your_subject" size="40" placeholder="Subject*" />
                <textarea name="your_message" id="" cols="40" rows="10" placeholder="Message*"/>
                <input type="submit" value="Send" />
            </form>

            {loading ? <h3>S E N D I N G...</h3> : null}
            {responseMsg ? <h3>{responseMsg}</h3> : null}
            {errorMsg ? <h3>{errorMsg}</h3> : null}
        </section>
    );
}


// axios({
//     method: 'post',
//     url: postUrl,
//     data: formData,
//     headers: {'Content-Type': 'multipart/form-data' }
// })
// .then(res => {
//     console.log("[ Contact ]: response = ", res);
// })
// .catch(error => {
//     console.warn(error);
// });
