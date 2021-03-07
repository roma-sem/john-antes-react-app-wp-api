import React,
{
    useEffect,
    useState,
    useRef,
    lazy,
    Suspense
} from 'react';
import "./Work.scss";
import HeaderOne from '../../shared/components/HeaderOne/HeaderOne';
import ThreeColThumbnailContainer from '../../shared/components/ThreeColThumbnailContainer/ThreeColThumbnailContainer';
import useFetch from '../../utils/useFetch';

export default function Work() {
    const fetchRes = useFetch('/john/wp-json/wp/v2/work?_embed');
    const ref = useRef();
    let [fetched, setFetched] = useState(false);

    useEffect(() => {
        if (!fetched) {
            // console.log("[ Shop ]: posts = ", fetchRes);
            ref.current = fetchRes;
            return () => setFetched(true);
        }
    }, [fetchRes, fetched]);

    return (
        <div className="Work container">
            <HeaderOne content="Portfolio" />
            <Suspense fallback={<h1 style={{fontSize: "30px"}}>L O A D I N G ...</h1>}>
                <section>
                    {fetched ? <ThreeColThumbnailContainer posts={ref.current} /> : null}
                </section>
            </Suspense>
        </div>
    );
}
