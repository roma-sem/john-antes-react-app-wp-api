import React,
{
    useEffect,
    useState,
    useRef,
    lazy,
    Suspense
} from 'react';
import "./Shop.scss";
import HeaderOne from '../../shared/components/HeaderOne/HeaderOne';
import ThreeColThumbnailContainer from '../../shared/components/ThreeColThumbnailContainer/ThreeColThumbnailContainer';
import useFetch from '../../utils/useFetch';

export default function Shop() {
    const fetchRes = useFetch('/john/wp-json/wp/v2/shop?_embed');
    const ref = useRef();
    let [fetched, setFetched] = useState(false);

    useEffect(() => {
        if (!fetched) {
            console.log("[ Shop ]: posts = ", fetchRes);
            ref.current = fetchRes;
            return () => setFetched(true);
        }
    }, [fetchRes, fetched]);

    return (
        <div className="Shop container">
            <HeaderOne content="Browse My Shop" />
            <Suspense fallback={<h1 style={{fontSize: "30px"}}>L O A D I N G ...</h1>}>
                <section>
                    {fetched ? <ThreeColThumbnailContainer
                                    posts={ref.current}
                                    externalUrlPropName={"single_shop_url"} /> : null}
                </section>
            </Suspense>
        </div>
    );
}
