import React,
{
    useEffect,
    useState,
    useRef,
    lazy,
    Suspense
} from 'react';
import "./SingleWork.scss";
import useFetch from '../../utils/useFetch';
import HeaderOne from '../../shared/components/HeaderOne/HeaderOne';

export default function SingleWork() {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');
    // console.log("[ SingleWork ]: postId = ", postId);
    let postIdRef = useRef();

    postIdRef = postId;
    // console.log("[ SingleWork ]: postIdRef = ", postIdRef);

    const fetchRes = useFetch(`/john/wp-json/wp/v2/work/${postIdRef}`);

    const ref = useRef();
    let [fetched, setFetched] = useState(false);

    useEffect(() => {
        if (!fetched && !fetchRes.loading) {
            console.log("[ SingleWork ]: fetchRes = ", fetchRes);
            // console.log("Title = ", fetchRes.data[10][1].rendered);
            // console.log("content = ", fetchRes.data[11][1].rendered);

            ref.current = fetchRes;
            setFetched(true);
            return () => fetched;
        }
    }, [fetchRes, fetched]);


    return(
        <div className="container">
            {fetched ?
                <section className="SingleWork">
                    <HeaderOne content={ref.current.data[10][1].rendered} />
                    <p
                        className="project-description"
                        dangerouslySetInnerHTML={{__html: ref.current.data[15][1]}}></p>

                    <Suspense fallback={<h1 style={{fontSize: "30px"}}>L O A D I N G ...</h1>}>
                        <div
                            className="image-container"
                            dangerouslySetInnerHTML={{__html: ref.current.data[11][1].rendered}}></div>
                    </Suspense>
                </section>
                : null
            }
        </div>
    );
}
